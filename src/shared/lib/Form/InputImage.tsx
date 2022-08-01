import { Controller, SetValueParams } from 'effector-react-form';
import { memo } from 'react';

import { InputImageField, InputImageFieldProps } from '@/shared/ui';

import { Tooltip } from '../Tooltip';
import { SUPPORTED_IMAGE_FORMATS } from '@/shared/constants';

type InputImageProps = Omit<
  InputImageFieldProps,
  'name' | 'value' | 'onChange' | 'onFocus' | 'onBlur' | 'imageUrl'
> & {
  controller: Controller;
  setValue: (params: SetValueParams) => void;
};

const InputImageView = ({
  controller,
  setValue,
  ...props
}: InputImageProps) => {
  const {
    input: { name, onBlur, onFocus, value },
    error,
    isShowError,
  } = controller();

  return (
    <Tooltip
      content={error}
      disabled={!isShowError && !error}
      wrapperClassName='!w-fit'
    >
      <InputImageField
        {...props}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={(e) => {
          if (
            e.target.files?.length &&
            SUPPORTED_IMAGE_FORMATS.includes(e.target.files[0].type)
          ) {
            setValue({ field: name, value: e.target.files[0] });
          }
        }}
        isShowError={!!error}
        isValid={!error}
        imageUrl={
          value && SUPPORTED_IMAGE_FORMATS.includes(value.type)
            ? URL.createObjectURL(value)
            : import.meta.env.VITE_SUPABASE_URL +
              '/storage/v1/object/public/avatars/default.jpg'
        }
      />
    </Tooltip>
  );
};

export const InputImage = memo(InputImageView);
