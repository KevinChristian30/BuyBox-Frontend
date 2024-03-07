import axiosClient from "../axios";

export default async function checkout(): Promise<void> {
  try {
    await axiosClient.post("/order");
  } catch {
    return Promise.reject();
  }
}
