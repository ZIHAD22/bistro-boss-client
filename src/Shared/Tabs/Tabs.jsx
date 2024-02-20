import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderCard from "../../pages/Order/OrderCard/OrderCard";
import { useParams } from "react-router-dom";

const Tabs = () => {
  const { category } = useParams();
  const tabData = ["dessert", "pizza", "salad", "soup", "drinks", "offered"];

  const [activeTab, setActiveTab] = useState(0);
  const [loading, menu, filterMenu] = useMenu(tabData[activeTab]);

  useEffect(() => {
    if (category) {
      setActiveTab(tabData.indexOf(category.toLocaleLowerCase()));
    }
  }, [category]);
  if (loading) {
    return <h1>loading..........</h1>;
  }
  return (
    <div className="mx-auto px-8 sm:px-0">
      <div className="mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-max mx-auto h-12 grid grid-cols-1 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition mt-5"
        >
          <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md"></div>
          {tabData.map((item, index) => (
            <button
              key={item}
              role="tab"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex="0"
              onClick={() => {
                setActiveTab(index);
              }}
              className={`relative block h-10 px-6 tab rounded-full ${
                activeTab === index ? "bg-white border border-b-[#BB8506]" : ""
              }`}
            >
              <span
                className={`uppercase ${
                  activeTab === index ? "text-[#BB8506]" : "text-black"
                }`}
              >
                {item}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-6">
          <div role="tabpanel" id="panel-1" className="p-6 grid grid-cols-3">
            {filterMenu.map((item, index) => (
              <OrderCard
                key={index}
                img={item.image}
                name={item.name}
                price={item.price}
                recipe={item.recipe}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
