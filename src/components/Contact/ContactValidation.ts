import * as yup from "yup"

export const ContactSchema = yup.object().shape({ 
    first_name: yup.string().required("First name required"),
    last_name: yup.string().required("Last name required"),
    email: yup.string().email("Please enter a valid Email Address").required("Email required"),
    message: yup.string().required("Message required")
})
