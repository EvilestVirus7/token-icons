import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSCNSOL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 8.066q.291-.001.557-.086a2.5 2.5 0 0 1 1.723.248c.522.288.915.763 1.101 1.329.039.163.103.326.193.476a1.81 1.81 0 0 0 2.4.613 1.63 1.63 0 0 0 .643-2.29 1.8 1.8 0 0 0-1.967-.783c-.618.16-1.274.08-1.834-.227a2.37 2.37 0 0 1-1.119-1.402A1.75 1.75 0 0 0 12 4.714a1.75 1.75 0 0 0-1.697 1.23 2.24 2.24 0 0 1-1.119 1.402 2.48 2.48 0 0 1-1.834.227 1.8 1.8 0 0 0-1.971.784 1.633 1.633 0 0 0 .642 2.289c.429.235.922.278 1.363.158a2.5 2.5 0 0 1 1.8.236c.527.294.921.779 1.102 1.354A1.744 1.744 0 0 0 12 13.675c.969 0 1.757-.75 1.757-1.675A1.72 1.72 0 0 0 12 10.324a2 2 0 0 0-.506.069 2.5 2.5 0 0 1-1.774-.236 2.36 2.36 0 0 1-.823-.75.46.46 0 0 1 .009-.437 2.3 2.3 0 0 1 .814-.737 2.48 2.48 0 0 1 1.723-.253c.171.056.36.086.557.086m6.621 7.577a1.63 1.63 0 0 0-.642-2.289 1.81 1.81 0 0 0-2.4.613 1.5 1.5 0 0 0-.176.399 2.24 2.24 0 0 1-1.123 1.4 2.48 2.48 0 0 1-1.774.237 1.84 1.84 0 0 0-1.012 0 2.5 2.5 0 0 1-1.774-.236 2.37 2.37 0 0 1-.986-1.029 1.6 1.6 0 0 0-.223-.664 1.813 1.813 0 0 0-2.408-.621 1.643 1.643 0 0 0-.652 2.297 1.813 1.813 0 0 0 2.456.596c.445-.015.886.088 1.277.3.528.296.923.784 1.102 1.362A1.744 1.744 0 0 0 12 19.285a1.744 1.744 0 0 0 1.71-1.28 2.25 2.25 0 0 1 1.106-1.355 2.48 2.48 0 0 1 1.787-.236 1.8 1.8 0 0 0 2.018-.771"
          />
        </>
      ) : (
        <>
          <path
            fill="#F24F83"
            d="M12 8.066c.193 0 .382-.03.558-.086a2.5 2.5 0 0 1 1.723.248 2.36 2.36 0 0 1 1.1 1.329c.04.163.104.326.194.476a1.81 1.81 0 0 0 2.4.613 1.63 1.63 0 0 0 .643-2.29 1.8 1.8 0 0 0-1.967-.783 2.5 2.5 0 0 1-1.835-.227 2.37 2.37 0 0 1-1.118-1.402A1.75 1.75 0 0 0 12 4.714a1.75 1.75 0 0 0-1.698 1.23 2.24 2.24 0 0 1-1.118 1.402c-.56.309-1.217.39-1.835.227a1.8 1.8 0 0 0-1.97.784 1.633 1.633 0 0 0 .642 2.289c.428.235.921.278 1.363.158a2.5 2.5 0 0 1 1.8.236c.526.294.92.779 1.101 1.354A1.744 1.744 0 0 0 12 13.675c.968 0 1.757-.75 1.757-1.675A1.72 1.72 0 0 0 12 10.324a2 2 0 0 0-.506.069c-.6.142-1.232.058-1.775-.236a2.36 2.36 0 0 1-.822-.75.46.46 0 0 1 .008-.437 2.3 2.3 0 0 1 .814-.737 2.48 2.48 0 0 1 1.723-.253q.26.085.558.086m6.622 7.577a1.633 1.633 0 0 0-.643-2.289 1.81 1.81 0 0 0-2.4.613 1.5 1.5 0 0 0-.176.399 2.24 2.24 0 0 1-1.123 1.4 2.48 2.48 0 0 1-1.774.237 1.84 1.84 0 0 0-1.011 0c-.6.142-1.232.058-1.775-.236a2.37 2.37 0 0 1-.985-1.029 1.6 1.6 0 0 0-.223-.664 1.813 1.813 0 0 0-2.409-.621 1.643 1.643 0 0 0-.651 2.297 1.813 1.813 0 0 0 2.456.596c.444-.015.885.088 1.277.3.528.296.922.784 1.101 1.362a1.744 1.744 0 0 0 1.715 1.277 1.744 1.744 0 0 0 1.71-1.28 2.25 2.25 0 0 1 1.105-1.355 2.48 2.48 0 0 1 1.787-.236 1.8 1.8 0 0 0 2.019-.771"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSCNSOL.displayName = 'SCNSOL'
