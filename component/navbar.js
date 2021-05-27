import styles from '/styles/Home.module.css';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navbar = () => {
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

        <a href="#about"><h3 className={styles.fontFrescure}>Frescura-Cafe</h3></a>

      {/* navbar for big screen */}
      <div className={styles.navbarRight}>
      <a href="/" className={styles.navItem}><h3>
          HOME</h3></a>
        <a href="/about" className={styles.navItem}><h3>
          ABOUT</h3></a>
        <a href="/menu" className={styles.navItem}><h3>
          MENU</h3></a>
        <a href="/contact" className={styles.navItem}><h3>
          CONTACT</h3></a>
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
          <MenuItem onClick={handleClose}><a href="/about">About</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="/menu">Menu</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="/contact">Contact</a></MenuItem>
        </Menu>
      </div>


    </div>
  );
}
 
export default Navbar;