export const withError = (fn, ctx) => {
  try {
    return fn.apply(ctx);
  } catch (err) {
    console.error(err);
  }
};
