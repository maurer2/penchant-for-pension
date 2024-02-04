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
  const percentOfTotal =
    (totalContributionsAtChosenRetirementAge / totalContributionsAtDeath) * 100;
  const percentOfTotalFormatted = percentFormatter.format(percentOfTotal / 100);

  return (
    <div className="mb-8">
      <h2 className="mb-2 text-lg	font-bold">Pension pot comparison</h2>
      <p className="mb-2">
        By retiring at {retirementAge} your pension pot would contain {percentOfTotalFormatted} of the
        maximum possible pension that you would get when retiring at age {ageAtDeath}.
      </p>
      <div className="flex justify-between mb-1">
        <span className="text-base text-blue-700">
          Retire with {currencyFormatter.format(totalContributionsAtChosenRetirementAge / 100)}
        </span>
        <span className=" text-blue-700">{percentOfTotalFormatted}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentOfTotal}%` }}>
          <span className="sr-only">{percentOfTotal}%</span>
        </div>
      </div>
    </div>
  );
}
