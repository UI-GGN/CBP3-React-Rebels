import axios from 'axios';
import { T_CabRequest } from '../types/Interfaces';
import { FormProps } from 'src/types/FormProps';

class CabRequestService {
  static fetchInfo = (): Promise<T_CabRequest[]> => {
    const url = 'https://cab-schedule-serverless.vercel.app/api/v1/cab-request';

    return axios.get(url).then((response) => response.data);
  };

  static createRequest = (requestData: FormProps): Promise<any> => {
    const url = 'https://cab-schedule-serverless.vercel.app/api/v1/cab-request';
    return axios.post(url, requestData).then((response) => response.data);
  };
}

export default CabRequestService;
