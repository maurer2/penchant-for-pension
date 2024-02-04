import { nanoid } from 'nanoid';

import styles from './page.module.css';

import queryParamsSchema from '@/hooks/useQueryParamsState/schema';
import { queryParamDefaults } from '@/hooks/useQueryParamsState/constants';

import type { QueryParamsSchema } from '@/hooks/useQueryParamsState/schema';

type HomeProps = {
  searchParams: QueryParamsSchema;
};

import Calculator from '@/components/Calculator/Calculator';

// http://localhost:3000/?monthlyPension=100&monthlyPersonalContribution=200&monthlyEmployerContribution=300&retirementAge=400
export default async function Home({ searchParams }: HomeProps) {
  const queryParams = queryParamsSchema.safeParse(searchParams);
  let queryParamsParsed = queryParamDefaults;

  if (queryParams.success) {
    queryParamsParsed = queryParams.data;
  }

  const resetKey = nanoid();

  return (
    <main className={styles.main}>
      <h1>Pension stuff</h1>
      <Calculator {...queryParamsParsed} key={resetKey}/>
    </main>
  );
}
