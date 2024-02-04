const locale = 'en-GB';

export const percentFormatter = new Intl.NumberFormat(locale, {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const currencyFormatter = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: 'GBP',
});

export const yearFormatter = new Intl.NumberFormat(locale, {
  style: 'unit',
  unit: 'year',
  unitDisplay: 'long',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
