import { EmailFormTypes } from 'types'
import { object, string } from 'yup'

export const initialValues: EmailFormTypes = {
  email: "",
};

export const validationSchema = object().shape({
  email: string().email('You entered the wrong email')
    .required("Required email address"),
})