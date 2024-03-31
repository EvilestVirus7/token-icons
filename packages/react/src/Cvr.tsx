import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCVR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.489 7.714h3.891c-.077.073-.227.309-.227.669s.064.51.098.617H9.43v4.954l2.824 1.702L15 13.954V10.54c.103.021.176.072.343.072.536 0 .853-.205.943-.304v3.737c0 .442-.223.857-.6 1.102l-2.692 1.774c-.45.296-1.033.3-1.487.004l-2.756-1.783a1.32 1.32 0 0 1-.608-1.105V9.039c0-.729.6-1.325 1.346-1.325"
          />
          <path
            fill="currentColor"
            d="M15 10.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
          />
          <path
            fill="currentColor"
            d="M6.214 6.48c0-.141.125-.266.292-.266h10.988c.167 0 .292.129.292.266v2.949a.214.214 0 1 0 .214.188V6.48c0-.27-.231-.48-.506-.48H6.506A.493.493 0 0 0 6 6.48v3.279a.204.204 0 1 0 .407-.03.2.2 0 0 0-.193-.202zm1.149.377a.493.493 0 0 0-.506.48v4.612a.3.3 0 0 1-.064.192.24.24 0 0 1-.18.073h-.107c-.172 0-.292-.128-.292-.265V10.92a.2.2 0 0 0 .177-.284.2.2 0 0 0-.19-.119.204.204 0 0 0-.201.184v1.248c0 .27.231.48.506.48h.107a.46.46 0 0 0 .343-.146.52.52 0 0 0 .115-.334V7.337c0-.141.129-.266.292-.266h3.964a.202.202 0 0 0 .364-.128.201.201 0 0 0-.385-.09H7.363zm5.486.214a.202.202 0 0 1-.369-.128.201.201 0 0 1 .386-.086h3.741c.133 0 .266.052.364.133a.46.46 0 0 1 .172.343v4.611c0 .159.103.27.257.27h.094c.167 0 .292-.128.292-.27v-.801a.214.214 0 1 1 .205-.274H18v.034a.2.2 0 0 1 0 .051v.99a.494.494 0 0 1-.506.485H17.4c-.287 0-.471-.223-.471-.485V7.337c0-.064-.035-.128-.095-.184a.36.36 0 0 0-.227-.086h-3.763zm4.302 7.175a.317.317 0 1 1 .635 0v1.277a.51.51 0 0 1-.232.428l-2.605 1.715a.214.214 0 0 0-.369.145.214.214 0 0 0 .411.078l2.683-1.758a.74.74 0 0 0 .326-.608v-1.277a.532.532 0 0 0-1.063 0v.908a.37.37 0 0 1-.154.305l-.883.642a.2.2 0 0 0-.279.185.205.205 0 0 0 .353.138.2.2 0 0 0 .055-.151l.878-.643a.58.58 0 0 0 .244-.476zm-10.615-.292a.32.32 0 0 0-.322.322v1.02a.86.86 0 0 0 .403.728l2.537 1.582a.214.214 0 0 1 .208.364.213.213 0 0 1-.316-.032.22.22 0 0 1-.037-.17l-2.503-1.564A1.07 1.07 0 0 1 6 15.296V14.27a.536.536 0 0 1 1.071 0v.686c0 .214.108.416.288.536l.66.437a.202.202 0 0 1 .244.317.203.203 0 0 1-.352-.133l-.672-.445a.85.85 0 0 1-.382-.708v-.69a.32.32 0 0 0-.321-.321zm8.623 2.786-2.73 1.791a.59.59 0 0 1-.648 0l-2.674-1.757a.202.202 0 1 1-.1-.379.204.204 0 0 1 .207.2l2.683 1.756a.37.37 0 0 0 .416 0l2.756-1.8a.202.202 0 1 1 .402.026.201.201 0 0 1-.308.172zm-3.386 2.893-1.62-1.072a.2.2 0 0 1-.287-.184.205.205 0 0 1 .351-.14.2.2 0 0 1 .056.149l1.62 1.071a.43.43 0 0 0 .476-.008l1.495-1.029a.201.201 0 1 1 .155.154l-1.53 1.05c-.103.073-.223.086-.343.09-.129 0-.257-.008-.373-.085z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CVR__a)"
            d="M9.489 7.714h3.891c-.077.073-.227.309-.227.669s.064.51.098.617H9.43v4.954l2.824 1.702L15 13.954V10.54c.103.021.176.072.343.072.536 0 .853-.205.943-.304v3.737c0 .442-.223.857-.6 1.102l-2.692 1.774c-.45.296-1.033.3-1.487.004l-2.756-1.783a1.32 1.32 0 0 1-.608-1.105V9.039c0-.729.6-1.325 1.346-1.325"
          />
          <path
            fill="#52BEC1"
            d="M15 10.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
          />
          <path
            fill="#000"
            d="M6.214 6.48c0-.141.125-.266.292-.266h10.988c.167 0 .292.129.292.266v2.949a.214.214 0 1 0 .214.188V6.48c0-.27-.231-.48-.506-.48H6.506A.493.493 0 0 0 6 6.48v3.279a.204.204 0 1 0 .407-.03.2.2 0 0 0-.193-.202zm1.149.377a.493.493 0 0 0-.506.48v4.612a.3.3 0 0 1-.064.192.24.24 0 0 1-.18.073h-.107c-.172 0-.292-.128-.292-.265V10.92a.2.2 0 0 0 .177-.284.2.2 0 0 0-.19-.119.204.204 0 0 0-.201.184v1.248c0 .27.231.48.506.48h.107a.46.46 0 0 0 .343-.146.52.52 0 0 0 .115-.334V7.337c0-.141.129-.266.292-.266h3.964a.202.202 0 0 0 .364-.128.201.201 0 0 0-.385-.09H7.363zm5.486.214a.202.202 0 0 1-.369-.128.201.201 0 0 1 .386-.086h3.741c.133 0 .266.052.364.133a.46.46 0 0 1 .172.343v4.611c0 .159.103.27.257.27h.094c.167 0 .292-.128.292-.27v-.801a.214.214 0 1 1 .205-.274H18v.034a.2.2 0 0 1 0 .051v.99a.494.494 0 0 1-.506.485H17.4c-.287 0-.471-.223-.471-.485V7.337c0-.064-.035-.128-.095-.184a.36.36 0 0 0-.227-.086h-3.763zm4.302 7.175a.317.317 0 1 1 .635 0v1.277a.51.51 0 0 1-.232.428l-2.605 1.715a.214.214 0 0 0-.369.145.214.214 0 0 0 .411.078l2.683-1.758a.74.74 0 0 0 .326-.608v-1.277a.532.532 0 0 0-1.063 0v.908a.37.37 0 0 1-.154.305l-.883.642a.2.2 0 0 0-.279.185.205.205 0 0 0 .353.138.2.2 0 0 0 .055-.151l.878-.643a.58.58 0 0 0 .244-.476zm-10.615-.292a.32.32 0 0 0-.322.322v1.02a.86.86 0 0 0 .403.728l2.537 1.582a.214.214 0 0 1 .208.364.213.213 0 0 1-.316-.032.22.22 0 0 1-.037-.17l-2.503-1.564A1.07 1.07 0 0 1 6 15.296V14.27a.536.536 0 0 1 1.071 0v.686c0 .214.108.416.288.536l.66.437a.202.202 0 0 1 .244.317.203.203 0 0 1-.352-.133l-.672-.445a.85.85 0 0 1-.382-.708v-.69a.32.32 0 0 0-.321-.321zm8.623 2.786-2.73 1.791a.59.59 0 0 1-.648 0l-2.674-1.757a.202.202 0 1 1-.1-.379.204.204 0 0 1 .207.2l2.683 1.756a.37.37 0 0 0 .416 0l2.756-1.8a.202.202 0 1 1 .402.026.201.201 0 0 1-.308.172zm-3.386 2.893-1.62-1.072a.2.2 0 0 1-.287-.184.205.205 0 0 1 .351-.14.2.2 0 0 1 .056.149l1.62 1.071a.43.43 0 0 0 .476-.008l1.495-1.029a.201.201 0 1 1 .155.154l-1.53 1.05c-.103.073-.223.086-.343.09-.129 0-.257-.008-.373-.085z"
          />
          <defs>
            <linearGradient
              id="CVR__a"
              x1="7.188"
              x2="17.976"
              y1="7.932"
              y2="10.26"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F6FAD" />
              <stop offset="1" stopColor="#4FABC0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCVR.displayName = 'CVR'
