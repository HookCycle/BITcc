export interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;
  fullname: string;
  registernumber: string;
  birthday: string;
  gender: string;
  phonenumber: string;
  profession: string;
  specialty: string;
  maxrange: number;
  street: string;
  housenumber: number | string;
  district: string;
  city: string;
  state: string;
}
