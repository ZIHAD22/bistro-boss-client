import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import coverImg1 from "../../../assets/menu/banner3.jpg";
import coverImg2 from "../../../assets/menu/dessert-bg.jpeg";
import coverImg3 from "../../../assets/menu/pizza-bg.jpg";
import coverImg4 from "../../../assets/menu/salad-bg.jpg";
import coverImg5 from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../menuCategory/menuCategory";

const Menu = () => {
  const [loading, menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const sopus = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  if (loading) {
    return <h1>loading.....</h1>;
  }

  return (
    <div className="">
      <div>
        {/* main cover */}
        <MenuCategory
          filterMenu={offered}
          title="Our Menu"
          des="Would you like to try a dish?"
          menuImg={coverImg1}
          sectionTitle={true}
        />
      </div>
      <div>
        {/* dessert */}
        <MenuCategory
          filterMenu={desserts}
          title="DESSERTS"
          menuImg={coverImg2}
        />
      </div>
      <div>
        {/* pizza */}
        <MenuCategory filterMenu={pizzas} title="PIZZA" menuImg={coverImg3} />
      </div>
      <div>
        {/* salad */}
        <MenuCategory filterMenu={salads} title="SALADS" menuImg={coverImg4} />
      </div>
      <div>
        {/* soup */}
        <MenuCategory filterMenu={sopus} title="SOUPS" menuImg={coverImg5} />
      </div>
    </div>
  );
};

export default Menu;
