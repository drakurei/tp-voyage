import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import destinations from "../data/destinations";

function DestinationsPage() {
  return (
    <>
      <h1 className="mb-4">Destinations</h1>
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
