import { Link, useParams } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import destinations from "../data/destinations";
import NotFoundPage from "./NotFoundPage";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";

// Petit cœur, plein si la destination est en favori
function HeartIcon({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
    </svg>
  );
}

function DestinationDetailsPage() {
  const { slug } = useParams();
  const { user } = useAuth();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
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

        {/* Favoris : le bouton ne fonctionne que si l'utilisateur est connecté */}
        <div className="favorite-box">
          {!user ? (
            <>
              <Button variant="outline-primary" className="favorite-btn" disabled>
                <HeartIcon filled={false} />
                Ajouter aux favoris
              </Button>
              <p className="favorite-hint">
                <Link to="/login">Connectez-vous</Link> pour ajouter cette destination à vos favoris.
              </p>
            </>
          ) : isFavorite(destination.slug) ? (
            <>
              <Button variant="primary" className="favorite-btn" onClick={() => removeFavorite(destination.slug)}>
                <HeartIcon filled />
                Retirer des favoris
              </Button>
              <p className="favorite-hint">
                Cette destination est dans vos <Link to="/favorites">favoris</Link>.
              </p>
            </>
          ) : (
            <Button variant="outline-primary" className="favorite-btn" onClick={() => addFavorite(destination.slug)}>
              <HeartIcon filled={false} />
              Ajouter aux favoris
            </Button>
          )}
        </div>

        <Button as={Link} to="/destinations" variant="link" className="mt-3 px-0">
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
