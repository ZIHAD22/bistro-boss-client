import { createContext, useContext, useEffect, useState } from "react";
import client from "../util/axios";
import { AuthContext } from "./AuthProvider";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
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
      if (user?.uid) {
        console.log(user, "in");
        const { data } = await client(`carts/${user.email}`);
        if (data) {
          handleStoreData("carts", data);
        }
      }
    };
    initalPreCarts();
    // return () => {
    //   initalPreCarts();
    // };
  }, [store.refetch, user]);

  return (
    <StoreContext.Provider value={storeInfo}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
