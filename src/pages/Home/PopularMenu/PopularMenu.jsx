import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [loading, menu, filterMenu] = useMenu("popular");
  menu.length;
  return (
    <div className="mb-8">
      <SectionTitle subHeading="Check it out" mainHeading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-4">
        {loading ? (
          <h1>loading......</h1>
        ) : (
          <>
            {filterMenu.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </>
        )}
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
