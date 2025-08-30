import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function BackExamples() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-6 items-center pb-6">
      <button
        onClick={() => navigate(-1)}
        className="
          flex items-center gap-2 px-5 py-2 
          bg-secondary text-white 
          font-medium rounded-xl shadow-lg
          hover:bg-secondary/90
          transition-all duration-300
        "
      >
        <BiArrowBack size={28} className="mr-1" />
        Back
      </button>
    </div>
  );
}
