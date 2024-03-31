import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSHI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.572 17.606a5.64 5.64 0 0 1-3.69-1.792A5.58 5.58 0 0 1 6.429 12c0-1.414.492-2.777 1.452-3.814a5.64 5.64 0 0 1 3.69-1.792v-1.68A7.324 7.324 0 0 0 4.715 12a7.29 7.29 0 0 0 6.858 7.286zm1.67-5.092q.431.092.43.369-.002.29-.382.471a2.7 2.7 0 0 1-1.088.18q-1.286.001-2.47-.724l-.62.763a5.1 5.1 0 0 0 2.46.853V16.7a4.727 4.727 0 0 1 0-9.407v2.263c-.64.043-1.166.172-1.543.39q-.677.403-.678 1.102.001.68.678 1.007c.424.206 1.101.33 2.044.368.621.026 1.016.056 1.174.086zm2.247-3.69a4.735 4.735 0 0 1 0 6.352 4.77 4.77 0 0 1-3.06 1.53v-2.263c.737-.03 1.328-.171 1.748-.42a1.33 1.33 0 0 0 .703-1.191q-.001-.67-.536-.995-.496-.307-1.628-.415-.213-.018-.99-.056a4 4 0 0 1-.785-.086q-.406-.097-.407-.334 0-.494 1.479-.493c.72 0 1.423.18 2.057.527l.643-.75a4.64 4.64 0 0 0-2.284-.673V7.294a4.75 4.75 0 0 1 3.06 1.526zm-3.06-2.43v-1.68A7.316 7.316 0 0 1 19.286 12a7.295 7.295 0 0 1-6.857 7.286v-1.68a5.6 5.6 0 0 0 3.685-1.792c.965-1.037 1.457-2.4 1.457-3.814s-.492-2.777-1.457-3.814a5.64 5.64 0 0 0-3.685-1.792"
          />
        </>
      ) : (
        <>
          <path
            fill="#00E13A"
            d="M11.571 17.606a5.64 5.64 0 0 1-3.69-1.792A5.58 5.58 0 0 1 6.428 12c0-1.414.493-2.777 1.453-3.814a5.64 5.64 0 0 1 3.69-1.792v-1.68A7.324 7.324 0 0 0 4.714 12a7.29 7.29 0 0 0 6.857 7.286zm1.671-5.092q.43.092.429.369-.002.29-.381.471a2.7 2.7 0 0 1-1.089.18q-1.285.001-2.469-.724l-.621.763a5.1 5.1 0 0 0 2.46.853V16.7a4.727 4.727 0 0 1 0-9.407v2.263c-.639.043-1.166.172-1.543.39q-.676.403-.677 1.102.001.68.677 1.007c.424.206 1.102.33 2.044.368q.935.04 1.175.086zm2.246-3.69a4.736 4.736 0 0 1 0 6.352 4.77 4.77 0 0 1-3.06 1.53v-2.263c.737-.03 1.329-.171 1.749-.42a1.32 1.32 0 0 0 .703-1.191q-.001-.67-.536-.995-.496-.307-1.629-.415-.211-.018-.99-.056a4 4 0 0 1-.784-.086q-.406-.097-.407-.334 0-.494 1.478-.493c.72 0 1.423.18 2.058.527l.642-.75a4.64 4.64 0 0 0-2.284-.673V7.294a4.75 4.75 0 0 1 3.06 1.526zm-3.06-2.43v-1.68A7.316 7.316 0 0 1 19.285 12a7.294 7.294 0 0 1-6.857 7.286v-1.68a5.6 5.6 0 0 0 3.686-1.792c.964-1.037 1.457-2.4 1.457-3.814s-.493-2.777-1.457-3.814a5.64 5.64 0 0 0-3.686-1.792"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSHI.displayName = 'SHI'
