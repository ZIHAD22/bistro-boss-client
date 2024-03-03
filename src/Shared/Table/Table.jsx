import { RiDeleteBin6Line } from "react-icons/ri";

const Table = ({ head, carts }) => {
  return (
    <div className="overflow-scroll overflow-x-hidden scroll max-h-[500px] px-20">
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
                <button className="btn btn-error">
                  <RiDeleteBin6Line size="25px" color="white" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
