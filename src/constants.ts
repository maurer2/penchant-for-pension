import { BaseParamNames } from './types';

export const baseParamsNames = [
  'monthlyPension',
  'monthlyPersonalContribution',
  'monthlyEmployerContribution',
  'retirementAge',
] as const;

export const baseParamsDefaults: Record<BaseParamNames, number> = {
  monthlyPension: 1_500_00,
  monthlyPersonalContribution: 600_00,
  monthlyEmployerContribution: 1_200_00,
  retirementAge: 55,
} as const;

export const ageAtStartOfWorkLife = 25;

export const ageAtDeath = 81;
