import axios from 'axios';
import { showFlash } from '../utils/toast';

const axiosInstance = axios.create();

export const ApiHelper = (url, method, params) => axiosInstance({
  url,
  method,
  params
})
.catch(err => showFlash('error', err.response.data.message || 'Failed to fetch from API.'))