import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMNGO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.986 13.946c-.678 1.598-1.98 2.657-3.562 2.816-.034 0-.471.038-.707.021a9.5 9.5 0 0 0 4.089 1.569c.471.047 1.007.085 1.543.072.192-.484.3-1.041.27-1.671-.073-1.466.792-2.22 1.73-2.606a9.4 9.4 0 0 1-1.083-2.443c-.733.193-1.663.793-2.276 2.242z"
          />
          <path
            fill="currentColor"
            d="M14.589 16.74a4.1 4.1 0 0 1-.288 1.689c1.389-.034 2.842-.429 3.215-1.907.077-.317.085-.66-.043-.956-.129-.287-.373-.51-.592-.742a5.5 5.5 0 0 1-.557-.707c-.934.386-1.808 1.157-1.736 2.623m.626-5.198c-.214-.557-.394-1.123-.668-1.646a6.7 6.7 0 0 0-1.243-1.599 4.05 4.05 0 0 1-1.847-.394c-.6.831-1.277 2.237-.656 3.84.921 2.37-.943 3.99-2.143 4.993l.06.043q.337.03.673-.009c1.586-.158 2.961-1.243 3.643-2.837.617-1.448 1.513-1.997 2.241-2.186zm-7.83-3.155A5.44 5.44 0 0 0 6 12.112a5 5 0 0 0 .728 2.511c1.93-1.898 1.235-4.731.656-6.236"
          />
          <path
            fill="currentColor"
            d="M10.834 11.743c-.621-1.607.043-3 .635-3.831a3.4 3.4 0 0 1-1.025-.798 4.12 4.12 0 0 0-3.128 1.342c.565 1.474 1.247 4.243-.635 6.099a7.5 7.5 0 0 0 2.01 2.207c1.196-1.003 3.065-2.649 2.143-5.015zm2.323-5.541c1.303.505 2.216.642 2.88.621l.017-.013c-2.464-4.131-5.691-.878-5.691-.878l.004.008a5.23 5.23 0 0 1 2.786.257z"
          />
          <path
            fill="currentColor"
            d="M13.174 6.172c-1.084-.42-2.1-.403-2.807-.232 1.856 3.193 5.379 1.063 5.666.883-.66.021-1.556-.146-2.859-.651"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MNGO__a)"
            d="M12.986 13.946c-.678 1.598-1.98 2.657-3.562 2.816-.034 0-.471.038-.707.021a9.5 9.5 0 0 0 4.089 1.569c.471.047 1.007.085 1.543.072.192-.484.3-1.041.27-1.671-.073-1.466.792-2.22 1.73-2.606a9.4 9.4 0 0 1-1.083-2.443c-.733.193-1.663.793-2.276 2.242z"
          />
          <path
            fill="url(#MNGO__b)"
            d="M14.589 16.74a4.1 4.1 0 0 1-.288 1.689c1.389-.034 2.842-.429 3.215-1.907.077-.317.085-.66-.043-.956-.129-.287-.373-.51-.592-.742a5.5 5.5 0 0 1-.557-.707c-.934.386-1.808 1.157-1.736 2.623"
          />
          <path
            fill="url(#MNGO__c)"
            d="M15.214 11.542c-.214-.557-.394-1.123-.668-1.646a6.7 6.7 0 0 0-1.243-1.599 4.05 4.05 0 0 1-1.847-.394c-.6.831-1.277 2.237-.656 3.84.921 2.37-.943 3.99-2.143 4.993l.06.043q.337.03.673-.009c1.586-.158 2.961-1.243 3.643-2.837.617-1.448 1.513-1.997 2.241-2.186z"
          />
          <path
            fill="url(#MNGO__d)"
            d="M7.384 8.387A5.44 5.44 0 0 0 6 12.112a5 5 0 0 0 .728 2.511c1.93-1.898 1.235-4.731.656-6.236"
          />
          <path
            fill="url(#MNGO__e)"
            d="M10.834 11.743c-.621-1.607.043-3 .635-3.831a3.4 3.4 0 0 1-1.025-.798 4.12 4.12 0 0 0-3.128 1.342c.565 1.474 1.247 4.243-.635 6.099a7.5 7.5 0 0 0 2.01 2.207c1.196-1.003 3.065-2.649 2.143-5.015z"
          />
          <path
            fill="url(#MNGO__f)"
            d="M13.157 6.202c1.303.505 2.216.642 2.88.621l.017-.013c-2.464-4.131-5.691-.878-5.691-.878l.004.008a5.23 5.23 0 0 1 2.786.257z"
          />
          <path
            fill="#AFD803"
            d="M13.174 6.172c-1.084-.42-2.1-.403-2.807-.232 1.856 3.193 5.379 1.063 5.666.883-.66.021-1.556-.146-2.859-.651"
          />
          <defs>
            <linearGradient
              id="MNGO__a"
              x1="3.64"
              x2="18.316"
              y1="15.302"
              y2="12.6"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".21" stopColor="#E54033" />
              <stop offset=".84" stopColor="#FECA1A" />
            </linearGradient>
            <linearGradient
              id="MNGO__b"
              x1="7.076"
              x2="17.388"
              y1="11.558"
              y2="11.643"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".4" stopColor="#FECA1A" />
              <stop offset="1" stopColor="#AFD803" />
            </linearGradient>
            <linearGradient
              id="MNGO__c"
              x1="4.86"
              x2="13.468"
              y1="18.672"
              y2="5.226"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".16" stopColor="#E54033" />
              <stop offset=".84" stopColor="#FECA1A" />
            </linearGradient>
            <linearGradient
              id="MNGO__d"
              x1="12.584"
              x2="12.369"
              y1="6.176"
              y2="17.492"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FECA1A" />
              <stop offset=".76" stopColor="#E54033" />
            </linearGradient>
            <linearGradient
              id="MNGO__e"
              x1="14.163"
              x2="12.819"
              y1="5.569"
              y2="14.417"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".16" stopColor="#FECA1A" />
              <stop offset="1" stopColor="#E54033" />
            </linearGradient>
            <linearGradient
              id="MNGO__f"
              x1="6.644"
              x2="20.107"
              y1="5.687"
              y2="7.267"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".15" stopColor="#6CBF00" />
              <stop offset="1" stopColor="#AFD803" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMNGO.displayName = 'MNGO'
