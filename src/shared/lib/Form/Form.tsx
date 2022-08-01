import { FormHTMLAttributes, memo } from 'react';

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const FormView = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>;
};

export const Form = memo(FormView);
