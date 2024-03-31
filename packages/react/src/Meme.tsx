import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMEME = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#4B7C4C"
        d="M14.235 6.43h-5.11a.8.8 0 0 0-.504.193l-.698.866 3.842 3.357 3.711-3.357a27 27 0 0 1-.69-.846c-.143-.193-.427-.222-.55-.213m-8.854 3.985 1.047-1.137v6.348c-.388-1.304-1.185-4.012-1.266-4.414a.88.88 0 0 1 .22-.797m12.533 0-.932-1.137v6.348c.345-1.304 1.056-4.012 1.128-4.414s-.1-.698-.196-.797m-6.542 7.941-2.743-1.333v-2.351l2.32-.277 2.346-.741 1.5 3.37a361 361 0 0 1-2.782 1.332.74.74 0 0 1-.641 0"
      />
      <path
        fill="#1D6834"
        d="M7.798 7.286h-.971c-.306 0-.396.19-.398.285.002 2.934.004 8.876 0 9.176s.233.392.347.396H9.11c.28 0 .316-.268.319-.396v-2.001c.908-.181 1.426-.11 1.984-.11.445 0 .377.51.286.764-.14.423-.471 1.293-.669 1.391-.247.123-.454.295-.541.563s.023.67.422.85c.398.181.876-.047 1.035-.394.128-.277.026-.567-.042-.678.125-.312.435-1.008.676-1.305.3-.37.382-.482.682-.593.24-.09.687.273.88.465v1.092c0 .217.182.328.273.352h2.29c.349-.016.435-.245.434-.352V11.73c.613-.267 1.813-1.126 1.712-2.418S17.668 7.845 17.14 7.92v-.29c-.028-.225-.224-.324-.32-.344h-.958c-.138 0-.334.144-.414.216l-3.636 3.216c-1.108-.956-3.375-2.923-3.577-3.147-.203-.224-.375-.284-.436-.285"
      />
      <path fill="#4B7C4C" d="M9.338 13.757v-1.188l1.197 1.045z" />
      <path
        fill="#61A761"
        d="m14.794 11.65 2.331-2.51c.003-.187.006-.48.007-.763.128-.124.416-.101.544-.074.266.074.8.406.8 1.144 0 .923-.378 1.382-1.429 1.945-.84.45-2.047 1.321-2.545 1.7-.16.112-.491.448-.54.906-.06.572 1.025 1.592 1.025 1.551 0-.04.282-.09.456 0 .174.091.252.26.174.497-.078.235-.39.298-.63.187-.193-.09-.21-.363-.193-.489-.941-.832-1.477-.908-1.627-.841-.141.02-.511.193-.863.73-.352.538-.662 1.29-.773 1.599a.4.4 0 0 1 .108.428c-.068.218-.27.267-.44.26a.39.39 0 0 1-.378-.415c0-.313.297-.395.449-.414.63-.884.808-1.788.819-2.13.03-.236-.141-.703-1.065-.69a10 10 0 0 0-1.997.225c0 .152-.146.297-.351.297-.284 0-.429-.213-.429-.397s.13-.398.429-.398c.188 0 .313.12.351.174.176-.004.76-.051 1.694-.174s1.174-.372 1.177-.48c.03-.084.014-.358-.282-.787-.295-.428-.878-.973-1.133-1.191-.38.209-.647-.078-.658-.261-.01-.185.068-.466.448-.45s.423.382.397.563c.234.406.947 1.243 1.927 1.34.98.095 1.873-.681 2.197-1.081"
      />
      <path
        fill="#fff"
        d="M7.752 7.714h-.895v9H9v-1.688a.8.8 0 0 1-.422.095.765.765 0 0 1-.701-.683c-.064-.487.397-.78.645-.804.198-.019.393.044.478.077a36 36 0 0 1 0-1.345c.012-.473.37-.38.535-.273l1.498 1.3c.082.062.28.169.415.093.136-.075.057-.282 0-.377-.319-.523-.784-1.05-.991-1.232-.294.076-.463.077-.739-.09-.206-.127-.48-.677-.1-1.073s.81-.293 1.114-.06c.229.178.283.506.274.67.508.79 1.042 1.064 1.814 1.042.617-.017 1.198-.441 1.412-.65l2.482-2.69V7.715h-.838c-1.195 1.047-3.632 3.187-3.827 3.355a.36.36 0 0 1-.479 0zm6.82 5.762c.25-.323 1.523-1.16 2.142-1.537v4.775h-2.143v-.399c.134.19.374.293.456.307h.001a.83.83 0 0 0 .821-.307c.255-.316.095-.776-.158-1.003-.203-.181-.527-.187-.665-.168l-.455-.527z"
      />
    </BaseIcon>
  ),
)

IconMEME.displayName = 'MEME'
