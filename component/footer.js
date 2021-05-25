import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return ( 
    <div className={styles.backGroundFooter}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <div className={styles.footerL}>
            <div className={styles.mt5}></div>
         <h2>Frescura Cafe</h2>
         <p>Adress : 98000, J. Jesús González Ortega 304, Sierra de Alica, Zacatecas, Zac.
         </p>
         <p>Phone : +524922027288</p>
         <p>Open Daily : 4am - 11pm</p>
         </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
        <div className={styles.footerR}>
        <div className={styles.mt5}></div>
        <a href="https://www.facebook.com/Frescura-Café-Zacatecas-584037125307634/"  className={styles.footerIcon}><FacebookIcon /></a>
        <a href="https://www.instagram.com/frescura_cafe_zacatecas/" ><InstagramIcon /></a>
        </div>
        </Grid>
      </Grid>
      <small align="center" className={styles.copyright}>© 2021 Frescura Cafe</small>
    </div>
   );
}
 
export default Footer;