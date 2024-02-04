import { QueryParamNames } from './types';

export const queryParamNames = [
  'monthlyPension',
  'monthlyPersonalContribution',
  'monthlyEmployerContribution',
  'retirementAge',
] as const;

export const queryParamDefaults: Record<QueryParamNames, number> = {
  monthlyPension: 1_400_00,
  monthlyPersonalContribution: 1_000_00,
  monthlyEmployerContribution: 1_500_00,
  retirementAge: 26,
} as const;
