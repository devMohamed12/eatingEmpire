import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./recipe.css";
import { Container, MainTitle } from "../Layout/ComponentsLayout";
import { apiKey, apiLink } from "../components/apiInfo";

const Recipe = () => {
  
  

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const { id } = useParams();

  const getDetails = async (id) => {
    const data = await fetch(`${apiLink}/${id}/information?apiKey=${apiKey}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

   useEffect(() => {
    getDetails(id);
  }, []);

  const buttonStyles =
    "block border-4 border-[#265050] rounded-xl mx-1 p-3 text-white ";

  return (
    <Container>
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
            className="max-w-full w-full rounded-xl "
          />
        </div>
      </div>
    </Container>
  );
};

export default Recipe;
