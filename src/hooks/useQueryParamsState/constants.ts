import { QueryParamNames } from './types';

export const queryParamNames = [
  'monthlyPension',
  'monthlyPersonalContribution',
  'monthlyEmployerContribution',
  'retirementAge',
] as const;

export const queryParamDefaults: Record<QueryParamNames, number> = {
  monthlyPension: 100,
  monthlyPersonalContribution: 200,
  monthlyEmployerContribution: 300,
  retirementAge: 400,
} as const;


export const queryParamDefaults2: Record<QueryParamNames, string> = {
  monthlyPension: '100',
  monthlyPersonalContribution: '200',
  monthlyEmployerContribution: '300',
  retirementAge: '400',
} as const;
