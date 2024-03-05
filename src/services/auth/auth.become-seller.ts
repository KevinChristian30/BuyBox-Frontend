import axiosClient from "../axios";

export default async function becomeSeller(): Promise<void> {
  try {
    await axiosClient.post("/become-seller");
  } catch (error: any) {
    return Promise.reject();
  }
}
