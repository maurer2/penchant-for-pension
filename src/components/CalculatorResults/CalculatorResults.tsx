import type { QueryParamsSchema } from '@/hooks/useQueryParamsState/schema';

type CalculatorResultsProps = QueryParamsSchema;

export default function CalculatorResults({
  monthlyPension,
  monthlyPersonalContribution,
  monthlyEmployerContribution,
  retirementAge,
}: CalculatorResultsProps) {
  return (
    <dl>
      <dt>Monthly pension</dt>
      <dd>{monthlyPension}</dd>
      <dt>Monthly personal contribution</dt>
      <dd>{monthlyPersonalContribution}</dd>
      <dt>Monthly employer contribution</dt>
      <dd>{monthlyEmployerContribution}</dd>
      <dt>Retirement age</dt>
      <dd>{retirementAge}</dd>
    </dl>
  );
}
