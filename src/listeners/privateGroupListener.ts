import type { Context } from 'node-telegram-bot-api'
import { ENV } from '../config/constants.ts'
import { fileController } from '../controllers/fileController.ts'

export async function privateGroupListener(ctx: Context) {
	if (ctx.chatId != ENV.PRIVATE_GROUP_ID) return
	await fileController.sendFileIdHandler(ctx)
}
