import UserCreateRequestDTO from "@/dtos/requests/users/user.create.dto";
import axiosClient from "../axios";
import UserCreateResponseDTO from "@/dtos/responses/user/user.create.response.dto";

export default async function createUser(
  dto: UserCreateRequestDTO
): Promise<UserCreateResponseDTO> {
  try {
    const response = await axiosClient.post("/register", { ...dto });
    const responseDTO: UserCreateResponseDTO = {
      data: response.data.data,
      token: response.data.token,
    };

    return responseDTO;
  } catch (error) {
    return Promise.reject();
  }
}
