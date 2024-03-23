
import "./Layout.css"
const GridContainer = ({children}) => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full  ">
      {children}
    </div>
  );
}

export default GridContainer;