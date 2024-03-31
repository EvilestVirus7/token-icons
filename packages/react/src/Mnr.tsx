import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMNR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9 17.1v-3.3l-2.666-2.674 2.4-2.456a.13.13 0 0 1 .176-.004l.947.707v8.619c0 .034.013.068.043.094l1.457 1.594c.077.077.214.017.214-.09V7.95C11.52 6.386 10.603 6 10.084 6H8.378c-.462-.017-.917.33-1.088.506L3.763 10.05a1.66 1.66 0 0 0 0 1.993l4.971 5.143c.077.081.266.03.266-.086m6.043 0v-3.3l2.623-2.674-2.4-2.456a.13.13 0 0 0-.176-.004l-.947.707v8.571a.13.13 0 0 1-.043.095l-1.457 1.641c-.086.077-.219.022-.219-.09V7.132L13.26 6h2.906l4.071 4.05a1.66 1.66 0 0 1 0 1.993l-4.971 5.143c-.078.081-.219.026-.219-.086z"
          />
          <path
            fill="currentColor"
            d="m3.458 10.732 3.116.634-.24-.24 1.273-1.303L5.85 7.954l-2.087 2.1a1.6 1.6 0 0 0-.305.678"
          />
          <path
            fill="currentColor"
            d="m5.846 7.954 1.761 1.869L8.734 8.67a.13.13 0 0 1 .176-.004l.947.707v2.666l1.714.313V7.95C11.52 6.386 10.603 6 10.084 6H8.378c-.462-.017-.917.33-1.088.506z"
          />
          <path
            fill="currentColor"
            d="m11.571 12.352-1.714-.318v.386l1.714 1.689z"
          />
          <path
            fill="currentColor"
            d="m11.571 14.109-1.714-1.693v5.593a.12.12 0 0 0 .043.09l1.448 1.581c.082.077.223.017.223-.09V14.1zm.858.677v-2.237l1.714.428v3.566z"
          />
          <path
            fill="currentColor"
            d="m14.143 12.977-1.715-.428V7.14L13.26 6h2.906l4.071 4.05a1.66 1.66 0 0 1 0 1.993l-1.83 1.894-2.901-.651 2.16-2.164-2.4-2.456a.13.13 0 0 0-.176-.004l-.947.711z"
          />
          <path
            fill="currentColor"
            d="M15 17.1c0 .112.188.167.266.086l3.145-3.253-2.901-.643-.51.502z"
          />
          <path
            fill="currentColor"
            d="M7.543 9.887 5.786 8.014l.132-.137L7.676 9.75l-.129.137zm-.845 1.62-3.257-.677.035-.188 3.004.63zm4.873.965-1.714-.36v-.206l1.714.373zm0 1.907-1.714-1.95v-.262l1.714 1.963v.253zm2.572-1.273-1.715-.493v-.197l1.715.497zm4.17.926-2.85-.656.158-.172 2.846.665zm-4.17 2.768-1.715-2.014v-.257l1.715 2.005z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MNR__a)"
            d="M9 17.1v-3.3l-2.665-2.674 2.4-2.456a.13.13 0 0 1 .175-.004l.948.707v8.619a.12.12 0 0 0 .042.094l1.457 1.594c.078.077.215.017.215-.09V7.95C11.52 6.386 10.603 6 10.085 6H8.379c-.463-.017-.917.33-1.089.506L3.763 10.05a1.66 1.66 0 0 0 0 1.993l4.972 5.143c.077.081.265.03.265-.086"
          />
          <path
            fill="#27B4FB"
            d="M15.043 17.1v-3.3l2.623-2.674-2.4-2.456a.13.13 0 0 0-.176-.004l-.947.707v8.571a.13.13 0 0 1-.043.095l-1.457 1.641c-.086.077-.218.022-.218-.09V7.132L13.26 6h2.906l4.072 4.05a1.66 1.66 0 0 1 0 1.993l-4.972 5.143c-.077.081-.219.026-.219-.086z"
          />
          <path
            fill="url(#MNR__b)"
            d="m3.459 10.732 3.116.634-.24-.24 1.273-1.303L5.85 7.954l-2.087 2.1a1.6 1.6 0 0 0-.304.678"
          />
          <path
            fill="url(#MNR__c)"
            d="m5.846 7.954 1.762 1.869L8.735 8.67a.13.13 0 0 1 .175-.004l.948.707v2.666l1.714.313V7.95C11.52 6.386 10.603 6 10.085 6H8.379c-.463-.017-.917.33-1.089.506z"
          />
          <path
            fill="#40B7F9"
            d="m11.572 12.352-1.714-.318v.386l1.714 1.689z"
          />
          <path
            fill="url(#MNR__d)"
            d="m11.572 14.109-1.714-1.693v5.593a.12.12 0 0 0 .042.09l1.449 1.581c.081.077.223.017.223-.09V14.1z"
          />
          <path fill="#2FADF7" d="M12.429 14.786v-2.237l1.714.428v3.566z" />
          <path
            fill="url(#MNR__e)"
            d="m14.143 12.977-1.714-.428V7.14L13.26 6h2.906l4.072 4.05a1.66 1.66 0 0 1 0 1.993l-1.83 1.894-2.902-.651 2.16-2.164-2.4-2.456a.13.13 0 0 0-.176-.004l-.947.711z"
          />
          <path
            fill="#2EAEF7"
            d="M15 17.1c0 .112.189.167.266.086l3.146-3.253-2.902-.643-.51.502z"
          />
          <path
            fill="#369BF3"
            d="M7.543 9.887 5.786 8.014l.133-.137L7.676 9.75l-.128.137zm-.844 1.62-3.257-.677.034-.188 3.004.63zm4.873.965-1.714-.36v-.206l1.714.373zm0 1.907-1.714-1.95v-.262l1.714 1.963v.253zm2.571-1.273-1.714-.493v-.197l1.714.497zm4.17.926-2.85-.656.159-.172 2.846.665zm-4.17 2.768-1.714-2.014v-.257l1.714 2.005z"
          />
          <defs>
            <linearGradient
              id="MNR__a"
              x1="7.045"
              x2="8.561"
              y1="11.212"
              y2="17.793"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5DD8FA" />
              <stop offset=".39" stopColor="#39B3F6" />
              <stop offset="1" stopColor="#29B6FE" />
            </linearGradient>
            <linearGradient
              id="MNR__b"
              x1="17.225"
              x2="10.012"
              y1="10.204"
              y2="18.498"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".04" stopColor="#85AEEC" />
              <stop offset=".48" stopColor="#7C98EC" />
              <stop offset="1" stopColor="#569AED" />
            </linearGradient>
            <linearGradient
              id="MNR__c"
              x1="12.002"
              x2="12.402"
              y1="6.001"
              y2="18.173"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B86BF1" />
              <stop offset=".42" stopColor="#9B73ED" />
              <stop offset="1" stopColor="#459FF7" />
            </linearGradient>
            <linearGradient
              id="MNR__d"
              x1="12.002"
              x2="12.002"
              y1="6"
              y2="19.715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3DBEF8" />
              <stop offset="1" stopColor="#1EADFB" />
            </linearGradient>
            <linearGradient
              id="MNR__e"
              x1="12.002"
              x2="9.76"
              y1="6"
              y2="18.253"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B56DED" />
              <stop offset=".67" stopColor="#5396F1" />
              <stop offset="1" stopColor="#3DA3F2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMNR.displayName = 'MNR'
