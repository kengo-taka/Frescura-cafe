import styles from '/styles/Home.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Image from 'next/image'
import Aos from "aos";
import "aos/dist/aos.css"
import React, { useEffect } from 'react';


const Navbar = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // for button menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (  
    <div className={styles.navbar}>

        <a href="/" className={styles.logo}><Image src='/logo.png' width={150} height={80}/></a>
       {/* <div className={styles.logo}>
        <Image src='/logo.png' width={100} height={70} />
        </div> */}
  
      {/* navbar for big screen */}
      <div className={styles.navbarRight}>
      <a href="/" className={styles.navItem}><h3>
          HOME</h3></a>
        <a href="/about" className={styles.navItem}><h3>
          SOBRE</h3></a>
        <a href="/menu" className={styles.navItem}><h3>
          MENÚ</h3></a>
        <a href="/contact" className={styles.navItem}><h3>
          CONTACTO</h3></a>
      </div>

      {/* navbar for small screen */}
      <div className={styles.navbarRightSmall}>
        <MenuIcon style={{ fontSize: 30, color: "white" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
           <MenuItem onClick={handleClose}><a href="/">Home</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="/about">Sobre</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="/menu">Menú</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="/contact">Contacto</a></MenuItem>
        </Menu>
      </div>


    </div>
  );
}
 
export default Navbar;