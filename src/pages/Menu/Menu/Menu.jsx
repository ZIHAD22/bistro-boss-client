import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  return (
    <div className="">
      <Cover img={menuImg} />
    </div>
  );
};

export default Menu;
