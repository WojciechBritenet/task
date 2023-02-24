export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birth: any,
  experience: any,
}

export enum PageEnum {
  list,
  add,
  edit,
}