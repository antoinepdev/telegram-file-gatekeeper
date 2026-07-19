export interface IRequirement {
	id: string | number
	type: 'telegram_channel'
	target: string
}

export interface ICheckedRequirement extends IRequirement {
	isSatisfied: boolean
}
