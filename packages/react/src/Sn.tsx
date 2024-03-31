import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.223 18.849c-.699 0-1.393-.013-2.092 0-.36.012-.608-.198-.793-.626-.634-1.466-1.28-2.923-1.92-4.384-.265-.613-.128-.978.386-.982.917-.008 1.835.009 2.747 0 .373 0 .626.24.815.686a319 319 0 0 0 1.401 3.184s.112.27.206.412a.483.483 0 0 0 .647.081c.274-.197.244-.428.086-.788-.497-1.136-1.008-2.268-1.492-3.416-.085-.21-.18-.472-.034-.703.107-.176.283-.313.42-.313.9 0 1.804.013 2.709 0 .36-.004.617.184.797.613.308.716.612 1.423.934 2.121.163.352.129.63-.069.918-.647.934-1.273 1.894-1.941 2.798a1 1 0 0 1-.686.381c-.703.048-1.414.018-2.121.018m-.467-13.693c.685 0 1.367.013 2.048-.009.386-.008.66.184.862.656.634 1.466 1.285 2.918 1.92 4.38.257.587.124.956-.369.96-.917.008-1.83 0-2.743 0-.6 0-.857-.703-.857-.703l-1.44-3.227s-.111-.274-.18-.386a.46.46 0 0 0-.608-.086c-.292.202-.228.536-.086.853.445 1.012.934 2.019 1.371 3.043.137.339.42.69.18 1.076-.141.231-.428.291-.75.287a64 64 0 0 0-2.395 0c-.373.009-.643-.18-.832-.634a64 64 0 0 0-.913-2.07c-.167-.369-.137-.656.077-.96.63-.905 1.235-1.843 1.886-2.722a1.12 1.12 0 0 1 .742-.437c.694-.06 1.392-.021 2.087-.021"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFA529"
            d="M12.223 18.849c-.698 0-1.393-.013-2.091 0-.36.012-.609-.198-.793-.626-.634-1.466-1.281-2.923-1.92-4.384-.266-.613-.129-.978.386-.982.917-.008 1.834.009 2.747 0 .373 0 .626.24.814.686a319 319 0 0 0 1.402 3.184s.111.27.205.412a.483.483 0 0 0 .647.081c.275-.197.245-.428.086-.788-.497-1.136-1.007-2.268-1.491-3.416-.086-.21-.18-.472-.035-.703.108-.176.283-.313.42-.313.9 0 1.805.013 2.709 0 .36-.004.617.184.797.613.309.716.613 1.423.934 2.121.163.352.129.63-.068.918-.647.934-1.273 1.894-1.942 2.798a.98.98 0 0 1-.685.381c-.703.048-1.415.018-2.122.018"
          />
          <path
            fill="#1740FF"
            d="M11.756 5.156c.686 0 1.367.013 2.049-.009.385-.008.66.184.861.656.634 1.466 1.286 2.918 1.92 4.38.257.587.124.956-.368.96-.918.008-1.83 0-2.743 0-.6 0-.857-.703-.857-.703l-1.44-3.227s-.112-.274-.18-.386a.46.46 0 0 0-.609-.086c-.291.202-.227.536-.086.853.446 1.012.935 2.019 1.372 3.043.137.339.42.69.18 1.076-.142.231-.429.291-.75.287a64 64 0 0 0-2.396 0c-.373.009-.643-.18-.831-.634a64 64 0 0 0-.913-2.07c-.167-.369-.137-.656.077-.96.63-.905 1.234-1.843 1.886-2.722a1.12 1.12 0 0 1 .741-.437c.694-.06 1.393-.021 2.087-.021"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSN.displayName = 'SN'
