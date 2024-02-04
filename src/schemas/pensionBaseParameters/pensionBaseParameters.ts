import { z } from 'zod';
import { ageAtStartOfWorkLife, ageAtDeath } from '@/constants';

// used for form validation
export const pensionBaseParametersSchema = z.object({
  monthlyPension: z.number().positive().min(1, `Can't be less than 1`),
  monthlyPersonalContribution: z.number().positive(`Can't be less than 0`),
  monthlyEmployerContribution: z.number().positive(`Can't be less than 0`),
  retirementAge: z
    .number()
    .min(ageAtStartOfWorkLife, `You must be older than ${ageAtStartOfWorkLife}`)
    .max(ageAtDeath, `You can't be older than ${ageAtDeath}`),
});
