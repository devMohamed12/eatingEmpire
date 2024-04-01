import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  {CuisineItem,MainTitle} from "../components/Export"
import { apiKey, apiLink } from "./apiInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { PacmanLoader } from "react-spinners";



// not used comment 

const Popular = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [popular, setPopular] = useState([]);
   

  const getPopular = async () => {

    const checkPopular = sessionStorage.getItem("popular");

    if (checkPopular) {
      setPopular(JSON.parse(checkPopular));
    } else {
      const api = await fetch(
        `${apiLink}/random?apiKey=${apiKey}&number=10`
      );
      const { recipes } = await api.json();
      setPopular(recipes);
      sessionStorage.setItem("popular", JSON.stringify(recipes));
    }
    setIsLoading(false);
  };
  console.log(popular , "popular recipes");

  useEffect(() => { getPopular() }, []);


  return (
    <div className="my-11 min-h-fit">
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
          <MainTitle content={"Popular recipes"} />

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
              {popular.map((recipe) => (
              
              <SplideSlide key={recipe.id}>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="block"
                  state={{ category: recipe.category }}
                >
                  <CuisineItem recipe={recipe} popular={"true"} />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </div>
  );
};

export default Popular;
