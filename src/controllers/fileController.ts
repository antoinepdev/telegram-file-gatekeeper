import { bot } from "../bot.ts"
import { fileService } from "../services/fileService.ts"
import { ERROR } from "../config/constants.ts"
import { errorHandler } from "../middlewares/errorHandler.ts"

async function sendFileHandler () {
  bot.command("start", async (ctx) => {
    try {
      const chat_id = ctx.chatId!
      const file_id = ctx.match
      if (typeof(file_id) !== 'string' || file_id === '') throw new Error (ERROR.TELEGRAM.INVALID_LINK)

      await fileService.sendFile(chat_id, file_id)
    }
    catch (error) {
      errorHandler(error, ctx)
    }
  })
}

export const fileController = {
  sendFileHandler,
}