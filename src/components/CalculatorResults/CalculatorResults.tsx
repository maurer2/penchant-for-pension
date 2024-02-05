import type { PensionBaseParameters } from '@/types';
import { ageAtDeath, ageAtStartOfWorkLife } from '@/constants';

import CurrentPensionToMaxPension from '../CurrentPensionToMaxPension/CurrentPensionToMaxPension';
import CurrentPensionOverview from '../CurrentPensionOverview/CurrentPensionOverview';
import CurrentPensionDepletion from '../CurrentPensionDepletion/CurrentPensionDepletion';

type CalculatorResultsProps = PensionBaseParameters;

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
      <CurrentPensionOverview
        monthlyPension={monthlyPension}
        retirementAge={retirementAge}
        totalContributionsAtChosenRetirementAge={totalContributionsAtChosenRetirementAge}
        workLifeInYears={workLifeInYears}
      />

      <CurrentPensionToMaxPension
        totalContributionsAtChosenRetirementAge={totalContributionsAtChosenRetirementAge}
        totalContributionsAtDeath={totalContributionsAtDeath}
        retirementAge={retirementAge}
      />

      <CurrentPensionDepletion
        numberOfYearsUntilPensionPotIsDepleted={numberOfYearsUntilPensionPotIsDepleted}
        ageWhenPensionPotIsDepleted={ageWhenPensionPotIsDepleted}
      />
    </div>
  );
}
