import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Loading from "../../../Shared/Loading/Loading";

const MenuCategory = ({
  filterMenu,
  menuImg,
  title,
  des,
  sectionTitle,
  loading,
}) => {
  // if (loading) {
  //   return <h1>loading.....</h1>;
  // }
  //   console.log(filterMenu);
  return (
    <div>
      {title && (
        <Cover
          img={menuImg}
          title={title}
          des={
            des
              ? des
              : "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      )}
      {sectionTitle && (
        <SectionTitle mainHeading="TODAY'S OFFER" subHeading="Don't miss" />
      )}
      {loading ? (
        <Loading hight="h-[150px]" />
      ) : (
        <div className="grid md:grid-cols-2 gap-4 my-10">
          {filterMenu.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      )}
      <div className="text-center mt-4 mb-5">
        <Link to={`/order/${title === "Our Menu" ? "offered" : title}`}>
          <button className="btn btn-outline border-0 border-b-2 btn-lg px-20">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
