// React
import React from 'react';

// UI components
import CreateStore from '../CreateStoreForm';
import LoginDetailsForm from '../LoginDetailsForm';
import PersonalInformation from '../PersonalInformationForm';
import { SignupFormProps } from './types';

interface Props {
  step: number;
  handleSetStep: (step: number) => void;
  stepList: any[];
  allSignupFormData: any;
  handleSaveData: (data: any) => void;
  handleSendData: (data: any) => Promise<any>;
}
const CurrentForm: React.FC<Props> = ({
  step,
  handleSetStep,
  stepList,
  allSignupFormData,
  handleSaveData,
  handleSendData,
}) => {
  const handleSubmitClick = (currentPageData?: any) => {
    // add the data from active page to previously collected data
    handleSaveData && currentPageData && handleSaveData(currentPageData);
    if (isLastStep) {
      console.log({ ...allSignupFormData, ...currentPageData });

      // if this is the last step, send data to backend
      handleSendData &&
        handleSendData({ ...allSignupFormData, ...currentPageData });
      return;
    }
    // go to next step
    handleSetStep(step + 1);
  };

  const isLastStep = step === stepList.length - 1;

  const props: SignupFormProps = {
    step,
    handleSetStep,
    stepList,
    allSignupFormData,
    handleSaveData,
    handleSendData,
    handleSubmitClick,
  };

  const RenderForm = (props: any) => {
    switch (step) {
      case 0:
        return <PersonalInformation {...props} />;
      case 1:
        return <LoginDetailsForm {...props} />;
      case 2:
        return <CreateStore {...props} />;
      default:
        return <PersonalInformation {...props} />;
    }
  };

  return <RenderForm {...props} />;
};

export default CurrentForm;
