import { Bot } from 'node-telegram-bot-api'
import { run } from 'node-telegram-bot-api/node'
import { ENV } from './config/constants.ts'
import { fileController } from './controllers/fileController.ts'
import { privateGroupListener } from './listeners/privateGroupListener.ts'

export const bot = new Bot(ENV.BOT_TOKEN!)

fileController.sendFileHandler()

// listeners
bot.on('message', privateGroupListener)

await run(bot)
