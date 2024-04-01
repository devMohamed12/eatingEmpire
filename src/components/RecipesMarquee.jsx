//  import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { MainTitle, CuisineItem } from "./Export";
 
const RecipesMarquee = ({ recipeCategory, suggestedRecipes }) => {
   

  return (
    <div>
      <MainTitle content={`${recipeCategory || ""} recipes`} />

      <Marquee
        pauseOnHover={true}
        pauseOnClick={true}
        speed={70}
        gradientWidth={200}
       >
        {suggestedRecipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            state={{ category: recipeCategory }}
            className=" inline-block mx-5 hover:-translate-y-4 transition-all ease-in-out duration-500"
          >
            <CuisineItem recipe={recipe} />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default RecipesMarquee;
