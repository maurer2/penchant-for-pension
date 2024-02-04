'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import type { PensionBaseParameters } from '@/types';
import FormInputs from '@/components/FormInputs/FormInputs';
import CalculatorResults from '@/components/CalculatorResults/CalculatorResults';

type CalculatorProps = {
  baseParams: PensionBaseParameters;
}

export default function Calculator({
  baseParams,
}: CalculatorProps) {
  const [pensionData, setPensionData] = useState<PensionBaseParameters>(() => ({
    ...baseParams,
  }));
  const router = useRouter();

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

  const resetPage = () => {
    router.push('/');
    router.refresh();
  };

  const updatePensionData = useCallback((newPensionData: PensionBaseParameters) => {
    setPensionData(newPensionData);
    updateQueryParams(newPensionData);
  }, []);

  return (
    <div className='grid grid-cols-2 gap-4'>
      <FormInputs {...pensionData} updatePensionData={updatePensionData} />

      <CalculatorResults {...pensionData} />

      <button className='w-fit text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' type="button" onClick={resetPage}>
        Reset (debug)
      </button>
    </div>
  );
}
