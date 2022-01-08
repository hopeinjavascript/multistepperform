import { useState } from "react";
import UserDetails from "../UserDetails/UserDetails";
import Interests from "../Interests/Interests";
import OTPVerification from "../OTPVerification/OTPVerification";
import Confirmation from "../Confirmation/Confirmation";
import Steps from "../Steps/Steps";

const initStateInterests = [
  {
    value: "dancing",
    checked: false,
  },
  {
    value: "singing",
    checked: false,
  },
  {
    value: "trekking",
    checked: false,
  },
  {
    value: "coding",
    checked: false,
  },
  {
    value: "reading",
    checked: false,
  },
];

function Container() {
  const [stepNum, setStepNum] = useState(1);
  const [interests, setInterests] = useState(initStateInterests);
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });

  const nextStep = () => setStepNum((stepNum) => stepNum + 1);
  const prevStep = () => setStepNum((stepNum) => stepNum - 1);

  const handleUserDetails = (name, value) =>
    setUser({ ...user, [name]: value });

  const handleInterests = (newInterest, checked) => {
    const updatedInterests = interests.map((interest) => {
      const { value, checked } = interest;
      if (value === newInterest) {
        return {
          ...interest,
          checked: !checked,
        };
      }
      return interest;
    });

    setInterests(updatedInterests);
  };

  return (
    <>
      <Steps stepNum={stepNum} />

      {stepNum === 1 && (
        <UserDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleUserDetails}
          {...user}
        />
      )}
      {stepNum === 2 && (
        <Interests
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleInterests}
          interests={interests}
          {...user}
        />
      )}
      {stepNum === 3 && (
        <OTPVerification
          nextStep={nextStep}
          prevStep={prevStep}
          // handleChange={handleUserDetails}
          number={user.number}
        />
      )}
      {stepNum === 4 && <Confirmation {...user} interests={interests} />}
    </>
  );
}

export default Container;
