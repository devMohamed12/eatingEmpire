
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {   CuisineItem, MainTitle } from "../components/Export";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { apiKey, apiLink } from "./apiInfo";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { PacmanLoader } from "react-spinners";

const RecipeCarousel = ({ recipeCategory }) => {
  const [recipes, setRecipes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  
 const getRecipes = async () => {
    const checkRecipes = sessionStorage.getItem(`${recipeCategory}`);
    if (checkRecipes) {
      setRecipes(JSON.parse(checkRecipes));
    } else {
      // fetch recipes from API and store in session storage
      const api = await fetch(
        // random recipes based on category
        `${apiLink}/random?apiKey=${apiKey}&number=10&tags=${recipeCategory}`
      );
      const { recipes } = await api.json();
      setRecipes(recipes);
      sessionStorage.setItem(`${recipeCategory}`, JSON.stringify(recipes));
    }
    // set loading state to false when recipes are fetched
    setIsLoading(false);
  };
  // fetch recipes when component mounts
  useEffect(() => {
    getRecipes();
  }, []);
 

  return (
    <div className="lg:my-20 my-14">
      <div>
        <MainTitle content={`${recipeCategory} recipes`} />

        {isLoading ? (
          <PacmanLoader
            color="#00008B"
            margin={6}
            size={45}
            speedMultiplier={1.3}
            cssOverride={{
              margin: "0 auto",
            }}
          />
        ) : (
          <>
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
                  <Link
                    to={`/recipe/${recipe.id}`}
                    state={{ category: recipeCategory }}
                  >
                    <CuisineItem recipe={recipe} />
                  </Link>
                </SplideSlide>
              ))}
            </Splide> 
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeCarousel;
