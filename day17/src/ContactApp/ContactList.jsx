import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.city}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteContact(contact.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                className="no-data"
                colSpan="5"
              >
                No Contacts Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;