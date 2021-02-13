// React
import React, { useEffect, useState } from 'react';

// third party components
import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  SimpleGrid,
} from '@chakra-ui/react';

// UI components
import BaseInput from '../../../../components/BaseInput';
import BaseSelect from '../../../../components/BaseSelect';

// third party libraries
import * as yup from 'yup';

// types
import createStoreFormValidator from './_partials/createStoreFormValidator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SignupStepsButtons from '../SignupStepsButtons';
import { SignupFormProps } from '../CurrentForm/types';

const CreateStore: React.FC<SignupFormProps> = ({
  handleSetStep,
  step,
  stepList,
  handleSubmitClick,
  allSignupFormData,
}) => {
  const schema = yup.object().shape(createStoreFormValidator);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const {
      storename,
      storeaddress,
      industry,
      location,
      contactnumber,
    } = allSignupFormData;
    storename && setValue('storename', storename);
    storeaddress && setValue('storeaddress', storeaddress);
    industry && setIndustry(industry);
    location && setValue('location', location);
    contactnumber && setValue('contactnumber', contactnumber);
  }, []);
  const industryOptions = [
    'automobile',
    { title: 'fashion & beauty', value: 'fashion' },
    'computing',
    'electronics',
    'food',
    'furniture',
    'gaming',
    'groceries',
    'handcraft',
    'health',
    'sports',
    'toys',
    'other',
  ];
  const [industry, setIndustry] = useState('');
  const validateSubmit = (values) => {
    console.log(industry);

    if (!industry) {
      return setError('industry', {
        type: 'manual',
        message: 'Please select an industry',
      });
    }
    handleSubmitClick({ ...values, industry });
  };

  useEffect(() => {
    if (industry) clearErrors('industry');
    setValue('industry', industry);
  }, [industry]);

  return (
    <form onSubmit={handleSubmit(validateSubmit)}>
      <Center>
        <Box w={'890px'}>
          <SimpleGrid spacingX="106px" spacingY="30px" columns={2} w="100%">
            <FormControl id="storename" isInvalid={errors.storename}>
              <FormLabel>Store Name</FormLabel>
              <BaseInput
                type="text"
                placeholder="John Doe Ltd"
                name="storename"
                ref={register}
              />
              {errors.storename && (
                <FormErrorMessage>{errors.storename.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl id="industry" isInvalid={errors.industry}>
              <FormLabel>Industry</FormLabel>
              <BaseSelect
                placeholder="Select option"
                textTransform="capitalize"
                onChange={(e) => setIndustry(e.target.value)}
                ref={register}
                value={industry}
              >
                {industryOptions.map((item, i: number) => (
                  <option
                    key={i}
                    value={typeof item !== 'string' ? item.value : item}
                  >
                    {typeof item !== 'string' ? item.title : item}
                  </option>
                ))}
              </BaseSelect>
              {errors.industry && (
                <FormErrorMessage>{errors.industry.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl id="storeaddress" isInvalid={errors.storeaddress}>
              <FormLabel>Store Address</FormLabel>
              <BaseInput
                type="text"
                placeholder="56, Hillton Road, Doe-Island."
                name="storeaddress"
                ref={register}
              />
              {errors.storeaddress && (
                <FormErrorMessage>
                  {errors.storeaddress.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="location" isInvalid={errors.location}>
              <FormLabel>Location</FormLabel>
              <BaseInput
                type="text"
                placeholder="Lagos, Nigeria"
                name="location"
                ref={register}
              />
              {errors.location && (
                <FormErrorMessage>{errors.location.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="contactnumber" isInvalid={errors.contactnumber}>
              <FormLabel>Contact Number</FormLabel>
              <BaseInput
                type="tel"
                placeholder="0802 000 2000"
                name="contactnumber"
                ref={register}
              />
              {errors.contactnumber && (
                <FormErrorMessage>
                  {errors.contactnumber.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </SimpleGrid>
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

export default CreateStore;
