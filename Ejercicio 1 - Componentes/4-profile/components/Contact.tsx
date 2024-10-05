import React, { FC } from "react";
import { ContactToDisplay } from "../interfaces";

interface Props {
  contact: ContactToDisplay;
}

export const Contact: FC<Props> = ({ contact }) => {
  return (
    <div>
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
  );
};
