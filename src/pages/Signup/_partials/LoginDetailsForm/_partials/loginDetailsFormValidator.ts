import * as yup from 'yup';

export default {
  email: yup
    .string()
    .trim()
    .required('Please enter your email address')
    .matches(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      'Please fill in the correct email address',
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Please must be at least 8 characters long'),
  confirmpassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
};
