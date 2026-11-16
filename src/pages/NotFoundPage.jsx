import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NotFoundPage() {
  return (
    <div className="text-page">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mb-4">Cette page n'existe pas</h1>
      <p>L'adresse demandée ne correspond à aucune page du site.</p>
      <div className="d-flex flex-wrap gap-2 mt-4">
        <Button as={Link} to="/" variant="primary">
          Retour à l'accueil
        </Button>
        <Button as={Link} to="/destinations" variant="outline-primary">
          Voir les destinations
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
