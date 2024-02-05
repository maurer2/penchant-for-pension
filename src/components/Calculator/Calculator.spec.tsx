import type { ComponentPropsWithoutRef } from 'react';

import { expect, test } from '@playwright/experimental-ct-react';
// import { beforeMount } from '@playwright/experimental-ct-react/hooks';

// import router from 'next/navigation';

import Calculator from './Calculator';

test.describe.skip('Calculator', () => {
  // beforeMount(async () => {
  //   router.useRouter = () => ({
  //     push: () => undefined,
  //     refresh: () => undefined,
  //     back: () => undefined,
  //     forward: () => undefined,
  //     replace: () => undefined,
  //     prefetch: () => undefined,
  //   })
  // });

  const propsDefault: ComponentPropsWithoutRef<typeof Calculator> = {
    baseParams: {
      monthlyPension: 350000,
      monthlyPersonalContribution: 60000,
      monthlyEmployerContribution: 120000,
      retirementAge: 55,
    },
  };

  test('renders', async ({ mount }) => {
    const component = await mount(<Calculator {...propsDefault} />);

    await expect(component).toContainText('Pension calculator');
  });
});
