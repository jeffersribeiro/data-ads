import axios from 'axios';
import {
  HttpClient,
  RequestMethodInput,
  RequestMethodOutput,
} from './http.client.interface';

export class AxiosClient implements HttpClient {
  async request<T = any>(
    input: RequestMethodInput,
  ): Promise<RequestMethodOutput<T>> {
    const response = axios.request<T>(input);
    return response;
  }
}
