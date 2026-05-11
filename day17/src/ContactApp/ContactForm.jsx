import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.city === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newContact = {
      id: Date.now(),
      ...formData,
    };

    addContact(newContact);

    setFormData({
      name: "",
      email: "",
      city: "",
    });
  };

  return (
    <div className="form-container">
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="Enter City"
        value={formData.city}
        onChange={handleChange}
      />

      <button
        className="add-btn"
        onClick={handleSubmit}
      >
        Add Contact
      </button>
    </div>
  );
};

export default ContactForm;