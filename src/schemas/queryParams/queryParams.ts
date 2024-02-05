import { z } from 'zod';

// https://github.com/colinhacks/zod/issues/2172
export const queryParamSchema = z.object({
  monthlyPension: z.string().pipe(z.coerce.number()),
  monthlyPersonalContribution: z.string().pipe(z.coerce.number()),
  monthlyEmployerContribution: z.string().pipe(z.coerce.number()),
  retirementAge: z.string().pipe(z.coerce.number()),
});
