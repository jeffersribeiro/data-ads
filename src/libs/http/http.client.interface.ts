export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestMethodInput<T = any> {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: T;
}

export interface RequestMethodOutput<T> {
  data: T;
}

export interface HttpClient {
  request: <T>(input: RequestMethodInput) => Promise<RequestMethodOutput<T>>;
}
