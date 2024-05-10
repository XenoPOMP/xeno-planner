import cn from 'classnames';
import { type ElementType } from 'react';
import { Tooltip } from 'react-tooltip';

import type { WithTooltipProps } from './WithTooltip.props';

/**
 * Wraps certain component with tooltip.
 *
 * @param Component
 * @param id
 * @param content
 * @param placement
 * @param props
 * @constructor
 */
const WithTooltip = <Element extends ElementType>({
  as: Component = 'div',
  tooltip: { id, content, placement },
  ...props
}: WithTooltipProps<Element>) => {
  return (
    <>
      <Component
        data-tooltip-id={id}
        data-tooltip-content={content}
        data-tooltip-place={placement}
        {...props}
      />

      <Tooltip
        id={id}
        style={{
          borderRadius: '5px',
          zIndex: 5000,
        }}
        className={cn('!bg-secondary-bg-accent !text-primary-font')}
      />
    </>
  );
};

export default WithTooltip;
