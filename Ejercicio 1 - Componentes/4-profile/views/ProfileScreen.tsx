import React, { FC } from "react";
import { City, Contact, State } from "../interfaces";
import { parseContact } from "../utils/parseContact";
import { NavBar } from "../components/NavBar";
import { Contact as ContactComponent } from "../components/Contact";

interface Props {
  contact: Contact;
  cities: City[];
  states: State[];
}

export const ProfileScreen: FC<Props> = ({ contact, cities, states }) => {
  const contactToDisplay = parseContact(contact, cities, states);
  return (
    <div>
      <NavBar />
      <h1>Profile 👤</h1>
      <ContactComponent key={contactToDisplay.id} contact={contactToDisplay} />
    </div>
  );
};
