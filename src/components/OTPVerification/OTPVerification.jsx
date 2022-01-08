import React from "react";
import "./OTPVerification.css";

const OTPVerification = ({ prevStep, nextStep, number }) => {
  const refFirst = React.useRef(null);

  React.useEffect(() => refFirst.current.focus());

  const handleChange = (e) => e.target.nextSibling.focus();

  return (
    <div className="wrapper">
      <div className="input">
        <h3>Enter OTP sent to {number}</h3>
        <small className="additional-msg">
          (Once OTP is submitted you cannot go back!)
        </small>
        <br />
        <div className="user-input otp-input">
          <input
            type="text"
            name="otp"
            className="otp"
            maxLength={1}
            pattern="[0-9]{1}"
            required
            ref={refFirst}
            onChange={handleChange}
          />
          <input
            type="text"
            name="otp"
            className="otp"
            maxLength={1}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="otp"
            className="otp"
            maxLength={1}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="otp"
            className="otp"
            maxLength={1}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="otp"
            className="otp"
            maxLength={1}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="otp"
            className="otp"
            maxLength={1}
            required
          />
        </div>
      </div>
      <div className="input btns">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Submit</button>
      </div>
    </div>
  );
};

export default OTPVerification;
