import { NavLink } from "react-router-dom";


const categoryStyle =
  "bg-gradient-to-r from-blue-900 to-sky-600 w-20 h-20 p-1 mx-auto rounded-[50%] flex items-center justify-center text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-cyan-700  hover:-translate-y-3 hover:scale-105 transition-all ease-in-out duration-500";

const Categories = () => {
  return (
    <div className=" grid lg:grid-cols-4 grid-cols-2 gap-4 w-fit mx-auto">
      <NavLink className={categoryStyle} to={"/CuisinePage/German"}>
        <h4>German </h4>
      </NavLink>
      <NavLink className={categoryStyle} to={"/CuisinePage/Indian"}>
        <h4>Indian </h4>
      </NavLink>
      <NavLink className={categoryStyle} to={"/CuisinePage/Korean"}>
        <h4>Korean </h4>
      </NavLink>
      <NavLink className={categoryStyle} to={"/CuisinePage/European"}>
        <h4>European </h4>
      </NavLink>
    
    </div>
  );
};

export default Categories;
