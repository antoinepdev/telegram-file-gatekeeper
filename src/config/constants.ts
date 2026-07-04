import type { IRequirement } from "../entities/Requirement.ts"

const env = process.env

export const ENV = {
  BOT_TOKEN : env.BOT_TOKEN,
  PRIVATE_GROUP_ID : env.PRIVATE_GROUP_ID,
  REQUIREMENT_ID: env.REQUIREMENT_ID,
  REQUIREMENT_TARGET: env.REQUIREMENT_TARGET,
}

export const ERROR = {
  TELEGRAM: {
    INVALID_LINK: 'Invalid link'
  }
}

export const REQUIREMENTS: IRequirement[] = [
  {
    id: ENV.REQUIREMENT_ID!,
    type: 'telegram_channel',
    target: ENV.REQUIREMENT_TARGET!,
  }
]
