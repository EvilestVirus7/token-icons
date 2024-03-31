import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPORTX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.29 16.178c.57 1.072 1.213 1.458 1.71 1.458s1.14-.386 1.71-1.458c.548-1.028.913-2.502.913-4.178 0-1.672-.365-3.15-.913-4.179C10.14 6.75 9.497 6.364 9 6.364s-1.14.386-1.71 1.457C6.74 8.85 6.377 10.324 6.377 12c0 1.671.364 3.15.913 4.178M5.57 12c0 3.548 1.535 6.428 3.429 6.428s3.428-2.88 3.428-6.428S10.894 5.57 9 5.57 5.57 8.451 5.57 12"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M10.29 16.178c.57 1.072 1.213 1.458 1.71 1.458s1.14-.386 1.71-1.458c.548-1.028.913-2.502.913-4.178 0-1.672-.365-3.15-.913-4.179-.57-1.071-1.213-1.457-1.71-1.457s-1.14.386-1.71 1.457C9.74 8.85 9.377 10.324 9.377 12c0 1.671.364 3.15.913 4.178M8.57 12c0 3.548 1.535 6.428 3.429 6.428s3.428-2.88 3.428-6.428S13.894 5.57 12 5.57 8.57 8.451 8.57 12"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.428 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
          />
          <path
            fill="currentColor"
            d="M13.29 16.178c.57 1.072 1.213 1.458 1.71 1.458s1.14-.386 1.71-1.458c.548-1.028.913-2.502.913-4.178 0-1.672-.365-3.15-.913-4.179-.57-1.071-1.213-1.457-1.71-1.457s-1.14.386-1.71 1.457c-.549 1.029-.913 2.503-.913 4.179 0 1.671.364 3.15.913 4.178M11.57 12c0 3.548 1.535 6.428 3.429 6.428s3.428-2.88 3.428-6.428S16.894 5.57 15 5.57 11.57 8.451 11.57 12"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2FF6D3"
            d="M7.29 16.178c.57 1.072 1.213 1.458 1.71 1.458s1.14-.386 1.71-1.458c.548-1.028.913-2.502.913-4.178 0-1.672-.365-3.15-.913-4.179C10.14 6.75 9.497 6.364 9 6.364s-1.14.386-1.71 1.457C6.74 8.85 6.377 10.324 6.377 12c0 1.671.364 3.15.913 4.178M5.57 12c0 3.548 1.535 6.428 3.429 6.428s3.428-2.88 3.428-6.428S10.894 5.57 9 5.57 5.57 8.451 5.57 12"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#2FF6D3"
            d="M10.29 16.178c.57 1.072 1.213 1.458 1.71 1.458s1.14-.386 1.71-1.458c.548-1.028.913-2.502.913-4.178 0-1.672-.365-3.15-.913-4.179-.57-1.071-1.213-1.457-1.71-1.457s-1.14.386-1.71 1.457C9.74 8.85 9.377 10.324 9.377 12c0 1.671.364 3.15.913 4.178M8.57 12c0 3.548 1.535 6.428 3.429 6.428s3.428-2.88 3.428-6.428S13.894 5.57 12 5.57 8.57 8.451 8.57 12"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#PORTX__a)"
            d="M12.428 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
          />
          <path
            fill="#2FF6D3"
            d="M13.29 16.178c.57 1.072 1.213 1.458 1.71 1.458s1.14-.386 1.71-1.458c.548-1.028.913-2.502.913-4.178 0-1.672-.365-3.15-.913-4.179-.57-1.071-1.213-1.457-1.71-1.457s-1.14.386-1.71 1.457c-.549 1.029-.913 2.503-.913 4.179 0 1.671.364 3.15.913 4.178M11.57 12c0 3.548 1.535 6.428 3.429 6.428s3.428-2.88 3.428-6.428S16.894 5.57 15 5.57 11.57 8.451 11.57 12"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="PORTX__a"
              x1="12.174"
              x2="5.571"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPORTX.displayName = 'PORTX'
