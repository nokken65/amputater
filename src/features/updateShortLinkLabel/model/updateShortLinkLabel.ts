import { createEffect } from 'effector';

import { shortLinkModel } from '@/entities/ShortLink';
import { supabaseApi, UpdateShortLinkLabelParams } from '@/shared/api';
import { ShortLink } from '@/shared/types';

const updateShortLinkLabelFx = createEffect<
  UpdateShortLinkLabelParams,
  ShortLink
>(async (props) => {
  const { data, error } = await supabaseApi.links.updateShortLinkLabel(props);

  if (error || !data) {
    throw error;
  }

  return data;
});

shortLinkModel.selectors.$shortLinks.on(
  updateShortLinkLabelFx.doneData,
  (state, payload) =>
    state.map((link) =>
      link.id === payload.id ? { ...link, label: payload.label } : link,
    ),
);

export const effects = {
  updateShortLinkLabelFx,
};
