import React from 'react';

const UserIcon = ({ width, height, style, color}) => {
  return(
    <svg style={style} width={width ? width : "34px"} height={height ? height : "34px"} viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <title>DB95BFD9-CB09-4956-BD27-9AB144E9BF1D</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Additinal-Investments---Registration" transform="translate(-774.000000, -474.000000)" fill={color ? color : "#7C7C7C"} fillRule="nonzero">
            <g id="body" transform="translate(413.000000, 233.000000)">
                <g id="details" transform="translate(37.000000, 166.000000)">
                    <g id="Select---reg" transform="translate(294.000000, 36.000000)">
                        <g id="icon-user" transform="translate(30.000000, 39.000000)">
                            <path d="M17,0 C7.61175,0 0,7.61175 0,17 C0,26.38825 7.61175,34 17,34 C26.38825,34 34,26.38825 34,17 C34,7.61175 26.38825,0 17,0 Z M27.9834167,25.9320833 C27.6136667,25.1019167 26.8656667,24.5281667 25.3328333,24.174 C22.0844167,23.4245833 19.0598333,22.76725 20.5260833,20.0019167 C24.9815,11.5840833 21.7061667,7.08333333 17,7.08333333 C12.2003333,7.08333333 9.00433333,11.7569167 13.4739167,20.0019167 C14.9840833,22.78425 11.8475833,23.4401667 8.66716667,24.174 C7.1315,24.5281667 6.38916667,25.1061667 6.02225,25.9391667 C4.03183333,23.49825 2.83333333,20.38725 2.83333333,17 C2.83333333,9.1885 9.1885,2.83333333 17,2.83333333 C24.8115,2.83333333 31.1666667,9.1885 31.1666667,17 C31.1666667,20.3844167 29.9695833,23.4925833 27.9834167,25.9320833 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
    </svg>
  )
}

export default UserIcon;