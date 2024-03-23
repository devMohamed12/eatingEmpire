import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import {
  GridContainer,
  CuisineItem,
  Container,
} from "../Layout/ComponentsLayout";
import { apiKey, apiLink } from "../components/apiInfo";
import {Categories} from "../components/Export";

const CuisinePage = () => {
  const [cuisine, setCuisine] = useState([]);
  const { type } = useParams();
  const navigate = useNavigate();

  const getCuisine = async (name) => {
    const data = await fetch(
      `${apiLink}/complexSearch?apiKey=${apiKey}&number=10&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
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
        <Categories />
        <GridContainer>
          {cuisine.map((recipe) => (
            <div onClick={() => handleClick(recipe.id)} key={recipe.id}>
              <CuisineItem recipe={recipe} />
            </div>
          ))}
        </GridContainer>
      </Container>
    </>
  );
};

export default CuisinePage;
