import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconNEBO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.429 5.571v6.309c-.009 1.847-.622 3.668-1.984 5.036a6.615 6.615 0 0 1-9.365 0 6.643 6.643 0 0 1 3.784-11.263 10 10 0 0 1 1.175-.082zM18 6h-5.96c-.364-.017-.746.038-1.114.086A6.206 6.206 0 0 0 7.39 16.603a6.17 6.17 0 0 0 8.743 0c1.298-1.299 1.86-2.975 1.868-4.723z"
          />
          <path
            fill="currentColor"
            d="M17.07 13.928a5.545 5.545 0 0 1-8.974 2.396l1.616-1.62c1.885 1.629 5.048 1.286 7.358-.776m-6.998-6.985c-2.066 2.293-2.405 5.443-.793 7.328l-1.62 1.62a5.537 5.537 0 0 1 2.413-8.953zm7.273 2.815c0 .005.004-.004 0 0v2.962a6 6 0 0 1-.425.471c-2.091 2.096-5.057 2.499-6.767 1.067l1.83-1.83c1.007.643 2.889.039 4.393-1.465l.133-.133c.145-.154.287-.317.411-.476l.069-.086h.004l.013-.021.026-.03.012-.017c.112-.146.215-.3.305-.446zm-3.146-3.09a7 7 0 0 0-.489.343l-.077.065a7 7 0 0 0-.476.411l-.137.129c-1.5 1.5-2.104 3.377-1.47 4.388l-1.826 1.822c-1.414-1.71-1.007-4.659 1.08-6.746.13-.133.48-.42.48-.42zm3.163-.012V8.22a4.3 4.3 0 0 1-.305.771 5.4 5.4 0 0 1-.591.922 7 7 0 0 1-.407.48l-.133.133a5.5 5.5 0 0 1-2.302 1.435c-.66.185-1.165.107-1.435-.163-.266-.265-.343-.771-.159-1.435a5.5 5.5 0 0 1 1.436-2.302l.133-.128A6 6 0 0 1 15 6.934c.223-.111.446-.206.66-.274h.009l1.701-.004z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M18.428 5.571v6.309c-.008 1.847-.621 3.668-1.984 5.036A6.614 6.614 0 0 1 5.32 13.74a6.643 6.643 0 0 1 5.544-8.088 10 10 0 0 1 1.174-.082zM18 6h-5.962c-.364-.017-.745.038-1.114.086a6.206 6.206 0 0 0-3.536 10.517 6.17 6.17 0 0 0 8.743 0c1.299-1.299 1.86-2.975 1.869-4.723z"
          />
          <path
            fill="url(#NEBO__a)"
            d="M17.07 13.928a5.546 5.546 0 0 1-8.975 2.396l1.616-1.62c1.886 1.629 5.049 1.286 7.359-.776m-7-6.985c-2.066 2.293-2.404 5.443-.793 7.328l-1.62 1.62a5.537 5.537 0 0 1 2.413-8.953zm7.273 2.815c0 .005.004-.004 0 0v2.962a6 6 0 0 1-.424.471c-2.092 2.096-5.057 2.499-6.767 1.067l1.83-1.83c1.007.643 2.888.039 4.392-1.465l.133-.133c.146-.154.287-.317.412-.476l.068-.086h.005l.012-.021.026-.03.013-.017c.111-.146.214-.3.304-.446zm-3.146-3.09a7 7 0 0 0-.488.343l-.077.065a7 7 0 0 0-.476.411l-.137.129c-1.5 1.5-2.105 3.377-1.47 4.388l-1.826 1.822c-1.414-1.71-1.007-4.659 1.08-6.746.129-.133.48-.42.48-.42zm3.163-.012V8.22a4.3 4.3 0 0 1-.304.771 5.4 5.4 0 0 1-.592.922 7 7 0 0 1-.407.48l-.133.133a5.5 5.5 0 0 1-2.301 1.435c-.66.185-1.166.107-1.436-.163-.265-.265-.343-.771-.158-1.435a5.5 5.5 0 0 1 1.435-2.302l.133-.128c.418-.398.89-.734 1.402-.999a5 5 0 0 1 .66-.274h.008l1.702-.004z"
          />
          <defs>
            <linearGradient
              id="NEBO__a"
              x1="16.813"
              x2="7.701"
              y1="7.054"
              y2="16.449"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#49FDFF" />
              <stop offset="1" stopColor="#00AFAD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconNEBO.displayName = 'NEBO'
