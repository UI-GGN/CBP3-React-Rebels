import axios from 'axios';
import { T_CabRequest } from '../types/Interfaces';

class CabRequestService {
  static fetchInfo = (): Promise<T_CabRequest[]> => {
    const url = 'https://cab-schedule-serverless.vercel.app/api/v1/cab-request';

    return axios.get(url).then((response) => response.data);
  };
}

export default CabRequestService;
