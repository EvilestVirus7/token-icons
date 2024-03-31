import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconFCTR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.714 7.217a1.33 1.33 0 0 0-1.234-.669c-.137.018-.317.09-.476.086a.95.95 0 0 1-.955-.866c-.086-.754.77-1.311 1.414-.93q.355.209.446.532c.09.33.17.523.44.733.3.231.674.351 1.042.261.172-.043.292-.06.356-.06.6.013.823.403.977.922.099.338.549.621.845.715.18.056.36.043.56 0 .13-.034.262-.073.395-.06.917.086 1.209 1.166.51 1.749-.043.03-.085.098-.141.206-.176.334-.189.998.077 1.298.116.129.253.257.33.403.514.943-.66 1.899-1.47 1.191a.957.957 0 0 1-.094-1.324c.244-.287.428-.484.437-.896.004-.407-.056-.638-.33-.925a1.4 1.4 0 0 1-.313-.536 2 2 0 0 0-.129-.33c-.6-.943-1.774-.266-1.251.703.107.193.3.326.411.523.515.93-.617 1.911-1.448 1.2a.955.955 0 0 1-.219-1.179c.137-.266.403-.386.489-.707.094-.351.086-.879-.18-1.166-.099-.111-.219-.218-.292-.351-.094-.172-.128-.373-.197-.523m-6.488 3.746c.467.214.934-.232 1.08-.652l.107-.321c.338-.652 1.311-.72 1.675-.06.352.626-.047 1.423-.775 1.453q-.065 0-.386-.064a1.24 1.24 0 0 0-1.136.33c-.291.26-.278.535-.407.797-.09.184-.304.343-.398.501a1.35 1.35 0 0 0-.013 1.26c.09.172.3.317.398.502a.98.98 0 0 1-.047.994.97.97 0 0 1-1.376.227.96.96 0 0 1-.227-1.269c.099-.158.343-.342.42-.535.133-.369.155-.973-.133-1.286-.128-.133-.27-.274-.342-.437-.193-.412-.073-.802.231-1.114.189-.202.3-.403.33-.682.034-.291-.013-.694-.214-.917-.125-.137-.27-.27-.343-.437-.274-.6.107-1.329.784-1.372.309-.013.626.172.977.056.335-.111.759-.386.857-.733.116-.441.292-.771.772-.874.797-.18 1.474.686 1.028 1.427a.96.96 0 0 1-.917.454c-.167-.025-.368-.09-.531-.085a1.264 1.264 0 0 0-1.2 1.032c-.043.228-.352.442-.463.635-.227.398-.227.951.249 1.17"
          />
          <path
            fill="currentColor"
            d="M13.8 13.796a1.07 1.07 0 0 0-.472-.673c-.475-.317-.728-.266-1.234-.163-.184.034-.48-.077-.638-.09a1.29 1.29 0 0 0-1.243.853q-.077.27-.107.321c-.279.502-.986.673-1.44.292a.968.968 0 0 1 .141-1.599c.506-.287.943.133 1.474-.098.287-.13.626-.356.72-.648.078-.231.129-.463.313-.66.236-.248.352-.394.377-.728.035-.412-.025-.776-.351-1.063a.994.994 0 0 1-.133-1.243c.711-1.016 2.271-.009 1.586 1.076a2 2 0 0 1-.214.248c-.343.373-.365.982-.138 1.415.086.167.27.308.386.488.086.15.12.352.193.515a1.29 1.29 0 0 0 1.329.655c.115-.026.227-.064.342-.068.42-.005.729.18.913.553.202.398.052.925-.313 1.187a.954.954 0 0 1-1.487-.57z"
          />
          <path
            fill="currentColor"
            d="M15.729 16.77c-.056.12-.082.3-.155.433a.93.93 0 0 1-.853.501c-.158 0-.338-.064-.497-.085-.446-.06-.913.244-1.165.59-.095.13-.142.43-.22.58a.955.955 0 0 1-1.653.042c-.095-.15-.129-.377-.202-.527-.073-.163-.214-.313-.407-.445-.317-.215-.643-.288-.986-.21a1.7 1.7 0 0 1-.334.055.948.948 0 0 1-.857-1.346c.377-.827 1.517-.728 1.783.146.077.244.146.429.343.6.248.202.531.36.857.364q.064 0 .364-.06a1.25 1.25 0 0 1 .531 0c.373.078.549.086.87-.09a.648.648 0 0 0 .129-1.05.98.98 0 0 0-.784-.235c-.137.013-.317.09-.476.09a.946.946 0 0 1-.913-1.273.935.935 0 0 1 1.277-.557q.385.167.493.488c.073.232.129.463.3.656.15.163.399.317.583.386.292.103.476.056.737 0 .206-.043.382-.026.579.017.343.073.518.051.823-.111.317-.172.514-.37.613-.703.034-.116.064-.223.12-.322.514-.891 1.907-.484 1.79.566-.068.621-.63.943-1.212.819-.287-.06-.497-.095-.78.038-.317.142-.557.322-.703.643z"
          />
        </>
      ) : (
        <>
          <path
            fill="#2CBCB9"
            d="M13.714 7.217a1.33 1.33 0 0 0-1.234-.669c-.137.018-.317.09-.476.086a.95.95 0 0 1-.955-.866c-.086-.754.77-1.311 1.414-.93q.355.209.446.532c.09.33.17.523.44.733.3.231.674.351 1.042.261.172-.043.292-.06.356-.06.6.013.823.403.977.922.099.338.549.621.845.715.18.056.36.043.56 0 .13-.034.262-.073.395-.06.917.086 1.209 1.166.51 1.749-.043.03-.085.098-.141.206-.176.334-.189.998.077 1.298.116.129.253.257.33.403.514.943-.66 1.899-1.47 1.191a.957.957 0 0 1-.094-1.324c.244-.287.428-.484.437-.896.004-.407-.056-.638-.33-.925a1.4 1.4 0 0 1-.313-.536 2 2 0 0 0-.129-.33c-.6-.943-1.774-.266-1.251.703.107.193.3.326.411.523.515.93-.617 1.911-1.448 1.2a.955.955 0 0 1-.219-1.179c.137-.266.403-.386.489-.707.094-.351.086-.879-.18-1.166-.099-.111-.219-.218-.292-.351-.094-.172-.128-.373-.197-.523"
          />
          <path
            fill="#3291C2"
            d="M7.226 10.963c.467.214.934-.232 1.08-.652l.107-.321c.338-.652 1.311-.72 1.675-.06.352.626-.047 1.423-.775 1.453q-.065 0-.386-.064a1.24 1.24 0 0 0-1.136.33c-.291.26-.278.535-.407.797-.09.184-.304.343-.398.501a1.35 1.35 0 0 0-.013 1.26c.09.172.3.317.398.502a.98.98 0 0 1-.047.994.97.97 0 0 1-1.376.227.96.96 0 0 1-.227-1.269c.099-.158.343-.342.42-.535.133-.369.155-.973-.133-1.286-.128-.133-.27-.274-.342-.437-.193-.412-.073-.802.231-1.114.189-.202.3-.403.33-.682.034-.291-.013-.694-.214-.917-.125-.137-.27-.27-.343-.437-.274-.6.107-1.329.784-1.372.309-.013.626.172.977.056.335-.111.759-.386.857-.733.116-.441.292-.771.772-.874.797-.18 1.474.686 1.028 1.427a.96.96 0 0 1-.917.454c-.167-.025-.368-.09-.531-.085a1.264 1.264 0 0 0-1.2 1.032c-.043.228-.352.442-.463.635-.227.398-.227.951.249 1.17"
          />
          <path
            fill="#2FA6BD"
            d="M13.8 13.796a1.07 1.07 0 0 0-.472-.673c-.475-.317-.728-.266-1.234-.163-.184.034-.48-.077-.638-.09a1.29 1.29 0 0 0-1.243.853q-.077.27-.107.321c-.279.502-.986.673-1.44.292a.968.968 0 0 1 .141-1.599c.506-.287.943.133 1.474-.098.287-.13.626-.356.72-.648.078-.231.129-.463.313-.66.236-.248.352-.394.377-.728.035-.412-.025-.776-.351-1.063a.994.994 0 0 1-.133-1.243c.711-1.016 2.271-.009 1.586 1.076a2 2 0 0 1-.214.248c-.343.373-.365.982-.138 1.415.086.167.27.308.386.488.086.15.12.352.193.515a1.29 1.29 0 0 0 1.329.655c.115-.026.227-.064.342-.068.42-.005.729.18.913.553.202.398.052.925-.313 1.187a.954.954 0 0 1-1.487-.57z"
          />
          <path
            fill="#309CC0"
            d="M15.729 16.77c-.056.12-.082.3-.155.433a.93.93 0 0 1-.853.501c-.158 0-.338-.064-.497-.085-.446-.06-.913.244-1.165.59-.095.13-.142.43-.22.58a.955.955 0 0 1-1.653.042c-.095-.15-.129-.377-.202-.527-.073-.163-.214-.313-.407-.445-.317-.215-.643-.288-.986-.21a1.7 1.7 0 0 1-.334.055.948.948 0 0 1-.857-1.346c.377-.827 1.517-.728 1.783.146.077.244.146.429.343.6.248.202.531.36.857.364q.064 0 .364-.06a1.25 1.25 0 0 1 .531 0c.373.078.549.086.87-.09a.648.648 0 0 0 .129-1.05.98.98 0 0 0-.784-.235c-.137.013-.317.09-.476.09a.946.946 0 0 1-.913-1.273.935.935 0 0 1 1.277-.557q.385.167.493.488c.073.232.129.463.3.656.15.163.399.317.583.386.292.103.476.056.737 0 .206-.043.382-.026.579.017.343.073.518.051.823-.111.317-.172.514-.37.613-.703.034-.116.064-.223.12-.322.514-.891 1.907-.484 1.79.566-.068.621-.63.943-1.212.819-.287-.06-.497-.095-.78.038-.317.142-.557.322-.703.643z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFCTR.displayName = 'FCTR'
