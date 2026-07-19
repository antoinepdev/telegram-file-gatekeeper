const env = process.env

export const ENV = {
	BOT_TOKEN: env.BOT_TOKEN,
	BOT_URL: env.BOT_URL,
	PRIVATE_GROUP_ID: env.PRIVATE_GROUP_ID,
}

export const ERROR = {
	TELEGRAM: {
		INVALID_LINK: 'Invalid link',
	},
}
