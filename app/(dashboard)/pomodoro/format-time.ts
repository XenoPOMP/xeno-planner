/**
 * Converts number to timer like.
 *
 * @param time
 *
 * @example
 * 1 => 01
 * 9 => 09
 * 15 => 15
 */
const format = (time: number) => `${time < 10 ? '0' : ''}${time}`;

/**
 * Formats count of seconds to timer like representation.
 *
 * @param secondsLeft
 *
 * @example
 * 601 => 10:01
 * 123 => 02:03
 */
export const formatTime = (secondsLeft: number) => {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return `${format(minutes)}:${format(seconds)}`;
};
