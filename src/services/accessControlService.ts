import { REQUIREMENTS } from '../config/constants.ts'
import type { ICheckedRequirement, IRequirement } from '../entities/Requirement.ts'
import { telegramRepository } from '../repositories/telegramRepository.ts'

async function getDissatisfiedRequirements(userId: number): Promise<ICheckedRequirement[] | null> {
	const checkedRequirements = await checkRequeriments(userId)
	const dissatisfiedRequirements = checkedRequirements.filter((req) => req.isSatisfied === false)
	if (dissatisfiedRequirements.length === 0) return null
	return dissatisfiedRequirements
}

async function checkRequeriments(userId: number): Promise<ICheckedRequirement[]> {
	const checkedRequirementsArray: ICheckedRequirement[] = []

	for (const requirement of REQUIREMENTS) {
		if (requirement.type === 'telegram_channel') {
			const checkedRequirement = await validateTelegramRequirement(userId, requirement)
			checkedRequirementsArray.push(checkedRequirement)
		}
	}
	return checkedRequirementsArray
}

async function validateTelegramRequirement(userId: number, requirement: IRequirement): Promise<ICheckedRequirement> {
	const chatMember = telegramRepository.getChatMember(userId, requirement.id)
	const checkedRequirement: ICheckedRequirement = { ...requirement, isSatisfied: true }
	if ((await chatMember).status === 'left') {
		checkedRequirement.isSatisfied = false
	}
	return checkedRequirement
}

async function sendDissatisfiedRequirementsKeyboard(userId: number, dissatisfiedRequirements: IRequirement[], fileId: number) {
	await telegramRepository.sendRequirementsKeyboard(userId, dissatisfiedRequirements, fileId)
}

export const accessControlService = {
	getDissatisfiedRequirements,
	sendDissatisfiedRequirementsKeyboard,
}
