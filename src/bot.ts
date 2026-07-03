import { Bot } from "node-telegram-bot-api"
import { run } from "node-telegram-bot-api/node"
import { ENV } from "./config/constants.ts"
import { fileController } from "./controllers/fileController.ts"

export const bot = new Bot(ENV.BOT_TOKEN!)

fileController.sendFileHandler()

await run(bot)
