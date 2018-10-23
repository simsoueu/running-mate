import { Photo } from "./photo";

export class User {
  name: string;
  username: string;
  fullname: string;
  description: string;
  city: string;
  country: string;
  createDate: Date;
  photo: Photo;
}
