import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconITHEUM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M15.557 14.872a.67.67 0 0 1 .476-.228l.407-2.314a.7.7 0 0 1-.129-.073l-1.761 1.586a.7.7 0 0 1 .06.514l.943.515zm4.08 1.787-2.52-4.415a.65.65 0 0 1-.373.142l-.411 2.314a.7.7 0 0 1 .42.57.7.7 0 0 1-.652.759.64.64 0 0 1-.355-.082.6.6 0 0 1-.262-.257.7.7 0 0 1-.073-.544l-.951-.523a.68.68 0 0 1-.455.231l-.257 1.963a.7.7 0 0 1 .438.755h4.928a.6.6 0 0 0 .6-.609.6.6 0 0 0-.077-.304m-7.603-5.165a.71.71 0 0 1-.013-.732l-2.37-2.328a.6.6 0 0 1-.235.099l-.172 5.58a.8.8 0 0 1 .18.081zM9.968 7.847a.7.7 0 0 1-.098.356l2.37 2.327a.686.686 0 0 1 1.063.514l2.768.386a.76.76 0 0 1 .373-.39l-3.921-6.883a.6.6 0 0 0-1.046 0L9.694 7.286a.66.66 0 0 1 .202.244.8.8 0 0 1 .072.313zm3.335 6.557-3.557.45-.026.142 3.291 1.993a.72.72 0 0 1 .433-.215l.261-1.958a.6.6 0 0 1-.24-.159.6.6 0 0 1-.162-.253m-.686-2.588a.7.7 0 0 1-.364-.103l-2.606 2.7c.026.038.043.086.064.128l3.549-.45a.9.9 0 0 1 .085-.27.7.7 0 0 1 .185-.214l-.793-1.804c-.03.013-.077.013-.124.013zm-3.056 3.458a.64.64 0 0 1-.27.172.8.8 0 0 1-.313.034.6.6 0 0 1-.291-.12.68.68 0 0 1-.3-.553.65.65 0 0 1 .064-.317.67.67 0 0 1 .485-.386l.17-5.575-.085-.035-4.658 8.165a.62.62 0 0 0 .223.831.6.6 0 0 0 .3.082h7.937l-.005-.108c0-.072.013-.145.03-.214zm4.38-1.791a.66.66 0 0 1 .399.128l1.765-1.585a.6.6 0 0 1-.077-.266l-2.772-.386a.7.7 0 0 1-.232.309l.793 1.809a.4.4 0 0 1 .128-.009z"
      />
    </BaseIcon>
  ),
)

IconITHEUM.displayName = 'ITHEUM'
