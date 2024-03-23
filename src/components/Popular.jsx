import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  {Container,CuisineItem,MainTitle} from "../Layout/ComponentsLayout"
import { apiKey, apiLink } from "./apiInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";


const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => { getPopular() }, []);
  
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
  };


  return (
    <div className="my-11">
      <Container>
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
              <Link to={`/recipe/${recipe.id}`} className="h-[400px] block">
                <CuisineItem recipe={recipe} test={"true"} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </div>
  );
};

export default Popular;
