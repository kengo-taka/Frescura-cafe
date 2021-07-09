import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Aos from "aos";
import "aos/dist/aos.css"
import React, { useEffect } from 'react';


const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.con}>
      <h1 align="center" className={styles.aboutTitle}>Sobre nosotros</h1>
      <div>
        <h3 className={styles.aboutText1} data-aos="fade-up">¡Estas bienvenido a nuestro Café¡
        En nuestra instalacion tenemos el placer de ofrecerte Crepería, Pizzería y Cafetería. Tendras la oportunidad de probar nuestras ricas Crepas con el toque Francés y nuestras Pizzas con el toque Italiano. ¡Te encantarán¡</h3>
      </div>
     <div className={styles.mt10}></div>
     <div align="center" className={styles.chef}>
     <Image src='/chef.png' width={300} height={300} data-aos="zoom-in"/>
     </div>
     <div className={styles.mt10}></div>
     <h1 align="center" className={styles.textChef} data-aos="fade-up">Head chef</h1>
     <div className={styles.mt5}></div>
     <div align="center">
     <div className={styles.chefComent} >
     <h3 data-aos="fade-up">Estamos interesados en recibirte con la mejor atención,por eso todas nuestras comidas entán hechas con alimentos frescos para una mejor degustación. A demás tendrás la oportunidad de disfrutar y sentirte a gusto en nuestra instalación. ¡Te esperamos!</h3>
     </div>
     </div>
     <div className={styles.mt10}></div>

    </div>
  );
}

export default About;