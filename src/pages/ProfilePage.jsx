import { useEffect, useState } from "react"
import { Alert, Card, Col, Row, Spinner } from "react-bootstrap"
import { API_URL, useAuth } from "../context/AuthContext"

// Une ligne "libellé : valeur", affichée seulement si la valeur existe
function Info({ label, value }) {
    if (value === undefined || value === null || value === "") return null
    return (
        <div>
            <dt>{label}</dt>
            <dd>{value}</dd>
        </div>
    )
}

function ProfilePage () {
    const { token, logout } = useAuth()
    const [profile, setProfile] = useState(null)
    const [error, setError] = useState("")

    // Appel ajax pour récupérer toutes les informations de l'utilisateur connecté
    useEffect(() => {
        fetch(`${API_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                // token expiré ou invalide : on déconnecte l'utilisateur
                if (response.status === 401) {
                    logout()
                    return null
                }
                if (!response.ok) throw new Error()
                return response.json()
            })
            .then((data) => {
                if (data) setProfile(data)
            })
            .catch(() => setError("Impossible de charger votre profil, réessayez plus tard."))
    }, [token, logout])

    if (error) {
        return <Alert variant="danger">{error}</Alert>
    }

    if (!profile) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border" role="status" />
                <p className="mt-3 capital">Chargement du profil…</p>
            </div>
        )
    }

    return (
        <Col lg={10} className="mx-auto">
            <Card className="auth-card">
                <Card.Body>
                    <div className="profile-head mb-4">
                        <img src={profile.image} alt={`Avatar de ${profile.username}`} className="profile-avatar" />
                        <div>
                            <p className="eyebrow">Mon profil</p>
                            <h1 className="mb-0">{profile.firstName} {profile.lastName}</h1>
                            <p className="capital mb-0">@{profile.username}</p>
                        </div>
                    </div>

                    <Row className="g-4">
                        <Col md={6}>
                            <h2 className="profile-section">Identité</h2>
                            <dl className="profile-list">
                                <Info label="Prénom" value={profile.firstName} />
                                <Info label="Nom" value={profile.lastName} />
                                <Info label="Nom de jeune fille" value={profile.maidenName} />
                                <Info label="Âge" value={profile.age && `${profile.age} ans`} />
                                <Info label="Date de naissance" value={profile.birthDate} />
                                <Info label="Genre" value={profile.gender} />
                            </dl>
                        </Col>

                        <Col md={6}>
                            <h2 className="profile-section">Contact</h2>
                            <dl className="profile-list">
                                <Info label="Email" value={profile.email} />
                                <Info label="Téléphone" value={profile.phone} />
                                <Info label="Adresse" value={profile.address?.address} />
                                <Info label="Ville" value={profile.address && `${profile.address.postalCode} ${profile.address.city}`} />
                                <Info label="Pays" value={profile.address?.country} />
                            </dl>
                        </Col>

                        <Col md={6}>
                            <h2 className="profile-section">Physique</h2>
                            <dl className="profile-list">
                                <Info label="Taille" value={profile.height && `${profile.height} cm`} />
                                <Info label="Poids" value={profile.weight && `${profile.weight} kg`} />
                                <Info label="Yeux" value={profile.eyeColor} />
                                <Info label="Cheveux" value={profile.hair && `${profile.hair.color}, ${profile.hair.type}`} />
                                <Info label="Groupe sanguin" value={profile.bloodGroup} />
                            </dl>
                        </Col>

                        <Col md={6}>
                            <h2 className="profile-section">Études et travail</h2>
                            <dl className="profile-list">
                                <Info label="Université" value={profile.university} />
                                <Info label="Entreprise" value={profile.company?.name} />
                                <Info label="Poste" value={profile.company?.title} />
                                <Info label="Service" value={profile.company?.department} />
                                <Info label="Rôle" value={profile.role} />
                            </dl>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProfilePage
