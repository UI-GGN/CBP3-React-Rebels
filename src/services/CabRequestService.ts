import axios from 'axios';
import { T_CabRequest } from '../types/Interfaces';
import { FormProps } from 'src/types/FormProps';

class CabRequestService {
  static fetchInfo = async (): Promise<T_CabRequest[]> => {
    const url = 'https://cab-schedule-serverless.vercel.app/api/v1/cab-request';

    const response = await axios.get(url);
    return response.data;
  };

  static createRequest = async (requestData: FormProps): Promise<any> => {
    const url = 'https://cab-schedule-serverless.vercel.app/api/v1/cab-request';
    const response = await axios.post(url, requestData);
    return response.data;
  };

  static fetchUserRequest = async (empid: String): Promise<T_CabRequest[]> => {
    const url = `https://cab-schedule-serverless.vercel.app/api/v1/cab-request/employee/${empid}`;

    const response = await axios.get(url);
    return response.data;
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
