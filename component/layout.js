import Navbar from './navbar'
import Footer from './footer'
import styles from '/styles/Home.module.css';
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className = {styles.backGround}>
       <Head>
        <title>Frescura Cafe</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Navbar />
      { children } 
      <Footer />

    </div>
    );
}
 
export default Layout;