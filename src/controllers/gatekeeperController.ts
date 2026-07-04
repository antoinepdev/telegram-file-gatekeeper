import { accessControlService } from "../services/accessControlService.ts"

async function requirementsHandler (userId: number): Promise<boolean> {
  const dissatisfiedRequirements = await accessControlService.getDissatisfiedRequirements(userId)
  if (!dissatisfiedRequirements) return true

  return false
}

export const gatekeeperController = {
  requirementsHandler,
}
