import { Button, Card, Col, Alert, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const registerSchema = yup.object({
    username: yup
        .string()
        .trim()
        .required("Le login est obligatoire"),
    password: yup
        .string()
        .required("Le mot de passe est obligatoire")
        .min(8, "Le mot de passe doit avoir 8 caractères minimum"),
    email: yup
        .string()
        .trim()
        .required("L'email est obligatoire")
        .email("L'email n'est pas valide"),
    firstname: yup
        .string()
        .trim()
        .required("Le prénom est obligatoire"),
    lastname: yup
        .string()
        .trim()
        .required("Le nom est obligatoire"),
    gender: yup
        .string(), // facultatif
    avatar: yup
        .string()
        .trim()
        .url("L'avatar doit être une url valide"), // facultatif, mais doit être une url si rempli
})

function RegisterPage () {
    const { register: registerUser } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: "",
            gender: "",
            avatar: "",
        },
    })

    const onSubmit = (data) => {
        const message = registerUser(data)
        if (message) {
            setError(message)
        } else {
            navigate("/profile")
        }
    }

    return (
        <Col md={10} lg={7} className="mx-auto">
            <Card className="auth-card">
                <Card.Body>
                    <h1 className="mb-4">Inscription</h1>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" placeholder="Votre login" isInvalid={!!errors.username} {...register("username")} />
                            <Form.Control.Feedback type="invalid">{errors.username?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Votre mot de passe" isInvalid={!!errors.password} {...register("password")} />
                            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Votre Email" isInvalid={!!errors.email} {...register("email")} />
                            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="firstname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Votre prénom" isInvalid={!!errors.firstname} {...register("firstname")} />
                            <Form.Control.Feedback type="invalid">{errors.firstname?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastname">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Votre nom" isInvalid={!!errors.lastname} {...register("lastname")} />
                            <Form.Control.Feedback type="invalid">{errors.lastname?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="gender">
                            <Form.Label>Genre</Form.Label>
                            <Form.Select isInvalid={!!errors.gender} {...register("gender")}>
                                <option value="">...</option>
                                <option value="Femme">Femme</option>
                                <option value="Homme">Homme</option>
                                <option value="Autre">Autre</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.gender?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="avatar">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control type="url" placeholder="Url de votre avatar" isInvalid={!!errors.avatar} {...register("avatar")} />
                            <Form.Control.Feedback type="invalid">{errors.avatar?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" variant="outline-primary">
                            Inscription
                        </Button>
                    </Form>

                    <p className="mt-4 mb-0">
                        Déjà inscrit ? <Link to="/login">Se connecter</Link>
                    </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RegisterPage
