import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Table from "../../../Shared/Table/Table";
import useStore from "../../../hooks/useStore";

const Cart = () => {
  // hooks
  const {
    store: { carts },
  } = useStore();

  // table Head
  const tableHead = ["#", "item image", "name", "price", "action"];

  return (
    <div className="">
      <SectionTitle
        subHeading="my cart"
        mainHeading="WANNA ADD MORE?"
        margen="mt-6 mb-14"
      />
      {carts.length === 0 ? (
        <h1 className="flex justify-center items-center text-6xl">No Order</h1>
      ) : (
        <Table head={tableHead} carts={carts} />
      )}
    </div>
  );
};

export default Cart;
