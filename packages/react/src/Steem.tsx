import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSTEEM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.11 6.213c.163.03-.239 1.095-.016 2.309.194 1.042 2.607 5.094 2.51 6.48-.074.878-2.063 2.92-2.27 2.786-.225-.068.602-1.453.297-2.607-.365-1.356-2.488-4.842-2.488-6.384 0-1.124 1.825-2.659 1.966-2.584m4.543-1.594c.208.037-.298 1.393-.015 2.95.246 1.332 3.33 6.494 3.202 8.267-.097 1.11-2.629 3.71-2.897 3.538-.29-.075.767-1.848.373-3.322-.447-1.72-3.166-6.175-3.166-8.134 0-1.444 2.324-3.388 2.51-3.299zm4.7 1.594c.163.03-.239 1.095-.016 2.309.194 1.042 2.607 5.094 2.518 6.48-.074.878-2.063 2.92-2.28 2.786-.222-.068.604-1.453.299-2.607-.358-1.356-2.488-4.842-2.488-6.384 0-1.124 1.825-2.659 1.966-2.584"
          />
        </>
      ) : (
        <>
          <path
            fill="#171FC9"
            d="M7.109 6.213c.164.03-.238 1.095-.015 2.309.194 1.042 2.607 5.094 2.51 6.48-.075.878-2.063 2.92-2.271 2.786-.224-.068.603-1.453.297-2.607-.365-1.356-2.487-4.842-2.487-6.384 0-1.124 1.824-2.659 1.966-2.584m4.543-1.594c.209.037-.298 1.393-.015 2.95.246 1.332 3.33 6.494 3.203 8.267-.097 1.11-2.63 3.71-2.897 3.538-.29-.075.767-1.848.372-3.322-.447-1.72-3.165-6.175-3.165-8.134 0-1.444 2.323-3.388 2.51-3.299zm4.7 1.594c.164.03-.238 1.095-.015 2.309.194 1.042 2.607 5.094 2.517 6.48-.074.878-2.063 2.92-2.279 2.786-.223-.068.604-1.453.298-2.607-.357-1.356-2.487-4.842-2.487-6.384 0-1.124 1.824-2.659 1.966-2.584"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSTEEM.displayName = 'STEEM'
