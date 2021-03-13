import { ApiHelper } from "./helper";

const endpoint = 'https://newsapi.org/v2/';
const api_key = '34f0df394b224a419797588079e6e8ef';

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
