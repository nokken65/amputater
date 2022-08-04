import { Controller } from 'effector-react-form';
import { memo } from 'react';

import { FieldErrors, TextAreaField, TextAreaFieldProps } from '@/shared/ui';

import { Popover } from '../Popover';

type TextAreaProps = Omit<
  TextAreaFieldProps,
  'name' | 'value' | 'onChange' | 'onFocus' | 'onBlur'
> & {
  controller: Controller;
};

const TextAreaView = ({ controller, ...props }: TextAreaProps) => {
  const { input, error, isShowError } = controller();

  return (
    <Popover
      contentNode={<FieldErrors>{error}</FieldErrors>}
      disabled={!isShowError}
      placement='top-start'
    >
      <TextAreaField {...props} {...input} isShowError={isShowError} />
    </Popover>
  );
};

export const TextArea = memo(TextAreaView);
