import React from 'react'

type IconPrpos = {
  className?: string
}

const ChatIcon = ({ className }: IconPrpos) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.63 2.00001C14.7305 1.99869 13.8395 2.17457 13.0079 2.5176C12.1763 2.86063 11.4204 3.3641 10.7834 3.99925C10.1464 4.63441 9.64073 5.38881 9.29527 6.21939C8.94981 7.04996 8.77133 7.94045 8.77002 8.84001V14.89C8.77002 15.1048 8.85536 15.3109 9.00726 15.4628C9.15917 15.6147 9.36519 15.7 9.58002 15.7H13.69H15.63C17.3827 15.6053 19.0325 14.8423 20.2397 13.568C21.4469 12.2938 22.1197 10.6053 22.1197 8.85001C22.1197 7.09472 21.4469 5.40621 20.2397 4.13198C19.0325 2.85775 17.3827 2.09475 15.63 2.00001ZM12.55 10.92H17.5C17.6326 10.92 17.7598 10.9727 17.8536 11.0665C17.9473 11.1602 18 11.2874 18 11.42C18 11.5526 17.9473 11.6798 17.8536 11.7736C17.7598 11.8673 17.6326 11.92 17.5 11.92H12.55C12.4174 11.92 12.2902 11.8673 12.1965 11.7736C12.1027 11.6798 12.05 11.5526 12.05 11.42C12.05 11.2874 12.1027 11.1602 12.1965 11.0665C12.2902 10.9727 12.4174 10.92 12.55 10.92ZM16.27 10H12.55C12.4174 10 12.2902 9.94733 12.1965 9.85356C12.1027 9.75979 12.05 9.63262 12.05 9.50001C12.05 9.3674 12.1027 9.24022 12.1965 9.14645C12.2902 9.05269 12.4174 9.00001 12.55 9.00001H16.27C16.3357 9.00001 16.4007 9.01294 16.4614 9.03807C16.522 9.06319 16.5771 9.10002 16.6236 9.14645C16.67 9.19288 16.7068 9.248 16.732 9.30867C16.7571 9.36933 16.77 9.43435 16.77 9.50001C16.77 9.56567 16.7571 9.63069 16.732 9.69135C16.7068 9.75201 16.67 9.80713 16.6236 9.85356C16.5771 9.89999 16.522 9.93682 16.4614 9.96195C16.4007 9.98707 16.3357 10 16.27 10ZM12.55 8.07001C12.4174 8.07001 12.2902 8.01733 12.1965 7.92356C12.1027 7.82979 12.05 7.70262 12.05 7.57001C12.05 7.4374 12.1027 7.31022 12.1965 7.21645C12.2902 7.12269 12.4174 7.07001 12.55 7.07001H18.55C18.6826 7.07001 18.8098 7.12269 18.9036 7.21645C18.9973 7.31022 19.05 7.4374 19.05 7.57001C19.05 7.70262 18.9973 7.82979 18.9036 7.92356C18.8098 8.01733 18.6826 8.07001 18.55 8.07001H12.55Z"
        fill="#816DEC"
      />
      <path
        d="M16.05 16.86C15.9911 16.8315 15.927 16.8151 15.8616 16.8118C15.7962 16.8085 15.7309 16.8183 15.6693 16.8407C15.6078 16.8631 15.5514 16.8975 15.5034 16.9421C15.4554 16.9866 15.4169 17.0403 15.39 17.1C14.1 19.84 12.42 21 9.58 21C7.9887 21 6.46257 20.3679 5.33736 19.2427C4.21214 18.1174 3.58 16.5913 3.58 15C3.58 12.19 4.92 10.2 7.34 9.41001C7.40566 9.38965 7.46667 9.35657 7.51954 9.31263C7.57241 9.2687 7.61612 9.21478 7.64815 9.15396C7.68019 9.09314 7.69993 9.0266 7.70625 8.95815C7.71257 8.8897 7.70535 8.82067 7.685 8.75501C7.66464 8.68935 7.63155 8.62834 7.58762 8.57547C7.54369 8.52259 7.48977 8.47889 7.42895 8.44685C7.36813 8.41482 7.30159 8.39508 7.23314 8.38875C7.16469 8.38243 7.09566 8.38965 7.03 8.41001C5.65758 8.83211 4.46594 9.70143 3.64496 10.8794C2.82399 12.0574 2.42092 13.4763 2.5 14.91C2.51309 16.7625 3.25479 18.5354 4.56472 19.8453C5.87465 21.1552 7.64753 21.8969 9.5 21.91C12.75 21.91 14.75 20.59 16.21 17.49C16.2628 17.3832 16.2757 17.261 16.2463 17.1455C16.217 17.03 16.1474 16.9287 16.05 16.86Z"
        fill="#816DEC"
      />
    </svg>
  )
}

export default ChatIcon
