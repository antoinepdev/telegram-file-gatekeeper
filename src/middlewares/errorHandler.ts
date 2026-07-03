import type { Context } from "node-telegram-bot-api"
import { ERROR } from "../config/constants.ts"

export async function errorHandler (error: unknown, ctx: Context ): Promise<void> {
  if (error instanceof Error) {
    if (error.message === ERROR.TELEGRAM.INVALID_LINK) await ctx.reply('❌ Enlace inválido. Por favor, usa el enlace generado por el bot.')
    else {
      console.log(error.message)
      await ctx.reply('Error interno del servidor. Intenta más tarde.')
    }
  }
}