import { REQUIREMENTS } from "../config/constants.ts"
import type { ICheckedRequirement, IRequirement } from "../entities/Requirement.ts"
import { telegramRepository } from "../repositories/telegramRepository.ts"

let dissatisfiedRequirements: ICheckedRequirement[]

async function getDissatisfiedRequirements (userId: number): Promise<ICheckedRequirement[] | null> {
    const checkedRequirements = await checkRequeriments(userId)
    dissatisfiedRequirements = checkedRequirements.filter(req => req.isSatisfied === false)
    if (dissatisfiedRequirements.length === 0) return null
    return dissatisfiedRequirements
}

async function checkRequeriments (userId: number): Promise<ICheckedRequirement[]> {
  const checkedRequirementsArray: ICheckedRequirement[] = []

  for (const requirement of REQUIREMENTS) {
    if (requirement.type === 'telegram_channel') {
      const checkedRequirement = await validateTelegramRequirement(userId, requirement)
      checkedRequirementsArray.push(checkedRequirement)
    }
  }
  return checkedRequirementsArray
}

async function validateTelegramRequirement (userId: number, requirement: IRequirement): Promise<ICheckedRequirement> {
  const chatMember = telegramRepository.getChatMember(userId, requirement.id)
  const checkedRequirement: ICheckedRequirement = { ...requirement, isSatisfied: true }
  if ((await chatMember).status === 'left') { checkedRequirement.isSatisfied = false }
  return checkedRequirement
}

export const accessControlService = {
  getDissatisfiedRequirements,
}