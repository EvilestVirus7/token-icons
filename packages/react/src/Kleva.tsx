import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconKLEVA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.593 14.297 2.306 4.076c.043.072.145.072.184 0l4.753-8.4a.17.17 0 0 0 0-.163l-2.357-4.157a.16.16 0 0 0-.133-.082H5.674a.107.107 0 0 0-.09.163l1.908 3.274a.105.105 0 0 0 .171.018l2.1-2.152a.05.05 0 0 1 .034-.017c.03-.004.065.021.06.056q.002.012-.008.025l-4.256 7.196a.17.17 0 0 0 0 .163m8.559 2.764 4.255-7.195a.17.17 0 0 0 0-.163l-2.305-4.076a.103.103 0 0 0-.185 0l-4.752 8.4a.17.17 0 0 0 0 .163l2.357 4.157a.15.15 0 0 0 .133.081h4.67a.104.104 0 0 0 .104-.098c0-.022 0-.043-.013-.064l-1.907-3.275a.103.103 0 0 0-.172-.017l-2.1 2.151a.05.05 0 0 1-.034.018.06.06 0 0 1-.042-.015.05.05 0 0 1-.018-.041c0-.009 0-.017.009-.026"
          />
        </>
      ) : (
        <>
          <path
            fill="#1A56FF"
            d="m5.593 14.297 2.305 4.076c.043.072.146.072.185 0l4.752-8.4a.17.17 0 0 0 0-.163l-2.357-4.157a.16.16 0 0 0-.133-.082H5.674a.107.107 0 0 0-.09.163l1.907 3.274a.105.105 0 0 0 .172.018l2.1-2.152a.05.05 0 0 1 .034-.017c.03-.004.064.021.06.056 0 .008 0 .017-.009.025l-4.255 7.196a.17.17 0 0 0 0 .163m8.558 2.764 4.256-7.195a.17.17 0 0 0 0-.163L16.1 5.627a.103.103 0 0 0-.184 0l-4.753 8.4a.17.17 0 0 0 0 .163l2.357 4.157a.15.15 0 0 0 .133.081h4.671a.104.104 0 0 0 .103-.098c0-.022 0-.043-.013-.064l-1.907-3.275a.103.103 0 0 0-.171-.017l-2.1 2.151a.05.05 0 0 1-.034.018.06.06 0 0 1-.043-.015.05.05 0 0 1-.017-.041q-.002-.013.008-.026"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconKLEVA.displayName = 'KLEVA'
