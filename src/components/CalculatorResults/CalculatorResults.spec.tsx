import type { ComponentPropsWithoutRef } from 'react';

import { expect, test } from '@playwright/experimental-ct-react';
import { mock } from 'node:test';

import CalculatorResults from './CalculatorResults';

test.describe('CalculatorResults', () => {
  test.beforeEach(async () => {
    mock.reset();
  });

  const propsDefault: ComponentPropsWithoutRef<typeof CalculatorResults> = {
    monthlyPension: 350000,
    monthlyPersonalContribution: 60000,
    monthlyEmployerContribution: 120000,
    retirementAge: 55,
  };

  test('renders', async ({ mount }) => {
    const component = await mount(<CalculatorResults {...propsDefault} />);

    await expect(component).not.toBeEmpty();
    await expect(component.getByTestId('current-pension-overview')).not.toBeEmpty();
    await expect(component.getByTestId('current-pension-to-max-pension')).not.toBeEmpty();
    await expect(component.getByTestId('current-depletion-of-pension-pot')).not.toBeEmpty();
  });
});
