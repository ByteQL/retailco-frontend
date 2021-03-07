// react
import React from 'react';

// third party components
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// third party libraries
import { connect } from 'react-redux';
import { AppState } from 'redux/store';

interface Props {
  step: number;
  handleSetStep: (step: number) => void;
  stepList: any[];
  isSigningUp: boolean;
}

const SignupStepsButtons: React.FC<Props> = ({
  step,
  handleSetStep,
  stepList,
  isSigningUp,
}) => {
  const isLastStep = step === stepList.length - 1;
  return (
    <Box w={{ base: 'full', lg: '85rem' }} mt="5vh">
      <SimpleGrid columns={3} alignItems="center">
        <Box h="6rem" w={{ base: 'full', xl: '10rem' }}>
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
          w={{ base: 'full' }}
          variant="solid"
          rightIcon={<AiOutlineArrowRight />}
          type="submit"
          isLoading={isSigningUp}
        >
          {isLastStep ? 'Create Account' : 'Proceed'}
        </Button>
        <Box></Box>
      </SimpleGrid>
    </Box>
  );
};
const mapStateProps = (state: AppState) => ({
  isSigningUp: state.auth.isSigningUp,
});
export default connect(mapStateProps)(SignupStepsButtons);
