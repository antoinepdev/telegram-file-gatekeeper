import { bot } from "../bot.ts"
import { fileService } from "../services/fileService.ts"
import { ERROR } from "../config/constants.ts"
import { errorHandler } from "../middlewares/errorHandler.ts"
import { accessControlService } from "../services/accessControlService.ts"

async function sendFileHandler () {
  bot.command("start", async (ctx) => {
    try {
      const chat_id = ctx.chatId!
      const file_id = Number(ctx.match)
      if (isNaN(file_id) || file_id === 0) throw new Error (ERROR.TELEGRAM.INVALID_LINK)

      const user_id = ctx.from?.id!
      const dissatisfiedRequirements = await accessControlService.getDissatisfiedRequirements(user_id)
      if (dissatisfiedRequirements) throw new Error (ERROR.REQUIREMENTS.DISSATISFIED_REQUIREMENT)
      else  await fileService.sendFile(chat_id, file_id)
    }
    catch (error) {
      errorHandler(error, ctx)
    }
  })
}

export const fileController = {
  sendFileHandler,
}