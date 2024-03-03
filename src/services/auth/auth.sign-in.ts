import axiosClient from "../axios";
import SignInRequestDTO from "@/dtos/requests/auth/auth.sign-in.dto";
import UserCreateResponseDTO from "@/dtos/responses/user/user.create.response.dto";

export default async function signIn(
  dto: SignInRequestDTO
): Promise<UserCreateResponseDTO> {
  const response = await axiosClient.post("/login", { ...dto });
  const responseDTO: UserCreateResponseDTO = {
    data: response.data.data,
    token: response.data.token,
  };

  return responseDTO;
}
