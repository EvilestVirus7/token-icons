import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconRMRK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.628 12.857h-.24c-.094-.214-.235-.368-.462-.428.21-.052.522-.223.621-.429h.24a1.37 1.37 0 0 0-.159-1.299c-.214-.257-.578-.415-1.14-.415H4.714V12h-.283v.857h.283v.857h.857v-.857h.63c.275 0 .373.232.54.617l.103.236h1.127a14 14 0 0 1-.227-.566zm-2.057-1.714h.857c.185 0 .356.244.356.428 0 .185-.171.429-.36.429h-.853zm9.905 1.714h.24l.141.343c.064.172.141.36.206.51H14.93l-.103-.236c-.162-.385-.261-.617-.535-.617h-.579v.857h-.857v-.857h-.283V12h.283v-1.714h1.719c.741 0 1.384.381 1.371 1.165 0 .112-.026.446-.069.549h-.244c-.141.291-.33.356-.621.429.231.06.373.214.463.428m-.96-1.714h-.802V12h.801c.185 0 .356-.244.356-.428 0-.185-.171-.43-.356-.43m4.945 1.787-.253-.073.622.857h-1.213l-.609-.857h.249l-.33-.441-.433.441h-.351v.857h-.858v-.857h.262V12h-.262v-1.714h.858v1.354l1.337-1.354h1.316l-1.453 1.5.12.214h.252zm-8.914-1.774.386-.87h1.264v1.564H12v1.007h.197v.857h-.909v-.857h-.197V11.85h-.141l-.433 1.007h.24l-.33.857h-.377l-.343-.853h-.231l-.416-1.007H9v1.003h.193v.853h-.909v-.853h-.193V11.85h.193v-1.564h1.273l.386.87.291.694h.026zm-1.35.458v.236h.107zm2.1 0-.107.236h.107z"
          />
          <path
            fill="currentColor"
            d="M21.201 12V9.356a.355.355 0 0 0-.36-.356H3.356A.36.36 0 0 0 3 9.356V12h-.257v.861H3v1.783a.355.355 0 0 0 .36.356h17.48a.36.36 0 0 0 .36-.356v-1.787H21V12zm-.686.853v1.461H3.72v-1.457h-.292V12h.288V9.677h16.8V12h-.198v.857h.202v-.004z"
          />
        </>
      ) : (
        <>
          <path
            fill="#E92E88"
            d="M7.629 12.857h-.24c-.094-.214-.236-.368-.463-.428.21-.052.523-.223.621-.429h.24a1.37 1.37 0 0 0-.158-1.299c-.214-.257-.579-.415-1.14-.415H4.715V12h-.283v.857h.283v.857h.857v-.857h.63c.274 0 .373.232.54.617l.103.236h1.127a14 14 0 0 1-.227-.566zm-2.057-1.714h.857c.184 0 .356.244.356.428 0 .185-.172.429-.36.429h-.853zm9.904 1.714h.24l.141.343c.065.172.142.36.206.51h-1.131l-.103-.236c-.163-.385-.262-.617-.536-.617h-.578v.857h-.858v-.857h-.282V12h.282v-1.714h1.719c.741 0 1.384.381 1.371 1.165 0 .112-.025.446-.068.549h-.244c-.142.291-.33.356-.622.429.232.06.373.214.463.428m-.96-1.714h-.801V12h.801c.184 0 .356-.244.356-.428 0-.185-.172-.43-.356-.43m4.946 1.787-.253-.073.621.857h-1.213l-.608-.857h.248l-.33-.441-.432.441h-.352v.857h-.857v-.857h.261V12h-.261v-1.714h.857v1.354l1.337-1.354h1.316l-1.453 1.5.12.214h.253zm-8.914-1.774.385-.87h1.264v1.564H12v1.007h.197v.857h-.908v-.857h-.197V11.85h-.142l-.432 1.007h.24l-.33.857h-.378l-.343-.853h-.231l-.416-1.007H9v1.003h.193v.853h-.908v-.853h-.193V11.85h.193v-1.564h1.272l.386.87.292.694h.025zm-1.35.458v.236h.107zm2.1 0-.108.236h.107z"
          />
          <path
            fill="#E92E88"
            d="M21.202 12V9.356a.356.356 0 0 0-.36-.356H3.356A.36.36 0 0 0 3 9.356V12h-.257v.861H3v1.783a.355.355 0 0 0 .36.356h17.482a.36.36 0 0 0 .36-.356v-1.787H21V12zm-.686.853v1.461H3.72v-1.457h-.29V12h.287V9.677h16.8V12h-.197v.857h.201v-.004z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRMRK.displayName = 'RMRK'
