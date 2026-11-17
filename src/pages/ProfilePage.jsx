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
        <Col md={10} lg={7} className="mx-auto">
            <Card className="auth-card">
                <Card.Body>
                    <div className="profile-head mb-4">
                        {user.avatar && (
                            <img src={user.avatar} alt={`Avatar de ${user.username}`} className="profile-avatar" />
                        )}
                        <div>
                            <p className="eyebrow">Mon profil</p>
                            <h1 className="mb-0">Bonjour {user.firstname || user.username}</h1>
                        </div>
                    </div>

                    <dl className="detail-infos profile-infos">
                        <div>
                            <dt>Login</dt>
                            <dd>{user.username}</dd>
                        </div>
                        <div>
                            <dt>Email</dt>
                            <dd>{user.email}</dd>
                        </div>
                        {user.firstname && (
                            <div>
                                <dt>Prénom</dt>
                                <dd>{user.firstname}</dd>
                            </div>
                        )}
                        {user.lastname && (
                            <div>
                                <dt>Nom</dt>
                                <dd>{user.lastname}</dd>
                            </div>
                        )}
                        {user.gender && (
                            <div>
                                <dt>Genre</dt>
                                <dd>{user.gender}</dd>
                            </div>
                        )}
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
