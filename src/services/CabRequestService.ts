import axios from 'axios';
import { T_CabRequest } from '../types/Interfaces';
import { FormProps } from 'src/types/FormProps';

class CabRequestService {
  static fetchInfo = (): Promise<T_CabRequest[]> => {
    const url = 'https://shuttle-service-tw.vercel.app/api/v1/cab-request';
    return axios.get(url).then((response) => response.data);
  };

  static createRequest = (requestData: FormProps): Promise<any> => {
    const url = 'https://shuttle-service-tw.vercel.app/api/v1/cab-request';
    return axios.post(url, requestData).then((response) => response.data);
  };

  static assignVendor(vendorId: number, requestId: number) {
    console.log({ status: 'APPROVED', vendorId: vendorId });
    console.log(
      `https://shuttle-service-tw.vercel.app/api/v1/cab-request/${requestId}`
    );
    return axios.put(
      `https://shuttle-service-tw.vercel.app/api/v1/cab-request/${requestId}`,
      { status: 'APPROVED', vendorId: vendorId }
    );
  }
}

export default CabRequestService;
