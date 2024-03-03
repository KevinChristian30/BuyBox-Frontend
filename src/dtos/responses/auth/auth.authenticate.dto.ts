import UserResponseDTO from "../user/user.response.dto";

type TokenResponseDTO = {
  token: string;
  user_id: string;
  expiration: number;
};

type AuthenticateResponseDTO = {
  token: TokenResponseDTO;
  user: UserResponseDTO;
};

export default AuthenticateResponseDTO;
