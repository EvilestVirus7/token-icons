import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconQUICK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#4289C7"
        d="M18.499 14.261c.004-1.768-.812-4.443-4.171-5.3 1.091.269 3.122.856 3.921 1.42-.613-.839-2.459-2.516-4.942-2.516.462-.385 1.314-1.252 1.599-2.073a6.91 6.91 0 0 1 3.951 6.259 7 7 0 0 1-.358 2.21M5.143 12.09v-.038c0-3.815 3.07-6.908 6.857-6.908a6.8 6.8 0 0 1 2.303.399c-.18.292-.665.838-1.656 1.474-.012-.164-.083-.557-.27-.815-.038.18-.305.628-1.072.994a17 17 0 0 1-.557.251c-.712.312-1.26.552-1.21 1.022.052.469.4.591.568.593-.15.045-.48.091-.617-.085-.208.24-.71.717-1.05.7-.427-.022-.498-.472-.355-.7-.575.364-1.589 1.44-1.044 2.823.588-.357 2.103-1.012 3.462-.774.392.068.702.11.954.145.837.113 1.03.14 1.473.76.576.805.023 3.745-3.44 4-2.48.182-3.844-2.229-4.346-3.84"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="url(#QUICK__a)"
        d="M5.93 11.814c0-3.283 2.642-5.945 5.9-5.945 10.85.45-3.295 15.656-5.9 5.945"
      />
      <path
        fill="#191E44"
        d="M7.472 11.458q-.023.028-.043.058c1.333-.219 4.192-.453 4.936.399.744.851.52 1.48.31 1.99-.59 1.422-5.238 3.42-7.53-1.888-.086 2.329 1.909 7.179 7.38 6.82 6.956-.455 4.81-9.492-1.136-9.077l-.05.01c.616.285 1.003.755 1.144 1.02-2.372-.577-4.206.16-5.011.668"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#0C1D63"
        d="M12.18 11.726c1.262.839 1.092 2.155.85 2.709.284-.308.73-.513.919-.577.303.105.659.736-.348 2.42-1.005 1.684-3.107 1.902-4.032 1.8l.607.41 4.51-1.092.936-4.054-3.443-1.66z"
      />
      <path
        fill="#262F72"
        d="M9.15 12.435c-.436-.04-1.39-.28-1.717-.92.725-.474 2.758-1.182 5.09-.215-.032-.135-.154-.44-.389-.589.081.014.265.05.354.083-.075-.123-.274-.41-.477-.567 1.533.213 4.6 1.416 4.6 4.527 0 3.11-2.405 3.988-3.607 4.038-.992.166-3.402.115-5.253-1.372a1 1 0 0 1-.125-.102l.125.102c.384.276 1.327.684 2.893.684 2.22 0 4.935-2.228 3.868-4.665-.014.23-.257.8-1.11 1.24.301-1.034.167-3.13-2.775-3.241-.776-.049-2.159.083-1.477.997"
      />
      <path
        fill="#161A3D"
        d="M16.382 9.873c-.886-.58-1.695-.843-2.152-.938 1.498.18 2.22.502 2.393.64a3 3 0 0 0-.241-.42c.662.234 1.537.93 1.892 1.248-.503-.283-1.472-.47-1.892-.53"
      />
      <path
        fill="#18214A"
        d="M12.58 7.762c-.095.403-.4.781-.54.92 2.836-1.243 3.228-3.449 3.07-4.396-.21.805-.788 1.678-1.05 2.013l.474-.112c-.594.903-1.55 1.426-1.954 1.575"
      />
      <path
        fill="#253155"
        d="M10.734 8.172c-.424.203-.489.5-.469.622 1.208.05 1.607-.79 1.655-1.217-.183.157-.656.342-1.186.595"
      />
      <path
        fill="#5D98CE"
        d="M10.464 8.794c.214-.063.45-.181.606-.386a1.7 1.7 0 0 0 .268-.514l-.16.073q-.211.095-.444.205c-.424.203-.489.5-.469.622q.103.005.199 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#54A2CC"
        d="M8.052 9.915c-.232-.01-.46.444-.544.671.42-.42.588-.3.62-.188.072-.157.157-.474-.076-.483"
      />
      <path
        fill="#3A415A"
        d="M7.752 10.123c.102-.064.208-.105.28-.073a.4.4 0 0 1 .158.162c.031-.144.02-.29-.138-.297-.105-.004-.21.086-.3.208"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="QUICK__a"
          x1="8.092"
          x2="11.934"
          y1="6.229"
          y2="10.356"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".41" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconQUICK.displayName = 'QUICK'
