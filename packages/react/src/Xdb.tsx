import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconXDB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.429 9.429c0 .88.798 1.712 1.714 1.712s1.714-.832 1.714-1.712-.798-1.715-1.714-1.715S6.43 8.55 6.43 9.43m3.428-4.286h1.286V9.55c0 1.59-1.343 2.88-3 2.88s-3-1.41-3-3 1.343-3 3-3c.615 0 1.239.153 1.714.457zm7.715 9.429c0-.88-.798-1.712-1.715-1.712-.916 0-1.714.832-1.714 1.712s.798 1.716 1.714 1.716c.917 0 1.715-.837 1.715-1.716m-3.429 4.285h-1.286v-4.404c0-1.592 1.344-2.881 3-2.881 1.657 0 3 1.409 3 3s-1.343 3-3 3c-.615 0-1.238-.174-1.714-.479zm.429-12c.88 0 1.716.798 1.716 1.715 0 .916-.837 1.714-1.716 1.714-.88 0-1.714-.798-1.714-1.714 0-.917.834-1.715 1.714-1.715m-.12-1.285c-1.592 0-2.882 1.343-2.882 3s1.41 3 3.002 3c1.59 0 3-1.343 3-3 0-.615-.174-1.239-.48-1.715h1.765V5.572zM7.715 15.43c0 .916.835 1.714 1.715 1.714s1.712-.798 1.712-1.714c0-.917-.833-1.715-1.712-1.715-.88 0-1.715.798-1.715 1.715m1.81 2.999h-4.38v-1.285H6.92a3.26 3.26 0 0 1-.491-1.714c0-1.657 1.409-3 3-3s3 1.343 3 3-1.29 3-2.88 3z"
          />
        </>
      ) : (
        <>
          <path
            fill="#278DC1"
            d="M6.428 9.429c0 .88.798 1.712 1.715 1.712.916 0 1.714-.832 1.714-1.712s-.798-1.715-1.714-1.715c-.917 0-1.715.835-1.715 1.715m3.429-4.286h1.286V9.55c0 1.59-1.344 2.88-3 2.88-1.657 0-3-1.41-3-3s1.343-3 3-3c.615 0 1.238.153 1.714.457zm7.714 9.429c0-.88-.798-1.712-1.714-1.712s-1.714.832-1.714 1.712.798 1.716 1.714 1.716 1.714-.837 1.714-1.716m-3.428 4.285h-1.286v-4.404c0-1.592 1.343-2.881 3-2.881s3 1.409 3 3-1.343 3-3 3c-.615 0-1.239-.174-1.714-.479zm.428-12c.88 0 1.716.798 1.716 1.715 0 .916-.836 1.714-1.716 1.714s-1.713-.798-1.713-1.714c0-.917.833-1.715 1.713-1.715m-.12-1.285c-1.592 0-2.881 1.343-2.881 3s1.41 3 3.001 3 3-1.343 3-3c0-.615-.174-1.239-.479-1.715h1.765V5.572zm-6.737 9.857c0 .916.835 1.714 1.714 1.714.88 0 1.712-.798 1.712-1.714 0-.917-.832-1.715-1.712-1.715s-1.714.798-1.714 1.715m1.809 2.999h-4.38v-1.285h1.776a3.26 3.26 0 0 1-.49-1.714c0-1.657 1.408-3 3-3 1.59 0 3 1.343 3 3s-1.29 3-2.88 3z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXDB.displayName = 'XDB'
