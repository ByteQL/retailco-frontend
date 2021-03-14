// React
import React, { useEffect } from 'react';

// third party components
import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  VStack,
  Input,
} from '@chakra-ui/react';

// UI components
import SignupStepsButtons from '../SignupStepsButtons';
import { SignupFormProps } from '../CurrentForm/types';

// utils
import loginDetailsFormValidator from './_partials/loginDetailsFormValidator';

// third party libraries
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

// redux
import { signUp } from 'redux/actions/auth';

interface Props {
  signUp: (userData: any) => Promise<any>;
}
const LoginDetailsForm: React.FC<Props & SignupFormProps> = ({
  handleSetStep,
  step,
  stepList,
  allSignupFormData,
  signUp,
}) => {
  useEffect(() => {
    const { email } = allSignupFormData;
    email && setValue('email', email);
  }, []);

  const schema = yup.object().shape(loginDetailsFormValidator);
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const localSubmt = (values: any) => {
    const userData = { ...allSignupFormData, ...values };
    delete userData.gender;
    delete userData.confirmpassword;
    handleSetStep(step + 1);
    // signUp(userData)
    //   .then((res) => handleSetStep(step + 1))
    //   .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit(localSubmt)}>
      <Center>
        <Box w={{ sm: 'full', xl: '38rem' }}>
          <VStack spacing={{ base: '3rem', xl: '2vh' }}>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="john_doe@myemail.com"
                name="email"
                ref={register}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" ref={register} />
              {errors.password && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              id="confirmpassword"
              isInvalid={errors.confirmpassword}
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" name="confirmpassword" ref={register} />
              {errors.confirmpassword && (
                <FormErrorMessage>
                  {errors.confirmpassword.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </VStack>
        </Box>
      </Center>
      <SignupStepsButtons
        handleSetStep={handleSetStep}
        step={step}
        stepList={stepList}
      />
    </form>
  );
};

export default connect(null, { signUp })(LoginDetailsForm);
