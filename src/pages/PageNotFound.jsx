import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-center px-4">
      <h1 className="text-[8rem] font-bold text-secondary font-montserrat mb-4">
        404
      </h1>
      <p className="text-[2rem] mb-6">Page Not Found</p>
      <p className=" max-w-md mb-8">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-secondary text-white! text-lg hover:bg-[#e04b00] transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;
