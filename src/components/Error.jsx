import svg1 from "../Assests/Images/undraw_server_down_s-4-lk.svg";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={svg1} alt="severDown Svg" className=" h-[300px] w-[300px]" />
      <h3 className="text-3xl font-semibold text-white animate-pulse">
        OOps! server disconnected.
      </h3>
    </div>
  );
};

export default Error;
