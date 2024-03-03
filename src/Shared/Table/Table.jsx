import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import client from "../../util/axios";
import useStore from "../../hooks/useStore";

const Table = ({ head, carts }) => {
  const {
    handleStoreData,
    store: { refetch },
  } = useStore();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const handleDeleteCart = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await client.delete(`/carts/${id}`);
        console.log(data);
        if (data.deletedCount === 1) {
          handleStoreData("refetch", !refetch);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="px-20">
      <div className="flex item-center justify-between text-3xl font-bold py-5">
        <h1>Total Order : {carts.length}</h1>
        <h1>Total price : ${totalPrice}</h1>
        <h1 className="btn bg-[#D1A054]">Pay</h1>
      </div>
      <div className="overflow-scroll overflow-x-hidden scroll max-h-[500px]">
        <table className="table text-center rounded-lg">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              {head.map((item, index) => (
                <th key={index}> {item.toUpperCase()} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {carts.map((item, index) => (
              <tr key={index} className="text-center">
                <th>{++index}</th>
                <td>
                  <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteCart(item.menuId)}
                    className="btn btn-error"
                  >
                    <RiDeleteBin6Line size="25px" color="white" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
