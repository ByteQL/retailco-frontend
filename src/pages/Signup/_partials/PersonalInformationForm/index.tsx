// React
import React, { useEffect, useState } from 'react';

// third party components
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';

// Ui components

// types
import SignupStepsButtons from '../SignupStepsButtons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { SignupFormProps } from '../CurrentForm/types';

// utils

const PersonalInformation: React.FC<SignupFormProps> = ({
  handleSetStep,
  step,
  stepList,
  handleSubmitClick,
  allSignupFormData,
}) => {
  const genders = ['male', 'female'];
  const [selectedGender, setSelectedGender] = useState('male');
  const schema = yup.object({
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
  });
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const { fullname, phonenumber, gender } = allSignupFormData;
    fullname && setValue('fullname', fullname);
    phonenumber && setValue('phonenumber', phonenumber);
    gender && setSelectedGender(gender);
  }, []);
  const localSubmt = (values) => {
    handleSubmitClick({ ...values, gender: selectedGender });
  };

  return (
    <form onSubmit={handleSubmit(localSubmt)}>
      <Center>
        <Box w={{ sm: 'full', xl: '38rem' }}>
          <VStack spacing={{ base: '3rem', xl: '2vh' }}>
            <FormControl id="fullname" isInvalid={errors.fullname}>
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <Input
                type="text"
                placeholder="John Doe"
                name="fullname"
                ref={register}
              />

              {errors && (
                <FormErrorMessage>
                  {errors.fullname && errors.fullname.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="phonenumber" isInvalid={errors.phonenumber}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="080 2000 0000"
                name="phonenumber"
                ref={register}
              />
              {errors.phonenumber && (
                <FormErrorMessage>
                  {errors.phonenumber.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Stack
                direction="row"
                justifyContent="space-between"
                width="100%"
              >
                {genders.map((gender) => (
                  <Button
                    w={140}
                    key={gender}
                    variant={gender === selectedGender ? 'solid' : undefined}
                    onClick={(e) => {
                      setSelectedGender(gender);
                    }}
                  >
                    {gender}
                  </Button>
                ))}
              </Stack>
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
export default PersonalInformation;
