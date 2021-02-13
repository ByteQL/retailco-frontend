import React from 'react';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// types

interface Props {
  step: number;
  handleSetStep: (step: number) => void;
  stepList: any[];
}

const SignupStepsButtons: React.FC<Props> = ({
  step,
  handleSetStep,
  stepList,
}) => {
  const isLastStep = step === stepList.length - 1;
  return (
    <Box width="890px" mt="60px">
      <SimpleGrid columns={3} alignItems="center">
        <Box h="60px" w="100px">
          {step ? (
            <Button
              variant="borderless"
              leftIcon={<AiOutlineArrowLeft />}
              onClick={(_) => handleSetStep(step - 1)}
            >
              back
            </Button>
          ) : null}
        </Box>
        <Button
          size="xl"
          variant="solid"
          rightIcon={<AiOutlineArrowRight />}
          type="submit"
        >
          {isLastStep ? 'Create Account' : 'Proceed'}
        </Button>
        <Box></Box>
      </SimpleGrid>
    </Box>
  );
};

export default SignupStepsButtons;
