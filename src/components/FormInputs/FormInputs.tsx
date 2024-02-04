'use client';

import type { PensionBaseParameters } from '@/types';
import { pensionBaseParametersSchema } from '@/schemas/pensionBaseParameters/pensionBaseParameters';

import type { FormEvent } from 'react';

import { Button, Label, Input, Form, FieldError, NumberField } from 'react-aria-components';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools';

type FormInputsProps = PensionBaseParameters & {
  updatePensionData: (pensionData: PensionBaseParameters) => void;
};

export default function FormInputs({
  monthlyPension,
  monthlyPersonalContribution,
  monthlyEmployerContribution,
  retirementAge,
  updatePensionData,
}: FormInputsProps) {
  const { handleSubmit, control, formState } = useForm<PensionBaseParameters>({
    defaultValues: {
      monthlyPension: monthlyPension,
      monthlyPersonalContribution,
      monthlyEmployerContribution,
      retirementAge,
    },
    resolver: zodResolver(pensionBaseParametersSchema),
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
          <NumberField
            name={name}
            value={value / 100}
            onChange={(value) => onChange(value * 100)}
            onBlur={onBlur}
            isRequired
            validationBehavior="aria"
            isInvalid={invalid}
            className="mb-4 grid grid-cols-2"
            minValue={1}
            formatOptions={{
              style: 'currency',
              currency: 'GBP',
              currencyDisplay: 'symbol',
            }}
          >
            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Desired monthly pension:{' '}
            </Label>
            <Input
              ref={ref}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FieldError>{error?.message}</FieldError>
          </NumberField>
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
          <NumberField
            name={name}
            value={value / 100}
            onChange={(value) => onChange(value * 100)}
            onBlur={onBlur}
            isRequired
            validationBehavior="aria"
            isInvalid={invalid}
            className="mb-4 grid grid-cols-2"
            minValue={0}
            formatOptions={{
              style: 'currency',
              currency: 'GBP',
              currencyDisplay: 'symbol',
            }}
          >
            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Monthly personal contribution:{' '}
            </Label>
            <Input
              ref={ref}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FieldError>{error?.message}</FieldError>
          </NumberField>
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
          <NumberField
            name={name}
            value={value / 100}
            onChange={(value) => onChange(value * 100)}
            onBlur={onBlur}
            isRequired
            validationBehavior="aria"
            isInvalid={invalid}
            className="mb-4 grid grid-cols-2"
            minValue={0}
            formatOptions={{
              style: 'currency',
              currency: 'GBP',
              currencyDisplay: 'symbol',
            }}
          >
            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Monthly employer contribution:{' '}
            </Label>
            <Input
              ref={ref}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FieldError>{error?.message}</FieldError>
          </NumberField>
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
          <NumberField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isRequired
            validationBehavior="aria"
            isInvalid={invalid}
            className="mb-4 grid grid-cols-2"
            formatOptions={{
              style: 'unit',
              unit: 'year',
              unitDisplay: 'narrow',
            }}
          >
            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Retirement Age:{' '}
            </Label>
            <Input
              ref={ref}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FieldError>{error?.message}</FieldError>
          </NumberField>
        )}
      />

      <Button
        type="submit"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Submit
      </Button>
      {/* <DevTool control={control} /> */}
    </Form>
  );
}
