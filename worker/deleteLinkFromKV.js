export const deleteLinkFromKV = async (id) => {
  try {
    await AMPR_LINKS.delete(id);
    return null;
  } catch (error) {
    return error;
  }
};
