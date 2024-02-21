import { useEffect } from "react";
import useMenu from "../../hooks/useMenu";
import OrderCard from "../../pages/Order/OrderCard/OrderCard";
import Loading from "../Loading/Loading";
import useStore from "../../hooks/useStore";

const Tabs = () => {
  const {
    store: { tabData, tabCategory, activeTab },
    handleStoreData,
  } = useStore();
  const [loading, menu, filterMenu] = useMenu(tabData[activeTab]);
  menu.length;
  useEffect(() => {
    if (tabCategory) {
      handleStoreData(
        "activeTab",
        tabData.indexOf(tabCategory.toLocaleLowerCase())
      );
    }
  }, [tabCategory]);
  if (loading) {
    return <Loading hight="h-[550px]" />;
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
                handleStoreData("activeTab", index);
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
            {loading ? (
              <Loading hight="h-[550px]" />
            ) : (
              filterMenu.map((item, index) => (
                <OrderCard key={index} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
