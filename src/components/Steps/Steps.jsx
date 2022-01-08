import React, { useState } from "react";
import "./Steps.css";

const initStateSteps = [
  {
    id: 1,
    num: 1,
    text: "Personal",
  },
  {
    id: 2,
    num: 2,
    text: "Interests",
  },
  {
    id: 3,
    num: 3,
    text: "OTP",
  },
  {
    id: 4,
    num: 4,
    text: "Success",
  },
];

const Steps = ({ stepNum }) => {
  const [steps, setSteps] = useState(initStateSteps);

  React.useEffect(() => {
    setSteps(
      steps.map((step) => {
        if (step.num === stepNum) {
          return {
            ...step,
            active: true,
          };
        }
        return step;
      })
    );
  }, [stepNum]);

  return (
    <div className="stepsContainer">
      {steps.map((step) => {
        const { id, num, text, active, completed } = step;
        return (
          <div key={id} className="steps">
            <span className={`stepNum ${step.num === stepNum && "active"}`}>
              {num}
            </span>
            <div className={`text ${step.num === stepNum && "active-text"}`}>
              {text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
