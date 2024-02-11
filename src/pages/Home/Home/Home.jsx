import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Banner />
      <Category />
      <PopularMenu />
      <Testimonial />
    </div>
  );
};

export default Home;
