import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDOT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.571 6.214c0 .827-1.152 1.5-2.571 1.5s-2.572-.673-2.572-1.5 1.158-1.5 2.572-1.5 2.571.673 2.571 1.5m0 11.572c0 .827-1.152 1.5-2.571 1.5s-2.572-.673-2.572-1.5 1.158-1.5 2.572-1.5 2.571.673 2.571 1.5M8.293 9.92c.728-1.255.733-2.614.017-3.025-.72-.416-1.886.27-2.614 1.526-.729 1.255-.729 2.614-.018 3.025.72.412 1.886-.27 2.615-1.525m10.02 2.628c.72.407.716 1.74-.009 2.974-.728 1.234-1.898 1.903-2.614 1.496-.724-.407-.72-1.74.004-2.975.729-1.234 1.899-1.902 2.619-1.495m-9.999 4.478c.72-.407.716-1.74-.013-2.974-.724-1.234-1.894-1.903-2.614-1.496-.724.412-.72 1.74.009 2.974.724 1.235 1.894 1.908 2.614 1.5zm9.999-8.601c.728 1.255.728 2.61.013 3.021-.716.416-1.886-.265-2.615-1.525-.72-1.256-.728-2.61-.013-3.022.72-.416 1.886.266 2.615 1.526"
          />
        </>
      ) : (
        <>
          <path
            fill="#E6007A"
            d="M14.571 6.214c0 .827-1.152 1.5-2.571 1.5s-2.572-.673-2.572-1.5 1.158-1.5 2.572-1.5 2.571.673 2.571 1.5m0 11.572c0 .827-1.152 1.5-2.571 1.5s-2.572-.673-2.572-1.5 1.158-1.5 2.572-1.5 2.571.673 2.571 1.5M8.293 9.92c.728-1.255.733-2.614.017-3.025-.72-.416-1.886.27-2.614 1.526-.729 1.255-.729 2.614-.018 3.025.72.412 1.886-.27 2.615-1.525m10.02 2.628c.72.407.716 1.74-.009 2.974-.728 1.234-1.898 1.903-2.614 1.496-.724-.407-.72-1.74.004-2.975.729-1.234 1.899-1.902 2.619-1.495m-9.999 4.478c.72-.407.716-1.74-.013-2.974-.724-1.234-1.894-1.903-2.614-1.496-.724.412-.72 1.74.009 2.974.724 1.235 1.894 1.908 2.614 1.5zm9.999-8.601c.728 1.255.728 2.61.013 3.021-.716.416-1.886-.265-2.615-1.525-.72-1.256-.728-2.61-.013-3.022.72-.416 1.886.266 2.615 1.526"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDOT.displayName = 'DOT'
