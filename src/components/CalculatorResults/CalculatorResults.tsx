import type { PensionBaseParameters } from '@/types';

type CalculatorResultsProps = PensionBaseParameters;

const ageAtStartOfWorkLife = 25;
const ageAtDeath = 81;

const currencyFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

export default function CalculatorResults({
  monthlyPension,
  monthlyPersonalContribution,
  monthlyEmployerContribution,
  retirementAge,
}: CalculatorResultsProps) {
  const workLifeInYears = Math.max(0, retirementAge - ageAtStartOfWorkLife);
  const contributionsPerYear = monthlyPersonalContribution * 12 + monthlyEmployerContribution * 12;
  const totalContributionsAtChosenRetirementAge = contributionsPerYear * workLifeInYears;
  const numberOfYearsUntilPensionPotIsDepleted = Math.max(
    0,
    totalContributionsAtChosenRetirementAge / (12 * monthlyPension),
  );
  const ageWhenPensionPotIsDepleted = retirementAge + numberOfYearsUntilPensionPotIsDepleted;
  const totalContributionsAtDeath = contributionsPerYear * (ageAtDeath - ageAtStartOfWorkLife);

  return (
    <div>
      <dl className='grid grid-cols-2 mb-4'>
        <dt>Monthly pension you want to receive: </dt>
        <dd>{currencyFormatter.format(monthlyPension / 100)}</dd>
        <dt>Monthly personal contribution: </dt>
        <dd>{currencyFormatter.format(monthlyPersonalContribution / 100)}</dd>
        <dt>Monthly employer contribution: </dt>
        <dd>{currencyFormatter.format(monthlyEmployerContribution / 100)}</dd>
        <dt>Planned retirement age: </dt>
        <dd>{retirementAge}</dd>
      </dl>
      <dl className='grid grid-cols-2'>
        <dt>Work life in years: </dt>
        <dd>{workLifeInYears}</dd>
        <dt>Total contributions at chosen retirement age: </dt>
        <dd>{currencyFormatter.format(totalContributionsAtChosenRetirementAge / 100)}</dd>
        <dt>Potential total max contributions at {ageAtDeath}: </dt>
        <dd>{currencyFormatter.format(totalContributionsAtDeath / 100)}</dd>
        <dt>Years until the pension pot would run out after retirement: </dt>
        <dd>{numberOfYearsUntilPensionPotIsDepleted}</dd>
        <dt>Age when the pension pot would run out: </dt>
        <dd>{ageWhenPensionPotIsDepleted}</dd>
      </dl>
    </div>
  );
}
