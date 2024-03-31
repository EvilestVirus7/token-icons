import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconGENI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.357 11.987a.4.4 0 0 1-.017-.085c0-.018 0-.018.013 0l.043.085c.359.755.78 1.48 1.26 2.165.454.642.943 1.092 1.581 1.68l.03.03a4 4 0 0 1 1.072 2.07q.026.104.06.004c.287-.785.077-1.492-.283-2.229q-.34-.691-.724-1.358c-.236-.416-.58-1.423.02-1.745a.1.1 0 0 1 .095 0c.395.223.802.429 1.222.609.488.19 1.006.297 1.53.317q.108.012.025-.06-.485-.394-.985-.771a1.7 1.7 0 0 1-.557-.716c-.018-.043 0-.056.042-.039.472.206 2.362 1.26 1.972 1.946a.01.01 0 0 0 0 .013l.008.004h.009a1.9 1.9 0 0 0 .771-.334c.952-.707-.527-2.083-1.058-2.52a.03.03 0 0 1-.01-.033l.006-.01c.428-.51.17-1.2-.18-1.68a6 6 0 0 0-1.955-1.73.08.08 0 0 1-.043-.065c-.158-1.457-1.778-2.545-3.128-2.815q-.091-.02-.022.042.395.354.678.802c.025.043.012.06-.035.06h-.193a10.4 10.4 0 0 0-3.394.111c-.051.013-.056.03-.004.052l1.11.527.008.008.007.011a.026.026 0 0 1-.015.032L7.569 7.633c-.039.013-.035.03 0 .038q.879.222 1.77.39c.025.01.025.013 0 .022l-.558.188c-1.11.386-1.958 1.278-2.627 2.186-.514.707-.823 1.29-.343 2.147q.025.039.043 0 .29-.506.575-1.015.01.006.008.012l-.257.708c-.257.703-.03 1.264.574 1.684h.018l.008-.004v-.013c.099-1.32.63-2.529 1.731-3.339.043-.03.043-.026.013.017-.643.828-1.311 1.839-1.457 2.885-.193 1.444.793 2.807 1.672 3.874q.02.02.034 0a6.14 6.14 0 0 0 .724-2.816l.004-.818c0-.6.005-1.2.043-1.8a6 6 0 0 1 .202-1.222c0 .086-.013.172-.026.249 0 .038-.009.068-.013.098-.103 1.038-.026 1.92.06 2.88l.017.18q.034.375.035.665c.012.578-.065.994-.198 1.495a.17.17 0 0 0 .03.15c.622.896 1.072 1.907 1.509 2.915l.266.6c.017.03.03.025.043-.005.359-.95.508-1.968.437-2.983a5.4 5.4 0 0 0-.262-1.414 12 12 0 0 0-.42-1.037c-.458-1.007-.84-2.259-.703-3.377l.009-.009c.009 0 .009 0 .009.009a7.4 7.4 0 0 0 .63 2.657l.274.613c.334.729.609 1.329.758 2.074q.029.154.095.814c.03.3.086.6.154.9.047.215.12.318.274.46a44 44 0 0 0 1.672 1.452l.007-.003.006-.006.042-.09c.219-.492.403-.895.416-1.495a3.43 3.43 0 0 0-1.2-2.756c-1.114-.99-1.873-2.421-2.314-3.806zm4.697-1.624a2 2 0 0 0-.128-.24 4 4 0 0 0-.793-.866c-.017-.013-.021-.008-.026.013 0 .266-.017.531-.043.802-.055.497.33.75.776.814.189.03.386-.004.579-.043l.128-.026q.142-.021 0-.043c-.321-.055-.398-.214-.493-.411"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.613 4.826c1.243.385 2.546 1.388 2.7 2.73-.137-.03-.433-.107-.472-.257a2.84 2.84 0 0 0-.75-1.295 5 5 0 0 0-.87-.745 6 6 0 0 1-.608-.433m-.527.715q.03.027.146.035a.9.9 0 0 1-.378.107c-.634.051-1.251.171-1.74.248a3 3 0 0 0-.368.1l-.557-.267q-.034-.013.004-.025.784-.173 1.431-.198a27 27 0 0 1 1.462 0m-3.532 5.062c-1.144.848-1.645 1.993-1.77 3.373v.008l-.01.005h-.02c-.54-.403-.823-.909-.617-1.582q-.001.065.043.09a.1.1 0 0 1 .03.039c.056.201.283.411.454.54a.043.043 0 0 0 .06 0 .04.04 0 0 0 .013-.022c.026-.09.026-.193.043-.274.11-.496.33-.962.643-1.363a5.5 5.5 0 0 1 1.076-1.05q.306-.219.595-.463l.013.009v.021l-.557.669zm4.132 3.081c.583.793 1.178 1.342 1.8 1.993q.247.258.364.437c.24.36.386.759.514 1.166.026.069.022.129.022.201 0 .018-.009.03-.017.043a.12.12 0 0 1-.116.039c-.197-.617-.484-1.251-.943-1.671-.634-.583-1.149-1.046-1.611-1.702a15.4 15.4 0 0 1-1.295-2.173.7.7 0 0 1-.051-.141q0-.01-.013-.005-.162.06-.008.01l-.258-1.068.005-.004.017-.005c.008 0 .017 0 .021.013.386 1.029.9 1.985 1.564 2.872zm-7.085-2.241.266.626q.012.027.043.017c.116-.039.154-.236.287-.305.052-.025.103-.05.163-.072l-.506.9-.007.008-.01.004a.02.02 0 0 1-.017-.008 2.1 2.1 0 0 1-.236-.711 1.4 1.4 0 0 1 .017-.46m10.668 1.942a7 7 0 0 1-1.753-.784.1.1 0 0 0-.095 0 .64.64 0 0 0-.274.257c-.098-.171-.051-.36.133-.578.313-.36.652-.292.943.034l.557.626c.043.051.172.141.377.274a.15.15 0 0 1 .056.069c0 .008 0 .012-.009.012h-.017l-.008.009q-.002.025.008.03l.022.008c.038 0 .055.013.06.043m-9.21.33.017.086q.002.024.017.043c.043.064.051.137.073.193.171.433.308.771.608 1.234.27.416.587.836.9 1.252a.04.04 0 0 0 .035.017.05.05 0 0 0 .034-.018.5.5 0 0 0 .086-.128 8.6 8.6 0 0 0 .492-1.44c.043-.193.108-.334.189-.433a6.1 6.1 0 0 1-.754 2.902c-.857-1.038-1.8-2.32-1.697-3.712zm2.674 2.19c.171.266.45.746.836 1.449q.458.832.801 1.718.049.129.086 0c.163-.53.257-1.088.377-1.628a.07.07 0 0 1 .026-.043c.072-.056.034-.146.051-.21a7.2 7.2 0 0 1-.428 2.777q-.026.078-.056 0c-.54-1.2-1.02-2.408-1.796-3.535q-.032-.053-.013-.15c.026-.103.064-.232.116-.378m2.576 1.492a.4.4 0 0 1 .197.184 1 1 0 0 0 .128.189q.825.736 1.672 1.448a.07.07 0 0 0 .073-.03c.175-.3.283-.621.377-.951q.011-.034.043-.022c.034.009.055-.004.072-.042a3.04 3.04 0 0 1-.257 1.512l-.201.442a.02.02 0 0 1-.013.008.02.02 0 0 1-.017 0 45 45 0 0 1-1.581-1.38c-.202-.184-.296-.283-.36-.557a7 7 0 0 1-.133-.801m-1.363-9.562c-1.265-.317-3.343-.184-3.369-.171l1.787.398z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GENI__a)"
            d="M11.357 11.987a.4.4 0 0 1-.017-.085c0-.018 0-.018.013 0l.043.085c.359.755.78 1.48 1.26 2.165.454.642.943 1.092 1.581 1.68l.03.03a4 4 0 0 1 1.072 2.07q.026.104.06.004c.287-.785.077-1.492-.283-2.229q-.34-.691-.724-1.358c-.236-.416-.58-1.423.02-1.745a.1.1 0 0 1 .095 0c.395.223.802.429 1.222.609.488.19 1.006.297 1.53.317q.108.012.025-.06-.485-.394-.985-.771a1.7 1.7 0 0 1-.557-.716c-.018-.043 0-.056.042-.039.472.206 2.362 1.26 1.972 1.946a.01.01 0 0 0 0 .013l.008.004h.009a1.9 1.9 0 0 0 .771-.334c.952-.707-.527-2.083-1.058-2.52a.03.03 0 0 1-.01-.033l.006-.01c.428-.51.17-1.2-.18-1.68a6 6 0 0 0-1.955-1.73.08.08 0 0 1-.043-.065c-.158-1.457-1.778-2.545-3.128-2.815q-.091-.02-.022.042.395.354.678.802c.025.043.012.06-.035.06h-.193a10.4 10.4 0 0 0-3.394.111c-.051.013-.056.03-.004.052l1.11.527.008.008.007.011a.026.026 0 0 1-.015.032L7.569 7.633c-.039.013-.035.03 0 .038q.879.222 1.77.39c.025.01.025.013 0 .022l-.558.188c-1.11.386-1.958 1.278-2.627 2.186-.514.707-.823 1.29-.343 2.147q.025.039.043 0 .29-.506.575-1.015.01.006.008.012l-.257.708c-.257.703-.03 1.264.574 1.684h.018l.008-.004v-.013c.099-1.32.63-2.529 1.731-3.339.043-.03.043-.026.013.017-.643.828-1.311 1.839-1.457 2.885-.193 1.444.793 2.807 1.672 3.874q.02.02.034 0a6.14 6.14 0 0 0 .724-2.816l.004-.818c0-.6.005-1.2.043-1.8a6 6 0 0 1 .202-1.222c0 .086-.013.172-.026.249 0 .038-.009.068-.013.098-.103 1.038-.026 1.92.06 2.88l.017.18q.034.375.035.665c.012.578-.065.994-.198 1.495a.17.17 0 0 0 .03.15c.622.896 1.072 1.907 1.509 2.915l.266.6c.017.03.03.025.043-.005.359-.95.508-1.968.437-2.983a5.4 5.4 0 0 0-.262-1.414 12 12 0 0 0-.42-1.037c-.458-1.007-.84-2.259-.703-3.377l.009-.009c.009 0 .009 0 .009.009a7.4 7.4 0 0 0 .63 2.657l.274.613c.334.729.609 1.329.758 2.074q.029.154.095.814c.03.3.086.6.154.9.047.215.12.318.274.46a44 44 0 0 0 1.672 1.452l.007-.003.006-.006.042-.09c.219-.492.403-.895.416-1.495a3.43 3.43 0 0 0-1.2-2.756c-1.114-.99-1.873-2.421-2.314-3.806zm4.697-1.624a2 2 0 0 0-.128-.24 4 4 0 0 0-.793-.866c-.017-.013-.021-.008-.026.013 0 .266-.017.531-.043.802-.055.497.33.75.776.814.189.03.386-.004.579-.043l.128-.026q.142-.021 0-.043c-.321-.055-.398-.214-.493-.411"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#FA9948"
            d="M12.613 4.826c1.243.385 2.546 1.388 2.7 2.73-.137-.03-.433-.107-.472-.257a2.84 2.84 0 0 0-.75-1.295 5 5 0 0 0-.87-.745 6 6 0 0 1-.608-.433"
          />
          <path
            fill="#F37F4F"
            d="M12.086 5.541q.03.027.146.035a.9.9 0 0 1-.378.107c-.634.051-1.251.171-1.74.248a3 3 0 0 0-.368.1l-.557-.267q-.034-.013.004-.025.784-.173 1.431-.198a27 27 0 0 1 1.462 0"
          />
          <path
            fill="#EE6757"
            d="M8.554 10.603c-1.144.848-1.645 1.993-1.77 3.373v.008l-.01.005h-.02c-.54-.403-.823-.909-.617-1.582q-.001.065.043.09a.1.1 0 0 1 .03.039c.056.201.283.411.454.54a.043.043 0 0 0 .06 0 .04.04 0 0 0 .013-.022c.026-.09.026-.193.043-.274.11-.496.33-.962.643-1.363a5.5 5.5 0 0 1 1.076-1.05q.306-.219.595-.463l.013.009v.021l-.557.669z"
          />
          <path
            fill="#F78F50"
            d="M12.686 13.684c.583.793 1.178 1.342 1.8 1.993q.247.258.364.437c.24.36.386.759.514 1.166.026.069.022.129.022.201 0 .018-.009.03-.017.043a.12.12 0 0 1-.116.039c-.197-.617-.484-1.251-.943-1.671-.634-.583-1.149-1.046-1.611-1.702a15.4 15.4 0 0 1-1.295-2.173.7.7 0 0 1-.051-.141q0-.01-.013-.005-.162.06-.008.01l-.258-1.068.005-.004.017-.005c.008 0 .017 0 .021.013.386 1.029.9 1.985 1.564 2.872z"
          />
          <path
            fill="#EE6757"
            d="m5.601 11.443.266.626q.012.027.043.017c.116-.039.154-.236.287-.305.052-.025.103-.05.163-.072l-.506.9-.007.008-.01.004a.02.02 0 0 1-.017-.008 2.1 2.1 0 0 1-.236-.711 1.4 1.4 0 0 1 .017-.46"
          />
          <path
            fill="#FA9948"
            d="M16.269 13.384a7 7 0 0 1-1.753-.784.1.1 0 0 0-.095 0 .64.64 0 0 0-.274.257c-.098-.171-.051-.36.133-.578.313-.36.652-.292.943.034l.557.626c.043.051.172.141.377.274a.15.15 0 0 1 .056.069c0 .008 0 .012-.009.012h-.017l-.008.009q-.002.025.008.03l.022.008c.038 0 .055.013.06.043"
          />
          <path
            fill="#F26E53"
            d="m7.059 13.714.017.086q.002.024.017.043c.043.064.051.137.073.193.171.433.308.771.608 1.234.27.416.587.836.9 1.252a.04.04 0 0 0 .035.017.05.05 0 0 0 .034-.018.5.5 0 0 0 .086-.128 8.6 8.6 0 0 0 .492-1.44c.043-.193.108-.334.189-.433a6.1 6.1 0 0 1-.754 2.902c-.857-1.038-1.8-2.32-1.697-3.712z"
          />
          <path
            fill="#F37F4F"
            d="M9.733 15.904c.171.266.45.746.836 1.449q.458.832.801 1.718.049.129.086 0c.163-.53.257-1.088.377-1.628a.07.07 0 0 1 .026-.043c.072-.056.034-.146.051-.21a7.2 7.2 0 0 1-.428 2.777q-.026.078-.056 0c-.54-1.2-1.02-2.408-1.796-3.535q-.032-.053-.013-.15c.026-.103.064-.232.116-.378"
          />
          <path
            fill="#FA9149"
            d="M12.309 17.396a.4.4 0 0 1 .197.184 1 1 0 0 0 .128.189q.825.736 1.672 1.448a.07.07 0 0 0 .073-.03c.175-.3.283-.621.377-.951q.011-.034.043-.022c.034.009.055-.004.072-.042a3.04 3.04 0 0 1-.257 1.512l-.201.442a.02.02 0 0 1-.013.008.02.02 0 0 1-.017 0 45 45 0 0 1-1.581-1.38c-.202-.184-.296-.283-.36-.557a7 7 0 0 1-.133-.801"
          />
          <path
            fill="#F37F4F"
            d="M10.946 7.834c-1.265-.317-3.343-.184-3.369-.171l1.787.398z"
          />
          <defs>
            <linearGradient
              id="GENI__a"
              x1="17.841"
              x2="7.35"
              y1="12.429"
              y2="12.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FECB40" />
              <stop offset=".62" stopColor="#F9A555" />
              <stop offset="1" stopColor="#F68E62" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconGENI.displayName = 'GENI'
