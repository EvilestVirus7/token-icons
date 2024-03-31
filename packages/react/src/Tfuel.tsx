import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTFUEL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.373 20.572c-2.186-.429-6.519-2.375-6.373-6.703h.008c-.043-.857.352-3.013 2.276-4.757 2.409-2.182 2.953-2.91 2.854-5.683.879.514 2.636 2.061 2.679 4.114a7.8 7.8 0 0 1-.369 2.036c-.347 1.02.227 1.877 1.085 1.92.865.038 1.5-.562 1.555-1.62.686.685 2.032 2.537 1.912 4.474-.155 2.421-1.359 3.287-2.109 3.746-.23.142-.538.258-.878.387-.922.35-2.086.793-2.64 2.086m3.454-15.198v.618c-.005.102-.099.398-.429.732-.325.339-.407.858-.407 1.072a1.48 1.48 0 0 0 1.012 1.41c.11-.298.309-.555.57-.737.342-.189.351-.609.342-.815a4.1 4.1 0 0 0-1.088-2.28M8.57 12.43v1.714h2.572v3h1.714v-3h2.571V12.43z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TFUEL__a)"
            d="M12.373 20.572c-2.186-.429-6.519-2.375-6.373-6.703h.008c-.043-.857.352-3.013 2.276-4.757 2.409-2.182 2.953-2.91 2.854-5.683.879.514 2.636 2.061 2.679 4.114a7.8 7.8 0 0 1-.369 2.036c-.347 1.02.227 1.877 1.085 1.92.865.038 1.5-.562 1.555-1.62.686.685 2.032 2.537 1.912 4.474-.155 2.421-1.359 3.287-2.109 3.746-.23.142-.538.258-.878.387-.922.35-2.086.793-2.64 2.086m3.454-15.198v.618c-.005.102-.099.398-.429.732-.325.339-.407.858-.407 1.072a1.48 1.48 0 0 0 1.012 1.41c.11-.298.309-.555.57-.737.342-.189.351-.609.342-.815a4.1 4.1 0 0 0-1.088-2.28M8.57 12.43v1.714h2.572v3h1.714v-3h2.571V12.43z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="TFUEL__a"
              x1="14.992"
              x2="5.946"
              y1="4.641"
              y2="17.021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EE6833" />
              <stop offset="1" stopColor="#F2A23E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTFUEL.displayName = 'TFUEL'
