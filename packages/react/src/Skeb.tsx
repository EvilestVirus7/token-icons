import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSKEB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m4.757 9.973 1.157 1.17.763-.759L5.51 9.22l-.763.758zm2.987-2.987L8.91 8.15l-.767.759-1.166-1.166.763-.758zm2.229-2.229 1.165 1.166-.758.758-1.166-1.165zm2.61 14.717 6.891-6.891a.825.825 0 0 0 0-1.166l-6.891-6.891a.824.824 0 0 0-1.166 0l-.381.381L12.05 5.92l-1.67 1.67-1.016-1.011-.557.557 1.016 1.011L8.15 9.82 7.136 8.807l-.558.557 1.016 1.016-1.671 1.671-1.016-1.015-.381.385a.823.823 0 0 0 0 1.162l6.891 6.891a.825.825 0 0 0 1.166 0m1.984-6.248c0-.493-.124-.896-.373-1.2a2.56 2.56 0 0 0-1.191-.737 6 6 0 0 0-.408-.129 2.3 2.3 0 0 1-.372-.146.9.9 0 0 1-.27-.193.4.4 0 0 1-.099-.282c0-.172.064-.3.202-.408a.84.84 0 0 1 .522-.154c.172 0 .343.034.527.107.18.073.36.18.545.33l.66-1.315a4.35 4.35 0 0 0-1.985-.528 2.6 2.6 0 0 0-.917.155 1.95 1.95 0 0 0-1.135 1.105 2.3 2.3 0 0 0-.155.879q-.001.483.146.793c.099.214.232.386.39.523.163.137.343.248.553.33q.309.128.63.231l.463.172c.128.051.227.107.308.167q.117.092.172.197a.7.7 0 0 1 .047.257.6.6 0 0 1-.197.429q-.2.191-.61.191c-.236 0-.471-.055-.716-.167a2.9 2.9 0 0 1-.737-.497l-.711 1.359c.65.475 1.435.732 2.241.733.39 0 .742-.056 1.046-.159q.464-.16.78-.45.32-.284.484-.69.162-.407.163-.904z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#30B396"
            d="m4.757 9.973 1.158 1.17.762-.759L5.512 9.22l-.763.758zm2.988-2.987L8.91 8.15l-.767.759-1.166-1.166.763-.758zm2.228-2.229 1.166 1.166-.759.758-1.165-1.165zm2.61 14.717 6.892-6.891a.825.825 0 0 0 0-1.166l-6.892-6.891a.824.824 0 0 0-1.166 0l-.381.381 1.016 1.012L10.38 7.59 9.365 6.579l-.558.557 1.016 1.011L8.152 9.82 7.136 8.807l-.557.557 1.016 1.016-1.672 1.671-1.016-1.015-.381.385a.823.823 0 0 0 0 1.162l6.891 6.891a.825.825 0 0 0 1.166 0m1.984-6.248c0-.493-.124-.896-.372-1.2a2.56 2.56 0 0 0-1.192-.737 6 6 0 0 0-.407-.129 2.3 2.3 0 0 1-.373-.146.9.9 0 0 1-.27-.193.4.4 0 0 1-.098-.282c0-.172.064-.3.201-.408a.84.84 0 0 1 .523-.154c.171 0 .343.034.527.107.18.073.36.18.544.33l.66-1.315a4.35 4.35 0 0 0-1.984-.528 2.6 2.6 0 0 0-.917.155 1.95 1.95 0 0 0-1.136 1.105 2.3 2.3 0 0 0-.154.879q-.001.483.146.793c.098.214.231.386.39.523.162.137.342.248.552.33q.309.128.63.231l.463.172c.129.051.227.107.309.167.077.06.137.128.171.197q.046.109.047.257-.002.237-.197.429-.198.192-.608.192-.352 0-.716-.167a2.9 2.9 0 0 1-.737-.497l-.712 1.359a3.8 3.8 0 0 0 2.242.733c.39 0 .741-.056 1.046-.159q.463-.16.78-.45c.214-.189.372-.42.484-.69q.162-.407.163-.904z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSKEB.displayName = 'SKEB'
