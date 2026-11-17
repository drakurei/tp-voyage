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
        .required("Le login est obligatoire")
        .min(3, "Le login doit avoir au moins 3 caractères"),
    email: yup
        .string()
        .trim()
        .required("L'email est obligatoire")
        .email("Veuillez saisir un email valide"),
    password: yup
        .string()
        .required("Le mot de passe est obligatoire")
        .min(6, "Le mot de passe doit avoir au moins 6 caractères"),
    confirmPassword: yup
        .string()
        .required("Veuillez confirmer le mot de passe")
        .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),
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
    })

    const onSubmit = (data) => {
        const message = registerUser({
            username: data.username,
            email: data.email,
            password: data.password,
        })
        if (message) {
            setError(message)
        } else {
            navigate("/profile")
        }
    }

    return (
        <Col md={8} lg={5} className="mx-auto">
            <Card className="auth-card">
                <Card.Body>
                    <h1 className="mb-4">Créer un compte</h1>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" isInvalid={!!errors.username} {...register("username")} />
                            <Form.Control.Feedback type="invalid">{errors.username?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" isInvalid={!!errors.email} {...register("email")} />
                            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" isInvalid={!!errors.password} {...register("password")} />
                            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="confirmPassword">
                            <Form.Label>Confirmer le mot de passe</Form.Label>
                            <Form.Control type="password" isInvalid={!!errors.confirmPassword} {...register("confirmPassword")} />
                            <Form.Control.Feedback type="invalid">{errors.confirmPassword?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100">
                            Créer mon compte
                        </Button>
                    </Form>

                    <p className="mt-4 mb-0 text-center">
                        Déjà inscrit ? <Link to="/login">Se connecter</Link>
                    </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RegisterPage
