import { InlineKeyboardBuilder, type ChatMember, type Context } from "node-telegram-bot-api"
import { bot } from "../bot.ts"
import type { IRequirement } from "../entities/Requirement.ts"
import { ENV } from "../config/constants.ts"

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

async function sendRequirementsKeyboard (chatId: number, requirements: IRequirement[]) {
  const urls = requirements.map(req => req.target)
  const inlineKeyboard = new InlineKeyboardBuilder()
  urls.forEach((urls, index) => inlineKeyboard.row().url(`Canal ${index + 1}`, urls))
  inlineKeyboard.row().text('✨ Comprobar', 'requirements')

  await bot.api.sendMessage({
     chat_id: chatId,
     text: ENV.REQUIREMENT_KEYBOARD_PROMPT!,
     reply_markup: inlineKeyboard.build(),
});
}

export const telegramRepository = {
  copyMessage,
  replyMessage,
  getChatMember,
  sendRequirementsKeyboard,
}