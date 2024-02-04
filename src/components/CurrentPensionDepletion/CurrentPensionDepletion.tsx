type CurrentPensionDepletionProps = {
  numberOfYearsUntilPensionPotIsDepleted: number;
  ageWhenPensionPotIsDepleted: number;
  retirementAge: number;
};

import { ageAtDeath } from '@/constants';

const yearFormatter = new Intl.NumberFormat('en-GB', {
  style: 'unit',
  unit: 'year',
  unitDisplay: 'long',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function CurrentPensionDepletion({
  numberOfYearsUntilPensionPotIsDepleted,
  ageWhenPensionPotIsDepleted,
  retirementAge,
}: CurrentPensionDepletionProps) {
  const numberOfYearsUntilPensionPotIsDepletedFormatted = yearFormatter.format(
    numberOfYearsUntilPensionPotIsDepleted,
  );
  const remainingYearsAfterDepletion = ageAtDeath - ageWhenPensionPotIsDepleted;
  const remainingYearsAfterDepletionFormatted = yearFormatter.format(remainingYearsAfterDepletion);

  return (
    <div>
      <h2 className="mb-4 text-lg	font-bold">Depletion of pension pot</h2>
      <p className="mb-4">
        Your potential pension pot would run out in{' '}
        {numberOfYearsUntilPensionPotIsDepletedFormatted} after retirement.
      </p>
      {remainingYearsAfterDepletion > 0 ? (
        <div
          className="flex items-center p-4 text-red-800 border border-red-300 rounded-lg bg-red-50"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Warning</span>
          <div>
            <span>Warning!</span> Your potential pension pot would get
            depleted before the end of your life. You would probably need to go back to work for {' '}
            {remainingYearsAfterDepletionFormatted}.
          </div>
        </div>
      ) : (
        <div
          className="flex items-center p-4 text-green-800 border border-green-300 rounded-lg bg-green-50"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Nice</span>
          <div>
            <span>Nice!</span> Your potential pension pot would not get
            depleted before the end of your life.
          </div>
        </div>
      )}
      {/* <dl className="grid grid-cols-2">
        <dt>Years until the pension pot would run out after retirement: </dt>
        <dd>{numberOfYearsUntilPensionPotIsDepleted}</dd>
        <dt>Age when the pension pot would run out: </dt>
        <dd>{ageWhenPensionPotIsDepleted}</dd>
      </dl> */}
    </div>
  );
}
