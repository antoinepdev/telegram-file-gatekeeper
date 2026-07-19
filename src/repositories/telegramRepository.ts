import type { Context } from 'node-telegram-bot-api'
import { bot } from '../bot.ts'

async function copyMessage(toChatId: number, fromChatId: number | string, message_id: number) {
	await bot.api.copyMessage({ chat_id: toChatId, from_chat_id: fromChatId, message_id })
}

async function replyMessage(ctx: Context, message: string): Promise<void> {
	await ctx.reply(message)
}

export const telegramRepository = {
	copyMessage,
	replyMessage,
}
