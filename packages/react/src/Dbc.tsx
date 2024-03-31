import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDBC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m10.125 12.885-1.238 1.248c-.223.223-.441.45-.665.672-.037.038-.09.06-.136.09-.098-.015-.173-.074-.185-.159q-.032-.195-.056-.39c-.022-.173-.077-.22-.258-.242q-.558-.066-1.117-.137l-.851-.107c-.17-.021-.231-.138-.142-.278l.614-.947 1.252-1.93c.05-.078.106-.132.212-.129a.8.8 0 0 0 .205-.031.2.2 0 0 1 .197.055l.295.267 1.131 1.035.734.667c.126.114.126.196.007.316m8.316 1.678c.071.056.147.11.162.206.02.123-.032.212-.14.279l-1.912 1.196-1.232.77a1 1 0 0 0-.111.08.24.24 0 0 0-.094.203c.006.148.015.296.017.444.003.17-.127.276-.304.257a.25.25 0 0 1-.161-.09l-.444-.495-.556-.621a.33.33 0 0 1-.101-.285l.025-.864c.003-.101.066-.167.15-.219l1.018-.627q.857-.524 1.71-1.055c.12-.074.232-.096.364-.032.097.048.21.057.313.025.159-.048.28-.006.402.099.293.248.596.485.896.728zm-5.472.717q.07.066.095.16c.027.134-.028.226-.16.288-.44.204-.83.407-1.272.604-.08.035-.238.12-.328.125h-1.87c-.032.001-.065-.013-.096-.024a.3.3 0 0 1-.083-.053l-.14-.122c-.258-.237-.511-.478-.775-.709-.147-.129-.15-.302-.009-.44q.473-.47.942-.947l1.014-1.027a.29.29 0 0 1 .32-.08.3.3 0 0 1 .1.06l1.35 1.293q.457.435.912.872m1.858-5.821c-.145-.216.019-.513.26-.552.643-.103 1.284-.222 1.927-.33.142-.024.254.04.332.152l.401.587q.424.619.844 1.239c.038.056.056.122.084.184l-.016.007a.47.47 0 0 1-.116.288c-.393.51-.79 1.016-1.183 1.526a.37.37 0 0 1-.313.134.36.36 0 0 1-.292-.174q-.863-1.376-1.731-2.75-.096-.158-.197-.311m-1.129 2.554-.112.966q-.05.4-.097.801l-.111.94c-.008.066-.008.133-.023.197-.007.031-.031.07-.058.08-.027.011-.075-.004-.099-.023q-.159-.135-.31-.276-.55-.505-1.1-1.006-.48-.437-.96-.87c-.107-.096-.108-.126-.005-.23l1.468-1.482 1.003-1.015.492-.5c.014-.014.026-.034.043-.04.036-.012.08-.028.11-.019.025.009.037.053.045.065zm2.855.738c.048.074.055.146.003.223a.43.43 0 0 0-.07.292c.01.09-.03.146-.11.195q-.94.577-1.878 1.157-.294.183-.59.363c-.078.047-.158.043-.201-.018-.024-.032-.027-.079-.034-.102l.083-.584.583-4.078.075-.514c.002-.013.003-.03.01-.04.02-.023.042-.059.066-.063.027-.004.069.016.086.039.046.059.083.124.123.188l1.467 2.326q.192.309.387.616m-3.04-3.547c.023.015.068.03.092.061.037.048.005.093-.034.131l-.51.517-1.486 1.5-.93.944c-.112.114-.202.114-.32.006l-1.087-.994-1.06-.962c-.048-.043-.085-.09-.08-.157q.009-.133.169-.159l.588-.1zm-5.054.458 1.049-.69 3.383-2.221c.112-.074.183-.059.24.058l.697 1.447.09.188c.024.05.008.091-.024.137a1 1 0 0 0-.104.179.16.16 0 0 1-.13.104l-1.492.259-3.693.64c-.027.004-.054 0-.082 0l-.017-.03c.028-.024.053-.052.083-.071M4.94 10.765c-.22-.004-.351-.211-.246-.401.09-.161.188-.316.284-.473l.829-1.362a.5.5 0 0 1 .187-.178l2.194-1.22a.5.5 0 0 1 .15-.058.27.27 0 0 1 .15.014.26.26 0 0 1 .117.09.25.25 0 0 1 .025.282q-.167.34-.337.677-.316.62-.628 1.241a.32.32 0 0 1-.225.185.5.5 0 0 0-.246.133.5.5 0 0 0-.138.236.26.26 0 0 1-.068.118.3.3 0 0 1-.12.07l-1.802.618c-.04.014-.084.018-.126.028m3.115-1.32a.2.2 0 0 1 .026-.087l.785-1.661q.248-.519.49-1.037a.19.19 0 0 1 .186-.123q.368-.013.736-.03l1.447-.052.51-.026c.122-.005.205.066.206.18.005.07-.041.116-.101.156L8.22 9.468a.4.4 0 0 1-.065.04c-.053.02-.103-.01-.1-.064m-1.022 1.193q-.184.285-.37.568l-1.38 2.126a.3.3 0 0 1-.074.09c-.08.054-.186.016-.223-.08q-.089-.233-.175-.466l-.502-1.362-.024-.085c0-.092.032-.131.121-.159l.8-.247 1.513-.463.198-.059c.047-.014.095-.034.134.017.035.045.006.083-.018.12m12.24 2.722.012.09c-.008.036-.016.08-.028.122l-.2.691c-.056.2-.22.246-.384.112q-.508-.413-1.018-.823c-.077-.063-.11-.134-.091-.232a.44.44 0 0 0-.035-.292c-.047-.088-.032-.167.029-.245l.83-1.078.169-.22c.056-.074.13-.11.224-.09.1.022.15.087.167.18zm-5.825-6.58-.015-.03c-.02-.044-.028-.094.017-.12a.2.2 0 0 1 .128-.006c.066.02.125.055.188.085l2.52 1.214.449.217c.05.024.09.053.08.113-.011.06-.058.073-.113.083l-1.817.314-.06.012c-.016-.011-.05-.023-.07-.046a.6.6 0 0 0-.448-.22c-.067-.002-.102-.041-.127-.095l-.323-.666z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00CEDB"
            d="m10.125 12.885-1.238 1.248c-.223.223-.44.45-.664.672-.038.038-.09.06-.137.09-.097-.015-.172-.074-.185-.159q-.031-.195-.056-.39c-.022-.173-.077-.22-.258-.242q-.558-.066-1.117-.137l-.85-.107c-.17-.021-.232-.138-.143-.278l.614-.947 1.253-1.93c.05-.078.105-.132.211-.129a.8.8 0 0 0 .205-.031.2.2 0 0 1 .197.055q.149.133.296.267l1.131 1.035.733.667c.126.114.126.196.008.316m8.317 1.678c.07.056.147.11.162.206.019.123-.032.212-.14.279l-1.913 1.196-1.232.77a1 1 0 0 0-.11.08.24.24 0 0 0-.095.203q.012.222.018.444c.002.17-.128.276-.305.257a.25.25 0 0 1-.16-.09l-.445-.495-.556-.621a.33.33 0 0 1-.1-.285l.025-.864c.003-.101.065-.167.149-.219l1.018-.627q.857-.524 1.71-1.055c.12-.074.232-.096.364-.032.098.048.21.057.313.025.159-.048.28-.006.402.099.293.248.597.485.896.728zm-5.473.717q.07.066.095.16c.028.134-.028.226-.16.288-.439.204-.829.407-1.271.604-.08.035-.239.12-.329.125H9.435c-.033.001-.066-.013-.096-.024a.3.3 0 0 1-.084-.053l-.14-.122c-.258-.237-.511-.478-.775-.709-.147-.129-.149-.302-.008-.44q.471-.47.941-.947l1.014-1.027a.29.29 0 0 1 .321-.08.3.3 0 0 1 .1.06l1.35 1.293c.303.291.61.58.911.872m1.858-5.821c-.144-.216.02-.513.26-.552.643-.103 1.285-.222 1.927-.33.142-.024.254.04.333.152l.401.587q.424.619.843 1.239c.038.056.057.122.085.184l-.017.007a.47.47 0 0 1-.116.288c-.393.51-.79 1.016-1.182 1.526a.37.37 0 0 1-.313.134.36.36 0 0 1-.292-.174q-.863-1.376-1.732-2.75-.096-.158-.197-.311M13.7 12.013l-.113.966-.097.801-.11.94c-.008.066-.009.133-.023.197-.008.031-.032.07-.059.08-.027.011-.075-.004-.098-.023q-.159-.135-.31-.276-.55-.505-1.1-1.006-.48-.437-.961-.87c-.107-.096-.107-.126-.005-.23l1.469-1.482 1.003-1.015.491-.5c.014-.014.026-.034.044-.04.035-.012.079-.028.11-.019.025.009.037.053.044.065zm2.854.738c.048.074.056.146.003.223a.43.43 0 0 0-.069.292c.01.09-.03.146-.11.195q-.941.577-1.878 1.157l-.59.363c-.079.047-.159.043-.202-.018-.024-.032-.027-.079-.033-.102l.082-.584.584-4.078.075-.514c.001-.013.002-.03.01-.04.02-.023.041-.059.066-.063.027-.004.068.016.086.039.045.059.082.124.123.188l1.466 2.326zm-3.04-3.547c.023.015.069.03.092.061.037.048.005.093-.033.131l-.51.517-1.487 1.5-.93.944c-.112.114-.202.114-.319.006l-1.088-.994q-.529-.482-1.06-.962c-.047-.043-.085-.09-.08-.157q.01-.133.17-.159l.588-.1zm-5.054.458 1.05-.69 3.382-2.221c.112-.074.183-.059.24.058l.697 1.447.09.188c.024.05.008.091-.024.137a1 1 0 0 0-.103.179.16.16 0 0 1-.13.104l-1.493.259-3.692.64c-.028.004-.055 0-.083 0l-.016-.03c.027-.024.052-.052.082-.071m-3.517 1.103c-.22-.004-.352-.211-.246-.401.089-.161.188-.316.284-.473l.828-1.362a.5.5 0 0 1 .187-.178l2.195-1.22a.5.5 0 0 1 .15-.058.27.27 0 0 1 .15.014.26.26 0 0 1 .116.09.25.25 0 0 1 .026.282c-.11.227-.226.452-.338.677q-.316.62-.628 1.241a.32.32 0 0 1-.225.185.5.5 0 0 0-.245.133.5.5 0 0 0-.139.236.26.26 0 0 1-.067.118.3.3 0 0 1-.12.07l-1.803.618c-.04.014-.083.018-.125.028m3.114-1.32a.2.2 0 0 1 .026-.087l.786-1.661c.163-.346.33-.691.49-1.037a.19.19 0 0 1 .185-.123q.369-.013.736-.03l1.448-.052.51-.026c.121-.005.204.066.206.18.005.07-.042.116-.102.156l-4.12 2.703a.4.4 0 0 1-.066.04c-.053.02-.103-.01-.1-.064m-1.022 1.193-.369.568-1.38 2.126a.3.3 0 0 1-.075.09c-.08.054-.185.016-.223-.08q-.09-.233-.174-.466l-.502-1.362c-.012-.034-.02-.068-.025-.085.001-.092.032-.131.122-.159l.8-.247 1.512-.463.198-.059c.048-.014.095-.034.134.017.035.045.006.083-.018.12m12.24 2.722.012.09c-.007.036-.016.08-.028.122l-.199.691c-.056.2-.22.246-.385.112q-.508-.413-1.018-.823c-.077-.063-.109-.134-.091-.232a.44.44 0 0 0-.034-.292c-.047-.088-.032-.167.028-.245l.83-1.078.169-.22c.056-.074.13-.11.225-.09.099.022.15.087.166.18zM13.45 6.78l-.015-.03c-.02-.044-.028-.094.018-.12a.2.2 0 0 1 .127-.006c.066.02.126.055.188.085l2.521 1.214.448.217c.05.024.09.053.08.113s-.058.073-.113.083l-1.817.314-.059.012c-.017-.011-.05-.023-.07-.046a.6.6 0 0 0-.449-.22c-.067-.002-.102-.041-.127-.095q-.16-.334-.323-.666z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDBC.displayName = 'DBC'
