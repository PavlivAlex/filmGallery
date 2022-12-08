import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Min 6 symbols")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character")
    .required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().min(3, "Min 3 letters").required("Name is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "passwod must mutch")
    .required("Confirmation password is required"),
});
