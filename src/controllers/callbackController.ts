import type { Context } from 'node-telegram-bot-api'
import { CALLBACK_DATA } from '../config/constants.ts'
import { telegramRepository } from '../repositories/telegramRepository.ts'
import { fileService } from '../services/fileService.ts'
import { gatekeeperController } from './gatekeeperController.ts'

export async function callbackController(ctx: Context) {
	const callbackData = ctx.callbackQuery?.data!
	if (callbackData.startsWith(CALLBACK_DATA.REQUIREMENT_KEYBOARD_CHECK)) {
		const fileId = Number(callbackData.split(CALLBACK_DATA.REQUIREMENT_KEYBOARD_CHECK)[1])
		const userId = ctx.from?.id!
		await telegramRepository.deleteMessage(userId, ctx.callbackQuery?.message?.message_id!)
		const hasAccess: boolean = await gatekeeperController.requirementsHandler(userId, fileId)
		if (hasAccess) await fileService.sendFile(userId, fileId)
	}
	return
}
