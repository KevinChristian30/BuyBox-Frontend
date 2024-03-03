import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://br5f7-7uaaa-aaaaa-qaaca-cai.localhost:4943",
});

export default axiosClient;
