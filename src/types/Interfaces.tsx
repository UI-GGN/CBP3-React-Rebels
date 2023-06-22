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
  status: string;
};

export type ModalProps = {
  showModal: boolean;
  children: JSX.Element;
  onClose: (params: any) => any;
};
