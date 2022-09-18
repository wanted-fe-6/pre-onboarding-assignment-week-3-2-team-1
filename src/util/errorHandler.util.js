export const errorHandler = (fn, errorMessage) => {
  try {
    fn();
  } catch (err) {
    console.error(err);
    throw new Error(errorMessage);
  }
};
