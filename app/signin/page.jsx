"use client";
import { useState } from "react";
import TokenValidation from "../components/TokenValidation";
import BasicDetails from "../components/BasicDetails";
import HotelSelection from "../components/HotelSelection";
import Payment from "../components/Payment";
import PaymentSuccess from "../components/PaymentSuccess";

export default function RegistrationFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({});

  // Go to the next step
  const goToNextStep = (data) => {
    setUserData({ ...userData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Render the steps based on the currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <TokenValidation onNext={goToNextStep} />;
      case 1:
        return <BasicDetails onNext={goToNextStep} onBack={goToPreviousStep} />;
      case 2:
        return (
          <HotelSelection onNext={goToNextStep} onBack={goToPreviousStep} />
        );
      case 3:
        return <Payment onNext={goToNextStep} />;
      case 4:
        return <PaymentSuccess />;
      default:
        return <TokenValidation onNext={goToNextStep} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        {renderStep()}
      </div>
    </div>
  );
}
