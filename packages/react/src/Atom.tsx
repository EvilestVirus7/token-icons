import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconATOM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.06 8.44a23 23 0 0 0-.315-2.098v-.001c-.18-.867-.401-1.638-.686-2.191-.276-.547-.623-.91-1.06-.91-.434 0-.787.362-1.064.91-.278.551-.505 1.317-.68 2.193-.13.654-.234 1.368-.312 2.098a31 31 0 0 0-1.968-.777l-.003-.002c-.842-.284-1.618-.475-2.238-.51h-.002c-.61-.027-1.1.09-1.318.464l-.001.002c-.217.38-.076.865.256 1.378L4.67 9l.003.005a9 9 0 0 0 1.556 1.678A31 31 0 0 0 7.89 12q-.852.63-1.66 1.318l-.003.002c-.668.586-1.216 1.165-1.557 1.682l-.001.002c-.331.514-.473.998-.255 1.378l.143-.082-.142.083c.218.375.713.492 1.318.464h.011a9 9 0 0 0 2.233-.51 31 31 0 0 0 1.968-.778q.119 1.052.308 2.095l.002.006c.18.866.401 1.638.686 2.19.276.548.623.91 1.059.91s.788-.361 1.065-.91c.278-.55.505-1.317.68-2.193.13-.654.233-1.368.312-2.098q.97.422 1.967.777c.72.265 1.47.436 2.232.511h.012c.61.028 1.099-.09 1.317-.463l-.185-.108.186.105c.218-.38.076-.864-.255-1.377l-.003-.005-.003-.004a9 9 0 0 0-1.555-1.678A31 31 0 0 0 16.11 12q.852-.63 1.661-1.318l.003-.002c.668-.586 1.216-1.165 1.556-1.682l.002-.002c.331-.513.472-.998.255-1.378v-.002c-.22-.374-.714-.491-1.319-.464h-.005l-.006.001a9 9 0 0 0-2.233.511q-.997.356-1.965.777M12 3.67c-.172 0-.417.149-.682.674-.253.502-.471 1.224-.643 2.083a24 24 0 0 0-.32 2.198Q11.189 9 12 9.428q.811-.427 1.646-.805a23 23 0 0 0-.322-2.195c-.177-.858-.39-1.583-.648-2.083v-.002c-.267-.527-.506-.674-.677-.674m1.69 5.406q-.623.286-1.232.598.336.185.669.378.33.189.655.387a34 34 0 0 0-.092-1.364m-2.147.599a31 31 0 0 0-1.231-.598c-.04.456-.072.914-.093 1.362q.324-.197.654-.386.333-.194.67-.378m-1.345 1.28q.44-.274.889-.531.452-.263.913-.51.46.247.912.51.45.258.89.53a32 32 0 0 1 0 2.094q-.44.273-.889.53-.451.264-.913.51a30 30 0 0 1-.913-.509q-.45-.258-.893-.533-.015-.522-.014-1.044c0-.335.006-.687.018-1.047m-.42-.243c.023-.594.063-1.21.12-1.821a31 31 0 0 0-2.065-.821c-.828-.28-1.56-.457-2.121-.488-.593-.027-.842.105-.927.251-.086.152-.076.436.241.928a8.5 8.5 0 0 0 1.479 1.595h.002q.848.723 1.747 1.38a31 31 0 0 1 1.524-1.024M8.62 12q.561-.399 1.14-.771a31 31 0 0 0-.003 1.54A30 30 0 0 1 8.621 12m-.367.264a31 31 0 0 0-1.746 1.379c-.654.574-1.17 1.123-1.48 1.593-.318.494-.33.78-.243.932.086.145.339.277.922.251a8.6 8.6 0 0 0 2.123-.486l.002-.001a31 31 0 0 0 2.066-.822q-.089-.909-.124-1.824a31 31 0 0 1-1.52-1.022m2.102 3.111q.12 1.105.319 2.199c.178.857.39 1.581.647 2.08l.001.002c.266.527.506.675.677.675s.417-.15.682-.675c.253-.501.471-1.223.643-2.083a24 24 0 0 0 .32-2.198A31 31 0 0 1 12 14.572q-.81.427-1.644.804m1.187-1.049q-.61.313-1.232.599-.064-.682-.097-1.366.327.199.659.389.333.194.67.378m.914 0q.61.313 1.231.598c.04-.456.072-.914.093-1.362q-.324.197-.653.386a32 32 0 0 1-.67.378m1.765-1.037c-.023.594-.063 1.21-.12 1.821a31 31 0 0 0 2.066.822h.002a8.6 8.6 0 0 0 2.122.487c.59.026.837-.106.923-.252.086-.151.075-.435-.241-.928a8.5 8.5 0 0 0-1.48-1.594l-.001-.001a31 31 0 0 0-1.747-1.38 31 31 0 0 1-1.524 1.025m1.524-1.554a31 31 0 0 0-1.523-1.025 35 35 0 0 0-.12-1.822 31 31 0 0 1 2.065-.821l.003-.001a8.6 8.6 0 0 1 2.122-.487c.584-.025.836.106.922.252.087.152.075.437-.243.931-.31.47-.825 1.02-1.48 1.594q-.848.72-1.746 1.379M15.38 12q-.561.399-1.14.771a31 31 0 0 0 0-1.541q.579.372 1.14.77"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12 13.085a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17m-6.24-2.17a.814.814 0 1 0 0-1.628.814.814 0 0 0 0 1.628m4.884 7.596a.815.815 0 1 0 .052-1.629.815.815 0 0 0-.052 1.629m5.425-9.766a.814.814 0 1 0 0-1.629.814.814 0 0 0 0 1.629"
          />
        </>
      ) : (
        <>
          <path
            fill="#2C3154"
            d="M12 17.426a5.426 5.426 0 1 0 0-10.852 5.426 5.426 0 0 0 0 10.852"
          />
          <path
            fill="#A3A9D0"
            d="M14.059 8.44a23 23 0 0 0-.314-2.098v-.001c-.18-.867-.402-1.638-.687-2.191-.276-.547-.622-.91-1.059-.91-.435 0-.787.362-1.065.91-.278.551-.505 1.317-.68 2.193-.13.654-.233 1.368-.311 2.098a31 31 0 0 0-1.968-.777l-.003-.002c-.843-.284-1.618-.475-2.238-.51H5.73c-.61-.027-1.099.09-1.317.464l-.002.002c-.217.38-.075.865.256 1.378L4.671 9l.003.005a9 9 0 0 0 1.555 1.678A31 31 0 0 0 7.89 12q-.851.63-1.66 1.318l-.003.002c-.668.586-1.216 1.165-1.556 1.682l-.002.002c-.33.514-.472.998-.255 1.378l.143-.082-.142.083c.219.375.713.492 1.318.464h.011a9 9 0 0 0 2.234-.51 31 31 0 0 0 1.967-.778q.12 1.052.309 2.095l.001.006c.18.866.402 1.638.686 2.19.277.548.623.91 1.06.91.435 0 .787-.361 1.064-.91.278-.55.506-1.317.68-2.193.13-.654.234-1.368.312-2.098q.97.422 1.967.777c.72.265 1.47.436 2.233.511h.011c.61.028 1.1-.09 1.318-.463l-.185-.108.186.105c.217-.38.076-.864-.256-1.377l-.002-.005-.003-.004a9 9 0 0 0-1.556-1.678A31 31 0 0 0 16.11 12q.854-.63 1.662-1.318l.002-.002c.669-.586 1.216-1.165 1.557-1.682l.001-.002c.332-.513.473-.998.256-1.378l-.001-.002c-.219-.374-.713-.491-1.318-.464h-.006l-.005.001a9 9 0 0 0-2.234.511q-.996.356-1.964.777M12 3.67c-.172 0-.417.149-.682.674-.253.502-.47 1.224-.643 2.083a24 24 0 0 0-.32 2.198Q11.19 9 12 9.428q.812-.427 1.647-.805a23 23 0 0 0-.322-2.195c-.178-.858-.39-1.583-.648-2.083v-.002c-.267-.527-.506-.674-.678-.674m1.69 5.406q-.621.286-1.232.598.337.185.67.378.33.189.655.387a34 34 0 0 0-.092-1.364m-2.147.599a31 31 0 0 0-1.23-.598c-.041.456-.072.914-.094 1.362q.325-.197.655-.386.332-.194.67-.378m-1.345 1.28q.44-.274.89-.531.452-.263.912-.51.46.247.913.51.45.258.89.53a32 32 0 0 1 0 2.094q-.44.273-.89.53-.451.264-.913.51a30 30 0 0 1-.912-.509q-.451-.258-.893-.533-.017-.522-.015-1.044c0-.335.006-.687.018-1.047m-.42-.243c.024-.594.064-1.21.12-1.821a31 31 0 0 0-2.064-.821c-.828-.28-1.56-.457-2.122-.488-.592-.027-.841.105-.927.251-.086.152-.075.436.242.928.422.593.92 1.129 1.478 1.595h.002q.85.723 1.747 1.38a31 31 0 0 1 1.524-1.024M8.621 12q.561-.399 1.14-.771a31 31 0 0 0-.003 1.54A30 30 0 0 1 8.62 12m-.367.264a31 31 0 0 0-1.746 1.379c-.654.574-1.17 1.123-1.48 1.593-.319.494-.33.78-.243.932.085.145.338.277.922.251a8.6 8.6 0 0 0 2.122-.486l.002-.001a31 31 0 0 0 2.066-.822q-.089-.909-.124-1.824a31 31 0 0 1-1.52-1.022m2.101 3.111q.12 1.105.32 2.199c.177.857.39 1.581.646 2.08l.002.002c.266.527.505.675.677.675s.416-.15.682-.675c.252-.501.47-1.223.643-2.083a24 24 0 0 0 .32-2.198A31 31 0 0 1 12 14.572q-.81.427-1.645.804m1.188-1.049q-.61.313-1.233.599-.063-.682-.096-1.366.327.199.658.389.334.194.67.378m.914 0q.609.313 1.23.598c.041-.456.072-.914.094-1.362q-.324.197-.654.386a32 32 0 0 1-.67.378m1.765-1.037c-.024.594-.064 1.21-.12 1.821a31 31 0 0 0 2.066.822h.002a8.6 8.6 0 0 0 2.122.487c.589.026.837-.106.922-.252.086-.151.076-.435-.241-.928a8.5 8.5 0 0 0-1.479-1.594l-.002-.001a31 31 0 0 0-1.747-1.38Q15 12.8 14.223 13.29m1.524-1.554a31 31 0 0 0-1.523-1.025 35 35 0 0 0-.12-1.822 31 31 0 0 1 2.065-.821l.002-.001a8.6 8.6 0 0 1 2.122-.487c.584-.025.837.106.923.252.086.152.075.437-.244.931-.31.47-.825 1.02-1.48 1.594q-.848.72-1.745 1.379m-.368.264q-.561.399-1.14.771a31 31 0 0 0 .001-1.541q.578.372 1.14.77"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#F0F3FA"
            d="M12 13.085a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17m-6.24-2.17a.814.814 0 1 0 0-1.628.814.814 0 0 0 0 1.628m4.883 7.596a.815.815 0 1 0 .053-1.629.815.815 0 0 0-.053 1.629m5.426-9.766a.814.814 0 1 0 0-1.628.814.814 0 0 0 0 1.628"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconATOM.displayName = 'ATOM'
