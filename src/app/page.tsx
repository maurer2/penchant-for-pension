'use client'

import styles from "./page.module.css";

import useQueryParamsState from '@/hooks/useQueryParamsState/useQueryParamsState';

export default function Home() {
  const queryParams = useQueryParamsState();

  console.log(queryParams);

  return (
    <main className={styles.main}>
      <h1>test</h1>
      <code><pre>{JSON.stringify(queryParams)}</pre></code>
    </main>
  );
}
