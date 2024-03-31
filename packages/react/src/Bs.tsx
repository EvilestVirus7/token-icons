import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.714 12a7.714 7.714 0 1 1-15.428 0 7.714 7.714 0 0 1 15.428 0m-.857 0a6.86 6.86 0 0 1-3.437 5.944 5 5 0 0 1-.716.056c-2.571 0-3.938-3.497-4.324-4.479a3 3 0 0 0-.094-.235c-.545 1.877-.107 3.15 0 3.428C9.656 16.157 9 14.92 9 13.341a4.54 4.54 0 0 1 .857-2.627c-.026.099-.017.257-.008.416l.008.227c0 1.389 1.324 1.929 1.954 1.929.318 0 .69-.043 1.068-.086.372-.047.745-.094 1.062-.094.613 0 .712.021 1.295.141l.051.009c-1.127.064-1.736.257-2.259.428 1.608.575 2.473 1.552 2.71 1.817l.05.056.065.069c.09.107.201.231.415.231.258 0 .566-.043.738-.274.141-.189.304-.266.368-.279.039-.158.129-.578.197-1.024-.6-1.41-2.678-3.274-2.987-3.557l-.013-.009c.215 0 .673 0 1.26.836.472.664.746.866.883.878-.223-.235-.6-.874-.793-1.542A4.36 4.36 0 0 0 14.571 9c0-.746.772-1.329 1.166-1.624l.12-.09c-1.071 0-2.451.514-3 .857-.398-.129-1.491-.429-2.503-.429-2.413 0-4.114 1.337-4.92 2.306a6.8 6.8 0 0 1 .789-1.714c1.457-.699 2.957-1.02 3.647-1.02.484 0 .99.137 1.466.265.231.06.454.12.664.163a3.4 3.4 0 0 1 1.286-.557c-.467-.334-1.843-.729-3.202-.729-1.075 0-2.323.386-2.785.58A6.857 6.857 0 0 1 18.857 12M5.571 14.477c.463 1.243 1.115 2.31 2.143 3.094-.386-.583-.857-1.924-.857-3.313 0-1.842.549-3.072 1.286-3.972-.227.085-2.276 1.11-2.563 4.097z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#181B1E"
            d="M19.715 12a7.714 7.714 0 1 1-15.429 0 7.714 7.714 0 0 1 15.429 0m-.857 0a6.86 6.86 0 0 1-3.438 5.944 5 5 0 0 1-.715.056c-2.572 0-3.939-3.497-4.325-4.479a3 3 0 0 0-.094-.235c-.544 1.877-.107 3.15 0 3.428C9.656 16.157 9 14.92 9 13.341a4.54 4.54 0 0 1 .858-2.627c-.026.099-.018.257-.009.416l.009.227c0 1.389 1.324 1.929 1.954 1.929.317 0 .69-.043 1.067-.086.373-.047.746-.094 1.063-.094.613 0 .711.021 1.294.141l.052.009c-1.128.064-1.736.257-2.259.428 1.607.575 2.473 1.552 2.709 1.817l.051.056.064.069c.09.107.202.231.416.231.257 0 .566-.043.737-.274.142-.189.304-.266.369-.279.038-.158.128-.578.197-1.024-.6-1.41-2.679-3.274-2.987-3.557l-.013-.009c.214 0 .673 0 1.26.836.471.664.746.866.883.878-.223-.235-.6-.874-.793-1.542A4.36 4.36 0 0 0 14.572 9c0-.746.771-1.329 1.166-1.624l.12-.09c-1.072 0-2.452.514-3 .857-.399-.129-1.492-.429-2.503-.429-2.413 0-4.115 1.337-4.92 2.306a6.8 6.8 0 0 1 .788-1.714c1.457-.699 2.957-1.02 3.647-1.02.485 0 .99.137 1.466.265.232.06.454.12.664.163a3.4 3.4 0 0 1 1.286-.557c-.467-.334-1.843-.729-3.201-.729-1.076 0-2.323.386-2.786.58A6.857 6.857 0 0 1 18.858 12M5.572 14.477c.463 1.243 1.114 2.31 2.143 3.094-.386-.583-.857-1.924-.857-3.313 0-1.842.548-3.072 1.285-3.972-.227.085-2.275 1.11-2.563 4.097z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBS.displayName = 'BS'
