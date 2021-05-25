import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <div className={styles.con}>
      <h1 align="center" className={styles.aboutTitle}>About us</h1>
      <div>
        <h1 className={styles.aboutText1}>Frescura Cafe</h1>
        <h3 className={styles.aboutText2}>Adress : 98000, J. Jesús González Ortega 304, Sierra de Alica, Zacatecas, Zac.
         </h3> 
        <h3 className={styles.aboutText2}>Phone : +524922027288</h3>
        <h3 className={styles.aboutText2}>Open Daily : 4am - 11pm</h3> 
      </div>
      <div className={styles.mt10}></div>
      <div align="center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58862.79691870542!2d-102.5768945!3d22.7681716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824e61f5c9d62d%3A0x6f321525425d11aa!2sFrescura%20Cafe!5e0!3m2!1sja!2sca!4v1621973102410!5m2!1sja!2sca" width="300" height="300" ></iframe>
      </div>
      <div className={styles.mt10}></div>

    </div>
  );
}

export default About;