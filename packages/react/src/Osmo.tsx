import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconOSMO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.212 5.321c.867.655 1.349 1.243 1.499 1.83.096.333.01.733-.204 1.032s-.557.466-.953.466q-.225 0-.45-.066a7 7 0 0 0-.214.748 6.7 6.7 0 0 1 1.039 3.6c0 3.629-2.838 6.569-6.34 6.569S5.25 16.56 5.25 12.932s2.838-6.568 6.34-6.568c.774 0 1.516.145 2.203.41a6 6 0 0 0 .463-.266 3 3 0 0 1-.16-.3c-.119-.288-.076-.765.106-1.12.15-.3.386-.5.654-.555.107-.022.214-.033.332-.033.588 0 1.327.3 2.024.821m-3.04 1.612.007-.004h.002a9.6 9.6 0 0 0 1.403-.976c.214.09.492.244.835.477.407.278.76.588.985.833-.374.509-.62 1.206-.77 1.694a6.4 6.4 0 0 0-2.463-2.024m-.223.296a5.8 5.8 0 0 0-2.36-.499c-3.308 0-5.986 2.774-5.986 6.202s2.678 6.202 5.986 6.202c3.299 0 5.987-2.774 5.987-6.202a6.35 6.35 0 0 0-.768-3.042l-.003.046a6.45 6.45 0 0 0-2.856-2.707m.682-.965-.103.07a1.6 1.6 0 0 1-.144-.247c-.128-.311.022-1.121.536-1.232s1.317.133 2.11.732c.792.6 1.242 1.132 1.38 1.653.127.514-.255 1.276-1.198 1.033l.032-.078c.042.01.096.01.15.01a.6.6 0 0 0 .396-.121.46.46 0 0 0 .171-.41c0-.212-.16-.478-.492-.8a8 8 0 0 0-.879-.72c-.92-.633-1.563-.81-1.852-.511-.193.2-.172.444-.107.621m2.977 1.276c.032.055.043.11.043.144 0 .1-.033.133-.054.155a.37.37 0 0 1-.204.056c.065-.133.14-.244.215-.355m-2.645-1.653c.032-.033.118-.056.257-.033-.107.088-.215.166-.322.244-.01-.078 0-.156.065-.211"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M13.453 10.136c.533 0 .964-.447.964-.998 0-.552-.431-.999-.964-.999s-.963.447-.963.999c0 .551.431.998.963.998m1.574.744a.414.414 0 0 0 .407-.422.414.414 0 0 0-.407-.422.414.414 0 0 0-.407.422c0 .233.182.421.407.421"
          />
          <path
            fill="currentColor"
            d="m6.002 14.03.035.038c.307.334.741.633 1.272.87 1.062.473 2.55.713 4.31.455 1.314-.195 2.185-.548 2.94-.855.261-.106.509-.206.756-.293.26-.089.515-.156.758-.216l.123-.031c.196-.048.389-.096.556-.149a2 2 0 0 0 .477-.21c-.362 2.891-2.751 5.129-5.64 5.129-2.756 0-5.066-2.039-5.587-4.739m5.492 3.218c0 .171-.134.31-.3.31s-.3-.139-.3-.31c0-.172.135-.31.3-.31.166 0 .3.138.3.31m1.264.155c.165 0 .3-.139.3-.31a.305.305 0 0 0-.3-.311c-.166 0-.3.139-.3.31 0 .172.134.311.3.311m-.547.488c0 .129-.1.233-.225.233a.23.23 0 0 1-.225-.233c0-.128.1-.233.225-.233a.23.23 0 0 1 .225.233m1.156.067a.23.23 0 0 0 .225-.233c0-.129-.1-.233-.225-.233a.23.23 0 0 0-.225.233.23.23 0 0 0 .225.233m-2.955-1.02c0 .281-.22.51-.493.51a.5.5 0 0 1-.492-.51c0-.283.22-.511.492-.511s.493.228.493.51m3.909-.744a.5.5 0 0 0 .492-.51.5.5 0 0 0-.492-.51.5.5 0 0 0-.493.51c0 .281.22.51.493.51"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.266 12.932c0-.677-1.135-1.065-2.645-1.198-1.092-.089-2.195.022-3.459.421-1.092.333-2.077.278-2.795.189-1.595-.189-2.473-.21-2.473.588 0 1.154 2.27 2.596 5.675 2.097 1.724-.255 2.613-.777 3.63-1.132 1.103-.377 2.067-.366 2.067-.965"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#OSMO__a)"
            d="M12.716 7.264a5.37 5.37 0 0 0-3.849.81l-.039.043c.429-.266 1.046-.501 1.046-.501-1.598.956-2.091 2.04-2.091 2.04.621-1.239 2.443-2.109 3.874-2.169s2.366.373 3.514 1.316c1.14.956 1.83 2.901 1.762 4.444-.06 1.543-.849 2.79-.849 2.79a7.4 7.4 0 0 0 1.076-1.787c.043-.159.077-.321.098-.497.493-3.086-1.538-5.991-4.542-6.489"
          />
          <path
            fill="#5E12A0"
            d="M18.394 7.569c-.141-.54-.583-1.076-1.38-1.672-.643-.484-1.328-.754-1.864-.754-.112 0-.21.009-.309.03a.9.9 0 0 0-.6.506c-.167.325-.205.762-.098 1.028.043.077.085.18.15.27-.523.326-.819.416-.857.429a5.88 5.88 0 0 1 3.201 2.708l.009-.124c.03-.334.128-.72.27-1.114.137.043.274.06.411.06.364 0 .681-.15.879-.429.197-.27.274-.634.188-.943z"
          />
          <path
            fill="url(#OSMO__b)"
            d="M16.971 8.58c.9.257 1.265-.454 1.145-.93-.129-.48-.54-.964-1.273-1.513-.729-.548-1.466-.771-1.942-.668-.471.098-.608.84-.493 1.122.052.112.159.275.309.46-.189.128-.369.23-.514.325a5.83 5.83 0 0 1 2.288 1.877 5 5 0 0 1 .257-.729 1 1 0 0 1 .223.056"
          />
          <path
            fill="url(#OSMO__c)"
            d="M11.837 18.523c3.043 0 5.511-2.537 5.511-5.67 0-3.129-2.468-5.67-5.511-5.67s-5.511 2.537-5.511 5.67c0 3.129 2.468 5.67 5.511 5.67"
          />
          <path
            fill="#A98698"
            d="M17.661 7.183a3.64 3.64 0 0 0-2.138-1.2c-.592-.141-.433-.484.287-.416a1.76 1.76 0 0 0-.909-.098c-.471.098-.608.84-.493 1.122.052.112.159.275.309.46a8 8 0 0 1-.686.415c.37.168.717.386 1.029.647-.553-.484-.433-.707.326-1.256.235-.171.668-.154 1.071.06.407.215.879.75.879.75l-.45.896.085.03c.287.081.515.06.69-.013.21-.129.75-.578 0-1.397"
          />
          <path
            fill="#5E12A0"
            d="M15.514 6.472c.63.29 1.198.697 1.676 1.2a5.4 5.4 0 0 0-.712 1.547l.215.304c.073-.253.193-.626.347-1.003.043.013.09.013.141.013a.54.54 0 0 0 .365-.116.42.42 0 0 0 .158-.373q.001-.29-.454-.728a7 7 0 0 0-.81-.66c-.849-.579-1.44-.742-1.706-.472-.176.185-.158.407-.098.57-.313.215-.583.369-.759.472.12.038.227.085.343.137a9 9 0 0 0 1.294-.892m1.864 1.452c.03.047.039.099.039.129 0 .094-.03.124-.051.141a.34.34 0 0 1-.185.052c.056-.12.129-.223.197-.322M14.94 6.411c.03-.03.111-.05.24-.03-.099.082-.197.15-.3.223-.009-.072 0-.141.06-.192"
          />
          <path
            fill="url(#OSMO__d)"
            d="M11.837 18.523c3.043 0 5.511-2.537 5.511-5.67 0-3.129-2.468-5.567-5.511-5.567S6.326 9.72 6.326 12.853c0 3.129 2.468 5.67 5.511 5.67"
          />
          <path
            fill="#A98698"
            d="M11.798 17.829c-3.008-.493-5.048-3.403-4.555-6.498a5.65 5.65 0 0 1 1.834-3.377 5.66 5.66 0 0 0-2.683 3.995c-.484 3.094 1.556 6.004 4.556 6.501 1.671.287 3.291-.253 4.483-1.307a5.4 5.4 0 0 1-3.635.686"
          />
          <path
            fill="url(#OSMO__e)"
            d="M16.928 12.802c0 2.97-2.301 5.387-5.138 5.387-2.833 0-5.147-2.418-5.147-5.387z"
          />
          <path
            fill="url(#OSMO__f)"
            d="M16.521 12.802c0 2.9-2.185 5.27-4.933 5.387h.202c2.837 0 5.138-2.418 5.138-5.387z"
          />
          <path
            fill="url(#OSMO__g)"
            d="M6.72 12.802c0 2.97 2.22 5.387 5.108 5.387.129 0 .245 0 .365-.013-2.713-.202-4.86-2.533-4.86-5.374z"
          />
          <path
            fill="url(#OSMO__h)"
            d="M16.928 12.853c0-.621-1.028-.973-2.391-1.097-.986-.082-1.984.021-3.129.386-.985.304-1.881.257-2.528.17-1.444-.17-2.237-.192-2.237.54 0 1.055 2.057 2.375 5.134 1.917 1.56-.232 2.361-.712 3.283-1.033.998-.343 1.868-.335 1.868-.883"
          />
          <path
            fill="#fff"
            d="M13.714 10.286a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714m1.286.857a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857"
          />
          <path
            fill="url(#OSMO__i)"
            d="M16.341 8.653h-.021c-.056-.009-.099-.073-.086-.142.088-.343.252-.663.48-.934.043-.051.12-.051.159-.008.051.043.051.12.013.162-.013.01-.356.425-.438.832a.11.11 0 0 1-.107.086z"
          />
          <path
            fill="#fff"
            d="M11.473 17.083a.28.28 0 0 0 .274-.283.28.28 0 0 0-.274-.287.283.283 0 0 0-.279.287c0 .154.129.283.279.283"
          />
          <path
            fill="#fff"
            d="M11.314 16.98a.296.296 0 0 1 0-.403l.06-.051a.2.2 0 0 0-.098.06.295.295 0 0 0 0 .407.28.28 0 0 0 .334.047.27.27 0 0 1-.3-.06zm.257-.266a.06.06 0 1 0-.06-.06c0 .035.026.065.06.065zm1.342.228c.15 0 .274-.13.274-.288a.28.28 0 0 0-.274-.282.286.286 0 0 0 0 .57"
          />
          <path
            fill="#fff"
            d="M12.754 16.843a.296.296 0 0 1 0-.412l.06-.047a.2.2 0 0 0-.098.06.296.296 0 0 0 0 .403.27.27 0 0 0 .334.052.27.27 0 0 1-.3-.06zm.257-.27c.03 0 .056-.026.056-.06a.06.06 0 0 0-.016-.041.06.06 0 0 0-.04-.02.06.06 0 0 0-.06.06c0 .035.026.06.06.06m-.81 1.03a.21.21 0 0 0 .206-.215c0-.12-.09-.214-.206-.214a.2.2 0 0 0-.147.065.2.2 0 0 0-.058.15c0 .115.09.213.205.213"
          />
          <path
            fill="url(#OSMO__j)"
            d="M12.086 17.52a.227.227 0 0 1 0-.304c.008-.013.025-.022.038-.03a.2.2 0 0 0-.073.047.227.227 0 0 0 0 .304.2.2 0 0 0 .257.03.21.21 0 0 1-.227-.047z"
          />
          <path
            fill="#fff"
            d="M13.474 17.447a.21.21 0 0 0 .206-.214.213.213 0 0 0-.206-.214.21.21 0 0 0-.21.214c0 .12.094.214.21.214"
          />
          <path
            fill="#fff"
            d="M13.354 17.366a.23.23 0 0 1 0-.3.2.2 0 0 1 .043-.034.2.2 0 0 0-.073.05.23.23 0 0 0 0 .3.2.2 0 0 0 .257.035.21.21 0 0 1-.227-.051m.189-.202a.043.043 0 0 0 .038-.043.043.043 0 0 0-.043-.043.043.043 0 0 0-.034.044c0 .025.017.042.039.042m-3.245-.184c.249 0 .455-.21.455-.467a.463.463 0 0 0-.455-.467.467.467 0 0 0-.454.471.46.46 0 0 0 .454.463"
          />
          <path
            fill="#fff"
            d="M10.041 16.809a.47.47 0 0 1 0-.66.4.4 0 0 1 .099-.073c-.06.021-.107.064-.159.103a.47.47 0 0 0 0 .66c.15.154.377.184.557.073a.43.43 0 0 1-.497-.103m.416-.437a.1.1 0 0 0 .099-.103.097.097 0 0 0-.099-.099.097.097 0 0 0-.099.099c0 .06.043.103.099.103m3.891-.536a.464.464 0 0 0 .455-.472.456.456 0 0 0-.455-.463.46.46 0 0 0-.45.468.46.46 0 0 0 .45.467"
          />
          <path
            fill="url(#OSMO__k)"
            d="M14.083 15.66a.47.47 0 0 1 0-.656.4.4 0 0 1 .098-.072.5.5 0 0 0-.158.102.47.47 0 0 0 0 .66c.15.15.377.18.557.069a.43.43 0 0 1-.497-.103"
          />
          <path
            fill="#fff"
            d="M14.507 15.227c.056 0 .099-.043.099-.103a.1.1 0 0 0-.099-.103c-.056 0-.099.043-.099.103a.1.1 0 0 0 .099.103"
          />
          <path
            fill="#5E12A0"
            d="M11.837 6.857c-3.223 0-5.837 2.687-5.837 6s2.614 6 5.837 6 5.734-2.687 5.734-6-2.52-6-5.734-6m0 11.572c-3.051 0-5.409-2.443-5.409-5.572s2.362-5.571 5.409-5.571c3.043 0 5.306 2.443 5.306 5.571 0 3.129-2.272 5.572-5.306 5.572"
          />
          <path
            fill="#fff"
            d="M17.271 5.55c.815.613 1.359 1.226 1.535 1.903.128.45.008.943-.253 1.307a1.48 1.48 0 0 1-1.346.6c-.021.077-.043.15-.056.219.56 1.001.853 2.13.849 3.278 0 3.532-2.683 6.429-6.163 6.429-3.471 0-6.266-2.889-6.266-6.429S8.366 6.43 11.837 6.43c.651 0 1.277.103 1.86.291a1.93 1.93 0 0 1 .163-1.234 1.33 1.33 0 0 1 .9-.729c.128-.03.253-.043.386-.043.672 0 1.44.33 2.121.836zm-3.03.129c-.167.325-.205.762-.098 1.028q.068.14.15.27-.22.132-.446.253a5.6 5.6 0 0 0-2.014-.373c-3.219 0-5.833 2.687-5.833 6s2.614 6 5.837 6 5.734-2.687 5.734-6c0-1.178-.317-2.28-.874-3.205.047-.245.124-.51.214-.776.142.043.279.06.416.06.364 0 .681-.15.879-.429.197-.27.274-.634.188-.943-.141-.535-.583-1.071-1.38-1.671-.643-.476-1.328-.75-1.864-.75-.112 0-.21.009-.309.03a.9.9 0 0 0-.6.506"
          />
          <defs>
            <linearGradient
              id="OSMO__a"
              x1="16.614"
              x2="9.165"
              y1="7.698"
              y2="13.311"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".29" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="OSMO__d"
              x1="11.15"
              x2="13.734"
              y1="19.18"
              y2="4.753"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#81FFFF" />
              <stop offset=".62" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="OSMO__e"
              x1="5.577"
              x2="18.852"
              y1="11.994"
              y2="11.994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0002E9" />
              <stop offset="1" stopColor="#FF00C7" />
            </linearGradient>
            <linearGradient
              id="OSMO__f"
              x1="20.062"
              x2="4.451"
              y1="5.989"
              y2="18.938"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".29" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="OSMO__g"
              x1="5.27"
              x2="18.868"
              y1="11.994"
              y2="11.994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#000292" />
              <stop offset="1" stopColor="#7D00C7" />
            </linearGradient>
            <linearGradient
              id="OSMO__h"
              x1="5.588"
              x2="18.858"
              y1="12.013"
              y2="12.013"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#000292" />
              <stop offset="1" stopColor="#BE00C7" />
            </linearGradient>
            <linearGradient
              id="OSMO__i"
              x1="18.405"
              x2="10.249"
              y1="4.617"
              y2="23.78"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".29" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="OSMO__j"
              x1="5.507"
              x2="18.677"
              y1="11.77"
              y2="11.77"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".29" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="OSMO__k"
              x1="5.608"
              x2="18.693"
              y1="11.942"
              y2="11.942"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".29" stopColor="#fff" />
              <stop offset=".78" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="OSMO__b"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(14.8772 0 0 17.3453 18.175 10.71)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFEAFF" stopOpacity=".6" />
              <stop offset=".68" stopColor="#A087C9" />
              <stop offset="1" stopColor="#10002F" />
            </radialGradient>
            <radialGradient
              id="OSMO__c"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(12.9941 0 0 14.2531 16.61 6.978)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFEAFF" stopOpacity=".6" />
              <stop offset=".68" stopColor="#A087C9" />
              <stop offset="1" stopColor="#10002F" />
            </radialGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconOSMO.displayName = 'OSMO'
