import React from 'react';

const BuyIcon = ({ width, height, style }) => {
  return(
    <svg style={style} width={width ? width : "24px"} height={height ? height : "51px"} viewBox="0 0 24 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <title>D9C97112-07A0-4D63-8597-242DDFD9E950</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="OpenSans-Bold, Open Sans" fontSize="32" fontWeight="bold">
        <g id="Additinal-Investments---Frequency" transform="translate(-783.000000, -717.000000)" fill="#7C7C7C">
            <g id="body" transform="translate(413.000000, 233.000000)">
                <g id="details" transform="translate(37.000000, 166.000000)">
                    <g id="Select---amount" transform="translate(294.000000, 286.000000)">
                        <g id="icon-amount" transform="translate(39.000000, 32.000000)">
                            <text>
                                <tspan x="0" y="34">$</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
    </svg>
  )
}

export default BuyIcon;