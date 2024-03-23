import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, CuisineItem, MainTitle } from "../Layout/ComponentsLayout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { apiKey, apiLink } from "./apiInfo";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";


const RecipeCarousel = ({ recipeCategory }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const checkRecipes = sessionStorage.getItem(`${recipeCategory}`);
    if (checkRecipes) {
      setRecipes(JSON.parse(checkRecipes));
    } else {
      const api = await fetch(
        `${apiLink}/random?apiKey=${apiKey}&number=10&tags=${recipeCategory}`
      );
      const { recipes } = await api.json();
      setRecipes(recipes);
      sessionStorage.setItem(`${recipeCategory}`, JSON.stringify(recipes));
    }
  };

  return (
    <div className="my-11">
      <Container>
        <MainTitle content={`${recipeCategory} recipes`} />
        <Splide
          options={{
            drag: "free",
            perPage: 3,
            arrows: false,
            gap: "1rem",
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 1,
              },
            },
            focus: "center",
            loop: true,
            pagination: false,
          }}
        >
          {recipes.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <CuisineItem recipe={recipe} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </div>
  );
};

export default RecipeCarousel;
