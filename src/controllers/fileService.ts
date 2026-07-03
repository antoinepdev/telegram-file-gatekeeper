import { bot } from "../bot.ts"
import { ENV } from "../config/constants.ts"

async function sendFile (destinataryId: number, message_id: number) {
  await bot.api.copyMessage({chat_id: destinataryId, from_chat_id: ENV.PRIVATE_GROUP_ID!, message_id})
}

export const fileService = {
  sendFile,
}
