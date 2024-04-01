import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MainTitle, RecipesMarquee } from "../components/Export";
import { apiKey, apiLink } from "../components/apiInfo";
import { PacmanLoader } from "react-spinners";

const Recipe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  const { id } = useParams();
  const location = useLocation();
  const category = location.state?.category || "dessert";

  const getDetails = async (id) => {
    const data = await fetch(`${apiLink}/${id}/information?apiKey=${apiKey}`);
    const detailData = await data.json();
    setDetails(detailData);
    setIsLoading(false);
  };

  const getSuggestedRecipes = async () => {
    const checkRecipes = sessionStorage.getItem(`${category}`);
    if (checkRecipes) {
      setSuggestedRecipes(JSON.parse(checkRecipes));
    } else {
      const api = await fetch(
        `${apiLink}/random?apiKey=${apiKey}&number=10&tags=${category}`
      );
      const { recipes } = await api.json();
      setSuggestedRecipes(recipes);
      sessionStorage.setItem(`${category}`, JSON.stringify(recipes));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getDetails(id);
    getSuggestedRecipes();
    scrollToTop();
  }, [id]);

  const buttonStyles =
    "block border-4 border-[#265050] rounded-xl mx-1 p-3 text-white ";

  return isLoading ? (
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
    <div>
      <div className="flex justify-evenly gap-5 flex-col-reverse sm:flex-col-reverse lg:flex-row  pb-5">
        <div className="w-full sm:w-full lg:w-2/5">
          <MainTitle content={details.title} />

          <div className="flex my-4">
            <button
              onClick={() => {
                setActiveTab("instructions");
              }}
              className={`${
                activeTab === "instructions" ? "activeTab" : ""
              } ${buttonStyles}`}
            >
              instructions
            </button>
            <button
              onClick={() => {
                setActiveTab("ingredients");
              }}
              className={`${
                activeTab === "ingredients" ? "activeTab" : ""
              } ${buttonStyles}`}
            >
              ingredients
            </button>
          </div>

          <div className="text-white leading-loose">
            {activeTab === "instructions" && (
              <>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                <p
                  className="py-5"
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></p>
              </>
            )}
            {activeTab === "ingredients" && (
              <>
                <ul>
                  {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>
                      <span>{ingredient.name}</span>
                      <span>
                        {ingredient.amount} {ingredient.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="w-full sm:w-full lg:w-2/5 lg:translate-y-32">
          <img
            src={details.image}
            alt={details.title}
            className="max-w-full w-full rounded-xl"
          />
        </div>
      </div>

      <div className="mt-16">
        <RecipesMarquee
          recipeCategory={category}
          suggestedRecipes={suggestedRecipes}
        />
      </div>
    </div>
  );
};

export default Recipe;
