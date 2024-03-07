import axios from "axios";

const AIAxiosClient = axios.create({
  baseURL: "http://localhost:5005",
});

export default AIAxiosClient;
