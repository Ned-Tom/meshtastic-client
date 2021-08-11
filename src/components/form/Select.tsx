import React from 'react';

import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

interface SelectProps<T> extends UseControllerProps<T> {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

export const Select = <T extends FieldValues>({
  name,
  control,
  label,
  options,
}: SelectProps<T>): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'This is required',
      }}
      render={({ field: { onChange, value, name } }) => (
        <div className="space-y-1">
          <span className="block text-sm font-medium dark:text-white">
            {label}
          </span>
          <ReactSelect options={options} />
        </div>
      )}
    />
  );
};
