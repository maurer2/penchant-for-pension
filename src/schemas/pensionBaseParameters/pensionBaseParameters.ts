import { z } from 'zod';

export const pensionBaseParametersSchema = z.object({
  monthlyPension: z.number(),
  monthlyPersonalContribution: z.number(),
  monthlyEmployerContribution: z.number(),
  retirementAge: z.number(),
});
