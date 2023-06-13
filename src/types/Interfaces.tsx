export type T_CabRequest = {
  requests: {
    bookingId: number;
    name: string;
    date: string;
    projectCode: string;
    time: string;
    pickupLocation: string;
    dropLocation: string;
    status: string;
  }[];
};
