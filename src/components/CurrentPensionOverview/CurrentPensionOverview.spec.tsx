import type { ComponentPropsWithoutRef } from 'react';

import { expect, test } from '@playwright/experimental-ct-react';

import CurrentPensionOverview from './CurrentPensionOverview';

test.describe('CurrentPensionOverview', () => {
  const propsDefault: ComponentPropsWithoutRef<typeof CurrentPensionOverview> = {
    workLifeInYears: 30,
    totalContributionsAtChosenRetirementAge: 64800000,
    retirementAge: 55,
    monthlyPension: 150000,
  };

  test('renders', async ({ mount }) => {
    const component = await mount(<CurrentPensionOverview {...propsDefault} />);

    await expect(component.getByRole('heading')).toContainText('Projected pension pot details');
    await expect(component.getByRole('paragraph')).not.toBeEmpty();
    await expect(component.getByRole('list')).not.toBeEmpty();
  });

  test('renders correct overview for valid lower bound (26 years)', async ({ mount }) => {
    const props: typeof propsDefault = {
      workLifeInYears: 1,
      totalContributionsAtChosenRetirementAge: 2160000,
      retirementAge: 26,
      monthlyPension: 150000,
    };
    const component = await mount(<CurrentPensionOverview {...props} />);

    await expect(component.getByTestId('current-pension-overview-monthly-pension')).toContainText(
      '£1,500.00',
    );

    await expect(component.getByTestId('current-pension-overview-monthly-pension')).toContainText(
      '£1,500.00',
    );
    await expect(component.getByTestId('current-pension-overview-retirement-age')).toContainText(
      '26',
    );
    await expect(component.getByTestId('current-pension-overview-age-at-death')).toContainText(
      '81',
    );
    await expect(
      component.getByTestId('current-pension-overview-total-contributions'),
    ).toContainText('£21,600.00');
  });

  test('renders correct values for valid upper bound (81 years)', async ({ mount }) => {
    const props: typeof propsDefault = {
      workLifeInYears: 56,
      totalContributionsAtChosenRetirementAge: 120960000,
      retirementAge: 81,
      monthlyPension: 150000,
    };
    const component = await mount(<CurrentPensionOverview {...props} />);

    await expect(component.getByTestId('current-pension-overview-monthly-pension')).toContainText(
      '£1,500.00',
    );

    await expect(component.getByTestId('current-pension-overview-monthly-pension')).toContainText(
      '£1,500.00',
    );
    await expect(component.getByTestId('current-pension-overview-retirement-age')).toContainText(
      '81',
    );
    await expect(component.getByTestId('current-pension-overview-age-at-death')).toContainText(
      '81',
    );
    await expect(
      component.getByTestId('current-pension-overview-total-contributions'),
    ).toContainText('£1,209,600.00');
  });
});
