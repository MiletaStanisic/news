import { ApiHelper } from "./helper";

const endpoint = 'https://newsapi.org/v2/';
const api_key = '9ae581d0b39b4e5688e0ca7c652f26b2';

class Api {
  static get = (url, params) => {
    return ApiHelper(`${endpoint}${url}&apiKey=${api_key}`, 'GET', params);
  }

  static post = (url, params) => {
    return ApiHelper(`${endpoint}${url}&apiKey=${api_key}`, 'POST', params)
  }

  static put = (url, params) => {
    return ApiHelper(`${endpoint}${url}&apiKey=${api_key}`, 'PUT', params)
  }

  static delete = (url, params) => {
    return ApiHelper(`${endpoint}${url}&apiKey=${api_key}`, 'DELETE', params)
  }
}

export default Api;
