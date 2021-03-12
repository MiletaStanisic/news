import axios from 'axios';

const axiosInstance = axios.create();

export const ApiHelper = (url, method, params) => axiosInstance({
  url,
  method,
  params
})
.catch(err => showFlash(err))

const showFlash = err => {
  console.log(err)
}