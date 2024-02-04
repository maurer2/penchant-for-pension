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
      <h2 className="mb-2">Projected pension pot</h2>
      <p className="mb-2">This is your potential pension pot:</p>
      <dl className="flex flex-col">
        <dt className="mb-1 font-semibold">Monthly pension you would receive: </dt>
        <dd>{currencyFormatter.format(monthlyPension / 100)}</dd>
        <dt className="mb-1 font-semibold">Planned retirement age: </dt>
        <dd>{retirementAge}</dd>
        <dt className="mb-1 font-semibold">Probable age at death: </dt>
        <dd>{ageAtDeath}</dd>
        <dt className="mb-1 font-semibold">Work life in years: </dt>
        <dd>{Math.floor(workLifeInYears)}</dd>
        <dt className="mb-1 font-semibold">Total contributions at chosen retirement age: </dt>
        <dd>{currencyFormatter.format(totalContributionsAtChosenRetirementAge / 100)}</dd>
      </dl>
    </div>
  );
}
