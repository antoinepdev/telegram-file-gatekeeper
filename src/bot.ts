import { Bot } from "node-telegram-bot-api"
import { run } from "node-telegram-bot-api/node"
import { ENV } from "./config/constants.ts"

const bot = new Bot(ENV.BOT_TOKEN!)

await run(bot)