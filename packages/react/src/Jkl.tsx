import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconJKL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.041 9.082c-.008-.073-.017-.142 0-.215 0-.013.005-.017.013 0a7 7 0 0 1 .219.733c.021.086.047.163.077.244l.043.138c.127.367.312.71.548 1.02h.01l.007-.005c.043-.043.069-.085.103-.133l.095-.124.128-.159.129-.167c.064-.064.12-.128.171-.201l.214-.244.279-.292c.06-.064.051-.141.039-.214a8 8 0 0 0-.588-1.907c-.107-.244-.214-.493-.342-.729a.06.06 0 0 1 0-.047c0-.026.017-.026.03-.004l.57.746q.231.3.527.865.167.31.27.626.155.477.163.904a2.4 2.4 0 0 1-.536 1.53l-.01.004a.02.02 0 0 1-.012-.004.04.04 0 0 1-.012-.03 1.3 1.3 0 0 0-.052-.377.056.056 0 0 0-.069-.013.7.7 0 0 0-.107.086q-.115.103-.077-.051a2 2 0 0 1 .159-.412.013.013 0 0 0-.009-.013h-.008a.2.2 0 0 0-.09.052 9.4 9.4 0 0 0-.986.998q-.148.181-.347.369a.2.2 0 0 0-.064.128 4.4 4.4 0 0 0 .085 1.479l-.017.026q-.164.141-.3.308l.004.013.009.009.017.004c.12 0 .236.013.356.047a.04.04 0 0 1 .034.034.05.05 0 0 1-.013.043c-.348.35-.64.75-.87 1.187-.055.107-.034.125.06.043l.073-.068q.05-.053.112-.099c.107-.077.214-.163.33-.257l.188-.129.184-.128c.048-.043.103-.022.116.043.013.068-.056.201-.098.282l-.013.03c-.1.22-.141.463-.12.703q.022.193.03.386l.01.01.015.003.013-.004q.246-.17.472-.365h.008l.009.009c.073.111.12.231.167.347q.06.174.141.339a.7.7 0 0 0 .103.214l.172.218c.171.228.394.386.673.43.02 0 .042.012.055.025.017.017.022.034.022.06q-.015.303.055.613c.039.158.112.308.185.462q.065.129.124.27c.107.275.309.498.514.686l.077.052.129.051c.236.107.463.21.737.12.172-.051.343-.128.514-.218a.18.18 0 0 1 .172-.01l.377.18c.351.168.686.044 1.024-.145a1.56 1.56 0 0 0 .476-.514c.064-.159.129-.304.21-.45a1 1 0 0 0 .073-.176l.043-.103c.107-.257.133-.565.12-.848a.05.05 0 0 1 .01-.037.05.05 0 0 1 .032-.019c.416-.034.643-.33.875-.634l.025-.034c.065-.086.112-.163.146-.24q.143-.316.27-.64h.009a.6.6 0 0 1 .188.108c.095.077.189.15.292.223q.02.01.038.008a.02.02 0 0 0 .017-.017l.04-.403a1.4 1.4 0 0 0-.155-.728 1 1 0 0 1-.099-.274.05.05 0 0 1 .039-.043c.064-.009.193.085.257.128l.008.005q.42.294.806.63c.034.008.043 0 .026-.035l-.047-.068c-.017-.026-.039-.052-.052-.082a6 6 0 0 0-.27-.445 3 3 0 0 0-.544-.609c-.06-.056-.034-.128.043-.141q.153-.027.308-.043a.034.034 0 0 0 .01-.043.7.7 0 0 0-.27-.274.04.04 0 0 1-.021-.047c.072-.33.114-.67.123-1.008 0-.107-.013-.205-.021-.3l-.013-.128a.33.33 0 0 0-.086-.197l-.356-.373a9 9 0 0 0-.9-.922c-.038-.03-.068-.06-.111-.077a.02.02 0 0 0-.022.005l-.003.01q0 .006.003.01c.069.172.129.335.172.477q.01.027-.017.034a.07.07 0 0 1-.056-.021l-.017-.018c-.043-.043-.103-.111-.15-.128a.04.04 0 0 0-.043.034q-.05.2-.056.407l-.008.009a.02.02 0 0 1-.026-.009 1.8 1.8 0 0 1-.339-.557 2.3 2.3 0 0 1-.18-.75 3.1 3.1 0 0 1 .249-1.346c.086-.197.171-.398.283-.587.25-.44.539-.86.861-1.251.043-.06.086-.12.137-.172.047-.051.06-.042.035.018l-.03.085c-.035.082-.065.163-.112.245-.06.102-.111.214-.163.33q-.16.38-.274.677a6.4 6.4 0 0 0-.364 1.5l.017.021c.184.18.364.36.527.566l.189.231c.141.172.287.343.42.532q.023.032.047 0a3.6 3.6 0 0 0 .553-1.072q.171-.545.313-1.071.014-.059.02 0c.01.086 0 .167-.008.248l-.012.142a5.5 5.5 0 0 1-.335 1.65l-.231.553a.12.12 0 0 0 .021.128.6.6 0 0 1 .137.227q.008.031.035.047a.02.02 0 0 0 .017 0h.004l.004-.004c.086-.146.163-.291.215-.437l.107-.244c.038-.086.077-.167.107-.249l.159-.415c.628-1.854.893-3.811.78-5.765l-.013-.008-.013.004a18 18 0 0 0-3.356 2.61l-.386.429q-.5.566-.857 1.234c-.021.043-.064.056-.111.043l-.514-.099a4.35 4.35 0 0 0-1.87.082l-.15.03a.04.04 0 0 1-.042-.026 2 2 0 0 0-.201-.394 13 13 0 0 0-.506-.708 5 5 0 0 0-.214-.24l-.159-.18a4 4 0 0 0-.223-.252 7 7 0 0 0-.355-.335c-.078-.068-.16-.137-.236-.214a18 18 0 0 0-1.487-1.191 47 47 0 0 0-1.196-.798.043.043 0 0 0-.043.035 14.4 14.4 0 0 0 .189 3.411q.166.979.458 1.929c.077.257.21.6.39 1.045q.148.353.343.682a.03.03 0 0 0 .026 0l.013-.013.141-.232a.22.22 0 0 0 .013-.214 4.6 4.6 0 0 1-.514-1.731zm6.793 5.554c.591.021 1.059-.36 1.042-.969 0-.017-.013-.025-.03-.017l-.043.013-.065.021-.891.159a.14.14 0 0 0-.103.069q-.187.326-.343.668a.04.04 0 0 0 .022.034zm-4.23-.193a1.03 1.03 0 0 1-.356-.784h.009l1.046.188a.1.1 0 0 1 .064.043l.356.634a.06.06 0 0 1-.026.086q-.301.04-.604.013a1 1 0 0 1-.489-.18m1.702 4.247a1.29 1.29 0 0 0 1.122.103c.262-.094.536-.326.515-.626-.013-.171-.129-.278-.24-.39l-.009-.008c-.034-.039-.086-.039-.129-.022q-.236.09-.53.103a2.5 2.5 0 0 1-.687-.073c-.137-.034-.235.112-.295.219a.5.5 0 0 0-.06.236c-.005.184.171.38.313.458"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#JKL__a)"
            d="M7.041 9.082c-.008-.073-.017-.142 0-.215 0-.013.005-.017.013 0a7 7 0 0 1 .219.733c.021.086.047.163.077.244l.043.138c.127.367.312.71.548 1.02h.01l.007-.005c.043-.043.069-.085.103-.133l.095-.124.128-.159.129-.167c.064-.064.12-.128.171-.201l.214-.244.279-.292c.06-.064.051-.141.039-.214a8 8 0 0 0-.588-1.907c-.107-.244-.214-.493-.342-.729a.06.06 0 0 1 0-.047c0-.026.017-.026.03-.004l.57.746q.231.3.527.865.167.31.27.626.155.477.163.904a2.4 2.4 0 0 1-.536 1.53l-.01.004a.02.02 0 0 1-.012-.004.04.04 0 0 1-.012-.03 1.3 1.3 0 0 0-.052-.377.056.056 0 0 0-.069-.013.7.7 0 0 0-.107.086q-.115.103-.077-.051a2 2 0 0 1 .159-.412.013.013 0 0 0-.009-.013h-.008a.2.2 0 0 0-.09.052 9.4 9.4 0 0 0-.986.998q-.148.181-.347.369a.2.2 0 0 0-.064.128 4.4 4.4 0 0 0 .085 1.479l-.017.026q-.164.141-.3.308l.004.013.009.009.017.004c.12 0 .236.013.356.047a.04.04 0 0 1 .034.034.05.05 0 0 1-.013.043c-.348.35-.64.75-.87 1.187-.055.107-.034.125.06.043l.073-.068q.05-.053.112-.099c.107-.077.214-.163.33-.257l.188-.129.184-.128c.048-.043.103-.022.116.043.013.068-.056.201-.098.282l-.013.03c-.1.22-.141.463-.12.703q.022.193.03.386l.01.01.015.003.013-.004q.246-.17.472-.365h.008l.009.009c.073.111.12.231.167.347q.06.174.141.339a.7.7 0 0 0 .103.214l.172.218c.171.228.394.386.673.43.02 0 .042.012.055.025.017.017.022.034.022.06q-.015.303.055.613c.039.158.112.308.185.462q.065.129.124.27c.107.275.309.498.514.686l.077.052.129.051c.236.107.463.21.737.12.172-.051.343-.128.514-.218a.18.18 0 0 1 .172-.01l.377.18c.351.168.686.044 1.024-.145a1.56 1.56 0 0 0 .476-.514c.064-.159.129-.304.21-.45a1 1 0 0 0 .073-.176l.043-.103c.107-.257.133-.565.12-.848a.05.05 0 0 1 .01-.037.05.05 0 0 1 .032-.019c.416-.034.643-.33.875-.634l.025-.034c.065-.086.112-.163.146-.24q.143-.316.27-.64h.009a.6.6 0 0 1 .188.108c.095.077.189.15.292.223q.02.01.038.008a.02.02 0 0 0 .017-.017l.04-.403a1.4 1.4 0 0 0-.155-.728 1 1 0 0 1-.099-.274.05.05 0 0 1 .039-.043c.064-.009.193.085.257.128l.008.005q.42.294.806.63c.034.008.043 0 .026-.035l-.047-.068c-.017-.026-.039-.052-.052-.082a6 6 0 0 0-.27-.445 3 3 0 0 0-.544-.609c-.06-.056-.034-.128.043-.141q.153-.027.308-.043a.034.034 0 0 0 .01-.043.7.7 0 0 0-.27-.274.04.04 0 0 1-.021-.047c.072-.33.114-.67.123-1.008 0-.107-.013-.205-.021-.3l-.013-.128a.33.33 0 0 0-.086-.197l-.356-.373a9 9 0 0 0-.9-.922c-.038-.03-.068-.06-.111-.077a.02.02 0 0 0-.022.005l-.003.01q0 .006.003.01c.069.172.129.335.172.477q.01.027-.017.034a.07.07 0 0 1-.056-.021l-.017-.018c-.043-.043-.103-.111-.15-.128a.04.04 0 0 0-.043.034q-.05.2-.056.407l-.008.009a.02.02 0 0 1-.026-.009 1.8 1.8 0 0 1-.339-.557 2.3 2.3 0 0 1-.18-.75 3.1 3.1 0 0 1 .249-1.346c.086-.197.171-.398.283-.587.25-.44.539-.86.861-1.251.043-.06.086-.12.137-.172.047-.051.06-.042.035.018l-.03.085c-.035.082-.065.163-.112.245-.06.102-.111.214-.163.33q-.16.38-.274.677a6.4 6.4 0 0 0-.364 1.5l.017.021c.184.18.364.36.527.566l.189.231c.141.172.287.343.42.532q.023.032.047 0a3.6 3.6 0 0 0 .553-1.072q.171-.545.313-1.071.014-.059.02 0c.01.086 0 .167-.008.248l-.012.142a5.5 5.5 0 0 1-.335 1.65l-.231.553a.12.12 0 0 0 .021.128.6.6 0 0 1 .137.227q.008.031.035.047a.02.02 0 0 0 .017 0h.004l.004-.004c.086-.146.163-.291.215-.437l.107-.244c.038-.086.077-.167.107-.249l.159-.415c.628-1.854.893-3.811.78-5.765l-.013-.008-.013.004a18 18 0 0 0-3.356 2.61l-.386.429q-.5.566-.857 1.234c-.021.043-.064.056-.111.043l-.514-.099a4.35 4.35 0 0 0-1.87.082l-.15.03a.04.04 0 0 1-.042-.026 2 2 0 0 0-.201-.394 13 13 0 0 0-.506-.708 5 5 0 0 0-.214-.24l-.159-.18a4 4 0 0 0-.223-.252 7 7 0 0 0-.355-.335c-.078-.068-.16-.137-.236-.214a18 18 0 0 0-1.487-1.191 47 47 0 0 0-1.196-.798.043.043 0 0 0-.043.035 14.4 14.4 0 0 0 .189 3.411q.166.979.458 1.929c.077.257.21.6.39 1.045q.148.353.343.682a.03.03 0 0 0 .026 0l.013-.013.141-.232a.22.22 0 0 0 .013-.214 4.6 4.6 0 0 1-.514-1.731zm6.793 5.554c.591.021 1.059-.36 1.042-.969 0-.017-.013-.025-.03-.017l-.043.013-.065.021-.891.159a.14.14 0 0 0-.103.069q-.187.326-.343.668a.04.04 0 0 0 .022.034zm-4.23-.193a1.03 1.03 0 0 1-.356-.784h.009l1.046.188a.1.1 0 0 1 .064.043l.356.634a.06.06 0 0 1-.026.086q-.301.04-.604.013a1 1 0 0 1-.489-.18m1.702 4.247a1.29 1.29 0 0 0 1.122.103c.262-.094.536-.326.515-.626-.013-.171-.129-.278-.24-.39l-.009-.008c-.034-.039-.086-.039-.129-.022q-.236.09-.53.103a2.5 2.5 0 0 1-.687-.073c-.137-.034-.235.112-.295.219a.5.5 0 0 0-.06.236c-.005.184.171.38.313.458"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="JKL__a"
              x1="6.005"
              x2="18.495"
              y1="9.895"
              y2="13.434"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#042457" />
              <stop offset=".49" stopColor="#050C22" />
              <stop offset="1" stopColor="#042459" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconJKL.displayName = 'JKL'
