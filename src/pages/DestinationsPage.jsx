import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import destinations from "../data/destinations";

function DestinationsPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Recherche rapide : on ouvre la page Recherche avec le mot-clé dans l'URL
  const handleSearch = (e) => {
    e.preventDefault();
    const keywords = query.trim();
    navigate(keywords ? `/search?keywords=${encodeURIComponent(keywords)}` : "/search");
  };

  return (
    <>
      <div className="page-head mb-4">
        <h1 className="mb-0">Destinations</h1>

        <form className="quick-search" role="search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Rechercher une destination…"
            aria-label="Rechercher une destination"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="Lancer la recherche">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>
        </form>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {destinations.map((destination) => (
          <Col key={destination.id}>
            <Card className="destination-card h-100">
              <Card.Img variant="top" src={destination.image} alt={destination.name} />
              <Card.Body className="d-flex flex-column">
                <p className="eyebrow mb-1">{destination.region}</p>
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

export default DestinationsPage;
