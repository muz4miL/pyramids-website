// components/icons/LightningIcon.tsx
export const LightningIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    x="0"
    y="0"
    version="1.1"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#FED600" d="M17 0h-7L6 13h5L9 24l9-15h-5z"></path>
    <path
      fill="#010101"
      d="M11.045 12.75 6 13h5zM9.065 23.641 9 24l9-15z"
      opacity=".1"
    ></path>
    <path
      fill="#FFF"
      d="M10 .25h6.889L17 0h-7L6 13zM13 9l-.111.25L18 9z"
      opacity=".2"
    ></path>
    <linearGradient
      id="SVGID_1_"
      x1="5.94"
      x2="15.958"
      y1="8.708"
      y2="13.379"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#FFF" stopOpacity=".2"></stop>
      <stop offset="1" stopColor="#FFF" stopOpacity="0"></stop>
    </linearGradient>
    <path fill="url(#SVGID_1_)" d="M17 0h-7L6 13h5L9 24l9-15h-5z"></path>
  </svg>
);
