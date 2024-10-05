export interface Contact {
  id: string;
  avatar_url: string;
  first_name: string;
  last_name: string;
  company: string;
  details: string;
  email: string;
  phone: string;
  area_code: string;
  addresses: Address[];
}

export interface ContactToDisplay
  extends Omit<
    Contact,
    "first_name" | "last_name" | "area_code" | "addresses" | "phone"
  > {
  full_name: string;
  phone_number: string;
  addresses: ContactToDisplayAddress[];
}

export interface ContactToDisplayAddress
  extends Omit<Address, "city_id" | "state_id"> {
  city: string;
  state: string;
}

export interface Address {
  line_1: string;
  line_2: string;
  zip_code: number;
  city_id: string;
  // Esto podría usar un enum
  state_id: string;
}

export interface City {
  id: string;
  // Etc...
}

export interface State {
  id: string;
  // Etc...
}
