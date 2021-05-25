import Button from '@material-ui/core/Button'
import styles from '../styles/Home.module.css'

const Contact = () => {
  return ( 
  <div>
<h1 align="center" className={styles.contactTitle}>Contact</h1>
<div className={styles.mt10}></div>
<div align="center">
<a href="mailto:1117marine1117@gmail.com"><Button variant="contained" >Send a message</Button></a>
</div>
<div className={styles.mt10}></div>
  </div> );
}
 
export default Contact;