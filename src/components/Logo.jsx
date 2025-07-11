import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <svg
          className="w-[150px] sm:w-[200px] md:w-[280px]  h-auto"
          viewBox="0 0 280 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(0,10)">
            <rect x="0" y="0" width="10" height="40" rx="5" fill="#ff5500" />
            <rect x="10" y="17" width="40" height="6" fill="#cccccc" />

            <rect x="50" y="0" width="10" height="40" rx="5" fill="#ff5500" />
          </g>

          <text
            x="70"
            y="35"
            font-family="'Russo One', sans-serif"
            font-size="40"
            fill="#cccccc"
            dominant-baseline="middle"
          >
            CORE
          </text>
          <text
            x="180"
            y="35"
            font-family="'Russo One', sans-serif"
            font-size="40"
            fill="#ff5500"
            dominant-baseline="middle"
          >
            FIT
          </text>
        </svg>
      </Link>
    </div>
  );
}

export default Logo;
