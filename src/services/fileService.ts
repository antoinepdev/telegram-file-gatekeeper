import { ENV } from "../config/constants.ts"
import { telegramRepository } from "../repositories/telegramRepository.ts"

async function sendFile (destinataryId: number, message_id: number) {
  await telegramRepository.copyMessage(destinataryId, ENV.PRIVATE_GROUP_ID!, message_id)
}

export const fileService = {
  sendFile,
}
