const isArray = (a: any) => {
  return Array.isArray(a);
};

const isObject = (o: any) => {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const toCamel = (s: string) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const keysToCamel = (o: any) => {
  if (isObject(o)) {
    const n: { [key: string]: any } = {};

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });

    return n;
  }
  if (isArray(o)) {
    return o.map((i: any) => {
      return keysToCamel(i);
    });
  }

  return o;
};
