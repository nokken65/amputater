import { Controller } from 'effector-react-form';
import { memo } from 'react';

import { FieldErrors, InputField, InputFieldProps } from '@/shared/ui';

import { Popover } from '../Popover';

type InputProps = Omit<
  InputFieldProps,
  'name' | 'value' | 'onChange' | 'onFocus' | 'onBlur'
> & {
  controller: Controller;
};

const InputView = ({ controller, ...props }: InputProps) => {
  const { input, error, isShowError } = controller();

  return (
    <Popover
      contentNode={<FieldErrors>{error}</FieldErrors>}
      disabled={!isShowError}
      placement='top-start'
    >
      <InputField {...props} {...input} isShowError={isShowError} />
    </Popover>
  );
};

export const Input = memo(InputView);
