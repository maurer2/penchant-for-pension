import { ageAtDeath } from '@/constants';
import { currencyFormatter } from '@/helpers/formatters/formatters';

type CurrentPensionOverviewProps = {
  totalContributionsAtChosenRetirementAge: number;
  retirementAge: number;
  workLifeInYears: number;
  monthlyPension: number;
};

export default function CurrentPensionOverview({
  workLifeInYears,
  totalContributionsAtChosenRetirementAge,
  retirementAge,
  monthlyPension,
}: CurrentPensionOverviewProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-lg	font-bold">Projected pension pot details</h2>
      <p className="mb-4">This is your potential pension pot.</p>
      <dl className="grid grid-cols-[repeat(1,1fr_min-content)] gap-4">
        <dt>Monthly pension you would receive:</dt>
        <dd className="text-right">{currencyFormatter.format(monthlyPension / 100)}</dd>
        <dt>Age at retirement:</dt>
        <dd className="text-right">{retirementAge}</dd>
        <dt>Number of years worked:</dt>
        <dd className="text-right">{Math.floor(workLifeInYears)}</dd>
        <dt>Life expectancy:</dt>
        <dd className="text-right">{ageAtDeath}</dd>
        <dt>Total contributions at retirement age:</dt>
        <dd className="text-right">
          {currencyFormatter.format(totalContributionsAtChosenRetirementAge / 100)}
        </dd>
      </dl>
    </div>
  );
}
