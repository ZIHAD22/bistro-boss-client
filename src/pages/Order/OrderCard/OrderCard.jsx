const OrderCard = ({ img, name, price, recipe }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-10">
      <figure className="">
        <img src={img} alt="Shoes" />
        <span className="absolute top-4 right-10 bg-[#111827] py-1 px-2 text-white">
          ${price}
        </span>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p> {recipe} </p>
        <div className="text-center mt-4">
          <button className="btn btn-outline uppercase border-2 px-8">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
