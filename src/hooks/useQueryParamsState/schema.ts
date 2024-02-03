import { Simplify } from 'type-fest';
import { z } from 'zod';

import { queryParamDefaults } from './constants';

// https://github.com/colinhacks/zod/issues/2172
const queryParamsSchema = z.object({
  monthlyPension: z.string().pipe(z.coerce.number()), // .catch(queryParamDefaults.monthlyPension.toString()), // todo coerce to number or currency
  monthlyPersonalContribution: z.string().pipe(z.coerce.number()),
  // .catch(queryParamDefaults.monthlyPersonalContribution.toString()), // todo coerce to number or currency
  monthlyEmployerContribution: z.string().pipe(z.coerce.number()),
  // .catch(queryParamDefaults.monthlyEmployerContribution.toString()), // todo coerce to number or currency
  retirementAge: z.string().pipe(z.coerce.number()), //.catch(queryParamDefaults.retirementAge.toString()), // todo coerce to number or currency
});

export default queryParamsSchema;

export type QueryParamsSchemaStringified = Simplify<z.input<typeof queryParamsSchema>>;
export type QueryParamsSchema = Simplify<z.output<typeof queryParamsSchema>>;
