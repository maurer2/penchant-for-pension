'use client';

import type {
  QueryParamsSchema,
  QueryParamsSchemaStringified,
} from '@/hooks/useQueryParamsState/schema';

import type { FormEvent } from 'react';

import { Button, Label, TextField, Input, Form, FieldError } from 'react-aria-components';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import queryParamsSchema from '@/hooks/useQueryParamsState/schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools';

type FormInputsProps = QueryParamsSchema & {
  updatePensionData: (pensionData: QueryParamsSchema) => void;
};

export default function FormInputs({
  monthlyPension,
  monthlyPersonalContribution,
  monthlyEmployerContribution,
  retirementAge,
  updatePensionData,
}: FormInputsProps) {
  const { handleSubmit, control, formState } = useForm<QueryParamsSchemaStringified>({
    defaultValues: {
      monthlyPension: monthlyPension.toString(),
      monthlyPersonalContribution: monthlyPersonalContribution.toString(),
      monthlyEmployerContribution: monthlyEmployerContribution.toString(),
      retirementAge: retirementAge.toString(),
    },
    resolver: zodResolver(queryParamsSchema),
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // @ts-expect-error // todo: type is queryParamsSchema, but RHF thinks it is QueryParamsSchemaStringified, e.g ignoring the type coercion in schema
    handleSubmit(updatePensionData)(event);
  };

  return (
    <Form onSubmit={onSubmit}>
      {/* Monthly pension */}
      <Controller
        control={control}
        name="monthlyPension"
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isRequired
            validationBehavior="aria"
            isInvalid={invalid}
          >
            <Label>Monthly pension: </Label>
            <Input ref={ref} />
            <FieldError>{error?.message}</FieldError>
          </TextField>
        )}
      />
      {/* Monthly personal contribution */}
      <Controller
        control={control}
        name="monthlyPersonalContribution"
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isRequired
            validationBehavior="aria"
            isInvalid={invalid}
          >
            <Label>Monthly personal contribution: </Label>
            <Input ref={ref} />
            <FieldError>{error?.message}</FieldError>
          </TextField>
        )}
      />
      {/* Monthly employer contribution */}
      <Controller
        control={control}
        name="monthlyEmployerContribution"
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isRequired
            validationBehavior="aria"
            isInvalid={invalid}
          >
            <Label>Monthly employer contribution: </Label>
            <Input ref={ref} />
            <FieldError>{error?.message}</FieldError>
          </TextField>
        )}
      />
      {/* Retirement age */}
      <Controller
        control={control}
        name="retirementAge"
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isRequired
            validationBehavior="aria"
            isInvalid={invalid}
          >
            <Label>Retirement Age: </Label>
            <Input ref={ref} />
            <FieldError>{error?.message}</FieldError>
          </TextField>
        )}
      />
      <Button type="submit">Submit</Button>
      {/* <DevTool control={control} /> */}
    </Form>
  );
}
