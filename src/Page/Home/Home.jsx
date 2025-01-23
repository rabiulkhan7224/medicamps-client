import Banner from "./Banner";
import Highest from "./Highest";

const Home = () => {
    return (
        <div>
            <div className="relative">

          <Banner></Banner>

          <div>
            <Highest></Highest>
          </div>
            </div>
        </div>
    );
};

export default Home;