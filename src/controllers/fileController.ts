import type { Context } from 'node-telegram-bot-api'
import { bot } from '../bot.ts'
import { ERROR } from '../config/constants.ts'
import { errorHandler } from '../middlewares/errorHandler.ts'
import { fileService } from '../services/fileService.ts'

async function sendFileHandler() {
	bot.command('start', async (ctx) => {
		try {
			const chat_id = ctx.chatId!
			const file_id = Number(ctx.match)
			if (Number.isNaN(file_id) || file_id === 0)
				throw new Error(ERROR.TELEGRAM.INVALID_LINK)

			await fileService.sendFile(chat_id, file_id)
		} catch (error) {
			errorHandler(error, ctx)
		}
	})
}

async function sendFileIdHandler(ctx: Context) {
	try {
		if (!ctx.message?.video && !ctx.message?.document) return

		await fileService.sendFileId(ctx)
	} catch (error) {
		errorHandler(error, ctx)
	}
}

export const fileController = {
	sendFileHandler,
	sendFileIdHandler,
}
