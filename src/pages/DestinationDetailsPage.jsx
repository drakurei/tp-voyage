import { Link, useParams } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import destinations from "../data/destinations";
import NotFoundPage from "./NotFoundPage";

function DestinationDetailsPage() {
  const { slug } = useParams();
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return <NotFoundPage />;
  }

  return (
    <Row className="g-5 align-items-center">
      <Col lg={7}>
        <img src={destination.image} alt={destination.name} className="detail-image" />
      </Col>
      <Col lg={5}>
        <p className="eyebrow">{destination.region}</p>
        <h1 className="mb-4">{destination.name}</h1>

        <dl className="detail-infos">
          <div>
            <dt>Capitale</dt>
            <dd>{destination.capital}</dd>
          </div>
          <div>
            <dt>Région</dt>
            <dd>
              <Link to={`/region/${destination.region}`}>{destination.region}</Link>
            </dd>
          </div>
        </dl>

        <p className="lead-text">{destination.description}</p>

        <Button as={Link} to="/destinations" variant="outline-primary" className="mt-3">
          Retour aux destinations
        </Button>
      </Col>

      <Col lg={8}>
        <h2 className="mb-3">Découvrir le pays</h2>
        <p className="detail-text">{destination.details}</p>
      </Col>

      <Col lg={8}>
        <h2 className="mb-3">En images</h2>
        <Row xs={3} className="g-2 g-md-3">
          {destination.gallery.map((photo) => (
            <Col key={photo.src}>
              <figure className="gallery-item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.alt}</figcaption>
              </figure>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default DestinationDetailsPage;
