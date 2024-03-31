import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPNT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.002 5.143c.377 0 .628.098 1.013.49.48.49 1.363.672 2.01.628.516-.035.838.151 1.05.345.153.139.396.54.5 1.09s.713 1.108 1.004 1.318c.297.151.847.606.847 1.25.01.122.003.53-.273 1.151-.119.269-.114.932 0 1.435.108.27.273.748.273 1.005 0 .322-.115.694-.617 1.001-.502.308-1.148.893-1.32 1.596s-.273.879-.503 1.054-.473.264-1.292.279c-.818.014-1.392.351-1.88.76-.39.33-.848.372-1.2.25a5.5 5.5 0 0 1-.649-.437c-.202-.15-.382-.284-.523-.341l-.109-.047c-.221-.098-.419-.185-1.15-.185-.678 0-1.062-.247-1.298-.426-.14-.105-.316-.414-.408-.917s-.77-1.35-1.265-1.603c-.384-.196-.64-.777-.64-1.074s.064-.688.295-1.139c.111-.216.122-1.203-.124-1.683-.275-.536-.114-1.082 0-1.313.131-.264.475-.494.772-.692l.203-.138c.283-.2.612-.67.743-1.104.051-.263.214-.855.458-1.113.306-.322.866-.322 1.566-.322.56 0 1.298-.47 1.629-.732l.085-.062c.171-.128.434-.324.803-.324m-.378 2.337a.86.86 0 0 0-.3.244l-1.107 1.419a.86.86 0 0 1-.383.278l-1.692.615a.856.856 0 0 0-.418 1.285l1.008 1.492c.09.133.14.29.146.45l.062 1.8a.857.857 0 0 0 1.093.794l1.73-.498a.86.86 0 0 1 .474 0l1.73.498a.858.858 0 0 0 1.093-.794l.062-1.8a.86.86 0 0 1 .146-.45l1.008-1.492a.86.86 0 0 0-.418-1.285l-1.692-.614a.86.86 0 0 1-.383-.279l-1.107-1.42a.86.86 0 0 0-1.052-.243"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#3C2966"
            d="M12.002 5.143c.377 0 .628.098 1.013.49.48.49 1.363.672 2.01.628.516-.035.838.151 1.05.345.153.139.396.54.5 1.09s.713 1.108 1.004 1.318c.297.151.847.606.847 1.25.01.122.003.53-.273 1.151-.119.269-.114.932 0 1.435.108.27.273.748.273 1.005 0 .322-.115.694-.617 1.001-.502.308-1.148.893-1.32 1.596s-.273.879-.503 1.054-.473.264-1.292.279c-.818.014-1.392.351-1.88.76-.39.33-.848.372-1.2.25a5.5 5.5 0 0 1-.649-.437c-.202-.15-.382-.284-.523-.341l-.109-.047c-.221-.098-.419-.185-1.15-.185-.678 0-1.062-.247-1.298-.426-.14-.105-.316-.414-.408-.917s-.77-1.35-1.265-1.603c-.384-.196-.64-.777-.64-1.074s.064-.688.295-1.139c.111-.216.122-1.203-.124-1.683-.275-.536-.114-1.082 0-1.313.131-.264.475-.494.772-.692l.203-.138c.283-.2.612-.67.743-1.104.051-.263.214-.855.458-1.113.306-.322.866-.322 1.566-.322.56 0 1.298-.47 1.629-.732l.085-.062c.171-.128.434-.324.803-.324m-.378 2.337a.86.86 0 0 0-.3.244l-1.107 1.419a.86.86 0 0 1-.383.278l-1.692.615a.856.856 0 0 0-.418 1.285l1.008 1.492c.09.133.14.29.146.45l.062 1.8a.857.857 0 0 0 1.093.794l1.73-.498a.86.86 0 0 1 .474 0l1.73.498a.858.858 0 0 0 1.093-.794l.062-1.8a.86.86 0 0 1 .146-.45l1.008-1.492a.86.86 0 0 0-.418-1.285l-1.692-.614a.86.86 0 0 1-.383-.279l-1.107-1.42a.86.86 0 0 0-1.052-.243"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPNT.displayName = 'PNT'
