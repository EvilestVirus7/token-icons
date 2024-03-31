import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconFIO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.428 14.717v6.116c0 .325-.204.48-.456.343L8.605 19.37a1.04 1.04 0 0 1-.459-.84v-5.977q.075.06.16.107zM8.53 11.886l6.944-3.561a.82.82 0 0 0 .382-.674V3.323c0-.268-.172-.392-.382-.285l-6.4 3.282c-.66.355-.966.521-.928 1.27v4.01c0 .255.174.392.383.285"
          />
          <path
            fill="currentColor"
            d="m8.53 6.932 6.944 3.562a.82.82 0 0 1 .382.675v4.326c0 .269-.172.395-.382.288L8.53 12.22a.82.82 0 0 1-.383-.676V7.22c0-.265.174-.394.383-.287"
          />
          <path
            fill="currentColor"
            d="m8.53 11.886 4.83-2.477-4.83-2.477a.24.24 0 0 0-.27 0 .96.96 0 0 0-.114.419v4.194a.8.8 0 0 0 .056.27.23.23 0 0 0 .312.081q.007-.006.015-.01"
          />
        </>
      ) : (
        <>
          <path
            fill="#425CC7"
            d="M12.428 14.717v6.116c0 .325-.204.48-.456.343L8.605 19.37a1.04 1.04 0 0 1-.459-.84v-5.977q.075.06.16.107z"
          />
          <path
            fill="#005CB9"
            d="m8.53 11.886 6.944-3.561a.82.82 0 0 0 .382-.674V3.323c0-.268-.172-.392-.382-.285l-6.4 3.282c-.66.355-.966.521-.928 1.27v4.01c0 .255.174.392.383.285"
          />
          <path
            fill="#3CB4E5"
            d="m8.53 6.932 6.944 3.562a.82.82 0 0 1 .382.675v4.326c0 .269-.172.395-.382.288L8.53 12.22a.82.82 0 0 1-.383-.676V7.22c0-.265.174-.394.383-.287"
          />
          <path
            fill="#00A0DF"
            d="m8.53 11.886 4.83-2.477-4.83-2.477a.24.24 0 0 0-.27 0 .96.96 0 0 0-.114.419v4.194a.8.8 0 0 0 .056.27.23.23 0 0 0 .312.081q.007-.006.015-.01"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFIO.displayName = 'FIO'
