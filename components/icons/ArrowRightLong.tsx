const ArrowRightLong = ({color}) => (
  <svg
    height="16"
    width="16"
    viewBox="-2 0 20 16"
    shapeRendering="crispEdges"
    textRendering="optimizeLegibility"
  >
    <g fill={color || '#111111'} stroke={color || '#111111'} strokeWidth="2">
      <line
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="0.5"
        y1="8.5"
        x2="15.5"
        y2="8.5"
      />
      <polyline
        fill="none"
        stroke={color || '#111111'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="10.5,3.5 15.5,8.5 10.5,13.5 "
      />
    </g>
  </svg>
);

export default ArrowRightLong;
