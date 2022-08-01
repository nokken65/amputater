import { Controller } from 'effector-react-form';
import { memo } from 'react';

import { InputField, InputFieldProps } from '@/shared/ui';

import { Tooltip } from '../Tooltip';

type InputProps = Omit<
  InputFieldProps,
  'name' | 'value' | 'onChange' | 'onFocus' | 'onBlur'
> & {
  controller: Controller;
};

const InputView = ({ controller, ...props }: InputProps) => {
  const { input, error, isShowError } = controller();

  return (
    <Tooltip content={error} disabled={!isShowError}>
      <InputField
        {...props}
        {...input}
        isShowError={isShowError}
        isValid={!error}
      />
    </Tooltip>
  );
};

export const Input = memo(InputView);
