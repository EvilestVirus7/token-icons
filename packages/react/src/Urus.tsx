import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconURUS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.741 8.7 1.659-.968c.051-.035.103-.013.133.025l.012.005a.114.114 0 0 1-.008.158l-1.701 1.817a1.4 1.4 0 0 1-.815.433l-1.5.223c-.237.035-.46.136-.643.291l-.385.33.205.095c.309.141.429.536.258.844l-2.958 5.31c-.141.244-.668.309-.998.309-.317 0-.857-.06-.995-.309l-2.96-5.314a.604.604 0 0 1 .256-.84l.21-.095-.39-.33a1.3 1.3 0 0 0-.643-.291l-1.5-.223c-.312-.048-.6-.2-.814-.433L3.463 7.92a.12.12 0 0 1-.009-.158h.017l-.004-.005c.03-.043.081-.06.133-.025l1.658.968c.395.232.836.3 1.286.3h1.479a3.4 3.4 0 0 1 1.285.313l.849.356c.6-.043 1.243-.163 1.843-.163s1.243.124 1.843.163l.848-.356A3.4 3.4 0 0 1 15.977 9h1.479c.447.018.892-.086 1.285-.3"
          />
          <path
            fill="currentColor"
            d="M11.143 16.715c0 .685.57.857.857.857.428 0 .775-.215.857-.857.214-1.715 1.071-3.643 1.286-4.286.214-.643 1.285-.857 1.285-1.072 0-.36-.428 0-.428-.428 0-.514.57-.93.857-1.072H18l2.288-1.907c.039-.03 0-.094-.047-.068L18 9h-2.143c-.287 0-.917.137-1.071.214-.429.215-2.358 1.072-2.786 1.072-.429 0-2.786-1.072-2.786-1.072S8.537 9 8.143 9H6.428L3.634 7.8c-.043-.017-.086.039-.047.069.664.66 2.04 1.988 2.199 1.988h1.928C8.143 9.857 9 10.5 9 10.93c0 .428-.429.214-.429.428 0 .215.857.643 1.286 1.072.429.428 1.286 3.428 1.286 4.286"
          />
        </>
      ) : (
        <>
          <path
            fill="#82858E"
            d="m18.742 8.7 1.658-.968c.052-.035.103-.013.133.025l.013.005a.114.114 0 0 1-.009.158l-1.701 1.817a1.4 1.4 0 0 1-.814.433l-1.5.223c-.238.035-.46.136-.643.291l-.386.33.206.095c.308.141.428.536.257.844l-2.957 5.31c-.142.244-.669.309-.999.309-.317 0-.857-.06-.994-.309l-2.961-5.314a.604.604 0 0 1 .257-.84l.21-.095-.39-.33a1.3 1.3 0 0 0-.643-.291l-1.5-.223a1.4 1.4 0 0 1-.814-.433L3.463 7.92a.12.12 0 0 1-.008-.158h.017l-.005-.005c.03-.043.082-.06.133-.025l1.66.968c.394.232.836.3 1.286.3h1.478a3.4 3.4 0 0 1 1.286.313l.848.356c.6-.043 1.243-.163 1.843-.163s1.243.124 1.843.163l.849-.356A3.4 3.4 0 0 1 15.978 9h1.479c.448.018.892-.086 1.286-.3"
          />
          <path
            fill="#FEFEFE"
            d="M11.143 16.715c0 .685.57.857.857.857.429 0 .776-.215.857-.857.215-1.715 1.072-3.643 1.286-4.286s1.286-.857 1.286-1.072c0-.36-.429 0-.429-.428 0-.514.57-.93.857-1.072H18l2.29-1.907c.038-.03 0-.094-.047-.068L18 9h-2.143c-.287 0-.917.137-1.071.214-.429.215-2.357 1.072-2.786 1.072S9.215 9.214 9.215 9.214 8.537 9 8.143 9H6.43L3.635 7.8c-.043-.017-.086.039-.048.069.665.66 2.04 1.988 2.199 1.988h1.929C8.143 9.857 9 10.5 9 10.93c0 .428-.428.214-.428.428 0 .215.857.643 1.285 1.072.429.428 1.286 3.428 1.286 4.286"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconURUS.displayName = 'URUS'
