import { NavLink } from "react-router-dom";
import "./categories.css"

const categoryStyle =
  " w-20 h-20 p-1 mx-auto rounded-[50%] flex items-center justify-center text-white hover:bg-red-700 hover:shadow-lg hover:shadow-cyan-700  hover:-translate-y-3 hover:scale-105 transition-all ease-in-out duration-500";

const Categories = () => {
  return (
    <div className="categories-container w-fit mx-auto">
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
