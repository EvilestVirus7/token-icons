import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconEFX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M3.857 11.966c0-4.38 3.171-7.993 7.286-8.538v1.835a6.9 6.9 0 0 1 3 .094V8.07a4.285 4.285 0 0 0-5.979 3.501h.861A3.43 3.43 0 0 1 12 8.597v.866a2.571 2.571 0 0 0 0 5.074v2.584A5.142 5.142 0 1 1 13.286 6.93v-.87A6 6 0 1 0 15 6.574V5.64a6.857 6.857 0 0 1-.857 13.003v1.701a8.4 8.4 0 0 1-1.929.227c-4.616 0-8.357-3.853-8.357-8.605m7.286 4.123a4.29 4.29 0 0 1-2.979-3.66h.861a3.43 3.43 0 0 0 2.118 2.75zm1.285 2.768c.292 0 .575-.017.857-.051v.831a7.4 7.4 0 0 1-1.07.077c-4.004 0-7.274-3.223-7.488-7.285h.857a6.857 6.857 0 0 0 6.844 6.428m-6.844-7.286a6.86 6.86 0 0 1 4.702-6.085v-.943a7.67 7.67 0 0 0-5.56 7.028zm7.273 3.832a3.429 3.429 0 0 0 0-6.806v.866a2.57 2.57 0 0 1 2.109 2.108h-.88a1.714 1.714 0 1 0 0 .857h.88a2.57 2.57 0 0 1-2.11 2.109zm-.429-2.76a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#5158FA"
            d="M3.857 11.966c0-4.38 3.172-7.993 7.286-8.538v1.835a6.9 6.9 0 0 1 3 .094V8.07a4.285 4.285 0 0 0-5.978 3.501h.861A3.43 3.43 0 0 1 12 8.597v.866a2.571 2.571 0 0 0 0 5.074v2.584a5.14 5.14 0 0 1-4.053-7.733 5.14 5.14 0 0 1 5.339-2.458v-.87A6 6 0 1 0 15 6.574V5.64a6.857 6.857 0 0 1-.857 13.003v1.701a8.4 8.4 0 0 1-1.928.227c-4.616 0-8.358-3.853-8.358-8.605m7.286 4.123a4.29 4.29 0 0 1-2.978-3.66h.861a3.43 3.43 0 0 0 2.117 2.75zm1.286 2.768q.435 0 .857-.051v.831a7.4 7.4 0 0 1-1.071.077c-4.003 0-7.273-3.223-7.488-7.285h.858a6.857 6.857 0 0 0 6.844 6.428m-6.844-7.286a6.86 6.86 0 0 1 4.701-6.085v-.943a7.67 7.67 0 0 0-5.559 7.028zm7.272 3.832a3.429 3.429 0 0 0 0-6.806v.866a2.57 2.57 0 0 1 2.109 2.108h-.879a1.714 1.714 0 1 0 0 .857h.879a2.57 2.57 0 0 1-2.109 2.109zm-.428-2.76a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconEFX.displayName = 'EFX'
