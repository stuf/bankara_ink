export const assertUnreachable = (_value: never): never => {
  console.info('assertUnreachable but still reached');
  console.error(_value);
  throw new Error('Statement should be unreachable');
};
