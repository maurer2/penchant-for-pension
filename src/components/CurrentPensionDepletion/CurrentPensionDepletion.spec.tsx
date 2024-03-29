import type { ComponentPropsWithoutRef } from 'react';

import { expect, test } from '@playwright/experimental-ct-react';

import CurrentPensionDepletion from './CurrentPensionDepletion';

test.describe('CurrentPensionDepletion', () => {
  const propsDefault: ComponentPropsWithoutRef<typeof CurrentPensionDepletion> = {
    numberOfYearsUntilPensionPotIsDepleted: 15,
    ageWhenPensionPotIsDepleted: 70,
  };

  test('renders', async ({ mount }) => {
    const component = await mount(<CurrentPensionDepletion {...propsDefault} />);

    await expect(component.getByRole('heading')).toContainText('Depletion of pension pot');
    await expect(component.getByRole('paragraph')).not.toBeEmpty();
    await expect(component.getByRole('alert')).not.toBeEmpty();
  });

  test('renders info box when pension pot is not going to deplete before death', async ({
    mount,
  }) => {
    const props: typeof propsDefault = {
      numberOfYearsUntilPensionPotIsDepleted: 15,
      ageWhenPensionPotIsDepleted: 90,
    };
    const component = await mount(<CurrentPensionDepletion {...props} />);

    await expect(component.getByRole('alert')).toContainText(/Info/i);
  });

  test('renders warning box when pension pot is going to deplete before death', async ({
    mount,
  }) => {
    const props: typeof propsDefault = {
      numberOfYearsUntilPensionPotIsDepleted: 15,
      ageWhenPensionPotIsDepleted: 50,
    };
    const component = await mount(<CurrentPensionDepletion {...props} />);

    await expect(component.getByRole('alert')).toContainText(/Warning/i);
  });
});
