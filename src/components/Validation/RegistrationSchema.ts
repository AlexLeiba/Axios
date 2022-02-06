import * as Yup from "yup";

export const registrationSchema = {
    email: Yup.string().email(),
    password: Yup.string().min(5, "Must be at least 5 characters!")
}