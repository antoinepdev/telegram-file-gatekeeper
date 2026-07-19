import type { Context } from 'node-telegram-bot-api'
import { ENV } from '../config/constants.ts'
import { telegramRepository } from '../repositories/telegramRepository.ts'

async function sendFile(destinataryId: number, message_id: number) {
	await telegramRepository.copyMessage(destinataryId, ENV.PRIVATE_GROUP_ID!, message_id)
}

async function sendFileId(ctx: Context) {
	const fileId = ctx.message?.message_id
	const fileLink = `${ENV.BOT_URL}?start=${fileId}`
	await telegramRepository.replyMessage(ctx, fileLink)
}

export const fileService = {
	sendFile,
	sendFileId,
}
