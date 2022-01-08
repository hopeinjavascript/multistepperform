import React from "react";
import "./Interests.css";

const Interests = ({ prevStep, nextStep, handleChange, interests, name }) => {
  const changeHandler = (e) => handleChange(e.target.value, e.target.checked);

  return (
    <div className="wrapper">
      <h3> {name?.split(" ")[0]}, select your Interests.</h3>
      <small className="additional-msg">
        (We would love to know about your interests!)
      </small>
      <div className="checkboxes">
        {interests.map((interest) => {
          const { value, checked } = interest;
          return (
            <div className="input interest-input" key={value}>
              <label htmlFor={value}>
                <input
                  type="checkbox"
                  name=""
                  id={value}
                  value={value}
                  checked={checked}
                  onChange={changeHandler}
                />
                {value}
              </label>
            </div>
          );
        })}
      </div>
      <div className="input btns">
        <button onClick={prevStep}>Back</button>
        <button
          onClick={nextStep}
          disabled={
            interests.some((interest) => interest.checked) ? false : true
          }>
          Next
        </button>
      </div>
    </div>
  );
};

export default Interests;
