import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMINA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 17.998c.773.031 1.008-.665 1.198-1.29.045-.151.09-.296.139-.423.864-.262 1.434-1.013 1.581-2.156l.963-6.845c.357-.058.978.047 1.262.125v10.162h1.714V9.425c0-1.136-.36-2-1.285-2.334v-.477c0-.624-.532-1.043-1.089-1.043s-.991.35-1.082.986l-.07.405c-1.01.287-1.532 1.203-1.704 2.53l-.78 6.447a4 4 0 0 1-.847.07 4 4 0 0 1-.846-.07l-.78-6.447c-.172-1.327-.725-2.235-1.736-2.523L8.6 6.557c-.091-.636-.526-.986-1.083-.986S6.43 5.99 6.43 6.614v.48c-.926.335-1.286 1.199-1.286 2.334v8.143h1.714V7.448c.404-.134.84-.192 1.263-.124l.962 6.806c.147 1.142.717 1.893 1.582 2.155.05.127.093.272.139.423.19.626.424 1.32 1.197 1.29m0-1.501a4.3 4.3 0 0 1-.765-.057c.064.498.18 1.063.765 1.137.585-.075.701-.639.765-1.137q-.38.061-.765.057m-5.571.645h-.857V9.428c0-.963.395-1.495.857-1.782zm2.21-9.721c.676.247 1.07.86 1.217 2.007l.743 6.312c-.738-.535-.852-.67-.977-1.646zm-1.782-.452v-.352c0-.45.365-.618.66-.618.218 0 .535.112.603.589l.023.269c-.429-.056-.868.01-1.286.112m10.715 10.174h.857V9.428c0-.963-.395-1.54-.857-1.827zm-2.24-9.733c-.677.248-1.042.872-1.188 2.018l-.743 6.313c.738-.536.853-.671.977-1.646zm1.811-.47v-.323c0-.45-.365-.618-.66-.618-.217 0-.534.112-.603.589l-.053.272c.44-.053.886-.026 1.316.08"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MINA__a)"
            d="M12 17.998c.773.031 1.007-.665 1.197-1.29.046-.151.09-.296.14-.423.864-.262 1.434-1.013 1.58-2.156l.963-6.845c.358-.058.979.047 1.263.125v10.162h1.714V9.425c0-1.136-.36-2-1.286-2.334v-.477c0-.624-.531-1.043-1.088-1.043-.558 0-.992.35-1.083.986l-.069.405c-1.01.287-1.533 1.203-1.704 2.53l-.781 6.447a4 4 0 0 1-.846.07 4 4 0 0 1-.846-.07l-.781-6.447c-.172-1.327-.724-2.235-1.735-2.523l-.039-.412c-.09-.636-.525-.986-1.082-.986s-1.089.419-1.089 1.043v.48c-.925.335-1.285 1.199-1.285 2.334v8.143h1.714V7.448c.404-.134.84-.192 1.262-.124l.963 6.806c.147 1.142.717 1.893 1.581 2.155.05.127.093.272.14.423.19.626.424 1.32 1.197 1.29m0-1.501a4.3 4.3 0 0 1-.765-.057c.064.498.18 1.063.765 1.137.585-.075.7-.639.765-1.137q-.381.061-.765.057m-5.572.645h-.857V9.428c0-.963.395-1.495.857-1.782zm2.21-9.721c.677.247 1.071.86 1.217 2.007l.744 6.312c-.738-.535-.853-.67-.977-1.646zm-1.781-.452v-.352c0-.45.365-.618.66-.618.217 0 .534.112.602.589l.024.269c-.429-.056-.869.01-1.286.112M17.57 17.143h.857V9.428c0-.963-.395-1.54-.857-1.827zM15.33 7.41c-.676.248-1.041.872-1.187 2.018L13.4 15.74c.738-.536.852-.671.977-1.646zm1.812-.47v-.323c0-.45-.366-.618-.66-.618-.218 0-.535.112-.603.589l-.054.272c.44-.053.886-.026 1.317.08"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="MINA__a"
              x1="12.637"
              x2="12.352"
              y1="5.355"
              y2="16.455"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C2E0F4" />
              <stop offset=".394" stopColor="#E37B44" />
              <stop offset=".561" stopColor="#CE5937" />
              <stop offset="1" stopColor="#8E7DF2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMINA.displayName = 'MINA'
