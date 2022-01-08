import React from "react";

const cn = "input";
const ui = "user-input";

const UserDetails = ({ nextStep, handleChange, name, email, number }) => {
  const changeHandler = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  return (
    <div className="wrapper">
      <div className={cn}>
        <label htmlFor="name">name</label>
        <div className={ui}>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className={cn}>
        <label htmlFor="email">Email</label>
        <div className={ui}>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={changeHandler}
            required
          />
        </div>
      </div>
      <div className={cn}>
        <label htmlFor="number">number</label>
        <div className={ui}>
          <input
            type="tel"
            name="number"
            id="number"
            value={number}
            minLength="10"
            maxLength="10"
            onChange={changeHandler}
            required
          />
        </div>
      </div>
      <div className={`${cn} btns`}>
        <button
          onClick={nextStep}
          disabled={!name || !email || !number ? true : false}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
