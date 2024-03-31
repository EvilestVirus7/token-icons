import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconNAKA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <g clipPath="url(#NAKA__a)">
        <path fill="#C10606" d="M0 0h24v24H0z" />
        <path
          fill="#7F0404"
          d="M16.423 12.78c-.3 1.372-1.599 1.149-1.599 1.149C13.418 13.757 13.547 12 13.547 12h2.871v.78zm-6.66 1.149s-1.32.3-1.62-1.072V12h2.897s.128 1.757-1.277 1.929M8.087 9.656s-.634.026-.634-.553v-.634H5.936v2.074H4.07V12h1.843v.677H4.071v1.466l2.07-.013s.579 2.585 3.313 2.585c.12 0 1.903 0 2.842-1.672.775 1.672 2.704 1.672 2.832 1.672 2.739 0 3.326-2.572 3.326-2.572h2.117v-1.466h-1.898V12h1.898v-1.457h-1.92V8.469h-1.517v.634c0 .579-.634.553-.634.553z"
        />
        <path
          fill="#CCC"
          d="M16.072 12.257c-.3 1.372-1.599 1.149-1.599 1.149-1.401-.172-1.187-1.192-1.187-1.835h2.786zm-6.656 1.149s-1.32.223-1.62-1.149v-.686h2.897s.129 1.659-1.277 1.835m-1.68-4.273s-.63.026-.63-.549v-.643H5.59v2.079H3.67v1.551h1.903v.583H3.69v1.56h2.105s.574 2.572 3.313 2.572c0 0 1.97.171 2.837-1.672.87 1.843 2.841 1.672 2.841 1.672 2.734 0 3.309-2.572 3.309-2.572h2.104v-1.56h-1.77v-.583h1.796V10.02H18.3V7.946h-1.517v.638c0 .575-.634.549-.634.549z"
        />
        <path
          fill="#F2F2F2"
          d="M15.857 11.906c-.3 1.375-1.555 1.153-1.555 1.153-1.406-.176-1.278-1.916-1.278-1.916h2.833zM9.24 13.059s-1.226.223-1.526-1.153v-.763h2.803s.129 1.74-1.277 1.916M7.492 9s-.635.026-.635-.549v-.737H5.572v2.143H3.429v1.286h2.143V12H3.429v1.286h2.215s.553 2.571 3.288 2.571c0 0 1.971.172 2.841-1.671.866 1.843 2.837 1.671 2.837 1.671 2.739 0 3.159-2.571 3.159-2.571h2.28V12H18v-.857h2.049V9.857H18V7.714h-1.286v.737c0 .575-.634.55-.634.55z"
        />
      </g>
      <defs>
        <clipPath id="NAKA__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </BaseIcon>
  ),
)

IconNAKA.displayName = 'NAKA'
