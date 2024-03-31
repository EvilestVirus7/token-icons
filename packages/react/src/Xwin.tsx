import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconXWIN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#231F20"
        d="M12.815 5.708c-.309.035-.532.36-.643.635a.06.06 0 0 1-.052.034l-.707-.026a.1.1 0 0 1-.072-.034 1.7 1.7 0 0 0-1.132-.617 31 31 0 0 0-3.544.086c-.12.004-.242.022-.372.042l-.031.005a1.33 1.33 0 0 0-1.011.814.8.8 0 0 0-.065.313 49 49 0 0 0-.043 2.314q-.003.367.078.724c.09.352.347.58.655.785.017.008.026.03.013.051-.36.96-.6 2.04-.557 3.034.026.605.146 1.2.36 1.775.544 1.495 1.779 2.4 3.3 2.828q1.44.412 3.214.386c2.31-.034 4.355-1.011 5.739-2.803.289-.37.528-.776.711-1.208a2 2 0 0 0 .133-.472c.116-.883.099-1.83-.146-2.691A3.3 3.3 0 0 0 18 10.457c-.012-.013-.012-.03 0-.039q.426-.365.472-1.007.07-.918.103-1.688.012-.45-.039-.9c-.077-.673-.441-1.097-1.148-1.187a8 8 0 0 0-1.128-.065 72 72 0 0 0-3.055.103 4 4 0 0 0-.39.034m.3.652c-.429.227-.292 1.342-.214 1.727h.004a.01.01 0 0 0 .009.009h.004l.008-.004 1.719-1.8a5 5 0 0 0-1.23-.018.9.9 0 0 0-.3.086m-6.639.163a1.1 1.1 0 0 0-.321.073c-.412.141-.382.968-.339 1.298l.06.45a.02.02 0 0 0 .013.009.02.02 0 0 0 .013 0l1.714-1.791a.02.02 0 0 0 .005-.018 5.5 5.5 0 0 0-1.145-.021"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#79C928"
        d="M11.08 10.037a2 2 0 0 0 .153-.527q.104-.607.137-1.221a.03.03 0 0 1 .022-.009h.93c.009 0 .013 0 .021.009l.009.021q.023.7.086 1.397c.077.433.325.9.711 1.106q.174.092.424.107.605.039 1.235.013a35 35 0 0 0 2.352-.163q.269-.032.52-.154.011-.007.026-.005.015.003.024.013c.33.394.555.864.656 1.367q.263 1.19.056 2.465a1.5 1.5 0 0 1-.142.411 5.8 5.8 0 0 1-.805 1.243 6.73 6.73 0 0 1-4.372 2.361c-.917.125-1.838.086-2.747-.034-1.217-.158-2.443-.54-3.343-1.341a4.13 4.13 0 0 1-1.251-2.263 5.6 5.6 0 0 1-.094-1.843 8.5 8.5 0 0 1 .488-2.001q.014-.025.039-.018l.154.039q.462.064 1.059.064.995-.007 2.048-.073a7 7 0 0 0 .75-.09c.386-.072.699-.514.857-.874z"
      />
      <path
        fill="#231F20"
        d="M11.7 14.846c0 .407.288.741.64.741.35 0 .633-.334.633-.741 0-.412-.283-.742-.634-.742s-.639.33-.639.742"
      />
    </BaseIcon>
  ),
)

IconXWIN.displayName = 'XWIN'
