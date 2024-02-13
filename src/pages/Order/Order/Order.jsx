import Cover from "../../../Shared/Cover/Cover";
import Tabs from "../../../Shared/Tabs/Tabs";
import oderCoverImg from "../../../assets/shop/banner2.jpg";

const Order = () => {
  return (
    <div>
      <Cover
        img={oderCoverImg}
        title="Order Food"
        des="Would you like to try a dish?"
      />
      <Tabs />
    </div>
  );
};

export default Order;
