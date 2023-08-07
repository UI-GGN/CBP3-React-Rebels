import axios from 'axios';
import { T_CabRequest, Vendor } from '../types/Interfaces';
import { FormProps } from '../types/FormProps';

class CabRequestService {
  static fetchInfo = async (): Promise<T_CabRequest[]> => {
    const url = 'https://shuttle-service-tw.vercel.app/api/v1/cab-request';
    const response = await axios.get(url);
    return response.data;
  };

  static createRequest = async (requestData: any): Promise<any> => {
    const url = 'https://shuttle-service-tw.vercel.app/api/v1/cab-request';
    const response = await axios.post(url, requestData);
    return response.data;
  };

  static fetchUserRequest = async (empid: String): Promise<T_CabRequest[]> => {
    const url = `https://shuttle-service-tw.vercel.app/api/v1/cab-request/employee/${empid}`;

    const response = await axios.get(url);
    return response.data;
  };

  static getVendors = async (): Promise<Vendor[]> => {
    const url = 'https://shuttle-service-tw.vercel.app/api/v1/vendor';
    const response = await axios.get(url);
    return response.data;
  };

  static assignVendor(vendorId: string, requestId: number) {
    return axios.put(
      `https://shuttle-service-tw.vercel.app/api/v1/cab-request/${requestId}`,
      { status: 'APPROVED', vendorId: vendorId }
    );
  }

  static declineRequest(requestId: number) {
    return axios.put(
      `https://shuttle-service-tw.vercel.app/api/v1/cab-request/${requestId}`,
      { status: 'DECLINED' }
    );
  }
}

export default CabRequestService;
