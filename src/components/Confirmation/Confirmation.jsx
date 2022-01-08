import React from "react";
import "./Confirmation.css";

const Confirmation = ({ name, email, number, interests, prevStep }) => {
  const handleBackHome = () =>
    (window.location.href =
      "https://github.com/hopeinjavascript/multistepperform");

  return (
    <div className="wrapper confirm-wrapper">
      <h1 className="greet-msg">Thank You {name.split(" ")[0]}</h1>
      <h3 className="success-msg">
        <span className="tick">✔</span>
        Your Registration is Succesful!
      </h3>
      <p className="info-msg">
        OTP verification has been done on <strong>{number}</strong>
      </p>
      <p className="info-msg">
        {`We are glad to know that your interests lies in `}
        {interests?.map((interest) => {
          const { value, checked } = interest;
          return (
            <span key={value}>
              <strong>{checked && `${value} `} </strong>
            </span>
          );
        })}
      </p>
      <button onClick={handleBackHome}>Back home</button>
    </div>
  );
};

export default Confirmation;
