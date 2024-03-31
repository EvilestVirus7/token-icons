import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconXWG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M21 12.026s-.334-.733-1.127-1.196l-.099.549c.399.124.806.334 1.226.642zM4.714 6.938s.36.832.669 2.143l.42-1.135z"
          />
          <path
            fill="currentColor"
            d="m5.803 7.946-.42 1.131a15 15 0 0 1 .386 3.729l.728-2.122c-.051-.411-.098-.848-.171-1.307l.467.446.248-.72z"
          />
          <path
            fill="currentColor"
            d="M7.337 11.34s.48 2.76-.668 5.374c0 0 .137-.051.394-.128l1.363-4.2a9 9 0 0 1-1.089-1.046M7.03 9.077l-.249.733 1.903 1.778.248-.758zm-2.057 7.599s2.155-.172 1.512-6.005l-.728 2.126a11.6 11.6 0 0 1-.78 3.879z"
          />
          <path
            fill="currentColor"
            d="m10.912 10.706-.485.634s.163.188.433.463l.197-.935a2 2 0 0 1-.146-.162M11.43 9.2l.373-1.74-2.833 3.407-.039-.038-.248.758.287.262zm-3.437 6.283s.321-1.26.223-2.301l1.886 1.191s.09-.047.24-.163l.282-1.328c-.158.128-.321.261-.505.386 0 0-.729-.138-1.693-.883l-1.363 4.2a17.4 17.4 0 0 1 2.884-.605l.219-.998c-.738.103-1.465.271-2.173.501"
          />
          <path
            fill="currentColor"
            d="m11.914 8.678 1.603 1.779.215-.969-1.92-2.027h-.013l-.369 1.74.48-.523zm.947 4.89.172-.81c-.159-.124-.343-.287-.557-.458.274-.287.574-.622.87-.986v-.021l-.506-.622s-.334.446-.951 1.072q-.425-.423-.832-.862l-.197.93.472.472c-.215.201-.46.403-.708.613l-.283 1.328c.3-.21.88-.655 1.608-1.38q.446.375.912.725m-2.695 1.406-.219.995a21 21 0 0 1 2.435-.19l.214-.98c-.772 0-1.586.047-2.43.17z"
          />
          <path
            fill="currentColor"
            d="M14.186 13.457s-.356-.077-1.149-.699l-.171.81c.48.343.986.656 1.47.845 0 0 .458-.72 1.213-1.479l.21-1.11a8.6 8.6 0 0 0-1.573 1.629zm.583-1.607 1.187-1.119.21-1.131-1.247 1.157-1.187-1.269-.215.969zm-2.177 2.961-.215.986c.81-.017 1.672.009 2.589.107l.171-.921a19 19 0 0 0-2.546-.172m5.581-4.328-.25.921a3.2 3.2 0 0 1 1.844-.013l.098-.548a2.7 2.7 0 0 0-1.697-.36z"
          />
          <path
            fill="currentColor"
            d="M17.537 15.497s-.248-.077-.668-.188l-.223.844c.694.137 1.397.326 2.117.548 0 0-1.089-2.087-.84-5.314l-.72 2.666c.077.471.184.955.334 1.444"
          />
          <path
            fill="currentColor"
            d="M17.512 9.24s-.223.621-.356 1.641a8.5 8.5 0 0 0-1.414.943l-.206 1.11a7 7 0 0 1 1.543-1.183c-.04.774.004 1.55.128 2.315l.96-3.583c-.047 0-.086.013-.133.013.186-1.224.54-2.417 1.05-3.545 0 0-1.671 1.517-2.892 2.649l-.215 1.131zm-2.375 5.743-.171.921q.816.096 1.671.262l.223-.845a15 15 0 0 0-1.723-.338"
          />
        </>
      ) : (
        <>
          <path
            fill="#59438F"
            d="M21 12.026s-.334-.733-1.127-1.196l-.099.549c.399.124.806.334 1.226.643zM4.714 6.938s.36.832.668 2.143l.42-1.135z"
          />
          <path
            fill="#80478F"
            d="m5.802 7.946-.42 1.131a15 15 0 0 1 .386 3.729l.729-2.122c-.052-.411-.099-.848-.172-1.307l.467.446.249-.72z"
          />
          <path
            fill="#D42C78"
            d="M7.337 11.34s.48 2.76-.669 5.374c0 0 .137-.051.394-.128l1.363-4.2a9 9 0 0 1-1.088-1.046m-.309-2.263-.248.733 1.902 1.778.249-.758zm-2.057 7.599s2.156-.172 1.513-6.005l-.729 2.126c-.043 1.243-.261 2.563-.78 3.879z"
          />
          <path
            fill="#DEB343"
            d="m10.911 10.706-.484.634s.163.188.433.463l.197-.935a2 2 0 0 1-.146-.162M11.43 9.2l.372-1.74-2.832 3.407-.039-.038-.249.758.288.262zm-3.438 6.283s.322-1.26.223-2.301l1.886 1.191s.09-.047.24-.163l.283-1.328c-.159.128-.322.261-.506.386 0 0-.728-.138-1.693-.883l-1.363 4.2a17.4 17.4 0 0 1 2.885-.605l.218-.998q-1.107.155-2.173.501"
          />
          <path
            fill="#81BA5A"
            d="m11.914 8.678 1.603 1.779.214-.969-1.92-2.027h-.013l-.368 1.74.48-.523zm.947 4.89.171-.81c-.158-.124-.342-.287-.557-.458.275-.287.575-.622.87-.986v-.021l-.505-.622s-.335.446-.952 1.072q-.424-.423-.831-.862l-.197.93.471.472c-.214.201-.459.403-.707.613l-.283 1.328c.3-.21.879-.655 1.607-1.38q.447.375.913.725m-2.696 1.406-.218.995a21 21 0 0 1 2.434-.19l.214-.98c-.771 0-1.585.047-2.43.17z"
          />
          <path
            fill="#5EA4D4"
            d="M14.185 13.457s-.355-.077-1.148-.699l-.172.81c.48.343.986.656 1.47.845 0 0 .459-.72 1.213-1.479l.21-1.11a8.6 8.6 0 0 0-1.573 1.629zm.583-1.607 1.187-1.119.21-1.131-1.247 1.157-1.187-1.269-.214.969zm-2.177 2.961-.214.986c.81-.017 1.671.009 2.588.107l.172-.921a19 19 0 0 0-2.546-.172"
          />
          <path
            fill="#80478F"
            d="m18.171 10.483-.249.921a3.2 3.2 0 0 1 1.843-.013l.099-.548a2.7 2.7 0 0 0-1.697-.36z"
          />
          <path
            fill="#80478F"
            d="M17.537 15.497s-.249-.077-.669-.188l-.223.844c.695.137 1.397.326 2.117.548 0 0-1.088-2.087-.84-5.314l-.72 2.666c.078.471.185.955.335 1.444"
          />
          <path
            fill="#D42C78"
            d="M17.511 9.24s-.223.621-.356 1.641c-.398.215-.891.51-1.414.943l-.206 1.11c.42-.424.952-.857 1.543-1.183-.039.774.004 1.55.129 2.315l.96-3.583c-.047 0-.086.013-.133.013.186-1.224.54-2.417 1.05-3.545 0 0-1.672 1.517-2.893 2.649l-.214 1.131zm-2.374 5.743-.172.921q.817.096 1.672.262l.223-.845a15 15 0 0 0-1.723-.338"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXWG.displayName = 'XWG'
