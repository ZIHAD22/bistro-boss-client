import { useEffect } from "react";
import { useState } from "react";

const useMenu = (filterName) => {
  const [menu, setMenu] = useState([]);
  const [filterNameMenu, setfilterNameMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      const fetchData = await fetch("http://localhost:5000/menu");
      const result = await fetchData.json();
      if (filterName) {
        const filterNameResult = result.filter(
          (item) => item.category === filterName
        );
        setfilterNameMenu(filterNameResult);
        setLoading(false);
      } else {
        setMenu(result);
        setLoading(false);
      }
    };

    loadData();
  }, [filterName]);

  return [loading, menu, filterNameMenu];
};

export default useMenu;
