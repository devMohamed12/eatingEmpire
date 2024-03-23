const CuisineItem = ({ recipe, test }) => {
  const cuz1 = (
    <div className="w-full relative  rounded-2xl cursor-pointer">
      <div className="w-full h-full bg-[#26262582] opacity-50 absolute top-0 left-0  rounded-2xl"></div>
      <div className="w-full text-white text-center  text-lg  absolute z-50 bottom-3 ">
        <h5>{recipe.title}</h5>
      </div>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-2xl max-w-full w-full"
      />
    </div>
  );

  const cuz2 = (
    <div className="bg-white w-full border-2 border-solid border-black pb-6 h-full">
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
  return !test ? cuz1 : cuz2;
};

export default CuisineItem;
