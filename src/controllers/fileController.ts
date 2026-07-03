import { bot } from "../bot.ts"
import { fileService } from "./fileService.ts"

async function sendFileHandler () {
  bot.command("start", async (ctx) => {
    const chat_id = ctx.chatId!
    const file_id = ctx.match

    await fileService.sendFile(chat_id, file_id)
  })
}

export const fileController = {
  sendFileHandler,
}