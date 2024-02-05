import { ageAtDeath } from '@/constants';

import { percentFormatter, currencyFormatter } from '@/helpers/formatters/formatters';

type CurrentPensionToMaxPensionProps = {
  totalContributionsAtChosenRetirementAge: number;
  totalContributionsAtDeath: number;
  retirementAge: number;
};

export default function CurrentPensionToMaxPension({
  totalContributionsAtChosenRetirementAge,
  totalContributionsAtDeath,
  retirementAge,
}: CurrentPensionToMaxPensionProps) {
  const percentOfTotal = (totalContributionsAtChosenRetirementAge
  / totalContributionsAtDeath) * 100;
  const percentOfTotalFormatted = percentFormatter.format(percentOfTotal / 100);

  return (
    <section className="mb-8" data-testid="current-pension-to-max-pension">
      <h2 className="mb-4 text-lg font-bold">Pension pot comparison</h2>
      <p className="mb-4">
        When retiring at age
        {' '}
        <span data-testid="current-pension-to-max-pension-current-age">{retirementAge}</span>
        {' '}
        your pension pot would contain
        {' '}
        <span data-testid="current-pension-to-max-pension-percent-of-total">
          {percentOfTotalFormatted}
        </span>
        {' '}
        of the maximum possible pension of
        {' '}
        <span data-testid="current-pension-to-max-pension-total-contributions">
          {currencyFormatter.format(totalContributionsAtDeath / 100)}
        </span>
        {' '}
        that you would get when retiring at age
        {' '}
        <span data-testid="current-pension-to-max-pension-age-of-death">{ageAtDeath}</span>
        .
      </p>
      <div className="flex justify-between mb-4" data-testid="current-pension-to-max-pension-meter">
        <span className="text-base text-blue-700">
          Retire with
          {' '}
          {currencyFormatter.format(totalContributionsAtChosenRetirementAge / 100)}
        </span>
        <span className=" text-blue-700">{percentOfTotalFormatted}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentOfTotal}%` }}
          data-testid="current-pension-to-max-pension-meter-bar"
        >
          <span className="sr-only">
            {percentOfTotal}
            %
          </span>
        </div>
      </div>
    </section>
  );
}
