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
} from '@chakra-ui/react';

// UI components
import BaseInput from 'components/BaseInput';

import * as yup from 'yup';
import loginDetailsFormValidator from './_partials/loginDetailsFormValidator';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import SignupStepsButtons from '../SignupStepsButtons';
import { SignupFormProps } from '../CurrentForm/types';

const LoginDetailsForm: React.FC<SignupFormProps> = ({
  handleSetStep,
  step,
  stepList,
  handleSubmitClick,
  allSignupFormData,
}) => {
  const schema = yup.object().shape(loginDetailsFormValidator);
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const { email } = allSignupFormData;
    email && setValue('email', email);
  }, []);
  return (
    <form onSubmit={handleSubmit(handleSubmitClick)}>
      <Center>
        <Box w="38rem">
          <VStack spacing={30}>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <BaseInput
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
              <BaseInput type="password" name="password" ref={register} />
              {errors.password && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              id="confirmpassword"
              isInvalid={errors.confirmpassword}
            >
              <FormLabel>Confirm Password</FormLabel>
              <BaseInput
                type="password"
                name="confirmpassword"
                ref={register}
              />
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

export default LoginDetailsForm;
