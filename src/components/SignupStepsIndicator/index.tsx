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
                w={'40px'}
                h={'40px'}
                fontSize="lg"
                border="1px solid"
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
              mr={stepList.length - 1 > index ? '80px' : 0}
              width="172px"
            >
              <Box>
                <Center textAlign="center">
                  <CircleItem />
                </Center>
                <Heading
                  size="sm"
                  color={isActive ? 'black' : 'brand.verylightgrey'}
                  fontWeight={isActive ? 700 : 400}
                  mt="15px"
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
