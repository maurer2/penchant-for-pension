import { z } from 'zod';
import { ageAtStartOfWorkLife, ageAtDeath } from '@/constants';

// used for form validation
export const pensionBaseParametersSchema = z.object({
  monthlyPension: z.number().min(100, `Monthly pension must be more than 100`),
  monthlyPersonalContribution: z.number().nonnegative(`Monthly personal contribution must not be negative`),
  monthlyEmployerContribution: z.number().nonnegative(`Monthly employer contribution must not be negative`),
  retirementAge: z
    .number()
    .min(ageAtStartOfWorkLife, `You must be older than ${ageAtStartOfWorkLife - 1}`)
    .max(ageAtDeath, `You must not be older than ${ageAtDeath}`),
});
