import { z } from 'zod';
import { ageAtStartOfWorkLife, ageAtDeath } from '@/constants';

// https://github.com/colinhacks/zod/issues/2172
export const queryParamSchema = z.object({
  monthlyPension: z.string().pipe(z.coerce.number().min(100)),
  monthlyPersonalContribution: z.string().pipe(z.coerce.number().nonnegative()),
  monthlyEmployerContribution: z.string().pipe(z.coerce.number().nonnegative()),
  retirementAge: z.string().pipe(z.coerce.number().min(ageAtStartOfWorkLife).max(ageAtDeath)),
});
