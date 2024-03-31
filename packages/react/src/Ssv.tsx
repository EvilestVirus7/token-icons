import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSSV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.51 7.132a.34.34 0 0 1 0-.437l2.224-2.713a.343.343 0 0 1 .532 0l2.228 2.713a.34.34 0 0 1 0 .437l-2.228 2.635a.343.343 0 0 1-.532 0L9.506 7.132zm0 10.251a.34.34 0 0 1 0-.437l2.224-2.713a.344.344 0 0 1 .532 0l2.228 2.713a.34.34 0 0 1 0 .437l-2.228 2.636a.343.343 0 0 1-.532 0l-2.228-2.636zm-3.214-6.167a.34.34 0 0 1-.005-.437L8.5 8.066a.343.343 0 0 1 .531 0l2.207 2.713a.34.34 0 0 1 0 .437l-2.211 2.636a.343.343 0 0 1-.523 0zm6.471 0a.34.34 0 0 1 0-.437l2.203-2.713a.343.343 0 0 1 .531 0l2.208 2.713a.34.34 0 0 1 0 .437l-2.212 2.636a.343.343 0 0 1-.523 0z"
          />
        </>
      ) : (
        <>
          <path
            fill="#009CF2"
            d="M9.51 7.132a.34.34 0 0 1 0-.437l2.224-2.713a.343.343 0 0 1 .532 0l2.228 2.713a.34.34 0 0 1 0 .437l-2.228 2.635a.343.343 0 0 1-.532 0L9.506 7.132z"
          />
          <path
            fill="#00649B"
            d="M9.51 17.383a.34.34 0 0 1 0-.437l2.224-2.713a.344.344 0 0 1 .532 0l2.228 2.713a.34.34 0 0 1 0 .437l-2.228 2.636a.343.343 0 0 1-.532 0l-2.228-2.636z"
          />
          <path
            fill="#009CF2"
            d="M6.296 11.216a.34.34 0 0 1-.005-.437L8.5 8.066a.343.343 0 0 1 .531 0l2.207 2.713a.34.34 0 0 1 0 .437l-2.211 2.636a.343.343 0 0 1-.523 0zm6.471 0a.34.34 0 0 1 0-.437l2.203-2.713a.343.343 0 0 1 .531 0l2.208 2.713a.34.34 0 0 1 0 .437l-2.212 2.636a.343.343 0 0 1-.523 0z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSSV.displayName = 'SSV'
