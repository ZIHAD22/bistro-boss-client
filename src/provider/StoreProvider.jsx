import { createContext, useEffect, useState } from "react";
import client from "../util/axios";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    tabData: ["dessert", "pizza", "salad", "soup", "drinks", "offered"],
    carts: [],
    tabCategory: "",
    activeTab: 0,
    refetch: true,
  });

  const handleStoreData = (name, value) => {
    setStore((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleArrayStore = (name, value) => {
    // const dataName = carts;

    setStore((pre) => {
      const dataName = pre[name];

      return {
        ...pre,
        [name]: [...dataName, value],
      };
    });
  };

  console.log(store);

  const storeInfo = {
    store,
    handleStoreData,
    handleArrayStore,
  };

  useEffect(() => {
    const initalPreCarts = async () => {
      const { data } = await client("carts");
      if (data) {
        handleStoreData("carts", data);
      }
    };
    return () => {
      initalPreCarts();
    };
  }, [store.refetch]);

  return (
    <StoreContext.Provider value={storeInfo}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
