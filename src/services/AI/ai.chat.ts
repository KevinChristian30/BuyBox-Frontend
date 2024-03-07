import ChatRequestDTO from "@/dtos/requests/chat/chat.request.dto";
import ChatResponseDTO from "@/dtos/responses/chat/chat.response.dto";
import AIAxiosClient from "../AIAxios";

export default async function chat(
  dto: ChatRequestDTO
): Promise<ChatResponseDTO[]> {
  try {
    const response = await AIAxiosClient.post("/webhooks/rest/webhook", {
      ...dto,
    });
    const dtos: ChatResponseDTO[] = response.data.map((message: any) => {
      return {
        recipient_id: message.recipient_id,
        text: message.text,
      };
    });
    return dtos;
  } catch (error) {
    return Promise.reject();
  }
}
