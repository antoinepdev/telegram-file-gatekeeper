import type { IRequirement } from '../entities/Requirement.ts'

const env = process.env

export const ENV = {
	BOT_TOKEN: env.BOT_TOKEN,
	BOT_URL: env.BOT_URL,
	PRIVATE_GROUP_ID: env.PRIVATE_GROUP_ID,
	REQUIREMENT_ID_1: env.REQUIREMENT_ID_1,
	REQUIREMENT_TARGET_1: env.REQUIREMENT_TARGET_1,
	REQUIREMENT_KEYBOARD_PROMPT: env.REQUIREMENT_KEYBOARD_PROMPT,
}

export const ERROR = {
	TELEGRAM: {
		INVALID_LINK: 'Invalid link',
		USER_BLOCKS_BOT: 'bot was blocked by the user',
	},
}

export const CALLBACK_DATA = {
	REQUIREMENT_KEYBOARD_CHECK: 'REQUIREMENT_KEYBOARD_CHECK',
}

export const REQUIREMENTS: IRequirement[] = [
	{
		id: ENV.REQUIREMENT_ID_1!,
		type: 'telegram_channel',
		target: ENV.REQUIREMENT_TARGET_1!,
	},
]
