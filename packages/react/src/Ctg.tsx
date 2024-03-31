import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCTG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0m-1.715 0a5.572 5.572 0 1 1-11.143 0 5.572 5.572 0 0 1 11.144 0m-9.857-.214c.073-1.354 1.042-4.072 4.307-4.072a4.28 4.28 0 0 1 3.836 2.405h-1.573c-.141-.223-.548-.678-1.007-.678-.574 0-1.08.67-1.255 1.136l-.04.095a7.7 7.7 0 0 0-.535 3.012c0 1.728 1.432 2.919 2.692 1.277-.532-.085-1.599-.458-1.599-1.277-.043-.205.18-.617 1.397-.617 1.517 0 1.809.506 1.809.917s-.656 2.302-3.206 2.302c-2.554 0-2.978-2.216-2.978-3.485 0-1.02.668-2.46 1.002-3.055.03-.06.043-.163-.145-.09-.236.085-1.787 1.213-1.787 2.991a3 3 0 0 0-.918-.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0m-1.714 0a5.572 5.572 0 1 1-11.144 0 5.572 5.572 0 0 1 11.144 0m-9.857-.214c.073-1.354 1.041-4.072 4.307-4.072a4.28 4.28 0 0 1 3.836 2.405h-1.573c-.142-.223-.549-.678-1.007-.678-.575 0-1.08.67-1.256 1.136l-.039.095a7.7 7.7 0 0 0-.535 3.012c0 1.728 1.431 2.919 2.691 1.277-.531-.085-1.598-.458-1.598-1.277-.043-.205.18-.617 1.397-.617 1.517 0 1.808.506 1.808.917s-.655 2.302-3.205 2.302c-2.555 0-2.979-2.216-2.979-3.485 0-1.02.669-2.46 1.003-3.055.03-.06.043-.163-.146-.09-.236.085-1.787 1.213-1.787 2.991a3 3 0 0 0-.917-.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCTG.displayName = 'CTG'
