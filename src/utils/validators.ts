export const emailValidator = {
  pattern: {
    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    message: 'Please fill in the correct email address',
  },
  required: 'Your email is required',
};

export const fullnameValidator = {
  pattern: {
    value: /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/,
    message: 'Please fill in the correct email address',
  },
  required: 'Your email is required',
};

export const phonenumberValidator = {
  required: true,
  valueAsNumber: true,
  validate: (value: string) =>
    (value && value.length === 11) || 'Please enter a valid phone number',
};

export const passwordValidator = {
  required: true,
  validate: (value: string) =>
    (value && value.length >= 8) ||
    'Passwords must be at least 8 characters long',
};

export const confirmpasswordValidator = (watch) => ({
  required: true,
  validate: (value) => value === watch('password') || "Passwords don't match.",
});
