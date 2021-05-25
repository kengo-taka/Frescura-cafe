import Navbar from './navbar'
import Footer from './footer'
import styles from '/styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    <div className = {styles.backGround}>
      <Navbar />
      { children } 
      <Footer />

    </div>
    );
}
 
export default Layout;