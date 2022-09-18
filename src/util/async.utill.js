export const createThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return queryParam => async dispatch => {
    dispatch({ type, queryParam });
    try {
      const payload = await promiseCreator(queryParam);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (preveState = null) => ({
    loading: true,
    data: preveState,
    error: null,
  }),
  success: data => ({
    loading: false,
    data,
    error: null,
  }),
  error: error => ({
    loading: false,
    data: null,
    error,
  }),
};
