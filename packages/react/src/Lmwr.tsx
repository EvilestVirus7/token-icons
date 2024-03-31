import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconLMWR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6.347 9.266.043.017.827.368A5.04 5.04 0 0 1 9.63 7.238l-.193-.432-.274-.639c-.313-.621-.874-.411-1.071-.309A7 7 0 0 0 5.91 7.984l-.004.034c-.356.823.266 1.166.441 1.248"
          />
          <path
            fill="currentColor"
            d="m7.226 9.643.703.313.613.265.484.219a3.1 3.1 0 0 1 1.41-1.406l-.219-.488-.27-.609-.308-.707a5.07 5.07 0 0 0-2.413 2.413"
          />
          <path
            fill="currentColor"
            d="m9.017 10.44 1.955.857a.34.34 0 0 0 .308-.33l-.411-.93-.442-1.011a3.15 3.15 0 0 0-1.41 1.414m10.102.06c-.326-.814-.994-.63-1.179-.557l-.051.021-.412.159-.441.171a5.08 5.08 0 0 1 0 3.425l.441.17.57.22c.66.278.939-.193 1.037-.442.253-1.024.27-2.1.035-3.171z"
          />
          <path
            fill="currentColor"
            d="m17.045 10.299-.716.274-1.119.437a3.1 3.1 0 0 1 0 1.993l.484.193.63.244.712.279a5.04 5.04 0 0 0 .008-3.42"
          />
          <path
            fill="currentColor"
            d="m15.215 11.014-1.03.399-.955.377a.34.34 0 0 0-.056.351q.026.054.056.095l.956.368 1.028.399a3.13 3.13 0 0 0 0-1.993zm-8.7 2.88.445-.175a5.04 5.04 0 0 1 0-3.42l-.445-.176-.58-.227c-.668-.27-.933.227-1.028.471a7 7 0 0 0-.034 3.116v.008c.326.836 1.007.643 1.192.579z"
          />
          <path
            fill="currentColor"
            d="m6.96 13.714.712-.274.621-.244.493-.193a3.07 3.07 0 0 1 0-1.993l-.493-.193-.621-.236-.712-.274a5 5 0 0 0 0 3.412z"
          />
          <path
            fill="currentColor"
            d="m8.795 13.003 1.028-.399.947-.368a.334.334 0 0 0-.008-.455l-1.976-.771a3.13 3.13 0 0 0 .009 1.993m-1.56 1.367-.433.193-.455.201s-.792.429-.428 1.247v.009a7 7 0 0 0 2.211 2.164c.227.107.797.292 1.085-.403l.24-.557.192-.428a5.13 5.13 0 0 1-2.412-2.426"
          />
          <path
            fill="currentColor"
            d="m10.235 15.471.21-.48a3.1 3.1 0 0 1-1.41-1.41l-.485.215-.613.265-.702.309a5.05 5.05 0 0 0 2.42 2.413l.31-.703.27-.613z"
          />
          <path
            fill="currentColor"
            d="m10.445 14.983.44-1.016.412-.93a.34.34 0 0 0-.325-.317l-.93.411-1.016.442c.304.612.8 1.108 1.414 1.41zm6.33-5.332.437-.193.484-.214-.043.009c.176-.086.789-.42.446-1.226a6.9 6.9 0 0 0-2.28-2.211c-.635-.326-1.029.42-1.029.42l-.244.557-.193.437a5.04 5.04 0 0 1 2.422 2.421"
          />
          <path
            fill="currentColor"
            d="m13.775 8.537-.206.489c.613.304 1.11.8 1.414 1.414l1.097-.476.695-.313a5.07 5.07 0 0 0-2.422-2.421l-.309.707z"
          />
          <path
            fill="currentColor"
            d="m13.569 9.026-.446 1.011-.411.947a.33.33 0 0 0 .214.287c.03.018.073.026.116.026l.934-.411 1.016-.446a3.23 3.23 0 0 0-1.423-1.414m.317 8.46-.176-.442a5.03 5.03 0 0 1-3.416 0l-.175.442-.287.737s-.142.578.694.9a7 7 0 0 0 3.021-.009c.146-.043.84-.261.592-.99z"
          />
          <path
            fill="currentColor"
            d="m13.715 17.044-.275-.711-.24-.63-.193-.484a3.1 3.1 0 0 1-1.992 0l-.193.484-.245.63-.274.711a5.03 5.03 0 0 0 3.416 0z"
          />
          <path
            fill="currentColor"
            d="m12.999 15.214-.772-1.971a.35.35 0 0 0-.36-.065c-.034.018-.068.035-.09.06l-.368.948-.403 1.028a3.08 3.08 0 0 0 1.993 0M10.11 6.518l.172.446a5.1 5.1 0 0 1 3.42-.008l.175-.446.176-.45c.069-.184.257-.874-.578-1.192l-.018-.008a7.2 7.2 0 0 0-3.073.043c-.235.073-.788.343-.492 1.054l.214.561z"
          />
          <path
            fill="currentColor"
            d="m10.286 6.964.274.712.245.621.192.493a3.06 3.06 0 0 1 1.993 0l.193-.493.24-.621.279-.712a5.03 5.03 0 0 0-3.416 0"
          />
          <path
            fill="currentColor"
            d="m10.997 8.79.78 1.993a.34.34 0 0 0 .442-.017l.368-.956.403-1.029a3.18 3.18 0 0 0-1.993.009m6.66 5.957-.051-.017-.394-.171-.437-.198a5.07 5.07 0 0 1-2.422 2.422l.437.99c.317.771.973.471 1.14.368a7 7 0 0 0 2.143-2.112l.017-.035c.36-.818-.257-1.161-.437-1.247z"
          />
          <path
            fill="currentColor"
            d="m16.775 14.361-.703-.308-.622-.27-.475-.21a3.08 3.08 0 0 1-1.406 1.401l.205.476.27.621.31.703a5.02 5.02 0 0 0 2.42-2.413"
          />
          <path
            fill="currentColor"
            d="m14.975 13.586-1.012-.446-.921-.403a.3.3 0 0 0-.112.026.33.33 0 0 0-.184.184.23.23 0 0 0-.026.107l.403.922.446 1.015a3.13 3.13 0 0 0 1.406-1.41z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00934B"
            d="m6.347 9.266.043.017.827.368A5.04 5.04 0 0 1 9.63 7.238l-.193-.432-.274-.639c-.313-.621-.874-.411-1.071-.309A7 7 0 0 0 5.91 7.984l-.004.034c-.356.823.266 1.166.441 1.248"
          />
          <path
            fill="#22D511"
            d="m7.226 9.643.703.313.613.265.484.219a3.1 3.1 0 0 1 1.41-1.406l-.219-.488-.27-.609-.308-.707a5.07 5.07 0 0 0-2.413 2.413"
          />
          <path
            fill="#BEF000"
            d="m9.017 10.44 1.955.857a.34.34 0 0 0 .308-.33l-.411-.93-.442-1.011a3.15 3.15 0 0 0-1.41 1.414"
          />
          <path
            fill="#00934B"
            d="M19.119 10.5c-.326-.814-.994-.63-1.179-.557l-.051.021-.412.159-.441.171a5.08 5.08 0 0 1 0 3.425l.441.17.57.22c.66.278.939-.193 1.037-.442.253-1.024.27-2.1.035-3.171z"
          />
          <path
            fill="#22D511"
            d="m17.045 10.299-.716.274-1.119.437a3.1 3.1 0 0 1 0 1.993l.484.193.63.244.712.279a5.04 5.04 0 0 0 .008-3.42"
          />
          <path
            fill="#BEF000"
            d="m15.215 11.014-1.03.399-.955.377a.34.34 0 0 0-.056.351q.026.054.056.095l.956.368 1.028.399a3.13 3.13 0 0 0 0-1.993z"
          />
          <path
            fill="#00934B"
            d="m6.515 13.894.445-.175a5.04 5.04 0 0 1 0-3.42l-.445-.176-.58-.227c-.668-.27-.933.227-1.028.471a7 7 0 0 0-.034 3.116v.008c.326.836 1.007.643 1.192.579z"
          />
          <path
            fill="#22D511"
            d="m6.96 13.714.712-.274.621-.244.493-.193a3.07 3.07 0 0 1 0-1.993l-.493-.193-.621-.236-.712-.274a5 5 0 0 0 0 3.412z"
          />
          <path
            fill="#BEF000"
            d="m8.795 13.003 1.028-.399.947-.368a.334.334 0 0 0-.008-.455l-1.976-.771a3.13 3.13 0 0 0 .009 1.993"
          />
          <path
            fill="#00934B"
            d="m7.235 14.37-.433.193-.455.201s-.792.429-.428 1.247v.009a7 7 0 0 0 2.211 2.164c.227.107.797.292 1.085-.403l.24-.557.192-.428a5.13 5.13 0 0 1-2.412-2.426"
          />
          <path
            fill="#22D511"
            d="m10.235 15.471.21-.48a3.1 3.1 0 0 1-1.41-1.41l-.485.215-.613.265-.702.309a5.05 5.05 0 0 0 2.42 2.413l.31-.703.27-.613z"
          />
          <path
            fill="#BEF000"
            d="m10.445 14.983.44-1.016.412-.93a.34.34 0 0 0-.325-.317l-.93.411-1.016.442c.304.612.8 1.108 1.414 1.41z"
          />
          <path
            fill="#00934B"
            d="m16.775 9.651.437-.193.484-.214-.043.009c.176-.086.789-.42.446-1.226a6.9 6.9 0 0 0-2.28-2.211c-.635-.326-1.029.42-1.029.42l-.244.557-.193.437a5.04 5.04 0 0 1 2.422 2.421"
          />
          <path
            fill="#22D511"
            d="m13.775 8.537-.206.489c.613.304 1.11.8 1.414 1.414l1.097-.476.695-.313a5.07 5.07 0 0 0-2.422-2.421l-.309.707z"
          />
          <path
            fill="#BEF000"
            d="m13.569 9.026-.446 1.011-.411.947a.33.33 0 0 0 .214.287c.03.018.073.026.116.026l.934-.411 1.016-.446a3.23 3.23 0 0 0-1.423-1.414"
          />
          <path
            fill="#00934B"
            d="m13.886 17.486-.176-.442a5.03 5.03 0 0 1-3.416 0l-.175.442-.287.737s-.142.578.694.9a7 7 0 0 0 3.021-.009c.146-.043.84-.261.592-.99z"
          />
          <path
            fill="#22D511"
            d="m13.715 17.044-.275-.711-.24-.63-.193-.484a3.1 3.1 0 0 1-1.992 0l-.193.484-.245.63-.274.711a5.03 5.03 0 0 0 3.416 0z"
          />
          <path
            fill="#BEF000"
            d="m12.999 15.214-.772-1.971a.35.35 0 0 0-.36-.065c-.034.018-.068.035-.09.06l-.368.948-.403 1.028a3.08 3.08 0 0 0 1.993 0"
          />
          <path
            fill="#00934B"
            d="m10.11 6.518.172.446a5.1 5.1 0 0 1 3.42-.008l.175-.446.176-.45c.069-.184.257-.874-.578-1.192l-.018-.008a7.2 7.2 0 0 0-3.073.043c-.235.073-.788.343-.492 1.054l.214.561z"
          />
          <path
            fill="#22D511"
            d="m10.286 6.964.274.712.245.621.192.493a3.06 3.06 0 0 1 1.993 0l.193-.493.24-.621.279-.712a5.03 5.03 0 0 0-3.416 0"
          />
          <path
            fill="#BEF000"
            d="m10.997 8.79.78 1.993a.34.34 0 0 0 .442-.017l.368-.956.403-1.029a3.18 3.18 0 0 0-1.993.009"
          />
          <path
            fill="#00934B"
            d="m17.657 14.747-.051-.017-.394-.171-.437-.198a5.07 5.07 0 0 1-2.422 2.422l.437.99c.317.771.973.471 1.14.368a7 7 0 0 0 2.143-2.112l.017-.035c.36-.818-.257-1.161-.437-1.247z"
          />
          <path
            fill="#22D511"
            d="m16.775 14.361-.703-.308-.622-.27-.475-.21a3.08 3.08 0 0 1-1.406 1.401l.205.476.27.621.31.703a5.02 5.02 0 0 0 2.42-2.413"
          />
          <path
            fill="#BEF000"
            d="m14.975 13.586-1.012-.446-.921-.403a.3.3 0 0 0-.112.026.33.33 0 0 0-.184.184.23.23 0 0 0-.026.107l.403.922.446 1.015a3.13 3.13 0 0 0 1.406-1.41z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLMWR.displayName = 'LMWR'
