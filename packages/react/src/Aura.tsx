import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconAURA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.427 8.1c.206-.03.506-.098.836-.197.746-.227 1.637-.613 1.911-1.016.129-.188.245-.428.365-.673.334-.707.711-1.5 1.637-1.5.887 0 1.324.9 1.641 1.56.133.275.245.502.36.613.343.335 1.17.785 1.895 1.029.274.103.564.164.857.18-.93.428-2.632.9-4.715.904-1.615 0-3.3-.274-4.787-.9m3.489-1.526.064-.128.009-.022.188-.385c.395.175.699.235 1.037.235.326 0 .656-.06.93-.231q.116.213.219.433l.051.103c-.83.09-1.668.09-2.498 0zm2.743.459a10 10 0 0 1-1.445.124c-.565 0-1.11-.068-1.542-.128l-.078.128q-.123.168-.291.309c.531.085 1.2.248 1.911.248.703 0 1.32-.158 1.899-.244a3 3 0 0 1-.291-.24 1.2 1.2 0 0 1-.159-.197zm1.08.823q.292.16.595.296a11.8 11.8 0 0 1-6.3 0q.345-.138.678-.305c.651.137 1.517.3 2.502.3.96 0 1.796-.158 2.525-.291M12.87 5.61c-.227.176-.463.176-.694.176-.24 0-.39 0-.729-.184.202-.27.425-.46.729-.46.257 0 .476.19.694.468M13.5 18c.129-.159.129-.377.386-.6.574-.514 1.367-1.067 1.864-1.097.236-.013.506.008.789.034.801.073 1.697.154 2.16-.621.445-.742-.146-1.556-.579-2.156-.176-.244-.326-.45-.368-.6-.129-.459-.12-1.371.025-2.1.06-.33.15-.617.266-.81-1.4.984-2.562 2.27-3.399 3.763l-.012.026C13.98 15.004 13.684 16.41 13.5 18m2.902-2.16.145.013h.026l.441.039c.095-.3.215-.618.386-.9.163-.275.377-.528.592-.75-.086-.138-.185-.266-.279-.4l-.064-.09a10 10 0 0 0-1.243 2.088zm.964-2.528a10.3 10.3 0 0 0-1.496 2.507h-.15a1.8 1.8 0 0 0-.424.09 10.7 10.7 0 0 1 .806-1.642 12 12 0 0 1 1.097-1.547c.017.129.043.257.068.36q.04.128.099.236zm-.202-1.308q.003-.322.035-.643c-.643.6-1.359 1.415-1.963 2.426l-.013.022-.137.235a10.6 10.6 0 0 0-1.033 2.585q.29-.223.604-.412c.206-.617.515-1.367 1.012-2.19.433-.721.934-1.4 1.495-2.027zm1.08 2.688c-.154.17-.3.35-.411.544-.12.201-.214.428-.291.651.342-.038.57-.154.728-.411.129-.215.116-.467-.026-.785M10.706 18a4.7 4.7 0 0 0-.592-.6c-.574-.514-1.367-1.067-1.864-1.097a6 6 0 0 0-.788.034c-.802.073-1.698.154-2.16-.621-.446-.742.145-1.556.578-2.156.176-.244.326-.45.369-.6.128-.459.12-1.371-.026-2.1a2.6 2.6 0 0 0-.266-.81c1.4.984 2.562 2.27 3.399 3.763l.013.026A11.1 11.1 0 0 1 10.706 18m-3.107-2.16-.146.013h-.026l-.441.039a4 4 0 0 0-.386-.9 4 4 0 0 0-.591-.75c.085-.138.184-.266.278-.4l.065-.09c.497.644.914 1.345 1.242 2.088zm-.965-2.528c.615.76 1.119 1.604 1.496 2.507h.15c.142.012.287.042.424.09q-.331-.856-.805-1.642a12.6 12.6 0 0 0-1.097-1.547 3 3 0 0 1-.069.36q-.04.128-.099.236zm.202-1.308a7 7 0 0 0-.034-.643 11.4 11.4 0 0 1 2.112 2.683c.429.759.789 1.629 1.033 2.585l-.043-.035a6 6 0 0 0-.561-.377c-.255-.765-.594-1.5-1.011-2.19A13.3 13.3 0 0 0 6.836 12zm-1.08 2.688c.154.17.3.35.411.544.12.201.215.428.292.651-.343-.038-.57-.154-.729-.411-.128-.215-.116-.467.026-.785"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9.673 16.564c.66-.154 1.5-.278 2.503-.278.977 0 1.86.12 2.593.265a8 8 0 0 1 .565-.274 12 12 0 0 0-3.158-.428h-.3c-.96.024-1.913.168-2.837.428q.322.13.634.287m.557.343c.194.142.354.323.472.532a13.4 13.4 0 0 1 2.935-.009 1.5 1.5 0 0 1 .185-.231q.154-.148.372-.3c-.6-.108-1.285-.185-2.014-.185-.754 0-1.406.082-1.954.189zm3.172.965a11.6 11.6 0 0 0-2.478 0l.056.11.009.022.175.365a4.3 4.3 0 0 1 1.05-.155c.326 0 .652.056.952.138l.197-.4.043-.085zm-.476.874a2.8 2.8 0 0 0-.712-.103 3 3 0 0 0-.814.128c.219.318.446.515.772.515.282 0 .518-.197.754-.54m4.003-2.413a2.9 2.9 0 0 0-.857.176 6 6 0 0 0-1.895 1.028c-.115.116-.227.343-.36.617-.317.66-.754 1.56-1.641 1.56-.926 0-1.303-.792-1.637-1.5-.12-.248-.232-.484-.365-.672-.274-.403-1.165-.79-1.911-1.016a5.4 5.4 0 0 0-.836-.193q.405-.177.823-.317a12 12 0 0 1 3.909-.587h.137c1.508.017 2.828.248 3.78.57q.435.145.853.334"
          />
          <path
            fill="currentColor"
            d="M13.294 5.944c.125.159.335.378.592.6.574.515 1.367 1.068 1.864 1.098.236.012.506-.01.789-.035.801-.073 1.697-.154 2.16.622.445.741-.146 1.555-.579 2.155-.176.245-.326.455-.368.605-.129.458-.12 1.371.025 2.1.06.325.15.612.266.805a11.4 11.4 0 0 1-3.24-3.492l-.017-.022c-.043-.086-.094-.163-.142-.248l-.012-.022a11.1 11.1 0 0 1-1.338-4.166m3.108 2.16.145-.012h.026l.441-.04c.095.3.215.618.386.9.163.275.377.528.592.75-.086.138-.185.27-.279.4l-.064.094a10 10 0 0 1-1.243-2.092zm.964 2.529A10.3 10.3 0 0 1 15.87 8.13l-.15-.004a1.8 1.8 0 0 1-.424-.09q.332.855.806 1.641c.351.587.728 1.106 1.097 1.552.017-.133.043-.257.068-.365q.04-.128.099-.231m-.202 1.307a7 7 0 0 0 .035.647 11.2 11.2 0 0 1-1.963-2.425l-.013-.026-.137-.236a10.6 10.6 0 0 1-1.033-2.58q.293.219.604.411c.206.618.515 1.363 1.012 2.186.433.72.934 1.398 1.495 2.023m1.08-2.687a3.4 3.4 0 0 1-.411-.54 3.7 3.7 0 0 1-.291-.651c.342.034.57.15.728.407.129.214.116.467-.026.784m-7.538-3.309a4.7 4.7 0 0 1-.592.6C9.54 7.06 8.747 7.612 8.25 7.642a6 6 0 0 1-.788-.035c-.802-.073-1.698-.154-2.16.622-.446.741.145 1.555.578 2.155.176.245.326.455.369.605.128.458.12 1.371-.026 2.1a2.6 2.6 0 0 1-.266.805c1.4-.983 2.562-2.27 3.399-3.762l.013-.022a11.1 11.1 0 0 0 1.337-4.166m-3.107 2.16-.146-.012h-.026l-.441-.04a4 4 0 0 1-.386.9 4 4 0 0 1-.591.75c.085.138.184.27.278.4l.065.094c.497-.644.915-1.347 1.242-2.092zm-.965 2.529A10.4 10.4 0 0 0 8.13 8.13l.15-.004c.142-.013.287-.043.424-.09q-.331.855-.805 1.641a12.5 12.5 0 0 1-1.097 1.552 4 4 0 0 0-.069-.365 1 1 0 0 0-.099-.231m.202 1.307a7 7 0 0 1-.034.647c.642-.6 1.358-1.414 1.962-2.425l.013-.026.137-.236a10.5 10.5 0 0 0 1.033-2.58 9 9 0 0 1-.604.411 11 11 0 0 1-1.011 2.186c-.434.72-.935 1.398-1.496 2.023m-1.08-2.687a3.4 3.4 0 0 0 .411-.54 3.7 3.7 0 0 0 .292-.651c-.343.034-.57.15-.729.407-.128.214-.116.467.026.784"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AURA__a)"
            d="M7.427 8.1c.206-.03.506-.098.836-.197.745-.227 1.637-.613 1.91-1.016.13-.188.245-.428.365-.673.335-.707.712-1.5 1.637-1.5.887 0 1.325.9 1.642 1.56.133.275.244.502.36.613.343.335 1.17.785 1.894 1.029.275.103.564.164.857.18-.93.428-2.631.9-4.714.904-1.616 0-3.3-.274-4.787-.9m3.488-1.526.065-.128.008-.022.189-.385c.394.175.698.235 1.037.235.326 0 .656-.06.93-.231q.115.213.219.433l.05.103c-.83.09-1.667.09-2.498 0zm2.743.459a10 10 0 0 1-1.444.124c-.566 0-1.11-.068-1.543-.128l-.077.128q-.124.168-.291.309c.53.085 1.2.248 1.91.248.704 0 1.32-.158 1.9-.244a3 3 0 0 1-.292-.24 1.2 1.2 0 0 1-.159-.197zm1.08.823q.292.16.596.296a11.8 11.8 0 0 1-6.3 0q.345-.138.677-.305c.652.137 1.517.3 2.503.3.96 0 1.796-.158 2.524-.291M12.87 5.61c-.227.176-.463.176-.695.176-.24 0-.39 0-.728-.184.201-.27.424-.46.728-.46.257 0 .476.19.695.468"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#AURA__b)"
            d="M13.5 18c.128-.159.128-.377.385-.6.575-.514 1.367-1.067 1.865-1.097.235-.013.505.008.788.034.802.073 1.697.154 2.16-.621.446-.742-.146-1.556-.578-2.156-.176-.244-.326-.45-.369-.6-.129-.459-.12-1.371.026-2.1.06-.33.15-.617.265-.81-1.4.984-2.562 2.27-3.398 3.763l-.013.026C13.98 15.004 13.684 16.41 13.5 18m2.901-2.16.146.013h.026l.44.039c.095-.3.215-.618.387-.9.163-.275.377-.528.591-.75-.086-.138-.184-.266-.279-.4l-.064-.09a10 10 0 0 0-1.243 2.088zm.964-2.528a10.3 10.3 0 0 0-1.495 2.507h-.15a1.8 1.8 0 0 0-.425.09 10.7 10.7 0 0 1 .806-1.642c.352-.587.729-1.105 1.097-1.547.017.129.043.257.069.36q.04.128.098.236zm-.201-1.308q.003-.322.034-.643a11.2 11.2 0 0 0-1.963 2.426l-.012.022-.138.235a10.6 10.6 0 0 0-1.033 2.585 7 7 0 0 1 .605-.412c.206-.617.514-1.367 1.011-2.19.434-.721.934-1.4 1.496-2.027zm1.08 2.688c-.154.17-.3.35-.412.544-.12.201-.214.428-.29.651.342-.038.57-.154.728-.411.128-.215.115-.467-.026-.785"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#AURA__c)"
            d="M10.705 18a4.7 4.7 0 0 0-.591-.6c-.574-.514-1.367-1.067-1.864-1.097a6 6 0 0 0-.789.034c-.801.073-1.697.154-2.16-.621-.446-.742.146-1.556.579-2.156.175-.244.325-.45.368-.6.129-.459.12-1.371-.025-2.1a2.6 2.6 0 0 0-.266-.81c1.4.984 2.562 2.27 3.398 3.763l.013.026A11.1 11.1 0 0 1 10.705 18m-3.107-2.16-.145.013h-.026l-.442.039a4 4 0 0 0-.385-.9 4 4 0 0 0-.592-.75c.086-.138.185-.266.279-.4l.064-.09c.498.644.915 1.345 1.243 2.088zm-.964-2.528c.615.76 1.118 1.604 1.496 2.507h.15c.141.012.287.042.424.09q-.332-.856-.806-1.642a12.6 12.6 0 0 0-1.097-1.547 3 3 0 0 1-.068.36q-.04.128-.1.236zm.201-1.308a7 7 0 0 0-.034-.643 11.4 11.4 0 0 1 2.113 2.683c.429.759.789 1.629 1.033 2.585l-.043-.035a6 6 0 0 0-.561-.377c-.256-.765-.595-1.5-1.012-2.19A13.3 13.3 0 0 0 6.835 12zm-1.08 2.688c.155.17.3.35.412.544.12.201.214.428.291.651-.343-.038-.57-.154-.728-.411-.129-.215-.116-.467.025-.785"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#AURA__d)"
            d="M9.673 16.564c.66-.154 1.5-.278 2.502-.278.977 0 1.86.12 2.593.265a8 8 0 0 1 .566-.274 12 12 0 0 0-3.159-.428h-.3c-.96.024-1.912.168-2.837.428q.323.13.635.287m.557.343c.193.142.354.323.471.532a13.4 13.4 0 0 1 2.936-.009 1.5 1.5 0 0 1 .184-.231q.154-.148.373-.3c-.6-.108-1.286-.185-2.014-.185-.755 0-1.406.082-1.955.189zm3.171.965a11.6 11.6 0 0 0-2.477 0l.056.11.008.022.176.365a4.3 4.3 0 0 1 1.05-.155c.326 0 .651.056.951.138l.198-.4.042-.085zm-.476.874a2.8 2.8 0 0 0-.711-.103c-.266 0-.549.051-.814.128.218.318.445.515.771.515.283 0 .519-.197.754-.54m4.003-2.413a2.9 2.9 0 0 0-.857.176 6 6 0 0 0-1.894 1.028c-.116.116-.227.343-.36.617-.317.66-.755 1.56-1.642 1.56-.925 0-1.303-.792-1.637-1.5-.12-.248-.231-.484-.364-.672-.274-.403-1.166-.79-1.911-1.016a5.4 5.4 0 0 0-.836-.193q.405-.177.823-.317a12 12 0 0 1 3.908-.587h.137c1.509.017 2.829.248 3.78.57q.435.145.853.334"
          />
          <path
            fill="url(#AURA__e)"
            d="M13.294 5.944c.124.159.334.378.591.6.575.515 1.367 1.068 1.865 1.098.235.012.505-.01.788-.035.802-.073 1.697-.154 2.16.622.446.741-.146 1.555-.578 2.155-.176.245-.326.455-.369.605-.129.458-.12 1.371.026 2.1.06.325.15.612.265.805a11.4 11.4 0 0 1-3.24-3.492l-.017-.022c-.043-.086-.094-.163-.141-.248l-.013-.022a11.1 11.1 0 0 1-1.337-4.166m3.107 2.16.146-.012h.026l.44-.04c.095.3.215.618.387.9.163.275.377.528.591.75-.086.138-.184.27-.279.4l-.064.094a10 10 0 0 1-1.243-2.092zm.964 2.529A10.3 10.3 0 0 1 15.87 8.13l-.15-.004a1.8 1.8 0 0 1-.425-.09q.333.855.806 1.641c.352.587.729 1.106 1.097 1.552.017-.133.043-.257.069-.365q.04-.128.098-.231m-.201 1.307a7 7 0 0 0 .034.647 11.2 11.2 0 0 1-1.963-2.425l-.012-.026-.138-.236a10.6 10.6 0 0 1-1.033-2.58q.294.219.605.411c.206.618.514 1.363 1.011 2.186.434.72.935 1.398 1.496 2.023m1.08-2.687a3.4 3.4 0 0 1-.412-.54 3.7 3.7 0 0 1-.29-.651c.342.034.57.15.728.407.128.214.115.467-.026.784"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#AURA__f)"
            d="M10.705 5.944a4.7 4.7 0 0 1-.591.6C9.54 7.06 8.747 7.612 8.25 7.642a6 6 0 0 1-.789-.035c-.801-.073-1.697-.154-2.16.622-.446.741.146 1.555.579 2.155.175.245.325.455.368.605.129.458.12 1.371-.025 2.1a2.6 2.6 0 0 1-.266.805c1.4-.983 2.562-2.27 3.398-3.762l.013-.022a11.1 11.1 0 0 0 1.337-4.166m-3.107 2.16-.145-.012h-.026l-.442-.04a4 4 0 0 1-.385.9 4 4 0 0 1-.592.75c.086.138.185.27.279.4l.064.094a10 10 0 0 0 1.243-2.092zm-.964 2.529A10.4 10.4 0 0 0 8.13 8.13l.15-.004c.141-.013.287-.043.424-.09q-.332.855-.806 1.641a12.5 12.5 0 0 1-1.097 1.552 4 4 0 0 0-.068-.365 1 1 0 0 0-.1-.231m.201 1.307a7 7 0 0 1-.034.647 11.2 11.2 0 0 0 1.963-2.425l.013-.026.137-.236a10.5 10.5 0 0 0 1.033-2.58 9 9 0 0 1-.604.411A11 11 0 0 1 8.33 9.918c-.434.72-.934 1.398-1.496 2.023m-1.08-2.687a3.4 3.4 0 0 0 .412-.54 3.7 3.7 0 0 0 .291-.651c-.343.034-.57.15-.728.407-.129.214-.116.467.025.784"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="AURA__a"
              x1="8.025"
              x2="14.885"
              y1="14.089"
              y2="14.089"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A3BFD0" />
              <stop offset="1" stopColor="#C0C4E0" />
            </linearGradient>
            <linearGradient
              id="AURA__b"
              x1="13.92"
              x2="10.677"
              y1="8.822"
              y2="17.922"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EDBC8E" />
              <stop offset="1" stopColor="#F1B770" />
            </linearGradient>
            <linearGradient
              id="AURA__c"
              x1="10.774"
              x2="14.104"
              y1="8.822"
              y2="17.84"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#89C2C5" />
              <stop offset="1" stopColor="#B7BE9A" />
            </linearGradient>
            <linearGradient
              id="AURA__d"
              x1="17.05"
              x2="6.214"
              y1="8.049"
              y2="7.893"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F8B86E" />
              <stop offset="1" stopColor="#89CAB9" />
            </linearGradient>
            <linearGradient
              id="AURA__e"
              x1="7.932"
              x2="12.78"
              y1="6.534"
              y2="19.149"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BDC0D8" />
              <stop offset="1" stopColor="#F3BB87" />
            </linearGradient>
            <linearGradient
              id="AURA__f"
              x1="6.424"
              x2="9.758"
              y1="12.707"
              y2="7.29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#76C9CD" />
              <stop offset="1" stopColor="#A5C8DE" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAURA.displayName = 'AURA'
