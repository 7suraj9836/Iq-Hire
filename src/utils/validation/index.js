import * as Yup from 'yup';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const phoneRegExp = /^(\+?\d{1,4}[\s-]?)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;

export const agencyValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required').max(50,'Max 50 characters allowed, Please reduce the characters limit in First Name Field'),
  lastName: Yup.string().required('Last Name is required').max(50,'Max 50 characters allowed, Please reduce the characters limit in Last Name Field'),
  companyName: Yup.string().trim().required('Agency Name is required'),
  email: Yup.string().required('Email is required').test('is-valid-email', 'Invalid email format', value => validateEmail(value)),
  password: Yup.string() .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&#]).{8,}$/,
    'Your password needs to be at least eight characters and contain at least one upper case alphabet, one lowercase alphabet, one numeric, and one special character'
  ),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

// Add the custom validation method
Yup.addMethod(Yup.string, 'urlWithOptionalScheme', function (message) {
  return this.test('urlWithOptionalScheme', message, function (value) {
      const { path, createError } = this;
      const urlRegex = /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|(localhost))(:\d{1,5})?(\/.*)?$/;
      return value === undefined || value === null || urlRegex.test(value) || createError({ path, message });
  });
});

export const corporateValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required').max(50,'Max 50 characters allowed, Please reduce the characters limit in First Name Field'),
  lastName: Yup.string().required('Last Name is required').max(50,'Max 50 characters allowed, Please reduce the characters limit in Last Name Field'),
  companyName: Yup.string().trim().required('Company Name is required'),
companyWebsite: Yup.string().urlWithOptionalScheme('Invalid URL format').required('Company Website is required'),
  email: Yup.string().required('Email is required').test('is-valid-email', 'Invalid email format', value => validateEmail(value)),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required').matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&#]).{8,}$/,
    'Your password needs to be at least eight characters and contain at least one upper case alphabet, one lowercase alphabet, one numeric, and one special character'
  ),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').test('is-valid-email', 'Invalid email format', value => validateEmail(value)),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

//reset password validation schema
export const resetPasswordValidationSchema = Yup.object().shape({
  newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
      .trim('Password cannot include leading and trailing spaces')
      .strict(true)
      .required('New password is required'),
  confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required')
});


export const contactUsValidationSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().required('Primary Email is required').test('is-valid-email', 'Invalid email address', value => validateEmail(value)),
  phone: Yup.string().required('Mobile Number is required').matches(phoneRegExp, 'Phone number is not valid'),
  company: Yup.string().required('Company Name is required'),
  message: Yup.string().required('Your Message is required'),
});

//Profile Validation
export const personalInfoValidationSchema=Yup.object({
  fullName: Yup.string().trim().required("Full name is required"),
  email: Yup.string().email("Invalid email format").required("Primary email is required"),
  alternativeEmail: Yup.string().email("Invalid email format").required("Alternative email is required"),
  phone: Yup.string().trim().required("Mobile number is required")
});

export const companyInfoValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Company name is required'),
  url:  Yup.string().trim().urlWithOptionalScheme('Invalid URL format').required('Company URL is required'),
  sector: Yup.string().trim().required('Sector of business is required'),
  mobile: Yup.string().trim().required('Mobile number is required'),
  description: Yup.string().trim().required('Company description is required'),
  country: Yup.string().trim().required('Country is required'),
  state: Yup.string().trim().required('State is required'),
  city: Yup.string().trim().required('City is required'),
  postalCode: Yup.string().trim().required('Postal code is required')
});


export const clientInfoValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Company name is required'),
  url: Yup.string().trim().urlWithOptionalScheme('Invalid URL format').required('Company URL is required'),
  description: Yup.string().trim().required('Company description is required'),
});