export const addLinkToKV = async (id, original) => {
  try {
    await AMPR_LINKS.put(id, original);
    return null;
  } catch (error) {
    return error;
  }
};
