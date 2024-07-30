export default function DirectionsImg({ location }: { location: string }) {
  const isActive = location === '/directions';
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_866_316"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <rect x="0.25" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_866_316)">
        <path
          d="M14.25 20V18H16.85L13.675 14.825L15.1 13.4L18.25 16.55V14H20.25V20H14.25ZM5.65 20L4.25 18.6L16.85 6H14.25V4H20.25V10H18.25V7.4L5.65 20ZM9.425 10.575L4.25 5.4L5.65 4L10.825 9.175L9.425 10.575Z"
          fill={isActive ? '#FF4310' : 'white'}
        />
      </g>
    </svg>
  );
}
