import { Bot } from "node-telegram-bot-api"
import { run } from "node-telegram-bot-api/node"
import { ENV } from "./config/constants.ts"
import { fileController } from "./controllers/fileController.ts"
import { callbackController } from "./controllers/callbackController.ts"

export const bot = new Bot(ENV.BOT_TOKEN!)

fileController.sendFileHandler()
bot.on('callback_query', callbackController)

await run(bot)
