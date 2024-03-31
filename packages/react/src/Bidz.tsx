import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBIDZ = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.206 8.786-1.2 1.213q-.366.238-.609-.026a.354.354 0 0 1 0-.472l1.286-1.268c.116-.107.236-.124.369-.043q.34.194.154.6z"
          />
          <path
            fill="currentColor"
            d="m12.206 8.786 1.714 1.701-1.213 1.204L11.006 10l1.2-1.209zm.501 2.906 1.213-1.205c.489-.18.87.202.459.626q-.675.698-1.183 1.178a.31.31 0 0 1-.257.086q-.547-.086-.232-.686m-4.35 2.139 3.099-2.923a.034.034 0 0 1 .047 0l.343.343a.034.034 0 0 1 0 .047L8.927 14.4a.03.03 0 0 1-.02.012.03.03 0 0 1-.023-.003l-.008-.009-.515-.523a.04.04 0 0 1-.008-.038s0-.009.008-.009z"
          />
          <path
            fill="currentColor"
            d="M9.236 18.742a7.287 7.287 0 1 0 5.528-13.484 7.287 7.287 0 0 0-5.528 13.484m7.954-1.93a7.077 7.077 0 0 1-12.265-4.54 7.078 7.078 0 0 1 14.145-.543 7.08 7.08 0 0 1-1.88 5.08zm-1.269-8.93a5.7 5.7 0 0 0-1.5-1.03q-.02-.013-.008-.033l.321-.72q.019-.038-.021-.056a6.3 6.3 0 0 0-1.594-.489.06.06 0 0 1-.052-.038c-.154-.356-.587-.412-.733-.043-.171.433.438.737.695.313a.06.06 0 0 1 .06-.026q.686.129 1.332.386.051.024.03.068l-.321.707a.034.034 0 0 0 .004.043h.013a5.7 5.7 0 0 1 1.62 1.076q.02.024.013.056c-.064.184-.043.334.077.437.33.296.832-.077.6-.472-.103-.158-.257-.214-.471-.162q-.039.01-.065-.018M12.81 5.49a.171.171 0 1 1-.205.274.171.171 0 0 1 .205-.274m3.433 2.653a.167.167 0 0 1-.184.27.167.167 0 0 1 .122-.31q.035.011.062.036zm-4.594-1.766a5 5 0 0 1 1.354.077c.026.005.043 0 .06-.025.257-.378.686.034.489.282-.138.18-.386.172-.498-.042a.08.08 0 0 0-.06-.043 5.7 5.7 0 0 0-1.508-.047c-.03 0-.043-.013-.052-.043l-.111-.802q-.005-.044-.056-.043a6.2 6.2 0 0 0-2.014.596c-.043.022-.073.043-.086.073a.12.12 0 0 0-.013.069.13.13 0 0 1-.017.072c-.133.24-.497.245-.548-.042-.043-.24.231-.446.432-.296q.031.024.069.008a6.5 6.5 0 0 1 2.34-.677q.032 0 .039.03l.115.802c.009.038.03.051.065.051M8.383 7.911a5.7 5.7 0 0 1 1.65-1.015q.027-.014.047.013c.322.398.909-.086.6-.468a.381.381 0 0 0-.677.215.05.05 0 0 1-.039.047 5.1 5.1 0 0 0-1.568.926q-.024.02-.043-.005l-.532-.617a.026.026 0 0 0-.038 0c-.423.36-.798.774-1.114 1.23a.056.056 0 0 1-.065.026c-.488-.086-.651.574-.235.728.308.112.582-.158.505-.471a.12.12 0 0 0-.034-.06l-.017-.013c-.022-.017-.022-.043-.004-.064q.41-.577.925-1.063c.026-.021.043-.021.069 0l.506.587q.031.033.064 0zm2.151-1.298q.015.04.01.08a.17.17 0 0 1-.168.151.171.171 0 1 1 .158-.231M6.673 8.57a.17.17 0 0 1-.159.236.171.171 0 0 1-.12-.291.172.172 0 0 1 .279.055m9.313-1.448c-.33.291-.832-.304-.395-.643.245-.189.673.077.575.411-.009.026 0 .048.017.065a6.7 6.7 0 0 1 1.509 1.808.043.043 0 0 1-.013.056l-.669.394c-.03.022-.039.043-.021.077.29.521.492 1.086.6 1.672a.1.1 0 0 0 .043.06l.05.026a.4.4 0 0 1 .13.085c.192.232.115.553-.18.63-.438.12-.656-.454-.275-.702a.05.05 0 0 0 .026-.06 5.5 5.5 0 0 0-.686-1.8q-.027-.034.017-.06l.673-.4q.033-.023.013-.055a6.9 6.9 0 0 0-1.358-1.564q-.026-.026-.056 0m-.017-.317a.15.15 0 0 0-.052-.116.17.17 0 0 0-.12-.043.18.18 0 0 0-.12.043.16.16 0 0 0-.051.116.155.155 0 0 0 .109.15q.032.01.067.008a.18.18 0 0 0 .12-.043.16.16 0 0 0 .047-.115m1.74 4.598a.17.17 0 0 0-.107-.156.17.17 0 0 0-.185.036.17.17 0 0 0-.042.191.17.17 0 0 0 .096.095.17.17 0 0 0 .135-.005.2.2 0 0 0 .055-.04.17.17 0 0 0 .048-.12m-9.45 3.643a4.82 4.82 0 1 0-1.054-3.538 4.82 4.82 0 0 0 1.054 3.534zm7.002-6.3A4.602 4.602 0 0 1 12 16.607 4.62 4.62 0 0 1 7.384 12 4.603 4.603 0 0 1 12 7.397c1.222 0 2.4.484 3.262 1.346zm3.069 3.737a6.2 6.2 0 0 0-.214-2.194.05.05 0 0 0-.043-.038c-.232-.048-.356-.28-.193-.472.244-.279.66.069.416.39a.07.07 0 0 0-.013.064 6.7 6.7 0 0 1 .206 2.405q0 .044-.052.043l-.801-.022q-.041-.001-.043.043c-.043.454-.159.9-.33 1.329a.06.06 0 0 0 .017.068l.03.021a.13.13 0 0 1 .043.065c.086.48-.54.51-.549.107-.004-.154.082-.257.253-.3.022-.004.043-.017.047-.043.189-.473.305-.971.343-1.478a.03.03 0 0 1 .017-.01l.828.052q.038.002.038-.03m-3.013 4.145a5.5 5.5 0 0 0 1.286-1.286q.02-.025.047-.004l.647.458a.03.03 0 0 0 .028.008.03.03 0 0 0 .024-.016c.323-.461.588-.961.788-1.487a.06.06 0 0 1 .052-.043c.287-.052.475-.33.308-.596-.3-.459-.998.056-.574.489q.031.025.017.064-.26.672-.651 1.277a.04.04 0 0 1-.03.004l-.013-.004-.643-.446q-.034-.019-.06.013a5.7 5.7 0 0 1-1.35 1.393q-.033.02-.06 0c-.176-.124-.339-.116-.48.03-.544.54.686 1.033.634.214q0-.044.03-.068m2.979-2.88a.17.17 0 0 1-.043.297.17.17 0 0 1-.197-.057.17.17 0 0 1-.058-.198.172.172 0 0 1 .298-.042m-3.266 2.893a.167.167 0 0 1-.048.282.17.17 0 0 1-.188-.047.167.167 0 0 1 .236-.235m-7.414-.026.043.004c.534.496 1.146.9 1.812 1.196l.026-.009.142-.094a.05.05 0 0 1 .034-.009c.579.056.223.845-.142.519a.4.4 0 0 1-.12-.189.1.1 0 0 0-.055-.06 6.9 6.9 0 0 1-1.993-1.397l.008-.026.558-.608q.032-.03 0-.069a5.5 5.5 0 0 1-.832-1.105.06.06 0 0 0-.064-.035c-.373.035-.429-.548-.009-.557.257-.004.309.236.227.437-.012.026-.008.043 0 .069q.385.657.93 1.191a.043.043 0 0 1 0 .06l-.578.639q-.032.034.013.043m4.83 1.727-1.329-.034q-.04.001-.034-.043l.137-.806c.004-.026-.004-.043-.034-.043a5.3 5.3 0 0 1-1.83-.643.06.06 0 0 1-.03-.055c.03-.223-.052-.36-.245-.425-.445-.145-.741.497-.274.716q.2.09.373-.051c.017-.013.034-.017.056 0a5.4 5.4 0 0 0 1.705.625q.046.007.035.052l-.129.78q-.007.03.03.043a7 7 0 0 0 1.603.073c.021 0 .043.008.051.03.275.45.875.098.695-.31-.155-.355-.583-.312-.729.057a.05.05 0 0 1-.051.034m-3.373-1.8a.167.167 0 0 1-.043.291.17.17 0 0 1-.193-.06.166.166 0 0 1-.009-.245.17.17 0 0 1 .19-.032q.032.015.055.042zm3.921 1.731a.17.17 0 0 1 .019.259.17.17 0 0 1-.204.029.17.17 0 0 1-.039-.272.17.17 0 0 1 .224-.016m.785-.925a5 5 0 0 1-1.359.287q-.038.001-.056.034c-.094.201-.325.27-.48.09-.248-.283.202-.673.455-.33a.06.06 0 0 0 .06.03 4.7 4.7 0 0 0 1.461-.334q.046-.013.06.025l.322.763c.012.026.03.03.05.022a6.4 6.4 0 0 0 1.865-1.136.06.06 0 0 0 .017-.064c-.158-.575.858-.364.485.094q-.11.142-.317.099a.08.08 0 0 0-.07.017 7 7 0 0 1-2.078 1.221q-.033.012-.047-.021l-.33-.78q-.006-.025-.038-.017M6.004 9.977a6.5 6.5 0 0 0-.338 2.156q0 .038.038.056c.266.128.257.492-.043.557-.291.068-.441-.343-.18-.532a.06.06 0 0 0 .03-.055 6.4 6.4 0 0 1 .382-2.383c.008-.03.03-.043.06-.03l.771.235c.026.013.043 0 .056-.03a5.5 5.5 0 0 1 .626-1.191c.017-.017.017-.043.008-.064-.064-.163-.03-.287.099-.36.441-.257.66.553.086.514a.07.07 0 0 0-.06.03c-.277.397-.5.83-.66 1.286-.009.025-.022.034-.048.025l-.788-.231c-.022-.009-.034 0-.043.017zm-.043 3.896c.142.416.313.814.528 1.2.008.021.03.034.055.034.356.017.566.352.33.635-.313.372-.9-.073-.574-.493.013-.022.017-.043 0-.065a6.7 6.7 0 0 1-.591-1.457q-.014-.039.03-.051l.75-.206a.06.06 0 0 0 .03-.026.06.06 0 0 0 .004-.043 5 5 0 0 1-.15-1.8.06.06 0 0 0-.03-.055c-.532-.3.06-1.016.467-.57.189.205.043.514-.206.617a.06.06 0 0 0-.034.047 5.5 5.5 0 0 0 .201 1.912q.014.038-.03.05l-.75.224c-.025.004-.034.021-.025.043zm.725-2.657a.171.171 0 0 0-.3-.12.172.172 0 0 0 .025.276.17.17 0 0 0 .103.024.17.17 0 0 0 .172-.176zm.068 4.277a.167.167 0 1 0-.334 0 .167.167 0 0 0 .334 0"
          />
          <path
            fill="currentColor"
            d="M10.286 15.429H15v-.425h-.428v-.441h-.43v-.42h-3v.42h-.428V15h-.428z"
          />
        </>
      ) : (
        <>
          <path
            fill="#03C5E6"
            d="m12.206 8.786-1.2 1.213q-.366.238-.609-.026a.354.354 0 0 1 0-.472l1.286-1.268c.116-.107.236-.124.369-.043q.34.194.154.6z"
          />
          <path
            fill="#5B6D81"
            d="m12.206 8.786 1.714 1.701-1.213 1.204L11.006 10l1.2-1.209z"
          />
          <path
            fill="#03C5E6"
            d="m12.707 11.692 1.213-1.205c.489-.18.87.202.459.626q-.675.698-1.183 1.178a.31.31 0 0 1-.257.086q-.547-.086-.232-.686"
          />
          <path
            fill="#5B6D81"
            d="m8.357 13.83 3.099-2.923a.034.034 0 0 1 .047 0l.343.343a.034.034 0 0 1 0 .047L8.927 14.4a.03.03 0 0 1-.02.012.03.03 0 0 1-.023-.003l-.008-.009-.515-.523a.04.04 0 0 1-.008-.038s0-.009.008-.009z"
          />
          <path
            fill="url(#BIDZ__a)"
            d="M9.236 18.742a7.287 7.287 0 1 0 5.528-13.484 7.287 7.287 0 0 0-5.528 13.484m7.954-1.93a7.077 7.077 0 0 1-12.265-4.54 7.078 7.078 0 0 1 14.145-.543 7.08 7.08 0 0 1-1.88 5.08zm-1.269-8.93a5.7 5.7 0 0 0-1.5-1.03q-.02-.013-.008-.033l.321-.72q.019-.038-.021-.056a6.3 6.3 0 0 0-1.594-.489.06.06 0 0 1-.052-.038c-.154-.356-.587-.412-.733-.043-.171.433.438.737.695.313a.06.06 0 0 1 .06-.026q.686.129 1.332.386.051.024.03.068l-.321.707a.034.034 0 0 0 .004.043h.013a5.7 5.7 0 0 1 1.62 1.076q.02.024.013.056c-.064.184-.043.334.077.437.33.296.832-.077.6-.472-.103-.158-.257-.214-.471-.162q-.039.01-.065-.018M12.81 5.49a.171.171 0 1 1-.205.274.171.171 0 0 1 .205-.274m3.433 2.653a.167.167 0 0 1-.184.27.167.167 0 0 1 .122-.31q.035.011.062.036zm-4.594-1.766a5 5 0 0 1 1.354.077c.026.005.043 0 .06-.025.257-.378.686.034.489.282-.138.18-.386.172-.498-.042a.08.08 0 0 0-.06-.043 5.7 5.7 0 0 0-1.508-.047c-.03 0-.043-.013-.052-.043l-.111-.802q-.005-.044-.056-.043a6.2 6.2 0 0 0-2.014.596c-.043.022-.073.043-.086.073a.12.12 0 0 0-.013.069.13.13 0 0 1-.017.072c-.133.24-.497.245-.548-.042-.043-.24.231-.446.432-.296q.031.024.069.008a6.5 6.5 0 0 1 2.34-.677q.032 0 .039.03l.115.802c.009.038.03.051.065.051M8.383 7.911a5.7 5.7 0 0 1 1.65-1.015q.027-.014.047.013c.322.398.909-.086.6-.468a.381.381 0 0 0-.677.215.05.05 0 0 1-.039.047 5.1 5.1 0 0 0-1.568.926q-.024.02-.043-.005l-.532-.617a.026.026 0 0 0-.038 0c-.423.36-.798.774-1.114 1.23a.056.056 0 0 1-.065.026c-.488-.086-.651.574-.235.728.308.112.582-.158.505-.471a.12.12 0 0 0-.034-.06l-.017-.013c-.022-.017-.022-.043-.004-.064q.41-.577.925-1.063c.026-.021.043-.021.069 0l.506.587q.031.033.064 0zm2.151-1.298q.015.04.01.08a.17.17 0 0 1-.168.151.171.171 0 1 1 .158-.231M6.673 8.57a.17.17 0 0 1-.159.236.171.171 0 0 1-.12-.291.172.172 0 0 1 .279.055m9.313-1.448c-.33.291-.832-.304-.395-.643.245-.189.673.077.575.411-.009.026 0 .048.017.065a6.7 6.7 0 0 1 1.509 1.808.043.043 0 0 1-.013.056l-.669.394c-.03.022-.039.043-.021.077.29.521.492 1.086.6 1.672a.1.1 0 0 0 .043.06l.05.026a.4.4 0 0 1 .13.085c.192.232.115.553-.18.63-.438.12-.656-.454-.275-.702a.05.05 0 0 0 .026-.06 5.5 5.5 0 0 0-.686-1.8q-.027-.034.017-.06l.673-.4q.033-.023.013-.055a6.9 6.9 0 0 0-1.358-1.564q-.026-.026-.056 0m-.017-.317a.15.15 0 0 0-.052-.116.17.17 0 0 0-.12-.043.18.18 0 0 0-.12.043.16.16 0 0 0-.051.116.155.155 0 0 0 .109.15q.032.01.067.008a.18.18 0 0 0 .12-.043.16.16 0 0 0 .047-.115m1.74 4.598a.17.17 0 0 0-.107-.156.17.17 0 0 0-.185.036.17.17 0 0 0-.042.191.17.17 0 0 0 .096.095.17.17 0 0 0 .135-.005.2.2 0 0 0 .055-.04.17.17 0 0 0 .048-.12m-9.45 3.643a4.82 4.82 0 1 0-1.054-3.538 4.82 4.82 0 0 0 1.054 3.534zm7.002-6.3A4.602 4.602 0 0 1 12 16.607 4.62 4.62 0 0 1 7.384 12 4.603 4.603 0 0 1 12 7.397c1.222 0 2.4.484 3.262 1.346zm3.069 3.737a6.2 6.2 0 0 0-.214-2.194.05.05 0 0 0-.043-.038c-.232-.048-.356-.28-.193-.472.244-.279.66.069.416.39a.07.07 0 0 0-.013.064 6.7 6.7 0 0 1 .206 2.405q0 .044-.052.043l-.801-.022q-.041-.001-.043.043c-.043.454-.159.9-.33 1.329a.06.06 0 0 0 .017.068l.03.021a.13.13 0 0 1 .043.065c.086.48-.54.51-.549.107-.004-.154.082-.257.253-.3.022-.004.043-.017.047-.043.189-.473.305-.971.343-1.478a.03.03 0 0 1 .017-.01l.828.052q.038.002.038-.03m-3.013 4.145a5.5 5.5 0 0 0 1.286-1.286q.02-.025.047-.004l.647.458a.03.03 0 0 0 .028.008.03.03 0 0 0 .024-.016c.323-.461.588-.961.788-1.487a.06.06 0 0 1 .052-.043c.287-.052.475-.33.308-.596-.3-.459-.998.056-.574.489q.031.025.017.064-.26.672-.651 1.277a.04.04 0 0 1-.03.004l-.013-.004-.643-.446q-.034-.019-.06.013a5.7 5.7 0 0 1-1.35 1.393q-.033.02-.06 0c-.176-.124-.339-.116-.48.03-.544.54.686 1.033.634.214q0-.044.03-.068m2.979-2.88a.17.17 0 0 1-.043.297.17.17 0 0 1-.197-.057.17.17 0 0 1-.058-.198.172.172 0 0 1 .298-.042m-3.266 2.893a.167.167 0 0 1-.048.282.17.17 0 0 1-.188-.047.167.167 0 0 1 .236-.235m-7.414-.026.043.004c.534.496 1.146.9 1.812 1.196l.026-.009.142-.094a.05.05 0 0 1 .034-.009c.579.056.223.845-.142.519a.4.4 0 0 1-.12-.189.1.1 0 0 0-.055-.06 6.9 6.9 0 0 1-1.993-1.397l.008-.026.558-.608q.032-.03 0-.069a5.5 5.5 0 0 1-.832-1.105.06.06 0 0 0-.064-.035c-.373.035-.429-.548-.009-.557.257-.004.309.236.227.437-.012.026-.008.043 0 .069q.385.657.93 1.191a.043.043 0 0 1 0 .06l-.578.639q-.032.034.013.043m4.83 1.727-1.329-.034q-.04.001-.034-.043l.137-.806c.004-.026-.004-.043-.034-.043a5.3 5.3 0 0 1-1.83-.643.06.06 0 0 1-.03-.055c.03-.223-.052-.36-.245-.425-.445-.145-.741.497-.274.716q.2.09.373-.051c.017-.013.034-.017.056 0a5.4 5.4 0 0 0 1.705.625q.046.007.035.052l-.129.78q-.007.03.03.043a7 7 0 0 0 1.603.073c.021 0 .043.008.051.03.275.45.875.098.695-.31-.155-.355-.583-.312-.729.057a.05.05 0 0 1-.051.034m-3.373-1.8a.167.167 0 0 1-.043.291.17.17 0 0 1-.193-.06.166.166 0 0 1-.009-.245.17.17 0 0 1 .19-.032q.032.015.055.042zm3.921 1.731a.17.17 0 0 1 .019.259.17.17 0 0 1-.204.029.17.17 0 0 1-.039-.272.17.17 0 0 1 .224-.016m.785-.925a5 5 0 0 1-1.359.287q-.038.001-.056.034c-.094.201-.325.27-.48.09-.248-.283.202-.673.455-.33a.06.06 0 0 0 .06.03 4.7 4.7 0 0 0 1.461-.334q.046-.013.06.025l.322.763c.012.026.03.03.05.022a6.4 6.4 0 0 0 1.865-1.136.06.06 0 0 0 .017-.064c-.158-.575.858-.364.485.094q-.11.142-.317.099a.08.08 0 0 0-.07.017 7 7 0 0 1-2.078 1.221q-.033.012-.047-.021l-.33-.78q-.006-.025-.038-.017M6.004 9.977a6.5 6.5 0 0 0-.338 2.156q0 .038.038.056c.266.128.257.492-.043.557-.291.068-.441-.343-.18-.532a.06.06 0 0 0 .03-.055 6.4 6.4 0 0 1 .382-2.383c.008-.03.03-.043.06-.03l.771.235c.026.013.043 0 .056-.03a5.5 5.5 0 0 1 .626-1.191c.017-.017.017-.043.008-.064-.064-.163-.03-.287.099-.36.441-.257.66.553.086.514a.07.07 0 0 0-.06.03c-.277.397-.5.83-.66 1.286-.009.025-.022.034-.048.025l-.788-.231c-.022-.009-.034 0-.043.017zm-.043 3.896c.142.416.313.814.528 1.2.008.021.03.034.055.034.356.017.566.352.33.635-.313.372-.9-.073-.574-.493.013-.022.017-.043 0-.065a6.7 6.7 0 0 1-.591-1.457q-.014-.039.03-.051l.75-.206a.06.06 0 0 0 .03-.026.06.06 0 0 0 .004-.043 5 5 0 0 1-.15-1.8.06.06 0 0 0-.03-.055c-.532-.3.06-1.016.467-.57.189.205.043.514-.206.617a.06.06 0 0 0-.034.047 5.5 5.5 0 0 0 .201 1.912q.014.038-.03.05l-.75.224c-.025.004-.034.021-.025.043zm.725-2.657a.171.171 0 0 0-.3-.12.172.172 0 0 0 .025.276.17.17 0 0 0 .103.024.17.17 0 0 0 .172-.176zm.068 4.277a.167.167 0 1 0-.334 0 .167.167 0 0 0 .334 0"
          />
          <path
            fill="#0266E2"
            d="M10.286 15.429H15v-.425h-.428v-.441h-.43v-.42h-3v.42h-.428V15h-.428z"
          />
          <defs>
            <linearGradient
              id="BIDZ__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#03C5E6" />
              <stop offset=".89" stopColor="#0266E2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBIDZ.displayName = 'BIDZ'
