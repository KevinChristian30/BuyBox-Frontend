import SignInResponseDTO from "@/dtos/responses/auth/auth.sign-in.dto";
import axiosClient from "../axios";
import SignInRequestDTO from "@/dtos/requests/auth/auth.sign-in.dto";

export default async function signIn(
  dto: SignInRequestDTO
): Promise<SignInResponseDTO> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const response = axiosClient.post("/sign-in", { ...dto });
  const responseDTO: SignInResponseDTO = {
    token: "randomToken",
  };
  return responseDTO;
}
