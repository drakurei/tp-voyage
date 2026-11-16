import { yupResolver } from "@hookform/resolvers/yup"
import { Alert, Badge, Button, Card, Col, Row, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { Link, useSearchParams } from "react-router-dom"
import * as yup from "yup"
import { destinations } from "../data/destinations"

// Liste des régions existantes, sans doublon, pour le select
const regions = [...new Set(destinations.map((destination) => destination.region))].sort()

// Création du schema de validation yup
// https://github.com/jquense/yup
// Permet de mettre en place des contraintes de validation sur nos formulaires
const searchSchema = yup.object({
  keywords: yup
    .string() // chaine de caractère
    .trim()
    // facultatif, mais au moins 2 caractères si le champ est rempli
    .test("min-si-rempli", "La recherche doit avoir au moins 2 caractères", (value) => !value || value.length >= 2)
    // obligatoire seulement si aucune région n'est choisie
    .when("region", {
      is: (region) => !region,
      then: (schema) => schema.required("Veuillez saisir une recherche ou choisir une région"),
    }),
  region: yup
    .string()
    .oneOf(["", ...regions], "Région inconnue"), // facultatif
})

function SearchPage() {
  // Les critères de recherche sont gardés dans l'URL : /search?keywords=...&region=...
  const [searchParams, setSearchParams] = useSearchParams()
  const keywords = searchParams.get("keywords") ?? ""
  const region = searchParams.get("region") ?? ""
  const hasSearched = keywords !== "" || region !== ""

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
    defaultValues: { keywords, region },
  })

  const onSubmit = (data) => {
    const params = {}
    if (data.keywords) params.keywords = data.keywords
    if (data.region) params.region = data.region
    setSearchParams(params)
  }

  const results = destinations.filter((destination) => {
    const text = `${destination.name} ${destination.capital} ${destination.description}`.toLowerCase()
    const matchKeywords = !keywords || text.includes(keywords.toLowerCase())
    const matchRegion = !region || destination.region === region
    return matchKeywords && matchRegion
  })

  return (
    <>
      <h1 className="mb-4">Rechercher une destination</h1>

      <Form noValidate onSubmit={handleSubmit(onSubmit)} className="search-form mb-5">
        <Row className="g-3 align-items-start">
          <Col md={5}>
            <Form.Group controlId="keywords">
              <Form.Label>Mots-clés</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. : Tokyo, plage, temples…"
                isInvalid={!!errors.keywords}
                {...register("keywords")}
              />
              <Form.Control.Feedback type="invalid">{errors.keywords?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="region">
              <Form.Label>Région</Form.Label>
              <Form.Select isInvalid={!!errors.region} {...register("region")}>
                <option value="">Toutes les régions</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.region?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={3} className="search-submit">
            <Button type="submit" variant="primary" className="w-100">
              Rechercher
            </Button>
          </Col>
        </Row>
      </Form>

      {hasSearched && (
        <>
          {results.length === 0 ? (
            <Alert variant="warning">Aucune destination ne correspond à votre recherche.</Alert>
          ) : (
            <p className="mb-3">
              <Badge bg="secondary" className="me-2">
                {results.length}
              </Badge>
              {results.length > 1 ? "destinations trouvées" : "destination trouvée"}
            </p>
          )}

          <Row xs={1} md={2} lg={3} className="g-4">
            {results.map((destination) => (
              <Col key={destination.id}>
                <Card className="destination-card h-100">
                  <Card.Img variant="top" src={destination.image} alt={destination.name} />
                  <Card.Body className="d-flex flex-column">
                    <p className="eyebrow mb-1">{destination.region}</p>
                    <Card.Title as="h2">{destination.name}</Card.Title>
                    <p className="capital">Capitale : {destination.capital}</p>
                    <Button
                      as={Link}
                      to={`/destinations/${destination.slug}`}
                      variant="outline-primary"
                      className="mt-auto align-self-start"
                    >
                      Voir les détails
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default SearchPage
