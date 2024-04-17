import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <FaReact className=" h-[100px] w-[100px] text-blue-500 mt-3" />
      <h1 className=" font-codystar text-6xl font-bold text-white">
        React Quiz App
      </h1>
    </div>
  );
};

export default Header;
