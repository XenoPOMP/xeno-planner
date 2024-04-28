/**
 * Catches axios errors and handles them.
 * @param error
 *
 * @see Moment of creation
 * https://youtu.be/-7K_0NRLCu4?si=eznZ6aFDMHeBHwyV&t=10960
 */
export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof error.response.data.message === 'object'
      ? message[0]
      : message
    : error.message;
};
