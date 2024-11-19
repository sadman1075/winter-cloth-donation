import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import HowToWorks from '../HowToWorks/HowToWorks';
import VisionForFuture from '../VisionForFuture/VisionForFuture';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HowToWorks></HowToWorks>
            <VisionForFuture></VisionForFuture>
            <Category></Category>
        </div>
    );
};

export default Home;