import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPBR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.714 10.286a1.714 1.714 0 1 1-3.429 0 1.714 1.714 0 0 1 3.43 0m-17.143 2.76C3.043 12.698 4.423 12 6.163 12c1.131 0 2.648.557 4.105 1.084 1.333.484 2.615.952 3.493.952 1.402 0 1.959-.185 2.083-.288C15.403 14.177 14.13 15 12.45 15c-1.114 0-2.876-.574-4.556-1.123-1.526-.497-2.983-.969-3.814-.969-.716 0-1.303.09-1.509.138m13.286.685-.013.017.013-.012zm-6.266-3.445c-1.74 0-3.12.698-3.591 1.045a8 8 0 0 1 1.508-.137c.832 0 2.289.472 3.815.969 1.68.548 3.445 1.123 4.555 1.123a5.2 5.2 0 0 0 3.408-1.265l-.013.013c-.125.103-.682.287-2.083.287-.879 0-2.16-.467-3.493-.951-1.457-.532-2.974-1.084-4.106-1.084"
          />
        </>
      ) : (
        <>
          <path
            fill="#E0077D"
            d="M19.714 10.286a1.714 1.714 0 1 1-3.429 0 1.714 1.714 0 0 1 3.43 0m-17.143 2.76C3.043 12.698 4.423 12 6.163 12c1.131 0 2.648.557 4.105 1.084 1.333.484 2.615.952 3.493.952 1.402 0 1.959-.185 2.083-.288C15.403 14.177 14.13 15 12.45 15c-1.114 0-2.876-.574-4.556-1.123-1.526-.497-2.983-.969-3.814-.969-.716 0-1.303.09-1.509.138m13.286.685-.013.017.013-.012zm-6.266-3.445c-1.74 0-3.12.698-3.591 1.045a8 8 0 0 1 1.508-.137c.832 0 2.289.472 3.815.969 1.68.548 3.445 1.123 4.555 1.123a5.2 5.2 0 0 0 3.408-1.265l-.013.013c-.125.103-.682.287-2.083.287-.879 0-2.16-.467-3.493-.951-1.457-.532-2.974-1.084-4.106-1.084"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPBR.displayName = 'PBR'
