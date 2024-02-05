import type { ComponentPropsWithoutRef } from 'react';

import { expect, test } from '@playwright/experimental-ct-react';
import { mock } from 'node:test';

import CurrentPensionToMaxPension from './CurrentPensionToMaxPension';

const mocks = {
  onBlur: () => {},
  onChange: () => {},
};

test.describe('CurrentPensionToMaxPension', () => {
  // const onChangeSpy = mock.method(mocks, 'onChange', async () => {});
  // const onBlurSpy = mock.method(mocks, 'onBlur', async () => {});

  test.beforeEach(async () => {
    mock.reset();
  });

  const propsDefault: ComponentPropsWithoutRef<typeof CurrentPensionToMaxPension> = {
    totalContributionsAtChosenRetirementAge: 126000000,
    totalContributionsAtDeath: 168000000,
    retirementAge: 67,
  };

  test('renders', async ({ mount }) => {
    const component = await mount(<CurrentPensionToMaxPension {...propsDefault} />);

    await expect(component.getByRole('heading')).toContainText('Pension pot comparison');
    await expect(component.getByRole('paragraph')).not.toBeEmpty();
    await expect(component.getByTestId('current-pension-to-max-pension-meter')).not.toBeEmpty();
  });

  test('renders correct values for valid lower bound (26 years)', async ({ mount }) => {
    const props: typeof propsDefault = {
      totalContributionsAtChosenRetirementAge: 3000000,
      totalContributionsAtDeath: 168000000,
      retirementAge: 26,
    };
    const component = await mount(<CurrentPensionToMaxPension {...props} />);

    await expect(component.getByTestId('current-pension-to-max-pension-current-age')).toContainText(
      '26',
    );
    await expect(
      component.getByTestId('current-pension-to-max-pension-percent-of-total'),
    ).toContainText('1.79%');
    await expect(
      component.getByTestId('current-pension-to-max-pension-total-contributions'),
    ).toContainText('£1,680,000.00');
    await expect(
      component.getByTestId('current-pension-to-max-pension-age-of-death'),
    ).toContainText('81');
  });

  test('renders correct values for valid upper bound (81 years)', async ({ mount }) => {
    const props: typeof propsDefault = {
      totalContributionsAtChosenRetirementAge: 168000000,
      totalContributionsAtDeath: 168000000,
      retirementAge: 81,
    };
    const component = await mount(<CurrentPensionToMaxPension {...props} />);

    await expect(component.getByTestId('current-pension-to-max-pension-current-age')).toContainText(
      '81',
    );
    await expect(
      component.getByTestId('current-pension-to-max-pension-percent-of-total'),
    ).toContainText('100.00%');
    await expect(
      component.getByTestId('current-pension-to-max-pension-total-contributions'),
    ).toContainText('£1,680,000.00');
    await expect(
      component.getByTestId('current-pension-to-max-pension-age-of-death'),
    ).toContainText('81');
  });

  test('renders meter bar correctly', async ({ mount }) => {
    const component = await mount(<CurrentPensionToMaxPension {...propsDefault} />);

    await expect(component.getByTestId('current-pension-to-max-pension-meter-bar')).toHaveAttribute(
      'style',
      'width: 75%;',
    );
  });
});
