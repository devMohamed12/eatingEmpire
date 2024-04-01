 
const Container = ({ children , className }) => {
   
  return <div className={`mx-auto p-1 w-11/12  ${className}`}>{children}</div>;
};

export default Container;
