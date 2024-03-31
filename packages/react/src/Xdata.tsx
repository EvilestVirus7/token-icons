import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconXDATA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 10.611c3.077 0 5.572-1.128 5.572-2.52 0-1.391-2.495-2.52-5.572-2.52S6.43 6.7 6.43 8.091s2.494 2.52 5.571 2.52"
          />
          <path
            fill="currentColor"
            d="M6.429 9.236v1.602c0 1.393 2.494 2.52 5.571 2.52s5.572-1.127 5.572-2.52V9.24h-.022c-.257 1.281-2.644 2.288-5.55 2.288s-5.293-1.007-5.55-2.292z"
          />
          <path
            fill="currentColor"
            d="M6.429 11.987v1.603c0 1.388 2.494 2.52 5.571 2.52s5.572-1.132 5.572-2.52v-1.603h-.022c-.257 1.286-2.644 2.289-5.55 2.289s-5.293-1.008-5.55-2.289z"
          />
          <path
            fill="currentColor"
            d="M6.429 14.734v1.603c0 1.393 2.494 2.52 5.571 2.52s5.572-1.127 5.572-2.52v-1.603h-.022c-.257 1.286-2.644 2.289-5.55 2.289s-5.293-1.003-5.55-2.289z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F0C419"
            d="M12 10.611c3.077 0 5.572-1.128 5.572-2.52 0-1.391-2.495-2.52-5.572-2.52S6.43 6.7 6.43 8.091s2.494 2.52 5.571 2.52"
          />
          <path
            fill="#25AE5F"
            d="M6.429 9.236v1.602c0 1.393 2.494 2.52 5.571 2.52s5.572-1.127 5.572-2.52V9.24h-.022c-.257 1.281-2.644 2.288-5.55 2.288s-5.293-1.007-5.55-2.292z"
          />
          <path
            fill="#E64C3C"
            d="M6.429 11.987v1.603c0 1.388 2.494 2.52 5.571 2.52s5.572-1.132 5.572-2.52v-1.603h-.022c-.257 1.286-2.644 2.289-5.55 2.289s-5.293-1.008-5.55-2.289z"
          />
          <path
            fill="#7A69A7"
            d="M6.429 14.734v1.603c0 1.393 2.494 2.52 5.571 2.52s5.572-1.127 5.572-2.52v-1.603h-.022c-.257 1.286-2.644 2.289-5.55 2.289s-5.293-1.003-5.55-2.289z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXDATA.displayName = 'XDATA'
