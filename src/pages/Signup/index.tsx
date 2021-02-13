// React
import React, { useEffect, useState } from 'react';

// UI compoennts
import { Box, Flex, Heading, Link, VStack } from '@chakra-ui/react';
import SideBanner from './_partials/SideBanner';
import SignupStepIndicator from 'components/SignupStepsIndicator';
import CurrentForm from './_partials/CurrentForm';
import { MdAccountBalance, MdPermIdentity, MdInput } from 'react-icons/md';

interface Props {}

const Signup: React.FC<Props> = ({}) => {
  const stepList = [
    { Icon: MdPermIdentity, title: 'Personal Information' },
    { Icon: MdAccountBalance, title: 'Create store' },
    { Icon: MdInput, title: 'Login details' },
  ];
  const [signupStep, setSignupStep] = useState(0);
  const [allSignupFormData, setallSignupFormData] = useState({});
  useEffect(() => {
    !signupStep && setSignupStep(0);
    signupStep === stepList.length - 1 && setSignupStep(stepList.length - 1);
  }, [signupStep]);

  const handleSaveData = (data: any) => {
    setallSignupFormData({ ...allSignupFormData, ...data });
  };
  const handleSendData = (data: any) => {
    return new Promise((resolve, reject) => {});
  };
  return (
    <Box>
      <Flex flexDir={'row'} minH="100vh">
        <SideBanner />
        <Box width="1175px" padding="60px">
          <VStack spacing="60px">
            <Box>
              <Heading size="xl" as="h1">
                Welcome
              </Heading>
              <Heading size="sm" as="h2">
                {signupStep === stepList.length - 1
                  ? 'Finally!'
                  : 'Please create your account'}
              </Heading>
            </Box>
            <SignupStepIndicator stepList={stepList} step={signupStep} />
            <CurrentForm
              step={signupStep}
              handleSetStep={setSignupStep}
              stepList={stepList}
              allSignupFormData={allSignupFormData}
              handleSaveData={handleSaveData}
              handleSendData={handleSendData}
            />
            <Box as="p" w={400} fontSize={12} p={10}>
              We collect and use personal data in accordance with our{' '}
              <Link color="brand.primary">Privacy Policy</Link> By creating an
              account, you agree to our&nbsp;
              <Link color="brand.primary">Terms and Conditions</Link>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};
export default Signup;
