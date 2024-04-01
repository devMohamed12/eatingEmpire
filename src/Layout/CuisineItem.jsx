const CuisineItem = ({ recipe }) => (
  <div className="bg-[#ECEBE2]  w-full border-2 border-solid border-black rounded-md pb-6 h-full ">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="block max-w-full w-full"
    />
    <div className="p-5">
      <h5 className=" font-bold tracking-[2px]">{recipe.title}</h5>
      <p className="text-xs text-gray-500"> {recipe.totalTime || 5} mins</p>
    </div>
  </div>
);

export default CuisineItem;
