import { SubmitHandler } from 'react-hook-form';
import { FormProps } from 'types/formikTypes';

export interface SignupFormProps extends FormProps {
  step: number;
  handleSetStep: (step: number) => void;
  stepList: any[];
  allSignupFormData: any;
  handleSaveData: (data: any) => void;
  handleSendData: (data: any) => Promise<any>;
  handleSubmitClick: SubmitHandler<any>;
}
