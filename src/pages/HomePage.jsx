import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <Row className="align-items-center g-5">
      <Col lg={5}>
        <p className="eyebrow">Carnet de voyage</p>
        <h1 className="mb-4">Six pays, six façons de voyager</h1>
        <p className="lead-text">
          Des temples de Kyoto aux lagons des Maldives, ce site rassemble
          quelques destinations avec leur région, leur capitale et une courte
          présentation.
        </p>
        <Button as={Link} to="/destinations" variant="primary" className="mt-3">
          Voir les destinations
        </Button>
      </Col>
      <Col lg={7}>
        <img
          src="https://cdn.pixabay.com/photo/2020/01/31/20/03/japan-4808857_1280.jpg"
          alt="Rue animée de Tokyo le soir"
          className="home-image"
        />
      </Col>
    </Row>
  );
}

export default HomePage;
