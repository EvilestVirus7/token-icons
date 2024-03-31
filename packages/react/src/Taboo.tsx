import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTABOO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.087 8.173c-.077.06-.244.141-.373.175-.488.129-1.474.129-3.077-.017-1.041-.09-1.928-.077-2.447.043a2.2 2.2 0 0 0-1.32.896 1.4 1.4 0 0 0-.201 1.08.87.87 0 0 0 .891.72 1 1 0 0 0 .54-.142c.107-.064.352-.295.352-.334 0-.008-.022-.013-.048-.008-.132.03-.308-.082-.381-.236-.043-.09-.047-.129-.047-.287 0-.223.03-.365.128-.57.236-.506.755-.737 1.458-.665.18.022.75.129.827.163.034.013.025.039-.129.377a14 14 0 0 1-.814 1.616c-.592.982-1.132 1.56-1.757 1.882-.309.162-.455.197-.793.214a2 2 0 0 1-.467-.03l.085.128a4.2 4.2 0 0 1 .75 1.706.3.3 0 0 0 .03.107c.03.022.292-.068.45-.15.472-.248.965-.797 1.458-1.628.428-.737.72-1.346 1.35-2.825q.242-.623.57-1.208c.012-.009.115.017.227.051.565.185.835.236 1.191.24.223 0 .3-.008.429-.043.325-.085.557-.218.771-.462a1.7 1.7 0 0 0 .356-.626c.064-.206.064-.232-.009-.172zm2.52.441c-.15.056-.278.15-.415.304-.219.249-.399.596-.883 1.702q-.577 1.326-1.192 2.636c-.004.004-.03-.013-.051-.043-.022-.03-.043-.052-.047-.047l-.086.12a2.2 2.2 0 0 1-.476.488c-.274.172-.497.129-.527-.103-.026-.15 0-.355.06-.535.15-.45.72-1.659.943-1.899l.086-.094h-.947c0 .077-.03.231-.108.411l-.072.163-.022-.103a.54.54 0 0 0-.171-.321.73.73 0 0 0-.485-.15c-.857 0-1.405 1.2-1.705 1.83-.236.505-.493 2.027.42 2.027.643 0 .921-.716 1.075-1.012.043-.072.069-.12.065-.094-.095.356-.189 1.106.36 1.106.433 0 .835-.442 1.097-.716.21-.218.214-.223.171-.137a14 14 0 0 1-.377.75l-.034.103h1.071l-.008-.077c0-.06.094-.437.145-.592l.022-.073.008.099c.043.407.3.643.69.643.558 0 1.106-.476 1.415-.913.043-.064.085-.107.094-.103l.129.056a.5.5 0 0 0 .261.051h.15v.065c0 .034.013.12.026.188.064.33.287.656.711.656.433 0 .857-.172 1.286-.63.158-.167.326-.377.416-.514l.042-.078.095.03c.047.022.12.035.163.035h.072v.171c0 .493.159.977.712.986.497.008 1.191-.373 1.654-1.042l.129-.18.085.035c.279.103.656-.073.858-.399a.6.6 0 0 0 .06-.128c0-.013-.043-.06-.099-.108l-.094-.085-.056.085c-.116.185-.321.335-.459.335-.107 0-.111-.035-.021-.193a2.2 2.2 0 0 0 .227-.596c.163-.63.073-1.611-.78-1.581a1.9 1.9 0 0 0-1.076.42c-.334.265-.651.835-.861 1.251a2.5 2.5 0 0 0-.201.544c-.039.146-.039.146-.099.15-.03 0-.069 0-.086-.012-.021-.018-.017-.03.017-.086.086-.154.176-.364.219-.497.099-.309.154-.87.111-1.106-.077-.433-.394-.664-.814-.664-.72 0-1.328.703-1.723 1.268-.214.309-.373.66-.454 1.007-.021.112-.039.138-.073.155-.043.013-.278.021-.278.004l.115-.197c.227-.36.335-.622.403-.969.069-.368.077-1.268-.377-1.268-.403 0-.849.283-1.384.668a.8.8 0 0 1-.172.112s.022-.056.056-.116c.056-.103.073-.12.279-.257a4.3 4.3 0 0 0 1.285-1.2c.129-.202.27-.514.339-.729.094-.3.111-.801-.227-.96a.95.95 0 0 0-.686-.047zm.459.403c.197.18-.116.981-.634 1.629-.206.257-.562.557-.63.531-.022-.009.312-.844.514-1.286.114-.293.272-.567.467-.814.086-.086.107-.103.171-.103q.066-.001.112.043m2.4 2.486c-.262.171-.386.283-.514.467-.197.315-.276.69-.223 1.058a.62.62 0 0 0 .193.36c.12.12.12.129-.022.258-.184.171-.471.312-.686.312-.214 0-.342-.235-.325-.428a2 2 0 0 1 .107-.489c.291-.763.926-1.564 1.397-1.564.086 0 .099.004.069.021zm2.803-.009c-.257.172-.386.287-.506.459a1.8 1.8 0 0 0-.24.874c0 .249.06.407.223.574a.4.4 0 0 1 .086.107c0 .039-.198.215-.305.279-.111.06-.235.171-.527.171-.437 0-.296-.625-.206-.882.112-.322.335-.858.583-1.128q.44-.475.827-.475c.082 0 .09 0 .065.021m-9.832.09c.073.03.159.116.197.197.039.086.035.262-.008.407-.09.305-.399.982-.652 1.252-.257.283-.492.428-.694.428-.103 0-.163-.042-.21-.137-.047-.094-.034-.343.039-.548.133-.39.724-1.809 1.328-1.599m7.363.099c.06.248-.086.87-.33 1.255-.167.258-.146.245-.223.163-.163-.167-.145-.63.005-.973.085-.192.244-.385.377-.471.124-.073.145-.069.171.026m2.803-.017c.03.102.013.355-.043.514-.064.201-.163.578-.278.758-.163.258-.146.245-.21.18-.095-.098-.129-.184-.129-.36 0-.265.116-.715.313-.942.094-.108.24-.215.3-.215q.026 0 .047.065M13.5 11.57c.21 0 .219.506.21.75-.017.313-.218.622-.411.857l-.065.078-.154-.082a.8.8 0 0 0-.514-.116c-.244.013-.429.099-.634.305l-.086.085.06-.12.244-.475c.163-.317.197-.373.3-.476.407-.42.784-.806 1.05-.806m-.72 1.877c.086.026.232.103.253.138 0 .012-.077.107-.176.214-.171.184-.407.356-.707.356-.201 0-.201-.142-.201-.249 0-.193.141-.373.36-.446a.9.9 0 0 1 .471-.013"
          />
        </>
      ) : (
        <>
          <path
            fill="#5B1212"
            d="M11.087 8.173c-.077.06-.244.141-.373.175-.488.129-1.474.129-3.077-.017-1.041-.09-1.928-.077-2.447.043a2.2 2.2 0 0 0-1.32.896 1.4 1.4 0 0 0-.201 1.08.87.87 0 0 0 .891.72 1 1 0 0 0 .54-.142c.107-.064.352-.295.352-.334 0-.008-.022-.013-.048-.008-.132.03-.308-.082-.381-.236-.043-.09-.047-.129-.047-.287 0-.223.03-.365.128-.57.236-.506.755-.737 1.458-.665.18.022.75.129.827.163.034.013.025.039-.129.377a14 14 0 0 1-.814 1.616c-.592.982-1.132 1.56-1.757 1.882-.309.162-.455.197-.793.214a2 2 0 0 1-.467-.03l.085.128a4.2 4.2 0 0 1 .75 1.706.3.3 0 0 0 .03.107c.03.022.292-.068.45-.15.472-.248.965-.797 1.458-1.628.428-.737.72-1.346 1.35-2.825q.242-.623.57-1.208c.012-.009.115.017.227.051.565.185.835.236 1.191.24.223 0 .3-.008.429-.043.325-.085.557-.218.771-.462a1.7 1.7 0 0 0 .356-.626c.064-.206.064-.232-.009-.172zm2.52.441c-.15.056-.278.15-.415.304-.219.249-.399.596-.883 1.702q-.577 1.326-1.192 2.636c-.004.004-.03-.013-.051-.043-.022-.03-.043-.052-.047-.047l-.086.12a2.2 2.2 0 0 1-.476.488c-.274.172-.497.129-.527-.103-.026-.15 0-.355.06-.535.15-.45.72-1.659.943-1.899l.086-.094h-.947c0 .077-.03.231-.108.411l-.072.163-.022-.103a.54.54 0 0 0-.171-.321.73.73 0 0 0-.485-.15c-.857 0-1.405 1.2-1.705 1.83-.236.505-.493 2.027.42 2.027.643 0 .921-.716 1.075-1.012.043-.072.069-.12.065-.094-.095.356-.189 1.106.36 1.106.433 0 .835-.442 1.097-.716.21-.218.214-.223.171-.137a14 14 0 0 1-.377.75l-.034.103h1.071l-.008-.077c0-.06.094-.437.145-.592l.022-.073.008.099c.043.407.3.643.69.643.558 0 1.106-.476 1.415-.913.043-.064.085-.107.094-.103l.129.056a.5.5 0 0 0 .261.051h.15v.065c0 .034.013.12.026.188.064.33.287.656.711.656.433 0 .857-.172 1.286-.63.158-.167.326-.377.416-.514l.042-.078.095.03c.047.022.12.035.163.035h.072v.171c0 .493.159.977.712.986.497.008 1.191-.373 1.654-1.042l.129-.18.085.035c.279.103.656-.073.858-.399a.6.6 0 0 0 .06-.128c0-.013-.043-.06-.099-.108l-.094-.085-.056.085c-.116.185-.321.335-.459.335-.107 0-.111-.035-.021-.193a2.2 2.2 0 0 0 .227-.596c.163-.63.073-1.611-.78-1.581a1.9 1.9 0 0 0-1.076.42c-.334.265-.651.835-.861 1.251a2.5 2.5 0 0 0-.201.544c-.039.146-.039.146-.099.15-.03 0-.069 0-.086-.012-.021-.018-.017-.03.017-.086.086-.154.176-.364.219-.497.099-.309.154-.87.111-1.106-.077-.433-.394-.664-.814-.664-.72 0-1.328.703-1.723 1.268-.214.309-.373.66-.454 1.007-.021.112-.039.138-.073.155-.043.013-.278.021-.278.004l.115-.197c.227-.36.335-.622.403-.969.069-.368.077-1.268-.377-1.268-.403 0-.849.283-1.384.668a.8.8 0 0 1-.172.112s.022-.056.056-.116c.056-.103.073-.12.279-.257a4.3 4.3 0 0 0 1.285-1.2c.129-.202.27-.514.339-.729.094-.3.111-.801-.227-.96a.95.95 0 0 0-.686-.047zm.459.403c.197.18-.116.981-.634 1.629-.206.257-.562.557-.63.531-.022-.009.312-.844.514-1.286.114-.293.272-.567.467-.814.086-.086.107-.103.171-.103q.066-.001.112.043m2.4 2.486c-.262.171-.386.283-.514.467-.197.315-.276.69-.223 1.058a.62.62 0 0 0 .193.36c.12.12.12.129-.022.258-.184.171-.471.312-.686.312-.214 0-.342-.235-.325-.428a2 2 0 0 1 .107-.489c.291-.763.926-1.564 1.397-1.564.086 0 .099.004.069.021zm2.803-.009c-.257.172-.386.287-.506.459a1.8 1.8 0 0 0-.24.874c0 .249.06.407.223.574a.4.4 0 0 1 .086.107c0 .039-.198.215-.305.279-.111.06-.235.171-.527.171-.437 0-.296-.625-.206-.882.112-.322.335-.858.583-1.128q.44-.475.827-.475c.082 0 .09 0 .065.021m-9.832.09c.073.03.159.116.197.197.039.086.035.262-.008.407-.09.305-.399.982-.652 1.252-.257.283-.492.428-.694.428-.103 0-.163-.042-.21-.137-.047-.094-.034-.343.039-.548.133-.39.724-1.809 1.328-1.599m7.363.099c.06.248-.086.87-.33 1.255-.167.258-.146.245-.223.163-.163-.167-.145-.63.005-.973.085-.192.244-.385.377-.471.124-.073.145-.069.171.026m2.803-.017c.03.102.013.355-.043.514-.064.201-.163.578-.278.758-.163.258-.146.245-.21.18-.095-.098-.129-.184-.129-.36 0-.265.116-.715.313-.942.094-.108.24-.215.3-.215q.026 0 .047.065M13.5 11.57c.21 0 .219.506.21.75-.017.313-.218.622-.411.857l-.065.078-.154-.082a.8.8 0 0 0-.514-.116c-.244.013-.429.099-.634.305l-.086.085.06-.12.244-.475c.163-.317.197-.373.3-.476.407-.42.784-.806 1.05-.806m-.72 1.877c.086.026.232.103.253.138 0 .012-.077.107-.176.214-.171.184-.407.356-.707.356-.201 0-.201-.142-.201-.249 0-.193.141-.373.36-.446a.9.9 0 0 1 .471-.013"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTABOO.displayName = 'TABOO'
