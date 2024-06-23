import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean | null>(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      // setStep((currentStep) => currentStep + 1);
      setStep((currentStep) => currentStep + 1);
    }
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              onClick={handlePrevious}
            >
              Previous
            </Button>

            <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

interface ButtonPropTypes {
  textColor: string;
  bgColor: string;
  onClick: () => void;
  children: React.ReactNode;
}

interface MessagePropTypes {
  step: number;
  children: React.ReactNode;
}

function StepMessage({ step, children }: MessagePropTypes): JSX.Element {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

const Button: React.FC<ButtonPropTypes> = ({
  textColor,
  bgColor,
  onClick,
  children,
}) => {
  return (
    <button style={{ background: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
};
