/* eslint-disable react/prop-types */
const Footer = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-2 fixed ml-[25%]">
      {children}
    </div>
  );
};

export default Footer;
