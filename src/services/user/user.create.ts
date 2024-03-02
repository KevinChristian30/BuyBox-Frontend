import UserCreateRequestDTO from "@/dtos/requests/users/user.create.dto";
import axiosClient from "../axios";

export default async function createUser(dto: UserCreateRequestDTO): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Promise.resolve();
  try {
    const data = await axiosClient.post("/users", { ...dto });
    console.log(data);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
}
