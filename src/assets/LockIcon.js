import React from 'react';

const LockIcon = ({ width, height, style, className }) => {
  return(
    <svg style={style} className={className} width={width ? width : "12px"} height={height ? height : "15px"} viewBox="0 0 12 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <title>550A012A-F80D-4787-9F1E-E034E5FB78DB</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Bank-account---2.0-" transform="translate(-845.000000, -126.000000)" fill="#FFFFFF" fillRule="nonzero">
                <g id="nav" transform="translate(0.000000, 108.000000)">
                    <g id="icon-lock" transform="translate(845.000000, 18.000000)">
                        <path d="M10,6.25 L10,3.75 C10,1.679375 8.20866667,0 6,0 C3.79133333,0 2,1.679375 2,3.75 L2,6.25 L0,6.25 L0,15 L12,15 L12,6.25 L10,6.25 Z M6.5,10.8615 L6.5,12 L5.5,12 L5.5,10.8615 C5.2025,10.688 5,10.3695 5,10 C5,9.448 5.448,9 6,9 C6.552,9 7,9.448 7,10 C7,10.369 6.798,10.688 6.5,10.8615 Z M4,6 L4,4 C4,2.897 4.897,2 6,2 C7.1025,2 8,2.897 8,4 L8,6 L4,6 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  )
}

export default LockIcon;