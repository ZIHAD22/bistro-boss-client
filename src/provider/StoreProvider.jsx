import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    tabData: ["dessert", "pizza", "salad", "soup", "drinks", "offered"],
    tabCategory: "",
    activeTab: 0,
  });

  const handleStoreData = (name, value) => {
    setStore((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  console.log(store);

  const storeInfo = {
    store,
    handleStoreData,
  };
  return (
    <StoreContext.Provider value={storeInfo}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
