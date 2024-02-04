import { nanoid } from 'nanoid';

import { queryParamSchema } from '@/schemas/queryParams/queryParams';
import { baseParamsDefaults } from '@/constants';

import type { QueryParamsSchemaStringified } from '@/types';

type HomeProps = {
  searchParams: QueryParamsSchemaStringified;
};

import Calculator from '@/components/Calculator/Calculator';

// http://localhost:3000/?monthlyPension=100&monthlyPersonalContribution=200&monthlyEmployerContribution=300&retirementAge=400
export default async function Home({ searchParams }: HomeProps) {
  const queryParams = queryParamSchema.safeParse(searchParams);
  let baseParams = baseParamsDefaults;
  if (queryParams.success) {
    baseParams = queryParams.data;
  }

  const resetKey = nanoid();

  return (
    <main className="max-w-7xl m-auto my-4">
      <h1 className="text-2xl font-bold mb-4">Pension calculator</h1>
      <Calculator baseParams={baseParams} key={resetKey} />
    </main>
  );
}
