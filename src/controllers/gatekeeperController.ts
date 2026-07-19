import { accessControlService } from '../services/accessControlService.ts'

async function requirementsHandler(userId: number, fileId: number): Promise<boolean> {
	const dissatisfiedRequirements = await accessControlService.getDissatisfiedRequirements(userId)
	if (!dissatisfiedRequirements) return true

	await accessControlService.sendDissatisfiedRequirementsKeyboard(userId, dissatisfiedRequirements, fileId)
	return false
}

export const gatekeeperController = {
	requirementsHandler,
}
