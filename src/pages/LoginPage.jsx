import { Button, Card, Col, Alert, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const loginSchema = yup.object({
    username: yup
        .string()
        .required("Le login est obligatoire"),
    password: yup
        .string()
        .required("Le mot de passe est obligatoire")
})

function LoginPage () {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    })

    const onSubmit = (data) => {
        if (login(data.username, data.password)) {
            navigate("/profile")
        } else {
            setError("Login ou mot de passe incorrect")
        }
    }

    return (
        <>
            <Col md={8} lg={5} className="mx-auto">
                <Card className="auth-card">
                    <Card.Body>
                        <h1 className="mb-4">Connexion</h1>

                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" isInvalid={!!errors.username} {...register("username")} />
                                <Form.Control.Feedback type="invalid">{errors.username?.message}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="password">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" isInvalid={!!errors.password} {...register("password")} />
                                <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" variant="primary" className="w-100">
                                Se connecter
                            </Button>
                        </Form>

                        <p className="mt-4 mb-0 text-center">
                            Pas encore de compte ? <Link to="/register">Créer un compte</Link>
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default LoginPage
