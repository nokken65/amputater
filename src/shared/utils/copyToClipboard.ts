export const copyToClipBoard = (text: string, cb?: () => void) => {
  try {
    const { clipboard } = navigator;
    clipboard.writeText(text).then(cb);
  } catch (error) {
    console.error(error);
  }
};
