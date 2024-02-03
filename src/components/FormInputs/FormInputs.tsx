'use client'

import type { QueryParamsSchema } from '@/hooks/useQueryParamsState/schema';

type FormInputsProps = QueryParamsSchema & {
  dummy?: string;
};

export default function FormInputs({
  monthlyPension,
  monthlyPersonalContribution,
  monthlyEmployerContribution,
  retirementAge,
}: FormInputsProps) {
  return (
    <div>
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
    </div>
  );
}
