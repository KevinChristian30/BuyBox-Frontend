import UserResponseDTO from "./user.response.dto";

type UserCreateResponseDTO = {
  token: string;
  data: UserResponseDTO;
};

export default UserCreateResponseDTO;
