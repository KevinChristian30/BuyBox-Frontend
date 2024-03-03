import AuthenticateResponseDTO from "@/dtos/responses/auth/auth.authenticate.dto";
import axiosClient from "../axios";

export default async function authenticate(): Promise<AuthenticateResponseDTO> {
  try {
    const response = await axiosClient.get("/authenticate");
    const responseDTO: AuthenticateResponseDTO = {
      token: response.data.token,
      user: response.data.user,
    };

    return responseDTO;
  } catch (error: any) {
    return Promise.reject();
  }
}
