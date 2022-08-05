import { reflect } from '@effector/reflect';
import React, { memo } from 'react';

import { ShortLinkLabel } from '@/entities/ShortLink';
import {
  UpdateShortLinkLabelForm,
  updateShortLinkLabelModel,
} from '@/features/updateShortLinkLabel';
import { EditIcon } from '@/shared/icons';
import { ShortLink } from '@/shared/types';
import { Button } from '@/shared/ui';

type ShortLinkLabelNodeProps = Pick<ShortLink, 'id' | 'label'> & {
  isEditing: string;
  openForm: (id: string) => void;
  closeForm: () => void;
};

const ShortLinkLabelNodeView = memo(
  ({ id, label, isEditing, openForm, closeForm }: ShortLinkLabelNodeProps) => {
    return isEditing === id ? (
      <UpdateShortLinkLabelForm label={label} onBlur={closeForm} />
    ) : (
      <div className='flex items-center gap-2'>
        <ShortLinkLabel label={label} />
        <Button type='ghost' onClick={() => openForm(id)}>
          <EditIcon className='h-5 w-5' />
        </Button>
      </div>
    );
  },
);

export const ShortLinkLabelNode = reflect({
  view: ShortLinkLabelNodeView,
  bind: {
    isEditing: updateShortLinkLabelModel.form.$isOpenId,
    openForm: updateShortLinkLabelModel.form.open,
    closeForm: updateShortLinkLabelModel.form.close,
  },
});
