import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMBD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 16.286c2.367 0 4.286-1.823 4.286-4.072S14.367 8.143 12 8.143s-4.286 1.823-4.286 4.071c0 2.249 1.92 4.072 4.286 4.072"
          />
          <path
            fill="currentColor"
            d="M12.103 19.714c4.2 0 7.611-3.415 7.611-7.628s-3.407-7.629-7.611-7.629a7.62 7.62 0 0 0-7.616 7.629c0 4.213 3.407 7.628 7.616 7.628m0-.214c4.084 0 7.397-3.322 7.397-7.414 0-4.093-3.313-7.415-7.397-7.415A7.406 7.406 0 0 0 4.7 12.086c0 4.092 3.313 7.414 7.402 7.414"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M19.162 13.607a7.25 7.25 0 0 1-4.17 5.1l.145.334a7.71 7.71 0 0 0 4.372-5.357l-.343-.077zM5.649 8.786l-.54-.27a7.74 7.74 0 0 0-.022 6.913l.48-.24a7.22 7.22 0 0 1 .086-6.395zm10.195-3.48a7.7 7.7 0 0 0-3.372-1.02l-.035.557a7.22 7.22 0 0 1 5.61 3.12l.364-.245a7.7 7.7 0 0 0-2.567-2.412"
          />
          <path
            fill="currentColor"
            d="M11.992 17.301a5.217 5.217 0 0 0 1.984-10.037 5.216 5.216 0 1 0-1.985 10.037m0-.557a4.658 4.658 0 1 0-.01-9.317 4.659 4.659 0 0 0 .01 9.313z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12 16.286A4.327 4.327 0 0 0 16.376 12c0-2.366-1.959-4.286-4.376-4.286A4.33 4.33 0 0 0 7.624 12c0 2.366 1.959 4.286 4.376 4.286m0-.459c2.156 0 3.909-1.714 3.909-3.827A3.865 3.865 0 0 0 12 8.173c-2.156 0-3.909 1.714-3.909 3.827A3.866 3.866 0 0 0 12 15.827"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.992 18.429c3.505 0 6.342-2.846 6.342-6.356s-2.837-6.356-6.342-6.356c-3.502 0-6.343 2.846-6.343 6.356a6.35 6.35 0 0 0 6.343 6.355m0-.45a5.9 5.9 0 0 0 5.897-5.906 5.9 5.9 0 0 0-8.217-5.701 5.9 5.9 0 0 0-3.573 5.7c0 3.262 2.64 5.907 5.893 5.907"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.992 17.786c3.128 0 5.665-2.546 5.665-5.679a5.67 5.67 0 0 0-5.665-5.678 5.67 5.67 0 0 0-5.666 5.678c0 3.133 2.537 5.679 5.666 5.679m0-.198a5.48 5.48 0 0 0 5.472-5.485 5.48 5.48 0 0 0-5.472-5.482 5.477 5.477 0 0 0-5.473 5.486c0 3.026 2.451 5.486 5.473 5.486z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.992 15.373a3.272 3.272 0 1 0-.005-6.545 3.272 3.272 0 0 0 .005 6.545m0-1.449a1.868 1.868 0 1 0 0-3.736 1.868 1.868 0 0 0 0 3.736"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m6.257 10.783-.866-.18a6.77 6.77 0 0 0 1.402 5.691l.6-.501a5.98 5.98 0 0 1-1.136-5.01m5.73-5.383A7.1 7.1 0 0 0 7.66 6.883l.45.54a6.35 6.35 0 0 1 3.917-1.333 6.33 6.33 0 0 1 3.857 1.29l.446-.532A7.1 7.1 0 0 0 11.987 5.4"
          />
          <path
            fill="currentColor"
            d="M11.464 16.98a4.96 4.96 0 0 1-4.32-4.487l-.685.064a5.644 5.644 0 0 0 4.92 5.091zm2.422.831a6 6 0 0 0 3.317-8.867l.579-.351a6.677 6.677 0 0 1-3.703 9.848l-.197-.63z"
          />
          <path
            fill="currentColor"
            d="M17.46 13.877a5.84 5.84 0 0 1-1.817 2.606l.608.75a6.76 6.76 0 0 0 2.118-3.043zm-8.031-3.163v3h.428v-2.25l.266 2.25h.326l.265-2.25v2.25h.429v-3h-.677l-.18 1.582-.18-1.582z"
          />
          <path
            fill="currentColor"
            d="M12.232 10.714c.197-.004.582.103.582.596v.471c-.012.095-.085.3-.3.322.138.026.343.175.343.493v.741c-.008.129-.085.377-.343.377h-.942v-3zm-.232.429V12h.232a.19.19 0 0 0 .115-.171v-.523c-.008-.056-.043-.163-.15-.163zm0 2.143v-.857h.201c.108 0 .146.132.15.2v.447a.24.24 0 0 1-.111.21zm2.186-2.572h-.9v3h.9c.214 0 .386-.18.386-.403v-2.194a.394.394 0 0 0-.386-.403m-.176.429h-.296v2.143h.296c.043 0 .073-.12.073-.27v-1.603c0-.15-.03-.27-.073-.27"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MBD__a)"
            d="M12 16.286c2.367 0 4.285-1.823 4.285-4.072S14.367 8.143 12 8.143s-4.285 1.823-4.285 4.071c0 2.249 1.919 4.072 4.285 4.072"
          />
          <path
            fill="#114ED2"
            d="M12.102 19.714c4.2 0 7.612-3.415 7.612-7.628s-3.407-7.629-7.612-7.629a7.62 7.62 0 0 0-7.615 7.629c0 4.213 3.407 7.628 7.615 7.628m0-.214c4.085 0 7.398-3.322 7.398-7.414 0-4.093-3.313-7.415-7.398-7.415a7.406 7.406 0 0 0-7.401 7.415c0 4.092 3.313 7.414 7.401 7.414"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#7954F7"
            d="M19.161 13.607a7.25 7.25 0 0 1-4.17 5.1l.146.334a7.71 7.71 0 0 0 4.371-5.357l-.343-.077z"
          />
          <path
            fill="#4351BF"
            d="m5.648 8.786-.54-.27a7.74 7.74 0 0 0-.021 6.913l.48-.24a7.22 7.22 0 0 1 .085-6.395z"
          />
          <path
            fill="#09A6F6"
            d="M15.844 5.306a7.7 7.7 0 0 0-3.373-1.02l-.034.557a7.22 7.22 0 0 1 5.61 3.12l.364-.245a7.7 7.7 0 0 0-2.567-2.412"
          />
          <path
            fill="url(#MBD__b)"
            d="M11.991 17.301a5.217 5.217 0 0 0 1.985-10.037 5.216 5.216 0 1 0-1.985 10.037m0-.557a4.658 4.658 0 1 0-.009-9.317 4.659 4.659 0 0 0 .009 9.313z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#MBD__c)"
            d="M12 16.286A4.326 4.326 0 0 0 16.374 12c0-2.366-1.958-4.286-4.376-4.286A4.33 4.33 0 0 0 7.624 12c0 2.366 1.958 4.286 4.376 4.286m0-.459c2.155 0 3.908-1.714 3.908-3.827A3.863 3.863 0 0 0 12 8.173c-2.157 0-3.91 1.714-3.91 3.827A3.866 3.866 0 0 0 12 15.827"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#208CFC"
            d="M11.991 18.429c3.506 0 6.343-2.846 6.343-6.356s-2.837-6.356-6.343-6.356c-3.501 0-6.343 2.846-6.343 6.356a6.35 6.35 0 0 0 6.343 6.355m0-.45a5.9 5.9 0 0 0 5.897-5.906 5.9 5.9 0 0 0-8.217-5.701 5.9 5.9 0 0 0-3.573 5.7c0 3.262 2.64 5.907 5.893 5.907"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#185DCE"
            d="M11.991 17.786c3.129 0 5.666-2.546 5.666-5.679A5.67 5.67 0 0 0 11.99 6.43a5.67 5.67 0 0 0-5.666 5.678c0 3.133 2.537 5.679 5.666 5.679m0-.198a5.48 5.48 0 0 0 5.473-5.485A5.48 5.48 0 0 0 11.99 6.62a5.477 5.477 0 0 0-5.473 5.486c0 3.026 2.452 5.486 5.473 5.486z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#MBD__d)"
            d="M11.991 15.373a3.272 3.272 0 1 0-.004-6.545 3.272 3.272 0 0 0 .004 6.545m0-1.449a1.868 1.868 0 1 0 0-3.737 1.868 1.868 0 0 0 0 3.737"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#D9D9D9"
            d="m6.257 10.783-.866-.18a6.77 6.77 0 0 0 1.401 5.691l.6-.501a5.98 5.98 0 0 1-1.135-5.01"
          />
          <path
            fill="url(#MBD__e)"
            d="M11.987 5.4a7.1 7.1 0 0 0-4.329 1.483l.45.54a6.35 6.35 0 0 1 3.917-1.333c1.457 0 2.799.48 3.857 1.29l.446-.532A7.1 7.1 0 0 0 11.987 5.4"
          />
          <path
            fill="#46A5FB"
            d="M11.464 16.98a4.96 4.96 0 0 1-4.32-4.487l-.686.064a5.644 5.644 0 0 0 4.92 5.091z"
          />
          <path
            fill="#75CEFE"
            d="M13.885 17.811a6 6 0 0 0 3.317-8.867l.579-.351a6.677 6.677 0 0 1-3.703 9.848l-.197-.63z"
          />
          <path
            fill="#FCB5FD"
            d="M17.46 13.877a5.84 5.84 0 0 1-1.818 2.606l.609.75a6.76 6.76 0 0 0 2.117-3.043z"
          />
          <path
            fill="#262675"
            d="M9.428 10.714v3h.429v-2.25l.265 2.25h.326l.266-2.25v2.25h.428v-3h-.677l-.18 1.582-.18-1.582z"
          />
          <path
            fill="#262675"
            d="M12.231 10.714c.197-.004.583.103.583.596v.471c-.013.095-.086.3-.3.322.137.026.343.175.343.493v.741c-.009.129-.086.377-.343.377h-.943v-3zm-.232.429V12h.232a.19.19 0 0 0 .116-.171v-.523c-.009-.056-.043-.163-.15-.163zm0 2.143v-.857h.202c.107 0 .146.132.15.2v.447a.24.24 0 0 1-.112.21zm2.186-2.572h-.9v3h.9c.214 0 .386-.18.386-.403v-2.194a.394.394 0 0 0-.386-.403m-.176.429h-.295v2.143h.295c.043 0 .073-.12.073-.27v-1.603c0-.15-.03-.27-.073-.27"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="MBD__a"
              x1="16.535"
              x2="7.624"
              y1="5.09"
              y2="18.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F52B8" />
              <stop offset=".73" stopColor="#FB8FCE" />
              <stop offset="1" stopColor="#407ADE" />
            </linearGradient>
            <linearGradient
              id="MBD__b"
              x1="17.412"
              x2="5.869"
              y1="6.257"
              y2="17.733"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".07" stopColor="#2688EE" />
              <stop offset=".25" stopColor="#9AFEFF" />
              <stop offset=".41" stopColor="#AC66F7" />
              <stop offset=".62" stopColor="#F4FFFB" />
              <stop offset=".87" stopColor="#80FEFE" />
            </linearGradient>
            <linearGradient
              id="MBD__c"
              x1="19.925"
              x2="3.867"
              y1="11.761"
              y2="11.761"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9D9D9" />
              <stop offset=".16" stopColor="#3D80F9" />
              <stop offset=".26" stopColor="#88E4FF" />
              <stop offset=".5" stopColor="#556AD5" />
              <stop offset=".64" stopColor="#FFF3FF" />
              <stop offset=".8" stopColor="#FEE0FB" />
            </linearGradient>
            <linearGradient
              id="MBD__d"
              x1="19.067"
              x2="4.302"
              y1="11.995"
              y2="11.995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7791FF" />
              <stop offset=".16" stopColor="#7498F9" />
              <stop offset=".34" stopColor="#8189F6" />
              <stop offset=".53" stopColor="#FDF7FB" />
              <stop offset=".7" stopColor="#F0AEF1" />
              <stop offset="1" stopColor="#EFB1F0" />
            </linearGradient>
            <linearGradient
              id="MBD__e"
              x1="20.118"
              x2="4.263"
              y1="14.321"
              y2="14.453"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#22E2FD" />
              <stop offset="1" stopColor="#5B96E5" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMBD.displayName = 'MBD'
