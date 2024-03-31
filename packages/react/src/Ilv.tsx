import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconILV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.379 10.007c-.056-.06-.086-.116-.026-.193A8.5 8.5 0 0 0 9.99 6.287c.107-.519.146-1.046.189-1.569.021-.287.043-.574.077-.861h.03v6.557c-.004.827-.017 3.129 0 4.474l.013.772.008.527c.005.33.095.634.317.891q.117.136.215.283c.068.099.068.193-.043.27a64 64 0 0 0-2.58 1.937l-.073.03c.154-.338.261-.655.373-.968v-.009A9.8 9.8 0 0 0 9 15.347v-1.684l.005-1.728c-.01-.655-.146-1.435-.626-1.928m5.336 3.077V7.611c.008-.647.004-1.311 0-1.971V3.857h.038c.099.956.206 1.911.42 2.85a8.2 8.2 0 0 0 1.346 2.936c.18.252.18.257 0 .488l-.009.009c-.386.493-.505 1.183-.505 1.795L15 15.343c0 .994.21 1.928.429 2.892l.085.386c.065.287.215.686.343.973-.06.004-.09-.021-.12-.051l-.017-.013a60 60 0 0 0-2.503-1.895c-.12-.08-.137-.17-.06-.282a1 1 0 0 1 .09-.12 1.74 1.74 0 0 0 .467-1.286v-2.871zM9 19.714v-.021c.454-.335.913-.652 1.372-.969.488-.33.973-.664 1.448-1.02a.33.33 0 0 1 .18-.077c.06 0 .116.03.18.077.476.356.96.686 1.444 1.02.463.317.922.634 1.376.969v.021l-.025-.013-.052-.026A6.7 6.7 0 0 0 12 18.879c-.956 0-2.091.356-2.923.797l-.047.026z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ILV__a)"
            d="M8.378 10.007c-.055-.06-.085-.116-.025-.193A8.5 8.5 0 0 0 9.99 6.287c.107-.519.145-1.046.188-1.569.022-.287.043-.574.077-.861h.03v6.557c-.004.827-.017 3.129 0 4.474l.013.772.009.527c.004.33.094.634.317.891q.117.136.214.283c.069.099.069.193-.043.27a64 64 0 0 0-2.58 1.937l-.072.03c.154-.338.261-.655.372-.968v-.009A9.8 9.8 0 0 0 9 15.347v-1.684l.004-1.728c-.009-.655-.146-1.435-.626-1.928m5.336 3.077V7.611c.009-.647.004-1.311 0-1.971V3.857h.039c.098.956.205 1.911.42 2.85a8.2 8.2 0 0 0 1.345 2.936c.18.252.18.257 0 .488l-.008.009c-.386.493-.506 1.183-.506 1.795L15 15.343c0 .994.21 1.928.428 2.892l.086.386c.064.287.214.686.343.973-.06.004-.09-.021-.12-.051l-.017-.013a60 60 0 0 0-2.503-1.895c-.12-.08-.137-.17-.06-.282a1 1 0 0 1 .09-.12 1.73 1.73 0 0 0 .467-1.286v-2.871zM9 19.714v-.021c.454-.335.913-.652 1.371-.969.489-.33.973-.664 1.449-1.02a.33.33 0 0 1 .18-.077c.06 0 .115.03.18.077.475.356.96.686 1.444 1.02.463.317.921.634 1.376.969v.021l-.026-.013-.051-.026A6.7 6.7 0 0 0 12 18.879c-.956 0-2.092.356-2.923.797l-.047.026z"
          />
          <defs>
            <linearGradient
              id="ILV__a"
              x1="12"
              x2="12"
              y1="3.857"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5D2872" />
              <stop offset=".49" stopColor="#3A2F71" />
              <stop offset="1" stopColor="#232651" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconILV.displayName = 'ILV'
