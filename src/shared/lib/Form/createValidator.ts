import { createNameHelper, FormValidateParams } from 'effector-react-form';
import { AnyObjectSchema, ValidationError } from 'yup';

export const createValidator = (schema: AnyObjectSchema) => {
  const nameHelper = createNameHelper<typeof schema.fields>();

  const validate = ({
    values,
  }: FormValidateParams<typeof schema.fields, unknown>) => {
    const errors: { [key: string]: string } = {};

    try {
      schema.validateSync(values, { strict: true, abortEarly: false });
    } catch (err) {
      const errorsArr = (err as ValidationError).inner;
      if (errorsArr.length) {
        errorsArr.forEach((error) => {
          if (error.path) {
            errors[nameHelper.getStr(error.path)] = error.message;
          }
        });
      }
    }

    return errors;
  };

  return validate;
};
