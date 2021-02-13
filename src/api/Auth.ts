import { AxiosInstance } from 'axios';

class Auth {
  private client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }
  signUp(userObj: any) {
    return this.client.post('/user/create', userObj);
  }
  login(userObj: { email: string; password: string }) {
    const headers = {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': '*',
    };
    return this.client.post('/user/login', userObj, { headers });
  }
}

export default Auth;
