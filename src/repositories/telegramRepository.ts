import type { ChatMember, Context } from "node-telegram-bot-api"
import { bot } from "../bot.ts"

async function copyMessage (toChatId: number, fromChatId: number | string, message_id: number) {
  await bot.api.copyMessage( { chat_id: toChatId, from_chat_id: fromChatId, message_id } )
}

async function replyMessage (ctx: Context, message: string): Promise<void> {
  await ctx.reply(message)
}

async function getChatMember (userId: number, chatId: number | string): Promise<ChatMember> {
  const chatMember: ChatMember = await bot.api.getChatMember({user_id: userId, chat_id: chatId})
  return chatMember
}

export const telegramRepository = {
  copyMessage,
  replyMessage,
  getChatMember,
}