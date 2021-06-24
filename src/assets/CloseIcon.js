import React from 'react';

const CloseIcon = ({onClick, width, height}) => {
  return(
    <div onClick={onClick}>
      <svg width={width ? width : "27px"} height={height ? height : "26px"} viewBox="0 0 27 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <title>12C65A03-1639-4302-86BF-64298659CF26</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
          <g id="Bank-account---2.0---Add---1" transform="translate(-990.000000, -241.000000)" stroke="#979797" strokeWidth="2">
              <g id="body" transform="translate(452.000000, 195.000000)">
                  <g id="Line" transform="translate(539.000000, 47.000000)">
                      <line x1="0.5" y1="0.5" x2="24.5" y2="23.5"></line>
                      <line x1="0.5" y1="0.5" x2="24.5" y2="23.5" transform="translate(12.500000, 12.000000) scale(-1, 1) translate(-12.500000, -12.000000) "></line>
                  </g>
              </g>
          </g>
      </g>
      </svg>
    </div>
  )
}

export default CloseIcon;