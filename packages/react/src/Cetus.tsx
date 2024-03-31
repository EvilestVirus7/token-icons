import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCETUS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 11.571c0 3.459-2.88 6.099-6.428 6.099q-.502-.001-.986-.073c-1.341 1.209-3.608 1.303-4.637 1.247l.96-3.128a6.16 6.16 0 0 1-1.766-4.303c0-3.467 2.88-6.27 6.429-6.27 3.128 0 5.73 2.173 6.308 5.053-.711-.099-1.637-.403-1.885-1.14-.193.428-.917 1.234-2.345 1.195a2.28 2.28 0 0 0 .138-2.103A2.38 2.38 0 0 0 12 6.708a2.38 2.38 0 0 0-2.413 2.348c.004 1.298 1.084 2.515 2.413 2.515z"
          />
          <path
            fill="currentColor"
            d="M16.26 11.571c-.746 3.575-3.986 6.099-7.877 6.099q-.822 0-1.599-.154l-.411 1.328c1.033.056 3.3-.043 4.637-1.247q.489.072.99.073c3.548 0 6.428-2.64 6.428-6.099zm.158-2.515c-.008.025.013-.022 0 0 .253.737 1.179 1.041 1.886 1.14a6.27 6.27 0 0 0-2.846-4.072c.506.909.858 1.856.96 2.932"
          />
        </>
      ) : (
        <>
          <path
            fill="#68FFD8"
            d="M18.428 11.571c0 3.459-2.88 6.099-6.428 6.099q-.502-.001-.986-.073c-1.341 1.209-3.608 1.303-4.637 1.247l.96-3.128a6.16 6.16 0 0 1-1.766-4.303c0-3.467 2.88-6.27 6.429-6.27 3.128 0 5.73 2.173 6.308 5.053-.711-.099-1.637-.403-1.885-1.14-.193.428-.917 1.234-2.345 1.195a2.28 2.28 0 0 0 .138-2.103A2.38 2.38 0 0 0 12 6.708a2.38 2.38 0 0 0-2.413 2.348c.004 1.298 1.084 2.515 2.413 2.515z"
          />
          <path
            fill="#00D49E"
            d="M16.26 11.571c-.746 3.575-3.986 6.099-7.877 6.099q-.822 0-1.599-.154l-.411 1.328c1.033.056 3.3-.043 4.637-1.247q.489.072.99.073c3.548 0 6.428-2.64 6.428-6.099zm.158-2.515c-.008.025.013-.022 0 0 .253.737 1.179 1.041 1.886 1.14a6.27 6.27 0 0 0-2.846-4.072c.506.909.858 1.856.96 2.932"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCETUS.displayName = 'CETUS'
