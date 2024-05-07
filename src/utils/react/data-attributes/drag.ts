/**
 * Inserts "data-is-dragging" attribute.
 * @param dragging
 */
export const isDragging = (dragging?: boolean) => ({
  'data-is-dragging': !!dragging,
});
