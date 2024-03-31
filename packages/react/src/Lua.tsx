import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconLUA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.636 5.34c-.403 1.327.117 2.275.475 2.614.657-.497.946-1.384 1.05-2.04a6.86 6.86 0 0 1 3.696 6.089c0 1.5-.48 2.887-1.297 4.015q.02-.282.016-.589l.003-.025v-.99a.111.111 0 0 0-.222 0v.68c-.873.139-2.516 1.023-3.032 3.364a7 7 0 0 1-.715.215c-.646-2.356-2.274-3.01-3.102-3.032v-.847a.111.111 0 0 0-.222 0v.952l-.004.003.004.04q0 .01.003.02c.195 1.564.777 2.506 1.438 3.048a6.86 6.86 0 0 1-6.584-6.854 6.858 6.858 0 0 1 8.493-6.664m-.15 5.3c-.706-.304-1.912-1.465-1.118-3.688v-.625a.11.11 0 0 1 .19-.079q.031.033.032.079v.606c.63.383 1.655 1.63.896 3.707m2.563-3.322c.135 2.388-1.366 3.157-2.134 3.244-.124-2.176 1.18-3.08 1.9-3.282v-.638a.11.11 0 1 1 .221 0v.65l-.002.022zm-4.443 2.62v-.676a.111.111 0 0 0-.222 0v.877c-.025 2.513 1.545 3.173 2.349 3.186 0-2.39-1.39-3.246-2.127-3.388m2.341 3.328c.819-.014 2.432-.699 2.345-3.328l.004-.027V9.16a.111.111 0 0 0-.222 0v.716c-.737.142-2.127.998-2.127 3.388m-2.798-.67v-.69a.11.11 0 1 0-.222 0v.816q-.001.014.004.027c.112 2.968 1.992 3.63 2.925 3.587-.171-2.77-1.86-3.643-2.707-3.74m2.866 3.719c.937.011 2.803-.716 2.805-3.714a.1.1 0 0 0 .006-.036v-.885a.111.111 0 0 0-.222 0v.807c-.841.12-2.509 1.045-2.59 3.828"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FABB47"
            d="M13.635 5.34c-.403 1.327.117 2.275.475 2.614.657-.497.946-1.384 1.05-2.04a6.86 6.86 0 0 1 3.697 6.089c0 1.5-.481 2.887-1.297 4.015q.018-.282.016-.589l.002-.025v-.99a.111.111 0 0 0-.221 0v.68c-.874.139-2.517 1.023-3.032 3.364a7 7 0 0 1-.715.215c-.647-2.356-2.275-3.01-3.103-3.032v-.847a.11.11 0 0 0-.187-.074.1.1 0 0 0-.035.074v.952l-.004.003.004.04q0 .01.003.02c.196 1.564.777 2.506 1.438 3.048a6.86 6.86 0 0 1-6.583-6.854 6.858 6.858 0 0 1 8.492-6.664m-.15 5.3c-.706-.304-1.911-1.465-1.117-3.688v-.625a.111.111 0 0 1 .222 0v.606c.63.383 1.654 1.63.895 3.707m2.564-3.322c.135 2.388-1.366 3.157-2.134 3.244-.125-2.176 1.179-3.08 1.899-3.282v-.638a.11.11 0 1 1 .222 0v.65q0 .011-.003.022zm-4.444 2.62v-.676a.111.111 0 0 0-.221 0v.877c-.025 2.513 1.545 3.173 2.348 3.186 0-2.39-1.39-3.246-2.127-3.388m2.342 3.328c.818-.014 2.431-.699 2.345-3.328l.003-.027V9.16a.111.111 0 0 0-.222 0v.716c-.737.142-2.126.998-2.126 3.388m-2.799-.67v-.69a.11.11 0 1 0-.221 0v.816q0 .014.003.027c.112 2.968 1.992 3.63 2.925 3.587-.171-2.77-1.86-3.643-2.707-3.74m2.866 3.719c.937.011 2.804-.716 2.805-3.714a.1.1 0 0 0 .006-.036v-.885a.111.111 0 0 0-.221 0v.807c-.842.12-2.51 1.045-2.59 3.828"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLUA.displayName = 'LUA'
