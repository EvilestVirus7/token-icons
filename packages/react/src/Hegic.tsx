import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconHEGIC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M2.786 9.857c.12 0 .214.111.214.227v1.702h2.57V10.07a.215.215 0 0 1 .429 0v3.849c0 .116-.086.223-.206.223a.23.23 0 0 1-.223-.223v-1.706H3v1.706c0 .116-.094.223-.214.223s-.215-.107-.215-.223v-3.836c0-.116.095-.227.215-.227m10.825 0h-1.513a1.07 1.07 0 0 0-.587.202c-.205.15-.368.402-.368.767v2.43a.93.93 0 0 0 .158.548c.142.197.373.339.716.339h1.689c.141-.005.351-.056.531-.184a.84.84 0 0 0 .334-.7v-.916a.343.343 0 0 0-.343-.343h-.805a.203.203 0 0 0-.21.201c0 .12.094.227.214.227h.724v.832a.4.4 0 0 1-.163.351.6.6 0 0 1-.3.103h-1.671c-.214 0-.317-.081-.373-.158a.5.5 0 0 1-.081-.283V10.82c0-.214.09-.342.193-.415a.66.66 0 0 1 .351-.12h1.504c.232 0 .356.09.429.193a.63.63 0 0 1 .111.342c0 .12.095.215.21.215a.214.214 0 0 0 .21-.215c0-.158-.043-.394-.188-.595a.9.9 0 0 0-.772-.369m-6.325.33c0-.184.137-.33.325-.33h2.246a.215.215 0 0 1 .152.366.2.2 0 0 1-.152.063H7.714v1.5h1.509a.214.214 0 0 1 0 .428H7.714v1.5h2.143a.215.215 0 0 1 .152.366.2.2 0 0 1-.152.063H7.611a.326.326 0 0 1-.325-.335zm9.214-.33c.12 0 .214.094.214.214v3.862a.214.214 0 0 1-.428 0v-3.866a.21.21 0 0 1 .214-.21m2.456 0h1.512c.369 0 .618.159.772.369.141.201.188.437.188.6a.214.214 0 0 1-.214.214.215.215 0 0 1-.206-.214.6.6 0 0 0-.111-.343c-.073-.107-.197-.197-.429-.197h-1.504a.66.66 0 0 0-.351.12c-.103.077-.185.201-.185.42v2.442c0 .078.009.193.073.288.056.077.159.158.373.158h1.59a.57.57 0 0 0 .3-.103c.086-.064.159-.171.159-.351v-.111a.215.215 0 0 1 .302-.237.214.214 0 0 1 .118.236v.112c0 .33-.146.557-.335.699-.18.128-.385.18-.531.184h-1.603a.832.832 0 0 1-.874-.887v-2.43c0-.369.163-.617.368-.768a1.07 1.07 0 0 1 .583-.201z"
          />
        </>
      ) : (
        <>
          <path
            fill="#36FEF5"
            d="M2.786 9.857c.12 0 .214.111.214.227v1.702h2.57V10.07a.215.215 0 0 1 .429 0v3.849c0 .116-.086.223-.206.223a.23.23 0 0 1-.223-.223v-1.706H3v1.706c0 .116-.094.223-.214.223s-.215-.107-.215-.223v-3.836c0-.116.095-.227.215-.227m10.825 0h-1.513a1.07 1.07 0 0 0-.587.202c-.205.15-.368.402-.368.767v2.43a.93.93 0 0 0 .158.548c.142.197.373.339.716.339h1.689c.141-.005.351-.056.531-.184a.84.84 0 0 0 .334-.7v-.916a.343.343 0 0 0-.343-.343h-.805a.203.203 0 0 0-.21.201c0 .12.094.227.214.227h.724v.832a.4.4 0 0 1-.163.351.6.6 0 0 1-.3.103h-1.671c-.214 0-.317-.081-.373-.158a.5.5 0 0 1-.081-.283V10.82c0-.214.09-.342.193-.415a.66.66 0 0 1 .351-.12h1.504c.232 0 .356.09.429.193a.63.63 0 0 1 .111.342c0 .12.095.215.21.215a.214.214 0 0 0 .21-.215c0-.158-.043-.394-.188-.595a.9.9 0 0 0-.772-.369m-6.325.33c0-.184.137-.33.325-.33h2.246a.215.215 0 0 1 .152.366.2.2 0 0 1-.152.063H7.714v1.5h1.509a.214.214 0 0 1 0 .428H7.714v1.5h2.143a.215.215 0 0 1 .152.366.2.2 0 0 1-.152.063H7.611a.326.326 0 0 1-.325-.335zm9.214-.33c.12 0 .214.094.214.214v3.862a.214.214 0 0 1-.428 0v-3.866a.21.21 0 0 1 .214-.21m2.456 0h1.512c.369 0 .618.159.772.369.141.201.188.437.188.6a.214.214 0 0 1-.214.214.215.215 0 0 1-.206-.214.6.6 0 0 0-.111-.343c-.073-.107-.197-.197-.429-.197h-1.504a.66.66 0 0 0-.351.12c-.103.077-.185.201-.185.42v2.442c0 .078.009.193.073.288.056.077.159.158.373.158h1.59a.57.57 0 0 0 .3-.103c.086-.064.159-.171.159-.351v-.111a.215.215 0 0 1 .302-.237.214.214 0 0 1 .118.236v.112c0 .33-.146.557-.335.699-.18.128-.385.18-.531.184h-1.603a.832.832 0 0 1-.874-.887v-2.43c0-.369.163-.617.368-.768a1.07 1.07 0 0 1 .583-.201z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHEGIC.displayName = 'HEGIC'
