import React from 'react'

type IconPrpos = {
  className?: string
}
const CheckIcon = ({ className }: IconPrpos) => {
  return (
    <svg
      className={className}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49992 0.333336C6.18138 0.333336 4.89245 0.724329 3.79612 1.45687C2.69979 2.18941 1.84531 3.23061 1.34072 4.44878C0.836141 5.66695 0.704118 7.0074 0.961353 8.3006C1.21859 9.59381 1.85353 10.7817 2.78588 11.714C3.71823 12.6464 4.90611 13.2813 6.19932 13.5386C7.49253 13.7958 8.83297 13.6638 10.0511 13.1592C11.2693 12.6546 12.3105 11.8001 13.0431 10.7038C13.7756 9.60748 14.1666 8.31854 14.1666 7C14.1666 6.12452 13.9941 5.25762 13.6591 4.44878C13.3241 3.63994 12.833 2.90501 12.214 2.28596C11.5949 1.6669 10.86 1.17584 10.0511 0.840806C9.24231 0.505774 8.3754 0.333336 7.49992 0.333336ZM11.4466 4.41334C11.5367 4.41356 11.623 4.44952 11.6866 4.51334C11.7477 4.57565 11.7819 4.65942 11.7819 4.74667C11.7819 4.83392 11.7477 4.91769 11.6866 4.98L7.17325 9.49334C7.14245 9.52353 7.10597 9.54732 7.06592 9.56334C7.02587 9.57936 6.98305 9.58729 6.93992 9.58667C6.89573 9.5878 6.85175 9.58014 6.81054 9.56411C6.76934 9.54809 6.73174 9.52403 6.69992 9.49334L3.87325 6.66667C3.81175 6.60324 3.77736 6.51835 3.77736 6.43C3.77736 6.34165 3.81175 6.25677 3.87325 6.19334C3.93685 6.12952 4.02317 6.09356 4.11325 6.09334C4.20118 6.09459 4.28504 6.13053 4.34659 6.19334L6.93992 8.78667L11.2133 4.51334C11.2435 4.48194 11.2797 4.45692 11.3198 4.43974C11.3599 4.42257 11.403 4.41359 11.4466 4.41334Z"
        fill="#B5B9BD"
      />
    </svg>
  )
}

export default CheckIcon
