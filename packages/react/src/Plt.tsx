import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPLT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 4.716 19.286 12 12 19.287 4.713 12zm.043.602L18.686 12l-6.643 6.604L5.315 12z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m10.348 16.376.987.965.34-.373-.626-.623.953-.957.94.987-.606.593.377.373.92-.966-1.63-1.69zm2.08-3.089-.435.429-.422-.429zm.221-5.208-.992.975.335.359.657-.69.33.33-.611.649.334.3.601-.653 1.355 1.334.635-.616.99.951.346-.335-1.336-1.334-.635.654zm-5.59 3-.321.331.927.98 1.375-1.362-.337-.353-1.038 1.007zm7.554.279-.324-.329-.981.924 1.332 1.403.354-.336-.986-1.059z"
          />
          <path
            fill="currentColor"
            d="m16.886 11.094.3.351-.987.918-1.304-1.412.367-.346 1.001 1.065z"
          />
          <path
            fill="currentColor"
            d="m16.896 12.452.3.35-.987.917-1.57-1.665.385-.348 1.23 1.308zM9.43 11.426l.337-.315.945.961-1.387 1.35-.34-.35 1.026-1.019z"
          />
          <path
            fill="currentColor"
            d="m7.059 12.406-.321.33.927.98 1.687-1.65-.337-.354-1.35 1.297zm4.592-6.011.36-.345.362.345-.361.345zm-5.62 5.607.361-.345.361.345-.36.344zm11.201 0 .361-.345.361.344-.36.345zm-5.581 5.668.36-.345.361.345-.36.345zm0-1.311.36-.345.361.344-.36.345zm-.335-9.619L8.999 9.021l.313.35 2.004-2.006.346.332-2.243 2.318-.73-.644-1.3 1.324.301.324.999-1.004.73.68 1.258-1.324.639.644.346-.368-.602-.626 1.587-1.656 1.988 2.006.31-.35-2.298-2.28-.675.625zm-1.276 9.277-.66-.657.316-.337.344.337.976-.994-.336-.335.336-.349.678.684zm3.889 0 .66-.657-.316-.337-.344.337-.977-.994.337-.335-.337-.349-.678.684z"
          />
          <path
            fill="currentColor"
            d="M11.143 10.286h-.545l-.312.428h.857zm1.715 0h.545l.312.428h-.857z"
          />
          <path
            fill="currentColor"
            d="M11.752 10.286v.628l-.725.785.308.28-2.295 2.345-.278-.31.313-.333-.34-.339-.674.672.979 1.036 2.233-2.193h1.477l2.214 2.193L16 14.014l-.666-.677-.347.332.302.345-.326.31-2.305-2.344.336-.281-.73-.785v-.628zM12.007 12l-.436.429h.857zM12 11.311l-.361.345.36.344.362-.344z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#0A3957"
            d="M12 4.716 19.286 12 12 19.287 4.713 12zm.043.602L18.686 12l-6.643 6.604L5.315 12z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#0A3957"
            d="m10.348 16.376.987.965.34-.373-.626-.623.953-.957.94.987-.606.593.377.373.92-.966-1.63-1.69zm2.08-3.089-.435.429-.422-.429zm.221-5.208-.992.975.335.359.657-.69.33.33-.611.649.334.3.601-.653 1.355 1.334.635-.616.99.951.346-.335-1.336-1.334-.635.654zm-5.59 3-.321.331.927.98 1.375-1.362-.337-.353-1.038 1.007zm7.554.279-.324-.329-.981.924 1.332 1.403.354-.336-.986-1.059z"
          />
          <path
            fill="#0A3957"
            d="m16.886 11.094.3.351-.987.918-1.304-1.412.367-.346 1.001 1.065z"
          />
          <path
            fill="#0A3957"
            d="m16.896 12.452.3.35-.987.917-1.57-1.665.385-.348 1.23 1.308zM9.43 11.426l.337-.315.945.961-1.387 1.35-.34-.35 1.026-1.019z"
          />
          <path
            fill="#0A3957"
            d="m7.059 12.406-.321.33.927.98 1.687-1.65-.337-.354-1.35 1.297zm4.592-6.011.36-.345.362.345-.361.345zm-5.62 5.607.361-.345.361.345-.36.344zm11.201 0 .361-.345.361.344-.36.345zm-5.581 5.668.36-.345.361.345-.36.345zm0-1.311.36-.345.361.344-.36.345zm-.335-9.619L8.999 9.021l.313.35 2.004-2.006.346.332-2.243 2.318-.73-.644-1.3 1.324.301.324.999-1.004.73.68 1.258-1.324.639.644.346-.368-.602-.626 1.587-1.656 1.988 2.006.31-.35-2.298-2.28-.675.625zm-1.276 9.277-.66-.657.316-.337.344.337.976-.994-.336-.335.336-.349.678.684zm3.889 0 .66-.657-.316-.337-.344.337-.977-.994.337-.335-.337-.349-.678.684z"
          />
          <path
            fill="#0A3957"
            d="M11.143 10.286h-.545l-.312.428h.857zm1.715 0h.545l.312.428h-.857z"
          />
          <path
            fill="#0A3957"
            d="M11.752 10.286v.628l-.725.785.308.28-2.295 2.345-.278-.31.313-.333-.34-.339-.674.672.979 1.036 2.233-2.193h1.477l2.214 2.193L16 14.014l-.666-.677-.347.332.302.345-.326.31-2.305-2.344.336-.281-.73-.785v-.628zM12.007 12l-.436.429h.857zM12 11.311l-.361.345.36.344.362-.344z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPLT.displayName = 'PLT'
