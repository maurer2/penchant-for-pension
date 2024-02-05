import { expect, test } from '@playwright/test';

import type { PensionBaseParameters } from '@/types';
import { pensionBaseParametersSchema } from './pensionBaseParameters';

test.describe('pensionBaseParametersSchema', () => {
  test('it should validate correct data', () => {
    const data: PensionBaseParameters = {
      monthlyPension: 100,
      monthlyPersonalContribution: 0,
      monthlyEmployerContribution: 0,
      retirementAge: 67,
    };
    expect(pensionBaseParametersSchema.safeParse(data).success).toBeTruthy();
  });

  test('it should not allow age below 25', () => {
    const data: PensionBaseParameters = {
      monthlyPension: 2_000_00,
      monthlyPersonalContribution: 1_000_00,
      monthlyEmployerContribution: 2_000_00,
      retirementAge: 24,
    };

    const parsingResult = pensionBaseParametersSchema.safeParse(data);
    expect(parsingResult.success).toBeFalsy();
    if (!parsingResult.success) {
      expect(parsingResult.error.message).toContain('You must be older than 24');
    }
  });

  test('it should not allow age over 81', () => {
    const data: PensionBaseParameters = {
      monthlyPension: 2_000_00,
      monthlyPersonalContribution: 1_000_00,
      monthlyEmployerContribution: 2_000_00,
      retirementAge: 82,
    };

    const parsingResult = pensionBaseParametersSchema.safeParse(data);
    expect(parsingResult.success).toBeFalsy();
    if (!parsingResult.success) {
      expect(parsingResult.error.message).toContain('You must not be older than 81');
    }
  });

  test('it should not allow monthlyPension of less than 100', () => {
    const data: PensionBaseParameters = {
      monthlyPension: 99,
      monthlyPersonalContribution: 1_000_00,
      monthlyEmployerContribution: 1_000_00,
      retirementAge: 55,
    };

    const parsingResult = pensionBaseParametersSchema.safeParse(data);
    expect(parsingResult.success).toBeFalsy();
    if (!parsingResult.success) {
      expect(parsingResult.error.message).toContain('Monthly pension must be more than 100');
    }
  });

  test('it should not allow negative monthlyPersonalContribution', () => {
    const data: PensionBaseParameters = {
      monthlyPension: 2_000_00,
      monthlyPersonalContribution: -1,
      monthlyEmployerContribution: 1_000_00,
      retirementAge: 55,
    };

    const parsingResult = pensionBaseParametersSchema.safeParse(data);
    expect(parsingResult.success).toBeFalsy();
    if (!parsingResult.success) {
      expect(parsingResult.error.message).toContain(
        'Monthly personal contribution must not be negative',
      );
    }
  });

  test('it should not allow negative monthlyEmployerContribution', () => {
    const data: PensionBaseParameters = {
      monthlyPension: 2_000_00,
      monthlyPersonalContribution: 1_000_00,
      monthlyEmployerContribution: -1,
      retirementAge: 55,
    };

    const parsingResult = pensionBaseParametersSchema.safeParse(data);
    expect(parsingResult.success).toBeFalsy();
    if (!parsingResult.success) {
      expect(parsingResult.error.message).toContain(
        'Monthly employer contribution must not be negative',
      );
    }
  });
});
