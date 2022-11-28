import React from "react";
import Address from "./Address";
import Email from "./Email";
import Name from "./Name";

const PersonalInfo = () => {
  return (
    <div>
      <Email />
      <Name />
      <Address />
    </div>
  );
};

export default PersonalInfo;
