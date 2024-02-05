import { Simplify } from 'type-fest';
import z from 'zod';

import { baseParamsNames } from './constants';
import { queryParamSchema } from './schemas/queryParams/queryParams';
import { pensionBaseParametersSchema } from './schemas/pensionBaseParameters/pensionBaseParameters';

export type BaseParamNames = typeof baseParamsNames[number];

export type QueryParamsSchemaStringified = Simplify<z.input<typeof queryParamSchema>>;
// export type QueryParamsSchema = Simplify<z.output<typeof queryParamSchema>>;

export type PensionBaseParameters = Simplify<z.output<typeof pensionBaseParametersSchema>>;
