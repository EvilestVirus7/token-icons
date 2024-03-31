import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconWEFI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.402 9.857c.047-.806.582-2.571 2.318-2.571.403 0 .892.163 1.084.248L19.65 8.73a1.7 1.7 0 0 0-.758-.18c-.438 0-.832.21-1.093 1.307h2.344l-.686 4.714h-1.414l.557-3.857h-.956l-.544 3.857h-1.414l.583-3.857h-1.016l.171-.857zM4.17 11.34a.742.742 0 1 0 0-1.483.742.742 0 0 0 0 1.483m-.424.403c.253.068.848.115 1.238-.257l.223 1.024L6.72 9.857h.88l.437 2.653 1.491-2.653h1.47l-2.773 4.714h-.968l-.514-2.468-1.385 2.468h-.913zm8.211.685h3.223c.142-.83-.073-2.57-2.083-2.57-2.511 0-2.597 2.172-2.597 2.63 0 .46.232 2.083 2.4 2.083.819 0 1.492-.248 1.723-.368l.266-1.209c-.296.176-1.059.523-1.745.523-.857 0-1.26-.386-1.187-1.088m.202-.857H13.8c.043-.287-.03-.857-.664-.857-.63 0-.913.57-.977.857"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#36FEBC"
            d="M16.402 9.857c.047-.806.582-2.571 2.318-2.571.403 0 .892.163 1.084.248L19.65 8.73a1.7 1.7 0 0 0-.758-.18c-.438 0-.832.21-1.093 1.307h2.344l-.686 4.714h-1.414l.557-3.857h-.956l-.544 3.857h-1.414l.583-3.857h-1.016l.171-.857zM4.17 11.34a.742.742 0 1 0 0-1.483.742.742 0 0 0 0 1.483m-.424.403c.253.068.848.115 1.238-.257l.223 1.024L6.72 9.857h.88l.437 2.653 1.491-2.653h1.47l-2.773 4.714h-.968l-.514-2.468-1.385 2.468h-.913zm8.211.685h3.223c.142-.83-.073-2.57-2.083-2.57-2.511 0-2.597 2.172-2.597 2.63 0 .46.232 2.083 2.4 2.083.819 0 1.492-.248 1.723-.368l.266-1.209c-.296.176-1.059.523-1.745.523-.857 0-1.26-.386-1.187-1.088m.202-.857H13.8c.043-.287-.03-.857-.664-.857-.63 0-.913.57-.977.857"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWEFI.displayName = 'WEFI'
