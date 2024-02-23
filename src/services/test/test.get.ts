import TestResponseDTO from "@/dtos/responses/test/test.response.dto";
import axiosClient from "../axios";

export const getTest = async (): Promise<TestResponseDTO> => {
  try {
    const response = await axiosClient.get("/todos/1");
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
