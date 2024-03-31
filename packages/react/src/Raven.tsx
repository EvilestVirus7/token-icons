import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconRAVEN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.723 10.813c.221.287.514.512.849.651q.052.026-.005.03a2.65 2.65 0 0 1-1.243-.115q-.127-.045-.03.051.245.23.575.326c.098.025.094.047 0 .068a2.16 2.16 0 0 1-1.23-.102q-.057-.026-.043.034c.043.12.287.218.39.265q.07.041-.009.043a2.2 2.2 0 0 1-.883-.072c-.051-.013-.055 0-.021.034a.9.9 0 0 0 .279.184q.077.032 0 .051c-.588.155-1.329.25-1.852-.06q-.039-.025-.064.013a2.24 2.24 0 0 0-.36 1.115q-.025.32.128.643c.185.407.416.81.695 1.2.193.27.334.587.501.882.206.369.214.755-.068 1.093q-.032.038-.043-.008a7 7 0 0 0-.673-1.805c0-.012-.013-.012-.022-.008l-.021.008q.182.477.377.948c.236.557.154.985-.351 1.307q-.044.031-.043-.022a8 8 0 0 0-.437-2.031h-.039l-.004.013c.077.283.103.565.184.857.154.553.197 1.071-.373 1.431-.03.017-.047.013-.055-.021a4 4 0 0 1-.095-.429 41 41 0 0 1-.214-1.607h-.047q.064.706.051 1.393a.9.9 0 0 1-.471.814.1.1 0 0 1-.077 0c-.3-.154-.463-.437-.476-.848a8 8 0 0 1 .064-1.329l-.008-.015-.013-.01-.013-.005h-.021q-.013-.005-.013.009a29 29 0 0 1-.185 1.5 3 3 0 0 1-.128.527q-.013.047-.052.017-.527-.366-.458-.874.106-.709.283-1.402l-.022-.013-.008-.003-.008.001-.008.004-.006.007a7.3 7.3 0 0 0-.428 2.006q.001.063-.056.03c-.33-.223-.489-.497-.463-.815a1.8 1.8 0 0 1 .159-.587q.192-.44.36-.891l-.022-.013q-.011-.002-.017.008c-.171.326-.33.665-.471 1.03-.103.256-.155.526-.215.8q-.018.078-.068.013c-.433-.574-.103-.947.154-1.478q.086-.18.197-.343.489-.67.827-1.427c.223-.532.035-1.179-.248-1.642q-.047-.083-.133-.038c-.536.3-1.226.206-1.813.068-.081-.021-.086-.042 0-.077a.8.8 0 0 0 .24-.163q.063-.063-.021-.043a2.4 2.4 0 0 1-.806.086c-.129-.004-.129-.034-.013-.085a.9.9 0 0 0 .322-.232q.064-.07-.026-.043a2.2 2.2 0 0 1-1.256.103q-.122-.033 0-.06c.233-.059.445-.184.609-.36q.056-.057-.022-.03-.586.206-1.268.129-.063-.009-.005-.035a2.15 2.15 0 0 0 .802-.582c.094-.103.077-.12-.043-.052a2.33 2.33 0 0 1-1.847.24q-.051-.019 0-.026c.608-.085 1.131-.27 1.53-.767q.065-.082-.03-.043c-.9.373-2.109.459-2.966-.09q-.097-.064.017-.051a5.3 5.3 0 0 0 2.087-.129c.228-.055.403-.137.532-.235.043-.035.034-.047-.017-.043-.557.073-1.063.12-1.607 0a2.66 2.66 0 0 1-1.406-.793c-.082-.086-.064-.103.043-.06.878.373 1.945.527 2.901.347q.271-.051-.004-.077c-.596-.051-1.337-.3-1.706-.771a3 3 0 0 1-.231-.335c-.052-.085-.035-.094.043-.038a2.97 2.97 0 0 0 2.442.501c.086-.017.086-.043.013-.077a1.3 1.3 0 0 1-.6-.579q-.063-.128.06-.064c.598.321 1.25.528 1.925.609.402.051.63.411.938.625q.477.342.973.523.617.231.874-.433a1.69 1.69 0 0 1 .986-1.041c.201-.073.45-.129.754-.15q.398-.035.802-.094.075-.015.017.043a4 4 0 0 0-.682.66c-.235.312-.24.62-.004.925.15.197.489.172.694.095a4.1 4.1 0 0 0 1.445-.922.83.83 0 0 1 .437-.227c.7-.08 1.377-.293 1.997-.626q.07-.039.043.039c-.12.267-.334.482-.6.604-.094.043-.086.077.013.099.745.15 1.431.055 2.044-.279.141-.077.27-.159.407-.244.043-.026.047-.022.026.021a1.8 1.8 0 0 1-.424.557 2.74 2.74 0 0 1-1.5.575q-.297.03 0 .085c2.245.429 2.965-.368 2.965-.36a2.4 2.4 0 0 1-.398.386 2.96 2.96 0 0 1-1.989.549 7 7 0 0 1-.673-.073q-.082-.015-.017.043c.107.085.223.141.343.18a5.1 5.1 0 0 0 2.297.18q.09-.014.013.043c-.84.557-2.074.48-2.957.11q-.128-.051-.043.057c.39.471.909.655 1.5.745.043.005.047.018 0 .03a2.37 2.37 0 0 1-1.903-.283c-.017-.012-.038.01-.021.022z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RAVEN__a)"
            d="M16.723 10.813c.221.287.514.512.849.651q.052.026-.005.03a2.65 2.65 0 0 1-1.243-.115q-.127-.045-.03.051.245.23.575.326c.098.025.094.047 0 .068a2.16 2.16 0 0 1-1.23-.102q-.057-.026-.043.034c.043.12.287.218.39.265q.07.041-.009.043a2.2 2.2 0 0 1-.883-.072c-.051-.013-.055 0-.021.034a.9.9 0 0 0 .279.184q.077.032 0 .051c-.588.155-1.329.25-1.852-.06q-.039-.025-.064.013a2.24 2.24 0 0 0-.36 1.115q-.025.32.128.643c.185.407.416.81.695 1.2.193.27.334.587.501.882.206.369.214.755-.068 1.093q-.032.038-.043-.008a7 7 0 0 0-.673-1.805c0-.012-.013-.012-.022-.008l-.021.008q.182.477.377.948c.236.557.154.985-.351 1.307q-.044.031-.043-.022a8 8 0 0 0-.437-2.031h-.039l-.004.013c.077.283.103.565.184.857.154.553.197 1.071-.373 1.431-.03.017-.047.013-.055-.021a4 4 0 0 1-.095-.429 41 41 0 0 1-.214-1.607h-.047q.064.706.051 1.393a.9.9 0 0 1-.471.814.1.1 0 0 1-.077 0c-.3-.154-.463-.437-.476-.848a8 8 0 0 1 .064-1.329l-.008-.015-.013-.01-.013-.005h-.021q-.013-.005-.013.009a29 29 0 0 1-.185 1.5 3 3 0 0 1-.128.527q-.013.047-.052.017-.527-.366-.458-.874.106-.709.283-1.402l-.022-.013-.008-.003-.008.001-.008.004-.006.007a7.3 7.3 0 0 0-.428 2.006q.001.063-.056.03c-.33-.223-.489-.497-.463-.815a1.8 1.8 0 0 1 .159-.587q.192-.44.36-.891l-.022-.013q-.011-.002-.017.008c-.171.326-.33.665-.471 1.03-.103.256-.155.526-.215.8q-.018.078-.068.013c-.433-.574-.103-.947.154-1.478q.086-.18.197-.343.489-.67.827-1.427c.223-.532.035-1.179-.248-1.642q-.047-.083-.133-.038c-.536.3-1.226.206-1.813.068-.081-.021-.086-.042 0-.077a.8.8 0 0 0 .24-.163q.063-.063-.021-.043a2.4 2.4 0 0 1-.806.086c-.129-.004-.129-.034-.013-.085a.9.9 0 0 0 .322-.232q.064-.07-.026-.043a2.2 2.2 0 0 1-1.256.103q-.122-.033 0-.06c.233-.059.445-.184.609-.36q.056-.057-.022-.03-.586.206-1.268.129-.063-.009-.005-.035a2.15 2.15 0 0 0 .802-.582c.094-.103.077-.12-.043-.052a2.33 2.33 0 0 1-1.847.24q-.051-.019 0-.026c.608-.085 1.131-.27 1.53-.767q.065-.082-.03-.043c-.9.373-2.109.459-2.966-.09q-.097-.064.017-.051a5.3 5.3 0 0 0 2.087-.129c.228-.055.403-.137.532-.235.043-.035.034-.047-.017-.043-.557.073-1.063.12-1.607 0a2.66 2.66 0 0 1-1.406-.793c-.082-.086-.064-.103.043-.06.878.373 1.945.527 2.901.347q.271-.051-.004-.077c-.596-.051-1.337-.3-1.706-.771a3 3 0 0 1-.231-.335c-.052-.085-.035-.094.043-.038a2.97 2.97 0 0 0 2.442.501c.086-.017.086-.043.013-.077a1.3 1.3 0 0 1-.6-.579q-.063-.128.06-.064c.598.321 1.25.528 1.925.609.402.051.63.411.938.625q.477.342.973.523.617.231.874-.433a1.69 1.69 0 0 1 .986-1.041c.201-.073.45-.129.754-.15q.398-.035.802-.094.075-.015.017.043a4 4 0 0 0-.682.66c-.235.312-.24.62-.004.925.15.197.489.172.694.095a4.1 4.1 0 0 0 1.445-.922.83.83 0 0 1 .437-.227c.7-.08 1.377-.293 1.997-.626q.07-.039.043.039c-.12.267-.334.482-.6.604-.094.043-.086.077.013.099.745.15 1.431.055 2.044-.279.141-.077.27-.159.407-.244.043-.026.047-.022.026.021a1.8 1.8 0 0 1-.424.557 2.74 2.74 0 0 1-1.5.575q-.297.03 0 .085c2.245.429 2.965-.368 2.965-.36a2.4 2.4 0 0 1-.398.386 2.96 2.96 0 0 1-1.989.549 7 7 0 0 1-.673-.073q-.082-.015-.017.043c.107.085.223.141.343.18a5.1 5.1 0 0 0 2.297.18q.09-.014.013.043c-.84.557-2.074.48-2.957.11q-.128-.051-.043.057c.39.471.909.655 1.5.745.043.005.047.018 0 .03a2.37 2.37 0 0 1-1.903-.283c-.017-.012-.038.01-.021.022z"
          />
          <defs>
            <linearGradient
              id="RAVEN__a"
              x1="12"
              x2="12"
              y1="7.714"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#092B38" />
              <stop offset="1" stopColor="#495764" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconRAVEN.displayName = 'RAVEN'
