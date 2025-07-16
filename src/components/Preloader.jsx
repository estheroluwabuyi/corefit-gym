import Logo from "./Logo";

function Preloader() {
  return (
    <div className="bg-red-500 fixed flex h-full w-full flex-col justify-center items-center z-50">
      <Logo />
      <p className="text-8xl">Loading your transformation</p>
    </div>
  );
}

export default Preloader;
