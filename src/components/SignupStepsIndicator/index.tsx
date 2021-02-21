// React
import React from 'react';

// third party components
import { Box, Center, Circle, Heading, HStack } from '@chakra-ui/react';

import './index.scss';
interface Props {
  stepList: any[];
  step: number;
}

const SignupStepIndicator: React.FC<Props> = ({ stepList, step }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <HStack direction="row" alignItems="center">
        {stepList.map(({ Icon, title }, index) => {
          const isActive = step === index;
          const CircleItem = () => {
            return (
              <Circle
                bg={isActive ? 'brand.primary' : 'white'}
                color={isActive ? 'white' : 'brand.verylightgrey'}
                w={'4rem'}
                h={'4rem'}
                fontSize="lg"
                border=".1rem solid"
                borderColor={isActive ? 'brand.bronze' : 'brand.verylightgrey'}
                position="relative"
                className={`step-circle${
                  isActive ? ' step-circle--active' : ''
                }${
                  stepList.length - 1 > index ? ' step-circle--has-tail' : ''
                }`}
              >
                <Icon
                  color={isActive ? 'brand.primary' : 'brand.verylightgrey'}
                />
              </Circle>
            );
          };
          return (
            <Box
              key={index}
              className="step-wrapper"
              mr={stepList.length - 1 > index ? '8rem' : 0}
              width="17.2rem"
            >
              <Box>
                <Center textAlign="center">
                  <CircleItem />
                </Center>
                <Heading
                  size="sm"
                  color={isActive ? 'black' : 'brand.verylightgrey'}
                  fontWeight={isActive ? 700 : 400}
                  mt="1.5rem"
                  textAlign="center"
                >
                  {title}
                </Heading>
              </Box>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

export default SignupStepIndicator;
