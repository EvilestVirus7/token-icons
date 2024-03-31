import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPLU = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.95 15.512c.466.562.948 1.143.423 1.796a2.4 2.4 0 0 1-.534.462c-.369.257-.613.426-.505 1.26l-.447.057c-.145-1.104.281-1.398.694-1.684.16-.111.31-.215.438-.375.273-.338.112-.592-.418-1.231a13 13 0 0 1-.308-.382c-.182-.236-.248-.497-.191-.755.06-.269.239-.49.419-.654a1.87 1.87 0 0 1-.847-1.448h.226l.226-.001c0 .041.022.77.797 1.16l.056.027c.261.12.606.202 1.054.21 1.867-.038 1.906-1.34 1.906-1.397l.452.001c0 .005-.002.127-.045.307.216-.008.619-.08.765-.16-.083-.297-.618-1.273-1.109-2.08l.137-.333.05-.014c-.076-.349-.23-1.049-.306-1.51-1.726-.261-2.971-.063-3.7.59a2 2 0 0 0-.66 1.507l-.251.016-.2.017a.36.36 0 0 0-.19-.282q-.135-.062-.306.058a.444.444 0 0 0-.197.494c.072.373.448.783.738.96q.068-.042.09-.052l.065.124c.009.003.02.036.02.036l.02.038.106.199a2 2 0 0 0-.217.14s-.023.027-.03.024c-.161.127-.334.306-.376.497q-.042.19.109.386.15.191.298.369c.466.562.948 1.144.422 1.797-.168.21-.362.344-.533.462-.37.256-.614.425-.504 1.258l-.448.058c-.145-1.104.282-1.399.694-1.685.159-.11.31-.215.439-.374.271-.338.111-.592-.419-1.231q-.151-.18-.308-.382c-.182-.236-.248-.498-.191-.755.055-.253.218-.464.387-.624-.366-.272-.723-.728-.806-1.16a.89.89 0 0 1 .38-.946c.25-.174.519-.209.758-.099l.072.04c.116-.468.369-.892.727-1.215.83-.751 2.196-.99 4.057-.713.417-.525.597-1.305-.119-1.965-.657-.605-1.806-.784-2.595-.034l-.377-.115c-.133-.626-.874-.937-1.523-1.018-.981-.125-2.263.19-2.755 1.177-.656 1.308.187 1.968.223 1.996l-.148.403c-.97-.053-1.623.106-1.94.47-.409.47-.242 1.277-.109 1.926.112.543.201.972-.018 1.227a1.06 1.06 0 0 1-.822.394 1.1 1.1 0 0 1-.495-.116c-.386-.192-.6-.566-.52-.91l.44.102c-.031.136.09.31.284.407.102.052.46.19.77-.168.075-.088-.02-.544-.081-.846-.154-.745-.345-1.671.21-2.31.352-.405.943-.614 1.798-.634-.265-.415-.5-1.138.003-2.14.591-1.182 2.083-1.567 3.218-1.424.86.11 1.512.496 1.79 1.04.959-.678 2.214-.44 2.955.244.588.542.978 1.525.192 2.54.08.567.367 1.811.37 1.824l-.146.24c1.17 1.956 1.061 2.165 1.008 2.268-.11.213-.515.335-.876.384.427.28.84.765.81 1.502-.022.577-.464 1.044-.891 1.495-.573.604-.908 1-.593 1.474l-.377.247c-.527-.795.093-1.45.64-2.028.37-.391.754-.796.77-1.206.032-.82-.672-1.174-.947-1.282-.293.44-.862.877-1.962.918v.004q-.042 0-.083-.003l-.083.003V14.4a3.2 3.2 0 0 1-.985-.176c-.172.128-.376.322-.421.532q-.044.19.108.386.151.193.3.369zM9.699 7.62l.348.287a.423.423 0 0 0-.028.558c.102.136.292.234.46.162.286-.12.329-.184.57-.534q.283-.419.596-.818c.294-.378.633-.577 1.006-.592.596-.022 1.036.449 1.054.47l-.334.301c-.003-.003-.321-.339-.705-.322q-.348.016-.664.417-.303.39-.58.797c-.253.368-.357.52-.763.694a.8.8 0 0 1-.3.06.9.9 0 0 1-.703-.367c-.255-.338-.239-.775.043-1.113m4.926 9.377c.465.562.947 1.144.421 1.796-.168.21-.361.344-.532.463-.37.256-.614.424-.505 1.258l-.45.058c-.143-1.104.283-1.399.695-1.684.16-.111.31-.216.439-.375.272-.338.111-.591-.417-1.231a12 12 0 0 1-.309-.383c-.182-.235-.248-.497-.191-.754.124-.564.778-.921.852-.96l.212.396c-.15.08-.556.354-.623.66-.028.129.008.255.109.386q.15.194.299.37m-4.661-7.13c-1.334-.048-2.03.236-2.072.848-.018.244.003.531.025.836.055.743.116 1.585-.39 2.087-.277.275-.68.41-1.228.41a4 4 0 0 1-.277-.01l.033-.448c.552.04.928-.047 1.152-.27.36-.356.309-1.058.259-1.737a7 7 0 0 1-.026-.9c.043-.617.518-1.338 2.54-1.264zm5.5.764c-.008-.01-.171-.256-.623-.256-.422 0-1.016.409-1.21.566l-.27-.327c.034-.027.821-.661 1.48-.661.705 0 .976.441.987.46l-.184.107zm-.746.411c0-.146.135-.264.301-.264s.302.119.302.264-.136.264-.302.264-.301-.119-.301-.264"
          />
        </>
      ) : (
        <>
          <path
            fill="#0A3ADB"
            d="M12.95 15.512c.466.562.948 1.143.422 1.796a2.4 2.4 0 0 1-.534.462c-.368.257-.613.426-.504 1.26l-.448.057c-.145-1.104.282-1.398.694-1.684.16-.111.31-.215.439-.375.272-.338.111-.592-.418-1.231a13 13 0 0 1-.309-.382c-.181-.236-.248-.497-.19-.755.06-.269.238-.49.418-.654a1.87 1.87 0 0 1-.847-1.448h.226l.226-.001c.001.041.022.77.797 1.16l.056.027c.261.12.606.202 1.054.21 1.868-.038 1.906-1.34 1.907-1.397l.452.001c0 .005-.002.127-.045.307.216-.008.618-.08.764-.16-.083-.297-.617-1.273-1.108-2.08l.136-.333.051-.014a34 34 0 0 1-.306-1.51c-1.727-.261-2.972-.063-3.701.59a2 2 0 0 0-.66 1.507l-.25.016-.201.017a.36.36 0 0 0-.189-.282q-.135-.062-.306.058a.444.444 0 0 0-.198.494c.072.373.449.783.739.96.043-.028.076-.045.089-.052l.066.124c.008.003.02.036.02.036l.02.038.106.199a2 2 0 0 0-.218.14s-.022.027-.03.024c-.16.127-.334.306-.376.497q-.042.19.11.386.15.191.298.369c.466.562.947 1.144.422 1.797-.169.21-.363.344-.533.462-.37.256-.614.425-.505 1.258l-.448.058c-.144-1.104.282-1.399.694-1.685.16-.11.31-.215.44-.374.27-.338.11-.592-.42-1.231q-.15-.18-.308-.382c-.182-.236-.248-.498-.19-.755.055-.253.218-.464.387-.624-.367-.272-.723-.728-.807-1.16a.89.89 0 0 1 .381-.946c.249-.174.518-.209.758-.099l.071.04c.116-.468.37-.892.727-1.215.831-.751 2.197-.99 4.057-.713.417-.525.597-1.305-.118-1.965-.657-.605-1.807-.784-2.595-.034l-.377-.115c-.133-.626-.874-.937-1.523-1.018-.982-.125-2.263.19-2.756 1.177-.656 1.308.187 1.968.223 1.996l-.147.403c-.971-.053-1.623.106-1.94.47-.409.47-.243 1.277-.109 1.926.112.543.2.972-.018 1.227-.249.29-.548.394-.822.394a1.1 1.1 0 0 1-.495-.116c-.386-.192-.6-.566-.52-.91l.44.102c-.032.136.09.31.284.407.102.052.46.19.769-.168.075-.088-.019-.544-.08-.846-.154-.745-.345-1.671.21-2.31.352-.405.943-.614 1.797-.634-.265-.415-.5-1.138.003-2.14.592-1.182 2.083-1.567 3.218-1.424.86.11 1.513.496 1.79 1.04.96-.678 2.214-.44 2.955.244.588.542.979 1.525.192 2.54.081.567.367 1.811.37 1.824l-.146.24c1.17 1.956 1.062 2.165 1.008 2.268-.11.213-.515.335-.875.384.426.28.84.765.81 1.502-.023.577-.465 1.044-.892 1.495-.572.604-.907 1-.592 1.474l-.377.247c-.528-.795.093-1.45.64-2.028.37-.391.753-.796.77-1.206.032-.82-.672-1.174-.947-1.282-.294.44-.863.877-1.963.918v.004q-.04 0-.083-.003l-.082.003V14.4a3.2 3.2 0 0 1-.985-.176c-.173.128-.377.322-.422.532q-.043.19.109.386.15.193.299.369zM9.698 7.62l.348.287a.423.423 0 0 0-.028.558c.101.136.292.234.46.162.286-.12.329-.184.569-.534q.284-.419.596-.818.444-.568 1.006-.592c.596-.022 1.037.449 1.055.47l-.335.301c-.003-.003-.321-.339-.704-.322q-.35.016-.664.417-.304.39-.58.797c-.253.368-.358.52-.764.694a.8.8 0 0 1-.3.06.9.9 0 0 1-.702-.367c-.255-.338-.24-.775.043-1.113m4.925 9.377c.466.562.947 1.144.422 1.796-.169.21-.362.344-.533.463-.37.256-.614.424-.505 1.258l-.449.058c-.144-1.104.283-1.399.695-1.684.16-.111.31-.216.438-.375.273-.338.112-.591-.417-1.231a12 12 0 0 1-.308-.383c-.183-.235-.249-.497-.192-.754.124-.564.778-.921.853-.96l.211.396c-.15.08-.556.354-.622.66-.028.129.007.255.108.386q.15.194.299.37m-4.66-7.13c-1.334-.048-2.03.236-2.073.848a6 6 0 0 0 .026.836c.054.743.116 1.585-.391 2.087-.277.275-.68.41-1.227.41a4 4 0 0 1-.278-.01l.033-.448c.552.04.929-.047 1.152-.27.361-.356.31-1.058.26-1.737a6.5 6.5 0 0 1-.026-.9c.043-.617.518-1.338 2.54-1.264zm5.5.764c-.008-.01-.171-.256-.623-.256-.422 0-1.017.409-1.21.566l-.27-.327c.033-.027.82-.661 1.48-.661.704 0 .976.441.986.46l-.183.107zm-.747.411c0-.146.135-.264.302-.264s.301.119.301.264-.135.264-.301.264c-.167 0-.302-.119-.302-.264"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPLU.displayName = 'PLU'
