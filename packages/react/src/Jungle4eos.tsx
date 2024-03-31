import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconJUNGLE4EOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.524 15.036a4.4 4.4 0 0 0-1.105.036c.359.128.796.274 1.258.452zm-.316-1.013a4.5 4.5 0 0 0-1.191.071l-.004.007c.384.118.854.25 1.348.416zm-.306-.992q-.134-.006-.267-.007l-.202.348q.304.08.626.171zm2.35 3.499a3.8 3.8 0 0 0-.992-.377l.196.63q.251.12.498.259h1.027a4 4 0 0 0-.729-.512m-2.595-4.288L9.6 12.06a5 5 0 0 0-1.205.086l-.032.142c.34.071.728.146 1.13.242zM9.166 9.13c.512.09 1 .2 1.412.289q.171.31.338.625l.092-.163q-.129-.228-.263-.452c.025-.686-.007-1.571-.05-2.47l-.341.49c.067.732.202 1.419.38 1.952q-.207-.346-.427-.686c.004-.342-.007-.74-.028-1.163l-.22.31c.067.312.152.604.245.853l-.103-.164a13 13 0 0 0-.242-.359l-.014-.164-.043.06.029.065-.036-.053-.071.103q.027.006.05.014l.206.341a3 3 0 0 0-.36-.213l-.17.242q.327.06.612.11.165.271.32.555a3.7 3.7 0 0 0-1.039-.516z"
          />
          <path
            fill="currentColor"
            d="M9.337 9.966c.505.1.992.22 1.433.334l.128-.224a4.3 4.3 0 0 0-1.757-.732zm.828 1.277a5 5 0 0 0-.458-.093l.195.622.018.004.302-.523a.2.2 0 0 1-.057-.01m-.967-.47-.181-.586a2 2 0 0 0-.16-.007l-.121.512c.153.024.31.053.462.081m.434-.501a5 5 0 0 0-.21-.04l.196.63q.372.08.729.182l.26-.448a4 4 0 0 0-.975-.324m-.153 1.404-.174-.561a5 5 0 0 0-.669.007l-.089.377a17 17 0 0 1 .932.177m-.932 1.476.512.128.136-.235q-.337.033-.648.107m1.184-5.468.15-.21c-.057-.427-.132-.896-.206-1.366-.128-.76-.26-1.528-.438-2.108-.039.683-.01 1.49.118 2.247.085.52.22 1.013.376 1.437m2.852 9.728c.17.106.338.22.498.33l.103-.33zM10.67 6.354c-.043-.75-.096-1.48-.178-2.052a11.7 11.7 0 0 0-.174 2.553zm1.209-1.714a9 9 0 0 0-.028-.338q-.06.262-.114.54zm-.64.907a20 20 0 0 0-.124-1.334c-.11.555-.189 1.184-.228 1.835zM9.966 7.353l.285-.402-.036-.576c-.06-.85-.124-1.71-.238-2.357a11 11 0 0 0-.107 2.464c.018.298.05.594.096.87m-1.28 1.935a5.2 5.2 0 0 0-2.286.345c.59.043 1.369.085 2.155.203zm5.07 6.283.74-2.379c.057-.387.106-.768.15-1.13l-.214-.37c-.203.714-.377 1.5-.498 2.275a21 21 0 0 0-.178 1.604M7.68 5.404q.06.086.124.182c.086.12.175.249.267.377.185.256.388.526.597.785.317.402.644.786.95 1.103l.092-.132a6.9 6.9 0 0 0-1.46-1.966 4 4 0 0 0-.345-.292q-.085-.064-.174-.124-.042-.027-.09-.053-.045-.029-.092-.047c.025.022.047.054.068.082zm1.76 2.692.131-.185a3.2 3.2 0 0 0-1.205-.505 3.5 3.5 0 0 0-1.884.146c.469.05 1.116.117 1.749.249.423.082.84.192 1.209.295m-.295.42.227-.324a3.4 3.4 0 0 0-.878-.206 4.1 4.1 0 0 0-2.044.313c.519.017 1.226.028 1.923.11.263.025.523.064.772.107m2.876.355c.025 1.273.121 2.72.324 3.72a25 25 0 0 0-.505-1.123 33 33 0 0 0 .114-2.483l-.42.74c.064.618.16 1.194.281 1.685q-.234-.49-.49-.964l.014.004c-.008-.007-.018-.018-.029-.025q0-.002-.003-.004l.017-.337-.092.16.018.07a.4.4 0 0 1-.029-.053l-.103.178q.175.346.345.697a4 4 0 0 0-.537-.366l-.217.38q.476.141.89.27.17.358.326.726c.007.014.01.025.018.039a4.2 4.2 0 0 0-1.362-.807l-.291.508c.643.182 1.262.406 1.785.598q.164.388.32.785a4.2 4.2 0 0 0-1.732-1.017 4 4 0 0 0-.512-.12l-.092.163.131.427.245.07c.754.225 1.48.534 2.08.783a23 23 0 0 1 .288.81 4.1 4.1 0 0 0-1.678-1.105 4.4 4.4 0 0 0-.821-.203l.188.605q.196.062.391.135c.42.146.829.32 1.213.494q.438.204.818.391.138.42.266.846a4.1 4.1 0 0 0-1.632-1.212 4 4 0 0 0-.931-.26l.185.601q.241.09.483.192c.41.167.807.36 1.18.559.285.152.555.302.8.44.011.043.026.086.036.128.054.185.1.374.15.562l.106-.345q-.04-.164-.082-.327v-.003c.189-.86.356-1.974.498-3.097.064-.534.125-1.07.174-1.582l-.252-.441a19 19 0 0 0-.37 2.044 16 16 0 0 0-.11 2.862q-.135-.482-.284-.953c.16-.856.288-1.966.39-3.082.04-.448.079-.896.11-1.33l-.284-.498c-.12.605-.213 1.245-.27 1.874a15.4 15.4 0 0 0-.01 2.83q-.101-.303-.207-.608l-.117-.316c.128-.857.22-1.956.292-3.069.02-.387.042-.775.06-1.155l-.313-.544a17 17 0 0 0-.199 1.763 15 15 0 0 0 .085 2.806q-.121-.314-.248-.623c.088-1.105.152-2.837.142-4.263v-.067l-.139-.242zm-1.209 7.616q.091.044.189.082l-.153-.494a4 4 0 0 0-1.053-.007c.296.12.644.26 1.017.42"
          />
          <path
            fill="currentColor"
            d="M11.922 15.417a4 4 0 0 0-.992-.32l.188.604q.263.111.526.239c.395.188.786.401 1.142.618q.29.178.55.345l.083-.267a4 4 0 0 0-1.497-1.22m.298-7.636V5.376c-.124.86-.195 1.81-.202 2.76zm-3.854 2.855.107-.455a5.2 5.2 0 0 0-1.494.28c.399.054.879.104 1.387.175m-.828.697.643.103.064-.267q-.375.059-.707.164m-.946-2.45c.562.035 1.323.064 2.076.174q.044.005.09.014l.305-.43a4.4 4.4 0 0 0-2.471.242m4.274-1.398c.025.793.11 1.561.245 2.226l.235-.405a61 61 0 0 0-.071-3.157l-.413.583q-.005.377.004.753m.583.552c0 .348.01.696.032 1.034l.483-.842v-.306c0-.928-.01-1.867-.05-2.685l-.312.441a19 19 0 0 0-.153 2.358m-.185 9.376H7.73l.338.224 4 2.364zm4.647-7.52-.732 2.35 2.18 3.786zM12.615 7.78l2.311 4.02.804-2.58-3.115-4.416zm.957 9.632L12.768 20l4.38-2.588zm1.458-4.687-1.341 4.317h3.819z"
          />
        </>
      ) : (
        <>
          <path
            fill="#006838"
            d="M10.524 15.036a4.4 4.4 0 0 0-1.105.036c.359.128.796.274 1.258.452zm-.316-1.013a4.5 4.5 0 0 0-1.191.071l-.004.007c.384.118.854.25 1.348.416zm-.306-.992q-.134-.006-.266-.007l-.203.348q.305.08.626.171zm2.35 3.499a3.8 3.8 0 0 0-.992-.377l.196.63q.251.12.498.259h1.027a4 4 0 0 0-.729-.512m-2.595-4.288L9.6 12.06a5 5 0 0 0-1.205.086l-.032.142c.341.071.729.146 1.13.242zM9.166 9.13c.512.09 1 .2 1.412.289q.171.31.338.625l.092-.163q-.129-.228-.263-.452c.025-.686-.007-1.571-.05-2.47l-.341.49c.067.732.202 1.419.38 1.952q-.207-.346-.426-.686c.003-.342-.008-.74-.029-1.163l-.22.31c.067.312.153.604.245.853l-.103-.164a13 13 0 0 0-.242-.359l-.014-.164-.043.06.029.065-.036-.053-.071.103q.028.006.05.014l.206.341a3 3 0 0 0-.36-.213l-.17.242q.327.06.612.11.165.271.32.555a3.7 3.7 0 0 0-1.038-.516z"
          />
          <path
            fill="#006838"
            d="M9.337 9.966c.505.1.992.22 1.433.334l.128-.224a4.3 4.3 0 0 0-1.757-.732zm.828 1.277a5 5 0 0 0-.458-.093l.195.622.018.004.302-.523a.2.2 0 0 1-.057-.01m-.967-.47-.181-.586a2 2 0 0 0-.16-.007l-.121.512c.153.024.31.053.462.081m.434-.501a5 5 0 0 0-.21-.04l.196.63q.372.08.729.182l.26-.448a4 4 0 0 0-.975-.324m-.152 1.404-.175-.561a5 5 0 0 0-.669.007l-.088.377c.298.05.615.106.931.177m-.931 1.476.512.128.135-.235q-.337.033-.647.107m1.184-5.468.149-.21c-.057-.427-.132-.896-.206-1.366-.128-.76-.26-1.528-.438-2.108-.039.683-.01 1.49.118 2.247.085.52.22 1.013.377 1.437m2.851 9.728c.17.106.338.22.498.33l.103-.33zM10.67 6.354a26 26 0 0 0-.178-2.052 11.7 11.7 0 0 0-.174 2.553zm1.21-1.714a9 9 0 0 0-.03-.338q-.059.262-.113.54zm-.64.907a20 20 0 0 0-.125-1.334c-.11.555-.189 1.184-.228 1.835zM9.966 7.353l.285-.402-.036-.576c-.06-.85-.124-1.71-.238-2.357a11 11 0 0 0-.107 2.464c.018.298.05.594.096.87m-1.28 1.935a5.2 5.2 0 0 0-2.286.345c.59.043 1.369.085 2.155.203zm5.07 6.283.74-2.379c.057-.387.107-.768.15-1.13l-.214-.37c-.203.714-.377 1.5-.498 2.275a21 21 0 0 0-.178 1.604M7.68 5.404q.06.086.124.182c.086.12.175.249.267.377.185.256.388.526.597.785.317.402.644.786.95 1.103l.092-.132a6.9 6.9 0 0 0-1.46-1.966 4 4 0 0 0-.345-.292q-.085-.064-.174-.124-.042-.027-.09-.053-.045-.029-.092-.047c.025.022.047.054.068.082zm1.76 2.692.132-.185a3.2 3.2 0 0 0-1.206-.505 3.5 3.5 0 0 0-1.884.146c.47.05 1.116.117 1.75.249.422.082.838.192 1.208.295m-.295.42.227-.324a3.4 3.4 0 0 0-.878-.206 4.1 4.1 0 0 0-2.044.313c.519.017 1.226.028 1.923.11.263.025.523.064.772.107m2.876.355c.025 1.273.121 2.72.324 3.72a25 25 0 0 0-.505-1.123 33 33 0 0 0 .114-2.483l-.42.74c.064.618.16 1.194.281 1.685q-.235-.49-.49-.964l.014.004c-.007-.007-.018-.018-.029-.025q0-.002-.003-.004l.017-.337-.092.16.018.07a.4.4 0 0 1-.029-.053l-.103.178q.176.346.345.697a4 4 0 0 0-.537-.366l-.217.38q.477.141.89.27.17.358.326.726l.018.039a4.2 4.2 0 0 0-1.362-.807l-.291.508c.643.182 1.262.406 1.785.598q.165.388.32.785a4.2 4.2 0 0 0-1.732-1.017 4 4 0 0 0-.512-.12l-.092.163.131.427.246.07c.753.225 1.479.534 2.08.783a23 23 0 0 1 .288.81 4.1 4.1 0 0 0-1.679-1.105 4.4 4.4 0 0 0-.821-.203l.188.605q.196.062.392.135c.42.146.828.32 1.212.494q.438.204.818.391.138.42.266.846a4.1 4.1 0 0 0-1.632-1.212 4 4 0 0 0-.931-.26l.185.601q.242.09.483.192c.41.167.807.36 1.18.559.285.152.555.302.8.44.011.043.026.086.036.128.054.185.1.374.15.562l.106-.345-.081-.327v-.003c.188-.86.355-1.974.497-3.097.064-.534.125-1.07.175-1.582l-.253-.441a19 19 0 0 0-.37 2.044 16 16 0 0 0-.11 2.862q-.135-.482-.284-.953c.16-.856.288-1.966.39-3.082.04-.448.079-.896.111-1.33l-.284-.498a18 18 0 0 0-.27 1.874 15.4 15.4 0 0 0-.011 2.83q-.1-.303-.207-.608l-.117-.316c.128-.857.22-1.956.292-3.069.021-.387.042-.775.06-1.155l-.313-.544a17 17 0 0 0-.199 1.763 15 15 0 0 0 .085 2.806q-.121-.314-.248-.623c.088-1.105.152-2.837.142-4.263v-.067l-.139-.242zm-1.209 7.616q.092.044.189.082l-.153-.494a4 4 0 0 0-1.052-.007c.295.12.643.26 1.016.42"
          />
          <path
            fill="#006838"
            d="M11.922 15.417a4 4 0 0 0-.992-.32l.188.604a13 13 0 0 1 1.668.857q.29.178.55.345l.083-.267a4 4 0 0 0-1.497-1.22m.298-7.636V5.376c-.124.86-.195 1.81-.202 2.76zm-3.854 2.855.107-.455a5.2 5.2 0 0 0-1.493.28c.398.054.878.104 1.386.175m-.828.697.643.103.064-.267q-.375.059-.707.164m-.946-2.45c.562.035 1.323.064 2.076.174q.044.005.09.014l.305-.43a4.4 4.4 0 0 0-2.471.242m4.274-1.398c.025.793.11 1.561.245 2.226l.235-.405a61 61 0 0 0-.071-3.157l-.413.583q-.006.377.004.753m.583.552c0 .348.01.696.032 1.034l.483-.842v-.306c0-.928-.01-1.867-.05-2.685l-.312.441a19 19 0 0 0-.153 2.358"
          />
          <path
            fill="#60C2AC"
            d="M11.264 17.412H7.73l.338.224 4 2.364zm4.647-7.52-.732 2.35 2.18 3.786zM12.615 7.78l2.311 4.02.804-2.58-3.115-4.416zm.957 9.632L12.768 20l4.38-2.588zm1.458-4.687-1.341 4.317h3.819z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconJUNGLE4EOS.displayName = 'JUNGLE4EOS'
