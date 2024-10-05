import React, { useMemo, FC } from "react";
import { City, Contact, ContactToDisplay, State } from "../interfaces";
import { NavBar } from "../components/NavBar";
import { parseContact } from "../utils/parseContact";
import { Contact as ContactComponent } from "../components/Contact";

interface Props {
  contacts: Contact[];
  cities: City[];
  state: State[];
}

export const ContactsScreen: FC<Props> = ({ contacts, cities, states }) => {
  const contactsToDisplay: ContactToDisplay[] = useMemo(
    contacts.map((contact) => parseContact(contact, cities, states)),
    [contacts, cities, states]
  );
  return (
    <div>
      <NavBar />
      <h1>Contacts 👥</h1>
      {contactsToDisplay.map((contact) => (
        <ContactComponent key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
