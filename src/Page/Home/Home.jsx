import Banner from "./Banner";
import Contact from "./Contact";
import FQA from "./FQA";
import FreeTeatmeants from "./FreeTeatmeants";
import Highest from "./Highest";
import Review from "./Review";
import Step from "./Step";

const Home = () => {
    return (
        <div>
            <div className="">

          <Banner></Banner>
                              
          <div>
            <Highest></Highest>
          </div>
          <FQA></FQA>

          <div>
            <FreeTeatmeants></FreeTeatmeants>
          </div>
          <div>
            <Step></Step>
          </div>
          <div>
            <Review></Review>
          </div>
          <div >
            <Contact></Contact>
          </div>
            </div>
        </div>
    );
};

export default Home;