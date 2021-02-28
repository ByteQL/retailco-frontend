import * as yup from 'yup';

const createStoreFormValidator = {
  storename: yup
    .string()
    .trim()
    .required('Your name will help us address you correctly')
    .matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Please enter a valid name'),
  contactnumber: yup
    .string()
    .required("Store's contact number number is required")
    .min(10, 'Please enter a valid number')
    .max(14, 'Please enter a valid number'),
  storeaddress: yup.string().trim().required('Please enter your store address'),
};
export default createStoreFormValidator;
