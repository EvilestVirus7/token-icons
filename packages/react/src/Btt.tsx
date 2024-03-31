import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBTT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M5.144 12c0-3.723 3.174-6.856 6.867-6.856 4.83 0 8.18 5.158 6.328 9.52a6.98 6.98 0 0 1-6.328 4.192A6.98 6.98 0 0 1 5.144 12m.875.005A5.997 5.997 0 0 0 18.012 12a5.997 5.997 0 0 0-11.993.01zm2.5 2.664c.86 1.856 2.895 2.71 4.873 2.648-2.584.633-5.48-.654-6.086-3.402A5.027 5.027 0 0 1 12.36 7.78v.933c-1.256 0-2.458.512-3.276 1.477a4.1 4.1 0 0 0-.965 2.616c-.006.643.13 1.278.401 1.862m4.103 1.793c-1.45-.259-2.695-1.144-3.154-2.479a3.06 3.06 0 0 1 4.088-3.834l.395-.833a3.981 3.981 0 0 0-4.509 6.365c1.108 1.197 2.78 1.477 4.335 1.477l.053-.016c.454-.163 1.002-.364 1.35-.685a7.3 7.3 0 0 1-2.558.01zm-.158-1.17c1.023.342 2.32.278 2.927.236l.718-.063.179-.02q-.376.466-.844.838c-1.05.226-2.252.221-3.27-.111a3.97 3.97 0 0 1-2.368-2.02 2.84 2.84 0 0 1-.027-2.231 2.9 2.9 0 0 1 3.735-1.545 2.86 2.86 0 0 1 1.424 1.286l-.834.417a1.94 1.94 0 0 0-1.688-.986 1.95 1.95 0 0 0-1.924 1.925c0 1.07.954 1.936 1.972 2.268z"
      />
    </BaseIcon>
  ),
)

IconBTT.displayName = 'BTT'
