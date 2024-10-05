import React from "react";

export const ContactsScreen = ({ contacts, cities, states }) => {
  const contactsToDisplay = contacts.map((contact) => ({
    id: contact.id,
    avatar_url: contact.avatar_url,
    full_name: `${contact.first_name} ${contact.last_name}`,
    company: contact.company,
    details: truncate(contact.details, 100),
    email: contact.email,
    phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
    addresses: contact.addresses.map((address) => ({
      line_1: address.line_1,
      line_2: address.line_2,
      zip_code: address.zip_code,
      city: findById(cities, address.city_id),
      state: findById(states, address.state_id),
    })),
  }));
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/contacts">My Contacts</a>
          </li>
        </ul>
      </nav>
      <h1>Contacts 👥</h1>
      {contactsToDisplay.map((contact) => (
        <div>
          <div>
            <img src={contact.avatar_url} />
            <h3>{contact.full_name}</h3> - <h4>{contact.company}</h4>
          </div>
          <p>{contact.details}</p>
          <ul>
            <li>email: {contact.email}</li>
            <li>phone: {contact.phone_number}</li>
            <li>
              {contact.addresses.length > 1 ? (
                <h4>Addresses:</h4>
              ) : (
                <h4>Address:</h4>
              )}
              {contact.addresses.map((address) => (
                <ul>
                  <li>{address.line_1}</li>
                  <li>{address.line_2}</li>
                  <li>{address.zip_code}</li>
                  <li>{address.city}</li>
                  <li>{address.state}</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
