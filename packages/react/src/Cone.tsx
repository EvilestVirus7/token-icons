import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCONE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#3A1704"
        d="M4.47 7.903c.412-.206.857-.086 1.029 0 .171-.347.664-1.046 1.281-1.046.613 0 .6.523.515.784l.257-.257h1.02l.771.784.257-.265h1.025l.257.788c.085-.171.36-.523.771-.523.407 0 .682.172.767.258.086-.086.36-.258.772-.258.407 0 .853.699 1.024 1.046.172-.437.664-1.311 1.282-1.311.612 0 1.11.698 1.28 1.05.172-.262.614-.785 1.03-.785.407 0 .68.523.767.785a.91.91 0 0 1 .771-.523c.814 0 .849 1.046.767 1.568-.411 2.726-1.543 3.408-2.057 3.408-.081.784-.253 2.464-.253 2.88 0 .527-.257 1.05-1.538.788-1.282-.261-8.203-.527-9.485-.261-1.028.21-1.285-.262-1.285-.527L4.98 12.36c-.085 0-.355-.056-.767-.266-.407-.205 0-.784.257-1.045-.085-.613-.308-1.886-.514-2.096-.257-.262 0-.785.514-1.05"
      />
      <path
        fill="#F0F3FA"
        d="M11.208 8.314a1.1 1.1 0 0 0-.326.377l-.257-.788H9.596l-.257.265-.767-.788H7.547l-.257.261c.043-.137.073-.347 0-.514l-.034-.06c-.081-.12-.227-.21-.476-.21-.587 0-1.063.63-1.255.994l-.03.052-.018-.009a1.2 1.2 0 0 0-1.007.009c-.514.265-.771.788-.514 1.05.206.21.429 1.483.514 2.096-.257.26-.664.84-.257 1.045.412.215.686.266.772.266l.514 3.926c0 .265.257.737 1.281.527 1.282-.262 8.203 0 9.485.257 1.285.266 1.543-.257 1.543-.784 0-.416.167-2.096.252-2.88.515 0 1.642-.682 2.053-3.408.086-.522.052-1.568-.771-1.568a.86.86 0 0 0-.454.154.94.94 0 0 0-.313.369 1.7 1.7 0 0 0-.227-.442c-.138-.188-.318-.343-.545-.343-.257 0-.527.206-.733.42a2.3 2.3 0 0 0-.291.365 2.5 2.5 0 0 0-.249-.395c-.24-.321-.608-.655-1.033-.655-.432 0-.81.433-1.05.844a3 3 0 0 0-.231.471 4 4 0 0 0-.27-.454c-.21-.3-.493-.6-.758-.6a1.16 1.16 0 0 0-.772.266q.002-.006-.008-.013a1.16 1.16 0 0 0-.76-.249.76.76 0 0 0-.44.146m-.138-.42c.159-.09.356-.154.579-.154.267-.004.531.055.771.171.24-.116.505-.175.772-.171a.96.96 0 0 1 .548.188q.255.183.442.433l.171-.235c.245-.3.635-.652 1.145-.652.47 0 .848.266 1.105.514q.117.122.214.245l.099-.09c.201-.18.514-.403.887-.403a1.1 1.1 0 0 1 .857.48c.253-.167.515-.219.686-.219.3 0 .561.099.763.283.193.172.3.399.368.609.129.411.108.874.056 1.174-.214 1.41-.617 2.336-1.071 2.923-.254.35-.604.62-1.007.776-.095.857-.223 2.177-.223 2.52 0 .317-.077.754-.463 1.037-.373.27-.909.308-1.586.171-.291-.06-.934-.124-1.791-.18a85 85 0 0 0-5.765-.18c-.857.009-1.491.043-1.761.099-.574.116-1.024.06-1.346-.146a.96.96 0 0 1-.45-.767l-.471-3.6a3.5 3.5 0 0 1-.579-.244.72.72 0 0 1-.398-.523.96.96 0 0 1 .073-.523c.081-.193.205-.373.321-.514a18 18 0 0 0-.171-.973 6 6 0 0 0-.198-.686l-.012-.021c-.288-.313-.228-.72-.095-.995.142-.291.407-.548.737-.72a1.57 1.57 0 0 1 1.025-.128c.098-.146.223-.305.368-.45.257-.249.639-.515 1.11-.515.215 0 .412.043.579.155a.87.87 0 0 1 .321.368h1.072l.591.6.077-.077h1.518z"
      />
      <path
        fill="url(#CONE__a)"
        d="m17.743 13.384-.248 2.314c0 .343-.103 1.029-.51 1.029-.163 0-.506-.051-.977-.12a27.4 27.4 0 0 0-4.102-.39c-1.037 0-2.289.103-3.369.197-1.285.112-2.331.197-2.468.06-.159-.158-.219-.514-.3-1.007-.052-.304-.112-.66-.21-1.054-.202-.823-.257-1.372-.257-1.543.257 0 .814-.107 1.02-.514.171.257.608.715 1.015.514.408-.21.678-.771.763-1.033.172.257.557.771.759.771.257 0 1.273 0 1.526-.257.201-.205.424-.6.505-.771h.258c.085.257.35.771.758.771.407 0 .677-.514.763-.771.086.257.356.771.763.771s.677-.514.758-.771c.086.257.408.771 1.016.771a1.93 1.93 0 0 0 1.273-.514v.257c0 .343.141.845.506 1.029.51.257.762.257.762.257zm-7.028 1.187c.137 0 .428-.072.428-.428s-.291-.429-.428-.429-.429.073-.429.429c0 .355.292.428.429.428m0 .857c.63 0 1.101-.617 1.101-1.315 0-.694-.471-1.256-1.101-1.256s-1.175.562-1.175 1.256c0 .698.545 1.316 1.175 1.316m2.571-.857a.436.436 0 0 0 .429-.458c0-.352-.292-.399-.429-.399s-.428.073-.428.429c0 .355.29.428.428.428m0 .857c.63 0 1.072-.591 1.072-1.285 0-.695-.442-1.286-1.072-1.286s-1.071.591-1.071 1.286c0 .694.441 1.285 1.071 1.285m2.936-.934c-.043.352-.446.309-.583.292-.06-.009-.056-.013-.013-.369.022-.159.052-.411.107-.381.137.017.532.107.489.458m.908.112c-.085.69-.66 1.187-1.285 1.11l-.879-.112a.253.253 0 0 1-.218-.278l.055-.459.069-.54.128-.998a.253.253 0 0 1 .283-.22l.879.108c.621.077 1.058.703.968 1.389m-10.444-1.47-.626.205a.09.09 0 0 0-.055.082c.021.771.471 1.864.728 2.387a.086.086 0 0 0 .099.043l.673-.223a.1.1 0 0 0 .03-.022l.197-.192a.085.085 0 0 1 .098-.018l.42.21a.08.08 0 0 0 .065.005l.66-.219a.09.09 0 0 0 .055-.09l-.235-2.121a.086.086 0 0 0-.086-.073h-.596a.086.086 0 0 0-.086.086v.78a.086.086 0 0 1-.124.077l-.304-.15a.08.08 0 0 0-.066-.005.08.08 0 0 0-.05.043l-.128.257a.085.085 0 0 1-.13.032.1.1 0 0 1-.029-.04l-.403-1.007a.086.086 0 0 0-.107-.047"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="url(#CONE__b)"
        d="M4.8 8.143c-.407 0-.514.428-.514.6.206.415.429 1.718.514 2.323-.257.257-.257.514-.257.771 0 .206.343.257.51.257.253.515.506.515.759.515.205 0 .085-.686 0-1.03l.51-.256c.257 1.028.763 1.285 1.015 1.285.202 0 .258-.514.258-.771 0-.171-.056-.514-.258-.514-.257 0-.51-.514-.51-.772 0-.21.172-.771.258-1.028-.185-.189-.103-.643-.043-.977.021-.129.043-.24.043-.313 0-.257-.189-.947-.442-.947-.257 0-.574.171-.831.685-.202.416.257 1.719.51 2.319l-.51.257c-.086-.6-.253-1.851-.253-2.057 0-.257-.257-.347-.763-.347zm3.043 1.714h-.506l-.257.433.257.424h.506l.257-.424zm-.128-2.143h.857L9 8.571l-.428.857h-.857l-.429-.857zm1.928.429-.428.643.428.642h.643l.429-.642-.429-.643zm.857 1.714.39-.429h.51l.386.429-.386.433h-.514zm-1.928 0-.643 1.286.643.857h1.285l.643-.857-.643-1.286zm2.571-1.114c.172-.257.613-.613 1.016 0v.518c.086-.257.291-.69.698-.69.506 0 .858.172.858 1.205v1.543c0 .17-.013.68-.215.68-.428 0-.643-.556-.643-1.07v-.275c.013-.501.026-1.093-.188-.878-.099.102-.159.467-.227.87-.103.625-.227 1.354-.536 1.354-.407 0-.506-.849-.506-1.191.253-.172.759-.57.759-.772 0-.257-.759-1.29-1.016-1.29zM15.43 12c-1.016 0-1.286-1.277-1.286-1.967 0-.626.557-1.89 1.32-1.89.609 0 .93.771 1.016 1.118v.772c0 .206-.171.428-.257.514.257.257.476 1.453-.793 1.453m2.314-3.514c.172.085.515.312.515.514 0 .098-.108.3-.228.527-.201.39-.441.857-.283 1.02.108.107.258-.184.446-.561.274-.536.63-1.243 1.076-1.243.763 0 .51 1.547.257 2.323-.257.771-.763 2.057-1.779 2.057-1.015 0-1.268-.772-1.015-1.029.158-.163.42-.017.651.112.142.077.27.145.364.145.258 0 .506-.514.506-1.028-.171.257-.608.72-1.015.514-.506-.257-.76-3.09.51-3.347zM15.468 9c-.206 0-.258.433-.258.518h.51c0-.085-.051-.514-.257-.514zm0 2.066c-.206 0-.258-.343-.258-.515h.51c0 .172-.051.515-.257.515z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="CONE__a"
          x1="12.002"
          x2="11.565"
          y1="6.428"
          y2="16.456"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".04" stopColor="#CD7B41" />
          <stop offset=".26" stopColor="#DB995D" />
          <stop offset=".36" stopColor="#C0733A" />
          <stop offset=".6" stopColor="#D29957" />
          <stop offset=".88" stopColor="#CE8447" />
          <stop offset="1" stopColor="#DC9555" />
        </linearGradient>
        <linearGradient
          id="CONE__b"
          x1="4.29"
          x2="19.779"
          y1="9.317"
          y2="10.333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEA90F" />
          <stop offset=".08" stopColor="#FFB917" />
          <stop offset=".2" stopColor="#EE7B07" />
          <stop offset=".34" stopColor="#F9F085" />
          <stop offset=".45" stopColor="#F2A700" />
          <stop offset=".58" stopColor="#FAA401" />
          <stop offset=".69" stopColor="#FDB719" />
          <stop offset=".83" stopColor="#FBA101" />
          <stop offset=".92" stopColor="#EC9E00" />
          <stop offset="1" stopColor="#EE9D03" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconCONE.displayName = 'CONE'
