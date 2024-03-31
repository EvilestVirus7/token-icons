import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconOMG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M5.786 15.428c1.538 0 2.785-1.534 2.785-3.428S7.324 8.57 5.786 8.57 3 10.106 3 12s1.247 3.428 2.786 3.428m0-.857c1.067 0 1.928-1.153 1.928-2.571s-.861-2.572-1.928-2.572S3.857 10.581 3.857 12c0 1.418.862 2.571 1.929 2.571M9 15.428h.857v-4.937l1.582 4.937h1.007l1.697-4.937v4.937H15V8.571h-1.389L11.95 14.04l-1.634-5.47H9zm9.214 0a2.53 2.53 0 0 0 1.929-.955v.955H21V12h-3v.857h2.049c-.249 1.033-.978 1.783-1.835 1.783-1.067 0-1.928-1.153-1.928-2.572 0-1.422.861-2.571 1.928-2.571.913 0 1.457.484 1.723 1.217h.909c-.326-1.256-1.175-2.143-2.632-2.143-1.538 0-2.785 1.535-2.785 3.429s1.247 3.428 2.785 3.428"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconOMG.displayName = 'OMG'
