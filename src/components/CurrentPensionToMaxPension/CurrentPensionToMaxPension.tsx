type CurrentPensionToMaxPensionProps = {
  totalContributionsAtChosenRetirementAge: number;
  totalContributionsAtDeath: number;
  retirementAge: number;
};

const percentFormatter = new Intl.NumberFormat('en-GB', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

import { ageAtDeath, ageAtStartOfWorkLife } from '@/constants';

export default function CurrentPensionToMaxPension({
  totalContributionsAtChosenRetirementAge,
  totalContributionsAtDeath,
  retirementAge,
}: CurrentPensionToMaxPensionProps) {
  const percentOfTotal =
    (totalContributionsAtChosenRetirementAge / totalContributionsAtDeath) * 100;
  const percentOfTotalFormatted = percentFormatter.format(percentOfTotal / 100);

  return (
    <div>
      <h2 className="mb-2">Pension pot comparison</h2>
      <p className="mb-2">
        By retiring at {retirementAge} your pension pot would be {percentOfTotalFormatted} of the
        maximum possible pension (age {ageAtDeath}).
      </p>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Retirement at {retirementAge}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {percentOfTotalFormatted}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentOfTotal}%` }}
        ></div>
      </div>
    </div>
  );
}
