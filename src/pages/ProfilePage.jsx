import { startTransition } from "react"
import { Button, Card, Col } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function ProfilePage () {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    // Page réservée aux utilisateurs connectés
    if (!user) {
        return <Navigate to="/login" replace />
    }

    const handleLogout = () => {
        // React Router fait ses navigations dans une transition : on y met aussi
        // la déconnexion pour que les deux changements arrivent ensemble,
        // sinon la page profil redirigerait vers /login
        startTransition(() => {
            navigate("/")
            logout()
        })
    }

    return (
        <Col md={8} lg={5} className="mx-auto">
            <Card className="auth-card">
                <Card.Body>
                    <p className="eyebrow">Mon profil</p>
                    <h1 className="mb-4">Bonjour {user.username}</h1>

                    <dl className="detail-infos">
                        <div>
                            <dt>Login</dt>
                            <dd>{user.username}</dd>
                        </div>
                        <div>
                            <dt>Email</dt>
                            <dd>{user.email}</dd>
                        </div>
                    </dl>

                    <Button variant="outline-primary" onClick={handleLogout} className="mt-2">
                        Se déconnecter
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProfilePage
