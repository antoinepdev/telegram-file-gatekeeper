import { accessControlService } from "../services/accessControlService.ts"

async function requirementsHandler (userId: number): Promise<boolean> {
  const dissatisfiedRequirements = await accessControlService.getDissatisfiedRequirements(userId)
  if (!dissatisfiedRequirements) return true

  await accessControlService.sendDissatisfiedRequirementsKeyboard(userId, dissatisfiedRequirements)
  return false
}

export const gatekeeperController = {
  requirementsHandler,
}
