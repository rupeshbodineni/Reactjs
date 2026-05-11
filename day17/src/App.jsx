import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    const filteredData = contacts.filter(
      (contact) => contact.id !== id
    );

    setContacts(filteredData);
  };

  return (
    <div className="app-container">
      <h1 className="heading">Contact App</h1>

      <ContactForm addContact={addContact} />

      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;