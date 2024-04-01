import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CuisineItem, Container } from "../components/Export";
import { apiKey, apiLink } from "../components/apiInfo";

const CuisinePage = () => {
  const [cuisine, setCuisine] = useState([]);
  const { type } = useParams();
  const navigate = useNavigate();

  const getCuisine = async (name) => {
    const checkCuisine = sessionStorage.getItem("cuisine");
    if (checkCuisine) {
      setCuisine(JSON.parse(checkCuisine));
    } else {
      const data = await fetch(
        `${apiLink}/complexSearch?apiKey=${apiKey}&number=10&cuisine=${name}`
      );
      const recipes = await data.json();
      setCuisine(recipes.results);
    }
  };

  useEffect(() => {
    getCuisine(type);
  }, [type]);

  const handleClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <>
      <Container>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full">
          {cuisine.map((recipe) => (
            <div onClick={() => handleClick(recipe.id)} key={recipe.id}>
              <CuisineItem recipe={recipe} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CuisinePage;
