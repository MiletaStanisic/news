import { ApiHelper } from "./helper";

const endpoint = process.env.REACT_APP_ENDPOINT;
const api_key = process.env.REACT_APP_API_KEY;
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
