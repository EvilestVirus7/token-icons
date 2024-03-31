import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconOPIUM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M4.286 12c.008-1.86 1.071-5.571 5.297-5.571.531.025 1.821.278 2.726 1.08 1.135.998 1.31 1.071 1.89 1.071.462 0 .998-.201 1.208-.3a3.4 3.4 0 0 1 1.209-.257c.63 0 3.098.583 3.098 3.741s-2.43 3.793-3.021 3.793a3.5 3.5 0 0 1-1.402-.283c-.257-.111-.643-.278-1.114-.278-.42 0-1.213.578-1.56.866-.437.428-1.697 1.281-3.219 1.281-1.898 0-5.112-1.423-5.112-5.143m3.428.086c-.038-.956.382-2.872 2.37-2.872h.017c.125 0 .742-.017 1.599.536l.081.052c.849.548 1.277.822 2.246.822.802 0 1.436-.33 1.654-.492a1.84 1.84 0 0 1 .836-.283c.386 0 1.483.377 1.483 1.928 0 1.552-1.14 1.976-1.483 1.976-.274 0-.673-.197-.836-.3a3.36 3.36 0 0 0-1.654-.489 3.26 3.26 0 0 0-1.628.489c-.395.3-1.39.904-2.23.904-1.04 0-2.45-1.054-2.45-2.271z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#OPIUM__a)"
            d="M4.286 12c.009-1.86 1.072-5.571 5.297-5.571.532.025 1.822.278 2.726 1.08 1.136.998 1.311 1.071 1.89 1.071.463 0 .999-.201 1.209-.3a3.4 3.4 0 0 1 1.208-.257c.63 0 3.099.583 3.099 3.741s-2.43 3.793-3.022 3.793a3.5 3.5 0 0 1-1.401-.283c-.257-.111-.643-.278-1.114-.278-.42 0-1.213.578-1.56.866-.438.428-1.698 1.281-3.219 1.281-1.899 0-5.113-1.423-5.113-5.143m3.429.086c-.039-.956.381-2.872 2.37-2.872h.017c.124 0 .741-.017 1.598.536l.082.052c.848.548 1.277.822 2.246.822.801 0 1.435-.33 1.654-.492.251-.161.538-.258.836-.283.385 0 1.482.377 1.482 1.928 0 1.552-1.14 1.976-1.482 1.976-.275 0-.673-.197-.836-.3a3.36 3.36 0 0 0-1.654-.489 3.26 3.26 0 0 0-1.629.489c-.394.3-1.389.904-2.229.904-1.041 0-2.451-1.054-2.451-2.271z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="OPIUM__a"
              x1="4.436"
              x2="19.513"
              y1="12.09"
              y2="12.09"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4FEF8F" />
              <stop offset=".23" stopColor="#FFED03" />
              <stop offset=".34" stopColor="#FD9D37" />
              <stop offset=".46" stopColor="#F62A81" />
              <stop offset=".59" stopColor="#9736B6" />
              <stop offset=".7" stopColor="#6453C5" />
              <stop offset=".83" stopColor="#1A7BD9" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconOPIUM.displayName = 'OPIUM'
