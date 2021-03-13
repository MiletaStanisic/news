import { ApiHelper } from "./helper";

const endpoint = 'https://newsapi.org/v2/';
const api_key = 'b43897046c7848e89621fe74c807854d';

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
