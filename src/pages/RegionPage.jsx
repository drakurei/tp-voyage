import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import destinations from "../data/destinations";

function RegionPage() {
  // La région est passée dans l'URL : /region/Europe
  const { region } = useParams();
  const regionDestinations = destinations.filter((d) => d.region === region);

  if (regionDestinations.length === 0) {
    return (
      <div className="text-page">
        <h1 className="mb-4">Région introuvable</h1>
        <p>Aucune destination n'est enregistrée pour la région « {region} ».</p>
        <Button as={Link} to="/destinations" variant="primary" className="mt-3">
          Voir toutes les destinations
        </Button>
      </div>
    );
  }

  return (
    <>
      <p className="eyebrow">Région</p>
      <h1 className="mb-2">{region}</h1>
      <p className="capital mb-4">
        {regionDestinations.length} {regionDestinations.length > 1 ? "destinations" : "destination"}
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {regionDestinations.map((destination) => (
          <Col key={destination.id}>
            <Card className="destination-card h-100">
              <Card.Img variant="top" src={destination.image} alt={destination.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h2">{destination.name}</Card.Title>
                <p className="capital">Capitale : {destination.capital}</p>
                <Card.Text>{destination.description}</Card.Text>
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
  );
}

export default RegionPage;
