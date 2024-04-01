import { Link } from "react-router-dom";
import { Container } from "../components/Export";

const Header = () => {
  return (
    <div className="text-white bg-[#4d4c4c] w-full py-4 mb-9 ">
      <Container>
        <div className="flex justify-between max-md:flex-col max-md:gap-4 ">
          <div className="w-2/6  text-center max-md:w-full">
            <Link
              to="/"
              className="text-xl font-extrabold  capitalize tracking-wider font-[cursive] text-teal-600"
            >
              Eating Empire
            </Link>
          </div>
          <div className="w-3/6 max-md:w-full">
            <ul className="flex justify-center text-lg   ">
              <li className="px-3 hover:text-red-400 transition-all duration-500	">
                <Link to={"/CuisinePage/German"}>German</Link>
              </li>
              <li className="px-3 hover:text-red-400 transition-all duration-500	 ">
                <Link to={"/CuisinePage/Indian"}>Indian</Link>
              </li>
              <li className="px-3 hover:text-red-400 transition-all duration-500	 ">
                <Link to={"/CuisinePage/Korean"}>Korean</Link>
              </li>
              <li className="px-3 hover:text-red-400 transition-all  duration-500	">
                <Link to={"/CuisinePage/European"}>European</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
