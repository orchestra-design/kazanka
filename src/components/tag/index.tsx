import * as React from 'react'
import { css } from '@emotion/core'

import { tagStyles } from './styles'

export type Props = Readonly<{
  tag: string
  textColor?: string
  styles?: any
}>

export function Tag({ tag, textColor = '#FFF', styles }: Props) {
  return (
    <svg
      css={css`
        ${tagStyles};
        ${styles};
      `}
      title={tag}
      viewBox="0 0 250 41" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <g id="tag" fill={textColor}>
        <g id="text">
          <path d="M60.6998 30.2613L52.8803 10.1245H48.407L40.5522 30.2613H44.9551L46.681 25.4468H54.6414L56.3673 30.2613H60.6998ZM50.626 14.3416L53.3382 21.8973H47.9491L50.626 14.3416Z" />
          <path d="M66.4195 22.5299V10.1245H62.2985V30.2613H65.9969L73.8516 17.6802V30.2613H77.9727V10.1245H74.1334L66.4195 22.5299ZM70.1532 7.41847C72.9358 7.41847 74.2038 5.52076 74.2038 3.62305H71.703C71.703 4.60705 71.2451 5.16933 70.1532 5.16933C69.0613 5.16933 68.6034 4.46647 68.6034 3.62305H66.0673C66.0673 5.90733 67.7228 7.41847 70.1532 7.41847Z" />
          <path d="M98.2869 10.1245H84.1977V20.351C84.1977 25.1305 82.7183 27.0985 80.4993 27.0985H80.1823V34.4433H84.3033V30.2613H95.9621V34.4433H100.083V27.731H98.2869V10.1245ZM88.3188 13.7442H94.1658V26.6416H86.5576C87.8256 25.5522 88.3188 23.4085 88.3188 21.2648V13.7442Z" />
          <path d="M120.482 30.2613L112.663 10.1245H108.19L100.335 30.2613H104.738L106.464 25.4468H114.424L116.15 30.2613H120.482ZM110.409 14.3416L113.121 21.8973H107.732L110.409 14.3416Z" />
          <path d="M128.738 20.1402L136.734 10.1245H131.591L126.167 17.0125V10.1245H122.081V30.2613H126.167V23.2328L132.93 30.2613H138.53L128.738 20.1402Z" />
          <path d="M157.104 30.2613L149.285 10.1245H144.811L136.957 30.2613H141.36L143.085 25.4468H151.046L152.772 30.2613H157.104ZM147.03 14.3416L149.743 21.8973H144.354L147.03 14.3416Z" />
          <path d="M168.565 19.4022C170.326 18.5939 171.277 17.1179 171.277 15.4662C171.277 12.0222 168.53 9.87847 164.515 9.87847C161.556 9.87847 159.231 11.0382 157.611 12.6899L160.147 15.3256C160.992 14.3416 162.613 13.6739 164.057 13.6739C165.818 13.6739 167.121 14.5525 167.121 15.7473C167.121 17.153 165.747 17.9965 163.247 17.9965H161.697V21.4053H164.127C166.522 21.4053 168.178 22.4245 168.178 24.1113C168.178 25.6928 166.522 26.747 164.057 26.747C162.401 26.747 160.957 25.9739 159.9 24.7439L156.695 27.0633C158.315 29.3125 160.922 30.5425 164.198 30.5425C169.129 30.5425 172.334 28.0473 172.334 24.4276C172.334 22.0379 170.96 20.2105 168.565 19.4022Z" />
          <path d="M192.763 30.2613L184.943 10.1245H180.47L172.615 30.2613H177.018L178.744 25.4468H186.704L188.43 30.2613H192.763ZM182.689 14.3416L185.401 21.8973H180.012L182.689 14.3416Z" />
          <path d="M206.549 18.4182H198.483V10.1245H194.362V30.2613H198.483V22.1082H206.549V30.2613H210.67V10.1245H206.549V18.4182Z" />
          <path d="M221.634 20.1402L229.63 10.1245H224.487L219.063 17.0125V10.1245H214.977V30.2613H219.063V23.2328L225.826 30.2613H231.426L221.634 20.1402Z" />
          <path d="M250 30.2613L242.181 10.1245H237.707L229.853 30.2613H234.255L235.981 25.4468H243.942L245.668 30.2613H250ZM239.926 14.3416L242.639 21.8973H237.249L239.926 14.3416Z" />
        </g>
        <path id="hash" d="M21.1104 30.3099L11.6615 30.2726L9.704 40.9428L4.62077 40.9227L6.5185 30.2522L0 30.2265L0.0197566 25.4156L7.4353 25.4449L9.15074 15.4778L2.69204 15.4523L2.71179 10.6414L10.0675 10.6705L11.9653 0L17.0485 0.0200907L15.091 10.6903L24.5996 10.7279L26.4973 0.0574362L31.5806 0.0775271L29.6828 10.748L36.2014 10.7737L36.1816 15.5846L28.766 15.5553L26.9908 25.5222L33.5093 25.548L33.4896 30.3588L26.1338 30.3298L24.1763 41L19.1528 40.9801L21.1104 30.3099ZM21.9076 25.5021L23.7426 15.5355L14.2938 15.4981L12.4587 25.4648L21.9076 25.5021Z" />
      </g>
    </svg>
  )
}
