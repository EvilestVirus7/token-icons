import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconXYO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.53 6h6.884l3.443 5.99L15.414 18H8.53l-3.386-6.01zm.538 1H14l-3.996 1.42zm-.277.26-2.358 4.025 3.148-2.62zm6.985 4.62-.969-4.654-4.63 1.417zM6 12.206l3.732-3.162v6.403zm4.16 3.27V8.907l5.646 3.284zm5.14-7.585 2.428 4.113h-1.54zm-.029 8.7 2.482-4.188h-1.65zm-5.047-.805 5.449-3.147-.901 4.645zM6.48 13.15l2.281 3.989.755-1.376zm2.618 4.135h4.696l-4.003-1.302z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M10 9.633a1.12 1.12 0 1 0 0-2.239 1.12 1.12 0 0 0 0 2.239m6.078 3.777a1.348 1.348 0 1 0 0-2.696 1.348 1.348 0 0 0 0 2.696"
          />
          <path
            fill="currentColor"
            d="M10 9.303a.79.79 0 1 0 0-1.579.79.79 0 0 0 0 1.579m1.12 6.355a1.212 1.212 0 1 1-2.423 0 1.212 1.212 0 0 1 2.423 0m4.958-2.645a.95.95 0 1 0 0-1.901.95.95 0 0 0 0 1.9"
          />
        </>
      ) : (
        <>
          <path
            fill="#313B59"
            d="M8.53 6h6.884l3.443 5.99L15.414 18H8.53l-3.386-6.01zm.538 1H14l-3.996 1.42zm-.277.26-2.358 4.025 3.148-2.62zm6.985 4.62-.969-4.654-4.63 1.417zM6 12.206l3.732-3.162v6.403zm4.16 3.27V8.907l5.646 3.284zm5.14-7.585 2.428 4.113h-1.54zm-.029 8.7 2.482-4.188h-1.65zm-5.047-.805 5.449-3.147-.901 4.645zM6.48 13.15l2.281 3.989.755-1.376zm2.618 4.135h4.696l-4.003-1.302z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#313B59"
            d="M10 9.633a1.12 1.12 0 1 0 0-2.239 1.12 1.12 0 0 0 0 2.239m6.078 3.777a1.348 1.348 0 1 0 0-2.696 1.348 1.348 0 0 0 0 2.696"
          />
          <path
            fill="#313B59"
            d="M10 9.303a.79.79 0 1 0 0-1.579.79.79 0 0 0 0 1.579m1.12 6.355a1.212 1.212 0 1 1-2.423 0 1.212 1.212 0 0 1 2.423 0m4.958-2.645a.95.95 0 1 0 0-1.901.95.95 0 0 0 0 1.9"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXYO.displayName = 'XYO'
