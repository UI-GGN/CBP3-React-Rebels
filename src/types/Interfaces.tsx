import { ReactElement, ReactPortal } from 'react';
import { JsxElement } from 'typescript';

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
  vendorId: string;
};

export type T_NavBarElement = {
  key: string;
  link: string;
  label: string;
  onClick?: () => void | {};
  childrens?: T_NavBarElement[];
};

export type ModalProps = {
  onRequestClose: () => void;
  title: String;
  content?: JSX.Element;
  action?: JSX.Element;
};

export type BackDropProps = {
  onRequestClose: () => void;
};

export type Vendor = {
  id: string;
  name: string;
  phoneNumber: string;
  deleted?: boolean;
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
  name: string;
};

export type AdminActionsProps = {
  selectedCabRequest: T_CabRequest;
  onCloseHandler: (value: T_CabRequest | null) => void;
  onSuccessHandler: () => void;
};

export type CabRequestCardsProps = {
  pageDetails: T_CabRequest[];
  vendors: Vendor[];
  handleApprove: (value: T_CabRequest) => void;
  handleDecline: (value: T_CabRequest) => void;
};
export type SpinnerProps = {
  showSpinner: boolean;
};
