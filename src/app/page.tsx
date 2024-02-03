import styles from './page.module.css';

import { ReadonlyURLSearchParams } from 'next/navigation';

import queryParamsSchema from '@/hooks/useQueryParamsState/schema';
import { queryParamDefaults } from '@/hooks/useQueryParamsState/constants';

// import useQueryParamsState from '@/hooks/useQueryParamsState/useQueryParamsState';

import type { QueryParamsSchema } from '@/hooks/useQueryParamsState/schema';
import FormInputs from '@/components/FormInputs/FormInputs';

type HomeProps = {
  searchParams: QueryParamsSchema;
};

// http://localhost:3000/?monthlyPension=100&monthlyPersonalContribution=200&monthlyEmployerContribution=300&retirementAge=400
export default async function Home({ searchParams }: HomeProps) {
  const queryParams = queryParamsSchema.safeParse(searchParams);
  let queryParamsParsed = queryParamDefaults;

  if (queryParams.success) {
    queryParamsParsed = queryParams.data;
  }

  return (
    <main className={styles.main}>
      <h1>Pension stuff</h1>
      <FormInputs {...queryParamsParsed} />
    </main>
  );
}
