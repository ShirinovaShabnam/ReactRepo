import React from "react";

const Contacts = () => {
  const contactsData = {
    phone: "+994 55 555 55 55",
    email: "shabnamv@gmail.com ",
  };
  return (
    <div>
      <h2>Contact</h2>
      <p>Phone: {contactsData.phone}</p>
      <p>Email: {contactsData.email}</p>
    </div>
  );
};

export default Contacts;
