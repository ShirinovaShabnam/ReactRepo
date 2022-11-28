import React from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

const UserCV = () => {
  return (
    <div>
      <h1>CV</h1>
      <PersonalInfo />
      <Experience />
      <Contacts />
    </div>
  );
};

export default UserCV;
