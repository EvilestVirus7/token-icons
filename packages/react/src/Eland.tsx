import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconELAND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.949 6.63 6.026 8.858a.02.02 0 0 1-.017-.004L6 8.846v-.013c.874-6.043 11.07-6.069 12-.039q.006.063-.051.043L12.034 6.63a.12.12 0 0 0-.085 0"
          />
          <path
            fill="currentColor"
            d="M17.323 11.717a.1.1 0 0 1-.052.047l-5.245 2.563a.07.07 0 0 1-.065 0l-5.237-2.563a.1.1 0 0 1-.051-.047 10 10 0 0 1-.57-1.573c0-.017.004-.034.021-.043l5.829-2.185a.1.1 0 0 1 .077 0l5.837 2.172c.009 0 .017.01.017.013a9.4 9.4 0 0 1-.565 1.612z"
          />
          <path
            fill="currentColor"
            d="M11.979 18.964a.04.04 0 0 0 .008-.025.04.04 0 0 0-.008-.03 59 59 0 0 1-3.138-3.703 16 16 0 0 1-1.097-1.603q-.025-.051.026-.026l4.187 2.044a.1.1 0 0 0 .086 0l4.174-2.031q.09-.045.039.039c-1.179 1.885-2.722 3.642-4.235 5.284a.043.043 0 0 0 0 .055c.258.25.815.905.596 1.278-.184.313-.647.411-.964.248-.72-.373 0-1.191.326-1.53"
          />
        </>
      ) : (
        <>
          <path
            fill="#066"
            d="M11.949 6.63 6.026 8.858a.02.02 0 0 1-.017-.004L6 8.846v-.013c.874-6.043 11.07-6.069 12-.039q.006.063-.051.043L12.034 6.63a.12.12 0 0 0-.085 0"
          />
          <path
            fill="#066"
            d="M17.323 11.717a.1.1 0 0 1-.052.047l-5.245 2.563a.07.07 0 0 1-.065 0l-5.237-2.563a.1.1 0 0 1-.051-.047 10 10 0 0 1-.57-1.573c0-.017.004-.034.021-.043l5.829-2.185a.1.1 0 0 1 .077 0l5.837 2.172c.009 0 .017.01.017.013a9.4 9.4 0 0 1-.565 1.612z"
          />
          <path
            fill="#066"
            d="M11.979 18.964a.04.04 0 0 0 .008-.025.04.04 0 0 0-.008-.03 59 59 0 0 1-3.138-3.703 16 16 0 0 1-1.097-1.603q-.025-.051.026-.026l4.187 2.044a.1.1 0 0 0 .086 0l4.174-2.031q.09-.045.039.039c-1.179 1.885-2.722 3.642-4.235 5.284a.043.043 0 0 0 0 .055c.258.25.815.905.596 1.278-.184.313-.647.411-.964.248-.72-.373 0-1.191.326-1.53"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconELAND.displayName = 'ELAND'
