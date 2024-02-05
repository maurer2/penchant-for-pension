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
    <section className="mb-8">
      <h2 className="mb-4 text-lg	font-bold">Projected pension pot details</h2>
      <p className="mb-4">This is your potential pension pot.</p>
      <dl className="grid grid-cols-[repeat(1,1fr_min-content)] gap-4" role="list">
        <dt>Monthly pension you would receive:</dt>
        <dd className="text-right" data-testid="current-pension-overview-monthly-pension">
          {currencyFormatter.format(monthlyPension / 100)}
        </dd>
        <dt>Age at retirement:</dt>
        <dd className="text-right" data-testid="current-pension-overview-retirement-age">
          {retirementAge}
        </dd>
        <dt>Number of years worked:</dt>
        <dd className="text-right" data-testid="current-pension-overview-work-life">
          {Math.floor(workLifeInYears)}
        </dd>
        <dt>Life expectancy:</dt>
        <dd className="text-right" data-testid="current-pension-overview-age-at-death">
          {ageAtDeath}
        </dd>
        <dt>Total contributions at retirement age:</dt>
        <dd className="text-right" data-testid="current-pension-overview-total-contributions">
          {currencyFormatter.format(totalContributionsAtChosenRetirementAge / 100)}
        </dd>
      </dl>
    </section>
  );
}
