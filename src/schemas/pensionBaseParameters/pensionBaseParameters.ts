import { z } from 'zod';
import { ageAtStartOfWorkLife, ageAtDeath } from '@/constants';

// used for form validation
export const pensionBaseParametersSchema = z.object({
  monthlyPension: z.number().positive().min(1, `Must be more than 0`),
  monthlyPersonalContribution: z.number().nonnegative(`Must not be negative`),
  monthlyEmployerContribution: z.number().nonnegative(`Must not be negative`),
  retirementAge: z
    .number()
    .min(ageAtStartOfWorkLife, `You must be older than ${ageAtStartOfWorkLife - 1}`)
    .max(ageAtDeath, `You must not be older than ${ageAtDeath}`),
});
