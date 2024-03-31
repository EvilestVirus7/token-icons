import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCAP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M20.023 16.44c.364 0 .488-.441.428-.686-.398-.595-1.136-.754-1.748-.754a4 4 0 0 0-.772.081c.304.429 1.723 1.359 2.092 1.359"
          />
          <path
            fill="currentColor"
            d="m14.323 9.193.085.711a.6.6 0 0 0 .266-.085.34.34 0 0 0 .167-.33.3.3 0 0 0-.064-.18c-.111-.133-.309-.133-.454-.116m.111.891a.7.7 0 0 0 .317-.107.54.54 0 0 0 .249-.501.5.5 0 0 0-.107-.3c-.172-.193-.459-.197-.678-.15l-.072.017.21 1.671.154-.025-.073-.6z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M13.046 9c.154.274.282.557.407.849l.261.625-.171.069-.227-.544-.55.171c-.063.21-.123.407-.158.544l-.18-.047.172-.6c.12-.368.244-.728.446-1.067m-.215.956.412-.129-.202-.437c-.064.15-.137.356-.206.566zm-1.17-.412-.017-.085.206-.03.068.381-.192.051a.5.5 0 0 0-.112-.124.3.3 0 0 0-.176-.068c-.021 0-.064.017-.128.068a1.1 1.1 0 0 0-.386.797c0 .227.172.429.446.429a.46.46 0 0 0 .21-.086c.085-.056.18-.128.257-.214l.163.111a1.5 1.5 0 0 1-.3.253.65.65 0 0 1-.33.116c-.386 0-.656-.283-.656-.609 0-.325.176-.707.454-.93a.44.44 0 0 1 .27-.115c.086 0 .159.021.223.055m-2.267.579-.043-.24.189-.026.043.227c.141-.017.291-.013.398 0l-.025.172a1.6 1.6 0 0 0-.343 0l.068.403c.257.034.605.115.605.402 0 .245-.206.42-.438.51l.073.403-.188.026-.069-.377-.107.008a.7.7 0 0 1-.429-.18l.129-.124a.5.5 0 0 0 .3.133c.017 0 .043 0 .077-.009l-.116-.642a3 3 0 0 1-.278-.043c-.116-.03-.24-.09-.24-.215 0-.214.171-.364.394-.428m.03.171c-.128.043-.236.129-.236.257 0 .03.086.043.103.048q.084.02.193.034l-.056-.347zm.292.54.098.562c.15-.065.283-.176.283-.335 0-.162-.244-.201-.386-.227zm7.088 1.38c.189.095.514.33.9.635a21.4 21.4 0 0 1 2.366 2.185c.15.163.27.317.36.45.085.129.141.24.141.343 0 .343-.141.69-.536.69-.17 0-.445-.094-.8-.3-.348-.197-.785-.514-1.287-.973l-.265.137c-.746.412-1.479.858-2.22 1.278-.6.338-1.209.672-1.723.921-.352.171-.784.42-1.183.42-.27 0-.566-.171-.802-.287a18.7 18.7 0 0 1-4.542-3.189q2.782-.752 5.58-1.448a71 71 0 0 1 3.441-.793c.171-.034.48-.069.57-.069m-9.283 2.383a20.6 20.6 0 0 0 4.299 2.979c.214.103.493.27.737.27.373 0 .788-.249 1.114-.403a31 31 0 0 0 1.715-.917c.745-.42 1.474-.866 2.224-1.277a2 2 0 0 1 .326-.163l.042-.017.035.03c.396.373.832.704 1.298.985.218.148.468.243.729.279.3 0 .377-.279.377-.532 0-.042-.034-.141-.116-.265a4 4 0 0 0-.343-.433 21 21 0 0 0-2.352-2.164c-.37-.292-.678-.515-.853-.609q-.15.007-.493.073a71 71 0 0 0-3.429.793 319 319 0 0 0-5.314 1.371z"
          />
          <path
            fill="currentColor"
            d="M5.76 7.5C6.973 6.471 9.056 6 11.186 6c1.062 0 1.8.09 2.327.27.535.184.857.454 1.105.801l.005.005c1.504 2.563 2.087 4.525 2.194 5.194l-.154.026c-.099-.643-.673-2.589-2.169-5.139a1.93 1.93 0 0 0-1.028-.741c-.51-.172-1.226-.262-2.28-.262-2.118 0-4.158.472-5.328 1.462a5.14 5.14 0 0 0-1.362 2.113 7.6 7.6 0 0 0-.485 2.554c0 .784.18 1.358.523 1.736s.857.574 1.552.574c1.242 0 2.382-.369 2.81-.51l.13-.043.042.15-.124.043c-.424.133-1.586.514-2.858.514-.725 0-1.286-.206-1.663-.626-.382-.415-.566-1.032-.566-1.838s.171-1.744.497-2.606A5.3 5.3 0 0 1 5.76 7.5"
          />
          <path
            fill="currentColor"
            d="M7.5 10.02c0-1.564.163-2.966.266-3.471-3.682 1.114-3.832 4.77-3.832 6.128 0 1.363 1.191 2.006 2.242 2.006.844 0 2.022-.304 2.502-.459-.407-.75-1.178-2.64-1.178-4.2z"
          />
        </>
      ) : (
        <>
          <path
            fill="#1C430D"
            d="M20.023 16.44c.364 0 .489-.441.429-.686-.399-.595-1.136-.754-1.749-.754-.304 0-.578.043-.771.081.304.429 1.723 1.359 2.091 1.359"
          />
          <path
            fill="#1C430D"
            d="m14.323 9.193.085.711a.6.6 0 0 0 .266-.085.34.34 0 0 0 .167-.33.3.3 0 0 0-.064-.18c-.112-.133-.309-.133-.454-.116m.111.891a.7.7 0 0 0 .317-.107.54.54 0 0 0 .249-.501.5.5 0 0 0-.107-.3c-.172-.193-.459-.197-.678-.15l-.072.017.21 1.671.154-.025-.073-.6z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#1C430D"
            d="M13.046 9c.154.274.283.557.407.849l.261.625-.171.069-.227-.544-.549.171c-.064.21-.124.407-.158.544l-.18-.047.171-.6c.12-.368.244-.728.446-1.067m-.214.956.41-.129-.2-.437a7 7 0 0 0-.206.566zm-1.17-.412-.018-.085.206-.03.069.381-.193.051a.5.5 0 0 0-.112-.124.3.3 0 0 0-.175-.068c-.022 0-.065.017-.129.068a1.1 1.1 0 0 0-.386.797c0 .227.172.429.446.429a.46.46 0 0 0 .21-.086c.086-.056.18-.128.257-.214l.163.111c-.09.099-.197.189-.3.253a.65.65 0 0 1-.33.116c-.386 0-.656-.283-.656-.609 0-.325.176-.707.455-.93a.44.44 0 0 1 .27-.115c.085 0 .158.021.223.055m-2.268.579-.043-.24.189-.026.043.227c.141-.017.291-.013.398 0l-.025.172a1.6 1.6 0 0 0-.343 0l.068.403c.258.034.605.115.605.402 0 .245-.206.42-.437.51l.072.403-.188.026-.069-.377-.107.008a.7.7 0 0 1-.428-.18l.128-.124a.5.5 0 0 0 .3.133c.017 0 .043 0 .077-.009l-.115-.642a3 3 0 0 1-.279-.043c-.116-.03-.24-.09-.24-.215 0-.214.171-.364.394-.428m.03.171c-.128.043-.235.129-.235.257 0 .03.085.043.102.048q.084.02.193.034l-.055-.347zm.292.54.098.562c.15-.065.283-.176.283-.335 0-.162-.244-.201-.386-.227zm7.088 1.38c.189.095.515.33.9.635a21.4 21.4 0 0 1 2.366 2.185c.15.163.27.317.36.45.086.129.142.24.142.343 0 .343-.142.69-.536.69-.172 0-.446-.094-.802-.3-.347-.197-.784-.514-1.285-.973l-.266.137c-.746.412-1.479.858-2.22 1.278-.6.338-1.209.672-1.723.921-.351.171-.784.42-1.183.42-.27 0-.566-.171-.801-.287a18.7 18.7 0 0 1-4.543-3.189q2.784-.752 5.58-1.448a71 71 0 0 1 3.441-.793c.172-.034.48-.069.57-.069m-9.283 2.383a20.6 20.6 0 0 0 4.299 2.979c.214.103.493.27.737.27.373 0 .789-.249 1.114-.403a31 31 0 0 0 1.715-.917c.745-.42 1.474-.866 2.224-1.277.15-.086.266-.146.326-.163l.043-.017.034.03q.597.562 1.298.985c.219.148.468.243.729.279.3 0 .377-.279.377-.532 0-.042-.034-.141-.116-.265a4 4 0 0 0-.342-.433 21 21 0 0 0-2.353-2.164c-.369-.292-.677-.515-.853-.609-.099.004-.266.03-.493.073q-1.724.354-3.429.793c-1.842.454-3.912.998-5.314 1.371z"
          />
          <path
            fill="#1C430D"
            d="M5.76 7.5C6.973 6.471 9.056 6 11.186 6c1.063 0 1.8.09 2.327.27.536.184.857.454 1.106.801l.004.005c1.504 2.563 2.087 4.525 2.194 5.194l-.154.026c-.098-.643-.673-2.589-2.168-5.139a1.93 1.93 0 0 0-1.029-.741c-.51-.172-1.226-.262-2.28-.262-2.117 0-4.157.472-5.327 1.462a5.14 5.14 0 0 0-1.363 2.113 7.6 7.6 0 0 0-.484 2.554c0 .784.18 1.358.523 1.736.342.377.857.574 1.551.574 1.243 0 2.383-.369 2.811-.51l.129-.043.043.15-.124.043c-.425.133-1.586.514-2.859.514-.724 0-1.286-.206-1.663-.626-.381-.415-.566-1.032-.566-1.838s.172-1.744.498-2.606A5.3 5.3 0 0 1 5.76 7.5"
          />
          <path
            fill="#1C430D"
            d="M7.5 10.02c0-1.564.163-2.966.266-3.471-3.681 1.114-3.831 4.77-3.831 6.128 0 1.363 1.191 2.006 2.241 2.006.844 0 2.023-.304 2.503-.459-.407-.75-1.179-2.64-1.179-4.2z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCAP.displayName = 'CAP'
