import Banner from "./Banner";
import Highest from "./Highest";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <div className="relative">

          <Banner></Banner>

          <div>
            <Highest></Highest>
          </div>
          <div>
            <Review></Review>
          </div>
            </div>
        </div>
    );
};

export default Home;