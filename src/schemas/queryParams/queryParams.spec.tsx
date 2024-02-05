import { expect, test } from '@playwright/test';

import type { QueryParamsSchemaStringified } from '@/types';
import { queryParamSchema } from './queryParams';

test.describe('queryParamSchema', () => {
  test('it should validate correct data', () => {
    const data: QueryParamsSchemaStringified = {
      monthlyPension: '100',
      monthlyPersonalContribution: '0',
      monthlyEmployerContribution: '0',
      retirementAge: '55',
    };
    expect(queryParamSchema.safeParse(data).success).toBeTruthy();
  });

  test('it should not allow age below 25', () => {
    const data: QueryParamsSchemaStringified = {
      monthlyPension: '2_000_00',
      monthlyPersonalContribution: '1_000_00',
      monthlyEmployerContribution: '2_000_00,',
      retirementAge: '24',
    };

    expect(queryParamSchema.safeParse(data).success).toBeFalsy();
  });

  test('it should not allow age over 81', () => {
    const data: QueryParamsSchemaStringified = {
      monthlyPension: '2_000_00',
      monthlyPersonalContribution: '1_000_00',
      monthlyEmployerContribution: '2_000_00',
      retirementAge: '82',
    };

    expect(queryParamSchema.safeParse(data).success).toBeFalsy();
  });

  test('it should not allow monthlyPension of less than 100', () => {
    const data: QueryParamsSchemaStringified = {
      monthlyPension: '99',
      monthlyPersonalContribution: '1_000_00',
      monthlyEmployerContribution: '2_000_00',
      retirementAge: '82',
    };

    expect(queryParamSchema.safeParse(data).success).toBeFalsy();
  });

  test('it should not allow negative monthlyPersonalContribution', () => {
    const data: QueryParamsSchemaStringified = {
      monthlyPension: '99',
      monthlyPersonalContribution: '-1',
      monthlyEmployerContribution: '2_000_00',
      retirementAge: '82',
    };

    expect(queryParamSchema.safeParse(data).success).toBeFalsy();
  });

  test('it should not allow negative monthlyEmployerContribution', () => {
    const data: QueryParamsSchemaStringified = {
      monthlyPension: '99',
      monthlyPersonalContribution: '2_000_00',
      monthlyEmployerContribution: '-1',
      retirementAge: '82',
    };

    expect(queryParamSchema.safeParse(data).success).toBeFalsy();
  });
});
