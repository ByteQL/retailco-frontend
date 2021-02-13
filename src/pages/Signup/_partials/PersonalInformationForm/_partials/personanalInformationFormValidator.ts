import * as yup from 'yup';

export default {
  fullname: yup
    .string()
    .trim()
    .required('Your name will help us address you correctly')
    .matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Please enter a valid name'),
  phonenumber: yup
    .string()
    .required('Phone number is required')
    .min(9, 'Please enter a valid number')
    .max(15, 'Please enter a valid number'),
};
