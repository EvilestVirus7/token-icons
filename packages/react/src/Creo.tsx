import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCREO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.429 4.286v2.091L7.967 9.034a.48.48 0 0 0-.253.416v5.079c0 .17.052.274.197.364l4.402 2.618c.15.09.334.09.484 0l3.9-2.378 1.732 1.294-5.388 3.159a.96.96 0 0 1-.968-.009L6.47 16.178a.99.99 0 0 1-.47-.835v-6.75c0-.347.18-.669.471-.844zm0 2.503v1.47L9.557 9.994c-.094.06-.128.21-.128.322v3.334l-.005.081c-.008.082-.013.15.06.193l2.795 1.68a.31.31 0 0 0 .317 0l2.554-1.56 1.127.845-3.523 2.07a.62.62 0 0 1-.63-.005L8.46 14.726a.65.65 0 0 1-.317-.549V9.76c0-.228.128-.438.317-.558l3.969-2.408zm.214 6.925a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4.714-4.178a.964.964 0 1 1-1.929 0 .964.964 0 0 1 1.93 0M15 10.714a.428.428 0 1 0 0-.856.428.428 0 0 0 0 .856"
          />
        </>
      ) : (
        <>
          <path
            fill="#39B0F4"
            d="M12.429 4.286v2.091L7.967 9.034a.48.48 0 0 0-.253.416v5.079c0 .17.052.274.197.364l4.402 2.618c.15.09.334.09.484 0l3.9-2.378 1.732 1.294-5.388 3.159a.96.96 0 0 1-.968-.009L6.47 16.178a.99.99 0 0 1-.47-.835v-6.75c0-.347.18-.669.471-.844zm0 2.503v1.47L9.557 9.994c-.094.06-.128.21-.128.322v3.334l-.005.081c-.008.082-.013.15.06.193l2.795 1.68a.31.31 0 0 0 .317 0l2.554-1.56 1.127.845-3.523 2.07a.62.62 0 0 1-.63-.005L8.46 14.726a.65.65 0 0 1-.317-.549V9.76c0-.228.128-.438.317-.558l3.969-2.408zm.214 6.925a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4.714-4.178a.964.964 0 1 1-1.929 0 .964.964 0 0 1 1.93 0M15 10.714a.428.428 0 1 0 0-.856.428.428 0 0 0 0 .856"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCREO.displayName = 'CREO'
