const MenuItem = ({ item: { name, image, price, recipe } }) => {
  return (
    <div className="flex space-x-4 mr-10">
      <img
        className="w-[110px] h-[104px]"
        style={{ borderRadius: "0px 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h1 className="text-2xl mt-4 text-[#151515] uppercase mb-3">
          {name} ------------------
        </h1>
        <p className="text-base text-[#737373]">{recipe}</p>
      </div>
      <span className="text-xl text-[#BB8506]">${price}</span>
    </div>
  );
};

export default MenuItem;
