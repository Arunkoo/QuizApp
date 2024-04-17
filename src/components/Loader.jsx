import { TbLoader3 } from "react-icons/tb";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <TbLoader3 className="h-[100px] w-[100px] animate-spin text-white mt-6" />
      <h3 className="text-white text-3xl font-semibold ml-2">
        Loading<span className=" animate-pulse">...</span>
      </h3>
    </div>
  );
};

export default Loader;
