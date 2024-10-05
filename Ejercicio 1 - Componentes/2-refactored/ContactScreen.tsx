import React, { useMemo, FC } from "react";
import { City, Contact, ContactToDisplay, State } from "./interfaces";
import { NavBar } from "./NavBar";

interface Props {
  contacts: Contact[];
  cities: City[];
  state: State[];
}

export const ContactsScreen: FC<Props> = ({ contacts, cities, states }) => {
  const contactsToDisplay: ContactToDisplay[] = useMemo(
    contacts.map((contact) => ({
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
    })),
    [contacts, cities, states]
  );
  return (
    <div>
      <NavBar />
      <h1>Contacts 👥</h1>
      {contactsToDisplay.map((contact) => (
        <div key={contact.id}>
          <div>
            <img src={contact.avatar_url} alt="avatar" />
            <h3>
              {contact.full_name} - {contact.company}
            </h3>
          </div>
          <p>{contact.details}</p>
          <ul>
            <li>email: {contact.email}</li>
            <li>phone: {contact.phone_number}</li>
            <li>
              <h4>Address{contact.addresses.length > 1 && "es"}:</h4>

              {contact.addresses.map((address) => (
                <ul key={address.line_1 + address.line_2}>
                  <li>{address.line_1}</li>
                  <li>{address.line_2}</li>
                  <li>{address.zip_code}</li>
                  <li>{address.city}</li>
                  <li>{address.state}</li>
                </ul>
              ))}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
