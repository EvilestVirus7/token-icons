import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconZCX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.023 8.623 9.42 10.072l2.923 3.214h-7.2a5.15 5.15 0 0 1 5.88-4.663m1.307.369-.484.437h1.286a5 5 0 0 0-.802-.437m2.143 1.722H11.71l2.871 3.215-3.043 2.786H9.772l2.43-2.143H5.199a5.155 5.155 0 1 0 9.27-3.857z"
          />
          <path
            fill="currentColor"
            d="M18.802 9.429h-6.956l2.379-2.143h-1.723L9.42 10.072l2.923 3.214H9.532a5.151 5.151 0 0 1 4.182-8.143 5.15 5.15 0 0 1 5.083 4.286zm.055 1.285H11.71l2.871 3.215-1.585 1.448a5.153 5.153 0 0 0 5.862-4.663m-7.161 4.303.506-.445H10.87q.392.26.827.445"
          />
          <path
            fill="currentColor"
            d="M13.132 9.429a5.4 5.4 0 0 0-.802-.437l-.484.437zm-.789 3.857L9.43 10.072l1.598-1.449a5.2 5.2 0 0 0-2.237.171 5.14 5.14 0 0 0 .746 4.492zm2.121-2.572H11.71l2.863 3.215-1.582 1.448a5.2 5.2 0 0 0 2.22-.171 5.14 5.14 0 0 0-.746-4.491m-3.595 3.858q.391.258.827.445l.501-.445z"
          />
        </>
      ) : (
        <>
          <path
            fill="#05F1A4"
            d="M11.023 8.623 9.42 10.072l2.923 3.214h-7.2a5.15 5.15 0 0 1 5.88-4.663m1.307.369-.485.437h1.286a5 5 0 0 0-.801-.437m2.143 1.722h-2.765l2.872 3.215-3.043 2.786H9.77l2.43-2.143H5.198a5.155 5.155 0 1 0 9.27-3.857z"
          />
          <path
            fill="#00AFA4"
            d="M18.801 9.429h-6.956l2.379-2.143h-1.723L9.42 10.072l2.923 3.214H9.53a5.151 5.151 0 0 1 4.183-8.143 5.15 5.15 0 0 1 5.083 4.286zm.056 1.285h-7.149l2.872 3.215-1.586 1.448a5.153 5.153 0 0 0 5.863-4.663m-7.162 4.303.506-.445h-1.333q.394.26.827.445"
          />
          <path
            fill="#01D5A3"
            d="M13.131 9.429a5.4 5.4 0 0 0-.801-.437l-.485.437zm-.788 3.857-2.915-3.214 1.599-1.449a5.2 5.2 0 0 0-2.237.171 5.14 5.14 0 0 0 .745 4.492zm2.121-2.572h-2.756l2.863 3.215-1.581 1.448a5.2 5.2 0 0 0 2.22-.171 5.14 5.14 0 0 0-.746-4.491m-3.596 3.858q.392.258.827.445l.502-.445z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconZCX.displayName = 'ZCX'
