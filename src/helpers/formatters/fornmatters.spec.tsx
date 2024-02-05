import { expect, test } from '@playwright/test';

import { percentFormatter, currencyFormatter, yearFormatter } from './formatters';

test.describe('Formatters', () => {
  test('percentFormatter', ({}) => {
    expect(percentFormatter.format(0.5)).toEqual('50.00%');
  });

  test('currencyFormatter', ({}) => {
    expect(currencyFormatter.format(5000.50)).toEqual('£5,000.50');
    expect(currencyFormatter.format(5_000.50)).toEqual('£5,000.50');
  });

  test('yearFormatter', ({}) => {
    expect(yearFormatter.format(55.2)).toEqual('55.20 years');
  });
});
