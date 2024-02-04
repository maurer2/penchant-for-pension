import { BaseParamNames } from './types';

export const baseParamsNames = [
  'monthlyPension',
  'monthlyPersonalContribution',
  'monthlyEmployerContribution',
  'retirementAge',
] as const;

export const baseParamsDefaults: Record<BaseParamNames, number> = {
  monthlyPension: 1_400_00,
  monthlyPersonalContribution: 1_000_00,
  monthlyEmployerContribution: 1_500_00,
  retirementAge: 26,
} as const;

export const ageAtStartOfWorkLife = 25;

export const ageAtDeath = 81;
