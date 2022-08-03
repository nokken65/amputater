import { FormHTMLAttributes, memo, useRef } from 'react';

import { useOuterClick } from '@/shared/hooks/useOuterClick';

type FormProps = Omit<FormHTMLAttributes<HTMLFormElement>, 'onBlur'> & {
  onBlur?: () => void;
};

const FormView = ({ children, onBlur, ...props }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  useOuterClick(formRef, () => (onBlur ? onBlur() : null));

  return (
    <form ref={formRef} {...props}>
      {children}
    </form>
  );
};

export const Form = memo(FormView);
