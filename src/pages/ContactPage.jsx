import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as yup from "yup"

// Schéma de validation du formulaire de contact
const contactSchema = yup.object({
  name: yup.string().trim().required("Veuillez saisir votre nom"),
  email: yup
    .string()
    .trim()
    .required("Veuillez saisir votre email")
    .email("Veuillez saisir un email valide"),
  subject: yup
    .string()
    .trim()
    .required("Veuillez saisir un sujet")
    .min(5, "Le sujet doit avoir au moins 5 caractères"),
  message: yup
    .string()
    .trim()
    .required("Veuillez saisir un message")
    .min(10, "Le message doit avoir au moins 10 caractères"),
})

function ContactPage() {
  const [sentName, setSentName] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  })

  const onSubmit = (data) => {
    setSentName(data.name)
    reset()
  }

  return (
    <div className="text-page">
      <h1 className="mb-4">Contact</h1>
      <p className="mb-4">Une question sur une destination ? Écrivez-nous avec le formulaire ci-dessous.</p>

      {sentName && (
        <Alert variant="success" onClose={() => setSentName("")} dismissible>
          Merci {sentName}, votre message a bien été envoyé.
        </Alert>
      )}

      <Form noValidate onSubmit={handleSubmit(onSubmit)} className="search-form">
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" isInvalid={!!errors.name} {...register("name")} />
              <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" isInvalid={!!errors.email} {...register("email")} />
              <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group controlId="subject">
              <Form.Label>Sujet</Form.Label>
              <Form.Control type="text" isInvalid={!!errors.subject} {...register("subject")} />
              <Form.Control.Feedback type="invalid">{errors.subject?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} isInvalid={!!errors.message} {...register("message")} />
              <Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Button type="submit" variant="primary">
              Envoyer
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ContactPage
