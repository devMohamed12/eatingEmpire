export const apiKey = "3400d99e77724ee58507340aaed0e9fc";
export const apiLink = "https://api.spoonacular.com/recipes";

export const getData = async (param) => {
  const response = await fetch(
    `${apiLink}/random?apiKey=${apiKey}&${param}`
  );
  const   recipes = await response.json();
  console.log(recipes , "test rec");
  console.log(param , "test param");

  return recipes;
};

// const getRecipes = async () => {
//
//     // fetch recipes from API and store in session storage
//
//     const { recipes } = await api.json();
//     setRecipes(recipes);
//     sessionStorage.setItem(`${recipeCategory}`, JSON.stringify(recipes));
//   }
//   // set loading state to false when recipes are fetched
//   setIsLoading(false);

// //   const getDetails = async (id) => {
//     const data = await fetch(`${apiLink}/${id}/information?apiKey=${apiKey}`);
//     const detailData = await data.json();
//     setDetails(detailData);
//   };
