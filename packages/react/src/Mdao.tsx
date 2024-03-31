import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMDAO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 4.714a7.26 7.26 0 0 1 6.729 4.5 7.27 7.27 0 0 1-1.577 7.937 7.274 7.274 0 0 1-10.303 0 7.26 7.26 0 0 1-1.582-7.94A7.26 7.26 0 0 1 9.21 5.266 7.4 7.4 0 0 1 12 4.714M12 6a6 6 0 0 0-2.828.729c2.25.437 3.63-.03 4.594-.472A5.9 5.9 0 0 0 12 6M7.012 8.696a6.1 6.1 0 0 1 1.354-1.444c3.257.822 4.989-.026 6.129-.583h.004l.128-.065a6 6 0 0 1 1.83 1.398c-2.031-.438-3.047-.13-4.23.227-1.152.347-2.472.745-5.215.467m5.417.188c1.226-.368 2.263-.681 4.671-.017.24.386.433.802.583 1.23-2.541-1.328-3.866-.617-5.357.18-1.414.759-2.987 1.607-6.193.476.107-.493.279-.964.502-1.41 3.085.36 4.534-.077 5.785-.454h.009zm.227 1.998c1.414-.76 2.657-1.428 5.259.132.055.3.085.609.085.918a5 5 0 0 0-.887-.472 4.12 4.12 0 0 0-3.446.154c-1.242.587-2.614 1.222-3.947 1.543-1.294.313-2.558.335-3.643-.265l-.008.008a6 6 0 0 1-.043-1.457c3.411 1.166 5.104.257 6.63-.557zm4.2 1.217c.42.171.788.407 1.097.643a6 6 0 0 1-.343 1.384 5.1 5.1 0 0 0-1.697-.557 4.02 4.02 0 0 0-2.584.458c-1.22.707-2.57 1.16-3.969 1.329-.883.077-1.77-.013-2.571-.386a6 6 0 0 1-.527-1.234c1.127.441 2.365.385 3.617.085 1.406-.338 2.811-.985 4.084-1.585a3.46 3.46 0 0 1 2.893-.137M7.47 15.922a6 6 0 0 0 1.685 1.362c2.84-1.572 4.645-1.071 6.342-.608l.193.056a6.1 6.1 0 0 0 1.637-1.98 4.4 4.4 0 0 0-1.508-.506 3.36 3.36 0 0 0-2.156.377 11.1 11.1 0 0 1-4.243 1.414 6.4 6.4 0 0 1-1.954-.115zm2.482 1.718c2.143-1.037 3.621-.771 4.984-.403A5.94 5.94 0 0 1 12 18a6 6 0 0 1-2.048-.36"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF5B04"
            d="M12 4.714a7.26 7.26 0 0 1 6.728 4.5 7.27 7.27 0 0 1-1.577 7.937 7.274 7.274 0 0 1-10.303 0 7.26 7.26 0 0 1-1.581-7.94A7.26 7.26 0 0 1 9.21 5.266 7.4 7.4 0 0 1 12 4.714M12 6a6 6 0 0 0-2.829.729c2.25.437 3.63-.03 4.595-.472A5.9 5.9 0 0 0 12 6M7.01 8.696a6.1 6.1 0 0 1 1.354-1.444c3.258.822 4.989-.026 6.129-.583h.004l.129-.065a6 6 0 0 1 1.83 1.398c-2.032-.438-3.047-.13-4.23.227-1.153.347-2.473.745-5.216.467m5.417.188c1.226-.368 2.263-.681 4.672-.017.24.386.433.802.583 1.23-2.542-1.328-3.866-.617-5.357.18-1.415.759-2.988 1.607-6.193.476.107-.493.278-.964.501-1.41 3.086.36 4.534-.077 5.786-.454h.008zm.227 1.998c1.415-.76 2.658-1.428 5.259.132.056.3.086.609.086.918a5 5 0 0 0-.887-.472 4.12 4.12 0 0 0-3.446.154c-1.243.587-2.614 1.222-3.947 1.543-1.295.313-2.559.335-3.643-.265l-.009.008a6 6 0 0 1-.043-1.457c3.412 1.166 5.105.257 6.63-.557zm4.2 1.217c.42.171.789.407 1.098.643a6 6 0 0 1-.343 1.384 5.1 5.1 0 0 0-1.697-.557 4.02 4.02 0 0 0-2.585.458 10.4 10.4 0 0 1-3.968 1.329c-.883.077-1.77-.013-2.572-.386a6 6 0 0 1-.527-1.234c1.127.441 2.366.385 3.617.085 1.406-.338 2.812-.985 4.085-1.585a3.46 3.46 0 0 1 2.893-.137M7.47 15.922a6 6 0 0 0 1.684 1.362c2.842-1.572 4.646-1.071 6.343-.608l.193.056a6.1 6.1 0 0 0 1.637-1.98 4.4 4.4 0 0 0-1.509-.506 3.36 3.36 0 0 0-2.155.377 11.1 11.1 0 0 1-4.243 1.414 6.4 6.4 0 0 1-1.955-.115zm2.48 1.718c2.143-1.037 3.622-.771 4.984-.403A5.94 5.94 0 0 1 12 18a6 6 0 0 1-2.049-.36"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMDAO.displayName = 'MDAO'
