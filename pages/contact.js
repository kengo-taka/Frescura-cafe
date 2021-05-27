import Button from '@material-ui/core/Button'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Contact = () => {
  return ( 
  <div>
<h1 align="center" className={styles.contactTitle}>Contact</h1>
<div className={styles.mt10}></div>
<div align="center">
<div className={styles.mt10}></div>
        <div align="center" >
        <Image src='/veg.jpg' width={250} height={370} />
      </div>
      <div className={styles.mt10}></div>
<a href="mailto:1117marine1117@gmail.com"><Button variant="contained" >Send a message</Button></a>
</div>
<div className={styles.mt10}></div>
  </div> );
}
 
export default Contact;