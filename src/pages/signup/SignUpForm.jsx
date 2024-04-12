import { useState } from "react";
import { SignUp } from "./SignUp";
import { AvatarSignUp } from "./Avatar-SignUp";
import { InfoSignUp } from "./Info-SignUp";
import { EmailVerify } from "./EmailVerify-SignUp";

export const SignupForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleChangeStep = (newStep) => {
    setStep(newStep);
  };

  return (
    <>
      {step === 1 && <SignUp onNext={handleNext} />}
      {step === 2 && <AvatarSignUp onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <InfoSignUp onNext={handleNext} onPrev={handlePrev} />}
      {step === 4 && <EmailVerify onChangeStep={handleChangeStep}/>}
    </>
  );
};

