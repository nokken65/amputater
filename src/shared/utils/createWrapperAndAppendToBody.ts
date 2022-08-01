export const createWrapperAndAppendToBody = (
  wrapperId: string,
  prepend?: boolean,
): HTMLDivElement => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  if (prepend) {
    document.body.prepend(wrapperElement);
  } else {
    document.body.append(wrapperElement);
  }

  return wrapperElement;
};
