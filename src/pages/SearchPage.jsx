import { yupResolver } from "@hookform/resolvers/yup"
import { Alert, Badge, Button, Card, Col, Row, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import * as yup from "yup"
import { destinations } from "../data/destinations"

// Création du schema de validation yup
// https://github.com/jquense/yup
// Permet de mettre en place des contraintes de validation sur nos formulaires
const searchSchema = yup.object({
  keywords: yup
    .string() // chaine de caractère
    .required("Veuillez saisir une recherche")
    .min(2, "La recherche doit avoir au moins 2 caractères"),
  // autre champ du form
})


function SearchPage() {
  return (
    <div>

    </div>
  )
}

export default SearchPage
