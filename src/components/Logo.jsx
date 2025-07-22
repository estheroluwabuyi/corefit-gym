import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      {/* <Link to="/"> */}
      <svg
        className="w-[150px] sm:w-[200px] lg:w-[280px]  h-auto"
        viewBox="0 0 280 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0,10)">
          <rect x="0" y="0" width="10" height="40" rx="5" fill="#f75c03" />
          <rect x="10" y="17" width="40" height="6" fill="#f0eee4" />

          <rect x="50" y="0" width="10" height="40" rx="5" fill="#f75c03" />
        </g>

        <text
          x="70"
          y="35"
          font-family="'Russo One', sans-serif"
          font-size="40"
          fill="#f0eee4"
          dominant-baseline="middle"
        >
          CORE
        </text>
        <text
          x="180"
          y="35"
          font-family="'Russo One', sans-serif"
          font-size="40"
          fill="#f75c03"
          dominant-baseline="middle"
        >
          FIT
        </text>
      </svg>
      {/* </Link> */}
    </div>
  );
}

export default Logo;
