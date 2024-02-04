'use client';

import { useState, useCallback } from 'react';

import type { QueryParamsSchema } from '@/hooks/useQueryParamsState/schema';
import FormInputs from '@/components/FormInputs/FormInputs';
import CalculatorResults from '@/components/CalculatorResults/CalculatorResults';

type CalculatorProps = QueryParamsSchema;

export default function Calculator({
  monthlyPension,
  monthlyPersonalContribution,
  monthlyEmployerContribution,
  retirementAge,
}: CalculatorProps) {
  const [pensionData, setPensionData] = useState<QueryParamsSchema>(() => ({
    monthlyPension,
    monthlyPersonalContribution,
    monthlyEmployerContribution,
    retirementAge,
  })); // todo replace with useReducer

  const updateQueryParams = (newFormData: QueryParamsSchema) => {
    const newQueryString = new URLSearchParams({
      monthlyPension: newFormData['monthlyPension'].toString(),
      monthlyPersonalContribution: newFormData['monthlyPersonalContribution'].toString(),
      monthlyEmployerContribution: newFormData['monthlyEmployerContribution'].toString(),
      retirementAge: newFormData['retirementAge'].toString(),
    });

    // store new data in query params
    window.history.pushState({}, '', window.location.pathname + '?' + newQueryString.toString());
  };

  const updatePensionData = useCallback((newPensionData: QueryParamsSchema) => {
    setPensionData(newPensionData);
    updateQueryParams(newPensionData)
  }, []);

  return (
    <div>
      <FormInputs {...pensionData} updatePensionData={updatePensionData} />
      <CalculatorResults {...pensionData} />
    </div>
  );
}
