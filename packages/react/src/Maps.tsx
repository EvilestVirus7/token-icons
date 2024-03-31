import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMAPS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.607 4.809c-2.301.458-2.297 1.29-2.293 2.271v.12l.806-.154c-.064-.429.163-1.226 1.586-1.5 1.397-.274 1.809.403 1.856.857l.771-.146c.017-.668-.51-1.89-2.726-1.448M7.05 13.766l-1.757 1.77-.823-4.414zM5.53 16.83l-.116-.63 2.027-2.035 3.532 3.62-3.18.61A1.937 1.937 0 0 1 5.53 16.83m10.491-.004-4.393.831-.793-.814 2.632-2.64 2.554 2.614zm2.117-.403-1.461.279-2.82-2.889 2.679-2.687 3.18 3.317a1.955 1.955 0 0 1-1.578 1.972zm.579-7.483.844 4.543-2.631-2.751zm-.244-1.32.12.656-2.049 2.057-2.584-2.709 1.397-1.405.857-.163a1.937 1.937 0 0 1 2.259 1.564m-10.629.03 6.544-1.243-3.921 3.93-2.62-2.687zm-1.98.382 1.329-.258 2.884 2.958-2.632 2.64-3.15-3.223a1.96 1.96 0 0 1 1.57-2.117m7.702-.013 2.588 2.704-2.683 2.691-2.614-2.678zm-2.208 5.695a.857.857 0 1 1-1.715 0 .857.857 0 0 1 1.715 0"
          />
        </>
      ) : (
        <>
          <path
            fill="#77D563"
            d="M10.607 4.809c-2.302.458-2.297 1.29-2.293 2.271v.12l.806-.154c-.065-.429.163-1.226 1.585-1.5 1.398-.274 1.809.403 1.856.857l.772-.146c.017-.668-.51-1.89-2.726-1.448M7.05 13.766l-1.757 1.77-.823-4.414zM5.528 16.83l-.115-.63 2.027-2.035 3.531 3.62-3.18.61a1.937 1.937 0 0 1-2.263-1.565m10.492-.004-4.393.831-.793-.814 2.631-2.64 2.555 2.614zm2.117-.403-1.462.279-2.82-2.889 2.679-2.687 3.18 3.317a1.955 1.955 0 0 1-1.577 1.972zm.578-7.483.845 4.543-2.632-2.751zm-.244-1.32.12.656-2.048 2.057-2.585-2.709 1.397-1.405.858-.163A1.937 1.937 0 0 1 18.47 7.62m-10.628.03 6.544-1.243-3.922 3.93L7.847 7.65zm-1.98.382 1.328-.258 2.884 2.958-2.631 2.64-3.15-3.223a1.96 1.96 0 0 1 1.569-2.117m7.701-.013 2.589 2.704-2.683 2.691-2.615-2.678zm-2.207 5.695a.858.858 0 1 1-1.715 0 .858.858 0 0 1 1.715 0"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMAPS.displayName = 'MAPS'
