type CurrentPensionOverviewProps = {
  totalContributionsAtChosenRetirementAge: number;
  retirementAge: number;
  workLifeInYears: number;
  monthlyPension: number;
};
import { ageAtDeath } from '@/constants';

const currencyFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

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
        <dt>Monthly pension you would receive: </dt>
        <dd>{currencyFormatter.format(monthlyPension / 100)}</dd>
        <dt>Planned retirement age: </dt>
        <dd>{retirementAge}</dd>
        <dt>Life expectancy: </dt>
        <dd>{ageAtDeath}</dd>
        <dt>Work life in years: </dt>
        <dd>{Math.floor(workLifeInYears)}</dd>
        <dt>Total contributions at chosen retirement age: </dt>
        <dd>{currencyFormatter.format(totalContributionsAtChosenRetirementAge / 100)}</dd>
      </dl>
    </div>
  );
}
