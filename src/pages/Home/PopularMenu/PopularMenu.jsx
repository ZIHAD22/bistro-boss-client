import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import loadData from "../../../util/asyncEffectFun";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  const [reEffect, setReEffect] = useState(false);
  const [popularItem, setPopularItem] = useState([]);
  useEffect(() => {
    loadData("menu.json", setMenu, setReEffect);
    if (menu) {
      const filterPopularItem = menu.filter(
        (items) => items.category === "popular"
      );
      setPopularItem(filterPopularItem);
    }
  }, [reEffect]);

  return (
    <div className="mb-8">
      <SectionTitle subHeading="Check it out" mainHeading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-4">
        {popularItem.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline border-0 border-b-2 btn-lg px-20">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
