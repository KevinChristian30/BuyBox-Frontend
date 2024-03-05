"use client";

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

const axiosClient = axios.create({
  baseURL: "http://by6od-j4aaa-aaaaa-qaadq-cai.localhost:4943",
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromCookie(tokenKey);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
