import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconGAMEFI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.571 7.007 1.423-1.436 2.434 2.46.009-.004 1.419 1.436v.008l-1.419 1.436-.009-.004-2.434 2.46-1.423-1.436 2.439-2.46zm12.857 5.066-1.422-1.436-2.435 2.46-.008-.004-1.419 1.435v.009l1.419 1.436.008-.005 2.435 2.46 1.422-1.435-2.438-2.46zm-5.142 4.92-1.415 1.435-2.443-2.46-2.434 2.46-1.423-1.435 2.439-2.46-.01-.005 1.427-1.435.005.004.008-.004 1.419 1.435v.005zm3.57-11.422 1.422 1.436-2.434 2.46.004.004-1.422 1.436-.005-.004-.008.004-1.419-1.436.004-.004-2.438-2.46 1.418-1.436 2.439 2.46 2.434-2.46z"
          />
        </>
      ) : (
        <>
          <path
            fill="#B9FB01"
            d="m5.571 7.007 1.423-1.436 2.434 2.46.009-.004 1.419 1.436v.008l-1.419 1.436-.009-.004-2.434 2.46-1.423-1.436 2.439-2.46zm12.857 5.066-1.422-1.436-2.435 2.46-.008-.004-1.419 1.435v.009l1.419 1.436.008-.005 2.435 2.46 1.422-1.435-2.438-2.46zm-5.142 4.92-1.415 1.435-2.443-2.46-2.434 2.46-1.423-1.435 2.439-2.46-.01-.005 1.427-1.435.005.004.008-.004 1.419 1.435v.005zm3.57-11.422 1.422 1.436-2.434 2.46.004.004-1.422 1.436-.005-.004-.008.004-1.419-1.436.004-.004-2.438-2.46 1.418-1.436 2.439 2.46 2.434-2.46z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGAMEFI.displayName = 'GAMEFI'
