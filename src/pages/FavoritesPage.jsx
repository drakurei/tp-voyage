import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import destinations from "../data/destinations";
import { useFavorites } from "../context/FavoritesContext";

// Page protégée (voir Router) : liste des destinations mises en favoris
function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  const favoriteDestinations = destinations.filter((d) => favorites.includes(d.slug));

  return (
    <>
      <p className="eyebrow">Mon compte</p>
      <h1 className="mb-2">Mes favoris</h1>
      <p className="capital mb-4">
        {favoriteDestinations.length} {favoriteDestinations.length > 1 ? "destinations" : "destination"}
      </p>

      {favoriteDestinations.length === 0 ? (
        <div className="text-page">
          <p>Vous n'avez pas encore de destination en favori.</p>
          <p>Ouvrez la fiche d'une destination et cliquez sur « Ajouter aux favoris ».</p>
          <Button as={Link} to="/destinations" variant="primary" className="mt-2">
            Voir les destinations
          </Button>
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {favoriteDestinations.map((destination) => (
            <Col key={destination.id}>
              <Card className="destination-card h-100">
                <Card.Img variant="top" src={destination.image} alt={destination.name} />
                <Card.Body className="d-flex flex-column">
                  <p className="eyebrow mb-1">{destination.region}</p>
                  <Card.Title as="h2">{destination.name}</Card.Title>
                  <p className="capital">Capitale : {destination.capital}</p>
                  <div className="mt-auto d-flex flex-wrap gap-2">
                    <Button as={Link} to={`/destinations/${destination.slug}`} variant="outline-primary">
                      Voir les détails
                    </Button>
                    <Button variant="link" className="px-0" onClick={() => removeFavorite(destination.slug)}>
                      Retirer
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default FavoritesPage;
