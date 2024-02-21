import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderCard = ({ item }) => {
  const { image, name, price, recipe } = item;

  // hooks:
  const location = useLocation();
  const navigation = useNavigate();
  const { user } = useContext(AuthContext);

  // function:
  const handleAddToCard = () => {
    if (!user?.uid) {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigation("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-10">
      <figure className="">
        <img src={image} alt="card" />
        <span className="absolute top-4 right-10 bg-[#111827] py-1 px-2 text-white">
          ${price}
        </span>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p> {recipe} </p>
        <div className="text-center mt-4">
          <button
            onClick={handleAddToCard}
            className="btn btn-outline uppercase border-2 px-8"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
