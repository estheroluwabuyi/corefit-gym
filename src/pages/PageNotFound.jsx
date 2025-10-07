import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-center px-4">
      <h1 className="text-[8rem] font-bold text-secondary font-montserrat mb-4">
        404
      </h1>
      <p className="text-[2rem] mb-6">Page Not Found</p>
      <p className=" max-w-md mb-8">
        Oops! The page you&apos;re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-4 rounded-xl bg-secondary text-text!
         text-[1.35rem]! sm:text-[1.4rem]! lg:text-[1.7rem]! hover:bg-[#e04b00] transition font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;
