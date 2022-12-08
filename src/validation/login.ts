import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Min 6 symbols")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character")
    .required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
