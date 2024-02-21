import { useContext } from "react";
import { StoreContext } from "../provider/StoreProvider";

const useStore = () => {
  const store = useContext(StoreContext);
  return store;
};

export default useStore;
