import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCTI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9 7.029V6.69c0-.643.386-1.118 1.286-1.118s1.285.475 1.285 1.118v.339c0 .638-.385 1.114-1.285 1.114C9.39 8.143 9 7.667 9 7.029m3.428 0V6.69c0-.643.386-1.118 1.286-1.118S15 6.047 15 6.69v.339c0 .638-.386 1.114-1.286 1.114-.896 0-1.286-.476-1.286-1.114m3.429 3.085v.343c0 .643.386 1.114 1.286 1.114s1.285-.47 1.285-1.114v-.343c0-.642-.39-1.114-1.285-1.114-.9 0-1.286.472-1.286 1.114m0 3.429v.343c0 .643.386 1.114 1.286 1.114s1.285-.471 1.285-1.114v-.343c0-.643-.39-1.114-1.285-1.114-.9 0-1.286.471-1.286 1.114m-3.429-3.429v.343c0 .643.39 1.114 1.286 1.114.9 0 1.286-.47 1.286-1.114v-.343C15 9.472 14.614 9 13.714 9s-1.286.472-1.286 1.114m0 3.772v-.343c0-.643.386-1.114 1.286-1.114S15 12.9 15 13.543v.343c0 .643-.386 1.114-1.286 1.114-.896 0-1.286-.471-1.286-1.114m0 3.085v.343c0 .643.39 1.115 1.286 1.115.9 0 1.286-.472 1.286-1.115v-.343c0-.642-.386-1.114-1.286-1.114s-1.286.472-1.286 1.114M9 10.115v.343c0 .643.39 1.114 1.286 1.114.9 0 1.285-.47 1.285-1.114v-.343c0-.642-.385-1.114-1.285-1.114S9 9.472 9 10.114m0 3.772v-.343c0-.643.386-1.114 1.286-1.114s1.285.471 1.285 1.114v.343c0 .643-.385 1.114-1.285 1.114C9.39 15 9 14.53 9 13.886m0 3.085v.343c0 .643.39 1.115 1.286 1.115.9 0 1.285-.472 1.285-1.115v-.343c0-.642-.385-1.114-1.285-1.114S9 16.33 9 16.971m-3.43-6.513v-.343C5.571 9.472 5.957 9 6.857 9s1.286.472 1.286 1.114v.343c0 .643-.386 1.114-1.286 1.114-.896 0-1.286-.47-1.286-1.114m0 3.086v.343c0 .643.39 1.114 1.286 1.114.9 0 1.286-.471 1.286-1.114v-.343c0-.643-.386-1.114-1.286-1.114s-1.286.471-1.286 1.114"
          />
        </>
      ) : (
        <>
          <path
            fill="#00D1AF"
            d="M9 7.029V6.69c0-.643.386-1.118 1.286-1.118s1.285.475 1.285 1.118v.339c0 .638-.385 1.114-1.285 1.114C9.39 8.143 9 7.667 9 7.029m3.428 0V6.69c0-.643.386-1.118 1.286-1.118S15 6.047 15 6.69v.339c0 .638-.386 1.114-1.286 1.114-.896 0-1.286-.476-1.286-1.114m3.429 3.085v.343c0 .643.386 1.114 1.286 1.114s1.285-.47 1.285-1.114v-.343c0-.642-.39-1.114-1.285-1.114-.9 0-1.286.472-1.286 1.114m0 3.429v.343c0 .643.386 1.114 1.286 1.114s1.285-.471 1.285-1.114v-.343c0-.643-.39-1.114-1.285-1.114-.9 0-1.286.471-1.286 1.114m-3.429-3.429v.343c0 .643.39 1.114 1.286 1.114.9 0 1.286-.47 1.286-1.114v-.343C15 9.472 14.614 9 13.714 9s-1.286.472-1.286 1.114m0 3.772v-.343c0-.643.386-1.114 1.286-1.114S15 12.9 15 13.543v.343c0 .643-.386 1.114-1.286 1.114-.896 0-1.286-.471-1.286-1.114m0 3.085v.343c0 .643.39 1.115 1.286 1.115.9 0 1.286-.472 1.286-1.115v-.343c0-.642-.386-1.114-1.286-1.114s-1.286.472-1.286 1.114M9 10.115v.343c0 .643.39 1.114 1.286 1.114.9 0 1.285-.47 1.285-1.114v-.343c0-.642-.385-1.114-1.285-1.114S9 9.472 9 10.114m0 3.772v-.343c0-.643.386-1.114 1.286-1.114s1.285.471 1.285 1.114v.343c0 .643-.385 1.114-1.285 1.114C9.39 15 9 14.53 9 13.886m0 3.085v.343c0 .643.39 1.115 1.286 1.115.9 0 1.285-.472 1.285-1.115v-.343c0-.642-.385-1.114-1.285-1.114S9 16.33 9 16.971m-3.43-6.513v-.343C5.571 9.472 5.957 9 6.857 9s1.286.472 1.286 1.114v.343c0 .643-.386 1.114-1.286 1.114-.896 0-1.286-.47-1.286-1.114m0 3.086v.343c0 .643.39 1.114 1.286 1.114.9 0 1.286-.471 1.286-1.114v-.343c0-.643-.386-1.114-1.286-1.114s-1.286.471-1.286 1.114"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCTI.displayName = 'CTI'
