import { Method } from 'axios';
import { resolveMockRequest } from 'mocks/mockApi';

class HTTPService {
  private readonly basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  public async apiRequest<T>(url: string, method: Method, body?: any): Promise<T> {
    return resolveMockRequest<T>(url, method, body);
  }

  public GET<T>(path: string): Promise<T> {
    return this.apiRequest(`${this.basePath}${path}`, 'get');
  }

  public POST<T>(path: string, body: any): Promise<T> {
    return this.apiRequest(`${this.basePath}${path}`, 'post', body);
  }

  public PUT<T>(path: string, body?: any): Promise<T> {
    return this.apiRequest(`${this.basePath}/${path}`, 'put', body);
  }
}

export default HTTPService;
