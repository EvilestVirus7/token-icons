import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconIDRT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.965 7.27a6.9 6.9 0 0 1 1.431 2.261v.006a6.83 6.83 0 0 1 .133 4.566 6.85 6.85 0 0 1-7.054 4.73 6.86 6.86 0 0 1-2.893-.895 6.7 6.7 0 0 1-1.434-1.089A6.857 6.857 0 0 1 9.526 5.607a6.85 6.85 0 0 1 7.439 1.662m-7.39.873h-2.29v6.428h.858V12h1.431l1.518 2.571h1.161l-1.682-2.795c.874-.077 1.212-1.004 1.212-1.816 0-.937-.403-1.569-1.288-1.73a5 5 0 0 0-.92-.087m1.24 1.92c0 .888-.833 1.08-1.44 1.08H8.143V9h1.334c.555.003 1.338.294 1.338 1.062m2.47-.206h-.856v6.429h.857v-2.618c.36.448 1.088.677 1.653.67 1.232.011 2.216-1.046 2.204-2.263.015-1.236-.922-2.282-2.204-2.26-.595-.009-1.34.218-1.653.751zm1.57.857c.635 0 1.43.391 1.43 1.36 0 .802-.447 1.41-1.346 1.423-.9.013-1.29-.517-1.445-.933-.321-.867.354-1.85 1.36-1.85"
          />
        </>
      ) : (
        <>
          <path
            fill="#BB4E42"
            d="M16.965 7.27a6.9 6.9 0 0 1 1.431 2.261v.006a6.83 6.83 0 0 1 .133 4.566 6.85 6.85 0 0 1-7.053 4.73 6.86 6.86 0 0 1-2.893-.895 6.7 6.7 0 0 1-1.434-1.089A6.857 6.857 0 0 1 9.526 5.607a6.85 6.85 0 0 1 7.439 1.662m-7.39.873H7.286v6.428h.857V12h1.432l1.517 2.571h1.162l-1.682-2.795c.874-.077 1.212-1.004 1.212-1.816 0-.937-.404-1.569-1.288-1.73a5 5 0 0 0-.921-.087m1.24 1.92c0 .888-.833 1.08-1.44 1.08H8.144V9h1.335c.555.003 1.338.294 1.338 1.062m2.471-.206h-.857v6.429h.857v-2.618c.36.448 1.088.677 1.654.67 1.231.011 2.215-1.046 2.203-2.263.015-1.236-.922-2.282-2.203-2.26-.595-.009-1.34.218-1.654.751zm1.569.857c.635 0 1.431.391 1.431 1.36 0 .802-.447 1.41-1.346 1.423-.9.013-1.291-.517-1.445-.933-.322-.867.354-1.85 1.36-1.85"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconIDRT.displayName = 'IDRT'
