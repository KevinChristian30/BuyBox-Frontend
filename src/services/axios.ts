import tokenKey from "@/utils/constants";
import axios from "axios";

function getTokenFromCookie(cookieName: string) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null;
}

const token = getTokenFromCookie(tokenKey);

const axiosClient = axios.create({
  baseURL: "http://br5f7-7uaaa-aaaaa-qaaca-cai.localhost:4943",
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});

export default axiosClient;
