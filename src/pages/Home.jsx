import { Categories, Popular, RecipeCarousel } from "../components/Export";

const Home = () => {
  const recipeCategories = ["breakfast", "dessert", "snack"];
  const carousels = recipeCategories.map((text, idx) => (
    <RecipeCarousel recipeCategory={text} key={idx} />
  ));
  return (
    <>
      <h3 className="w-fit mx-auto mt-3 text-white text-center text-2xl">
        we here offer best recipe <br />
        from all over the world
      </h3>
      <Categories />
      <div>
        <Popular />
        {carousels}
      </div>
    </>
  );
};

export default Home;
