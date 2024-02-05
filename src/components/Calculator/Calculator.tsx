'use client';

import { useState, useCallback } from 'react';

import type { PensionBaseParameters } from '@/types';
import FormInputs from '@/components/FormInputs/FormInputs';
import CalculatorResults from '@/components/CalculatorResults/CalculatorResults';

type CalculatorProps = {
  baseParams: PensionBaseParameters;
};

export default function Calculator({ baseParams }: CalculatorProps) {
  const [pensionData, setPensionData] = useState<PensionBaseParameters>(() => ({
    ...baseParams,
  }));

  const updateQueryParams = (newFormData: PensionBaseParameters) => {
    const newQueryString = new URLSearchParams({
      monthlyPension: newFormData['monthlyPension'].toString(),
      monthlyPersonalContribution: newFormData['monthlyPersonalContribution'].toString(),
      monthlyEmployerContribution: newFormData['monthlyEmployerContribution'].toString(),
      retirementAge: newFormData['retirementAge'].toString(),
    });

    // store new data in query params
    window.history.pushState({}, '', window.location.pathname + '?' + newQueryString.toString());
  };

  const updatePensionData = useCallback((newPensionData: PensionBaseParameters) => {
    setPensionData(newPensionData);
    updateQueryParams(newPensionData);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <h1 className="col-span-full text-2xl font-bold">Pension calculator</h1>
      <FormInputs pensionData={pensionData} updatePensionData={updatePensionData} />
      <CalculatorResults {...pensionData} />
    </div>
  );
}
