import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Banner />
      <Category />
      <PopularMenu />
    </div>
  );
};

export default Home;
