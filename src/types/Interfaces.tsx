import { ReactElement, ReactPortal } from 'react';

export type ReactText = string | number;
export type ReactChild = ReactElement | ReactText;

export interface ReactNodeArray extends Array<ReactNode> {}
export type ReactFragment = {} | ReactNodeArray;
export type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

export type Props = {
  children: JSX.Element;
};

export type T_CabRequest = {
  id: number;
  employeeName: string;
  pickupTime: string;
  projectCode: string;
  pickupLocation: string;
  dropLocation: string;
  expireDate: string;
  status: string;
};

export type T_NavBarElement = {
  key: string;
  link: string;
  label: string;
  isSecured: Boolean;
};

export type T_SelectOptions = {
  id: string;
  value: string;
};

export type ActionButton = {
  name: string;
  color: string;
};

export type User = {
  id: string;
  username: string;
  password: string;
  profile: string;
};
