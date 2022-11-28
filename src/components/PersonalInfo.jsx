import React from "react";

const PersonalInfo = () => {
  const personalData = {
    name: "Shabnam",
    age: 20,
    district: "Sumqayt",
  };
  return (
    <div>
      <h2> Personal Info</h2>
      <p> Name: {personalData.name}</p>
      <p> Age: {personalData.age}</p>
      <p> District: {personalData.district}</p>
    </div>
  );
};

export default PersonalInfo;
