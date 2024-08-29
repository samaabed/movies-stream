import MainContent from "../../components/Home/MainContent";
import Navbar from "../../components/Home/Navbar";
import LeftSidebar from "../../components/Home/LeftSidebar"
import styles from './HomePage.module.css'
import RightSidebar from "../../components/Home/RightSidebar/RightSidebar";

const Home = () => {
  return (
    <div className={styles.HomeLayout}>
     <LeftSidebar />
      <div className={styles.middleContentLayout}>
        <Navbar />
        <MainContent />
      </div>
     <RightSidebar />

    </div>
  );
};

export default Home;
