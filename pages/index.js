import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"


export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // title animation
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: {
      scale: 0,
      y: 300
    },
    visible: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5
      },
    }
  }

  return (
    <div>
     
      <div className={styles.parent}>
        <img src='coffeeHome.jpg' className={styles.topImage}></img>
        {/* <div className={styles.animate}>
          <span>H</span><span>o</span><span>l</span><span>a</span> &nbsp;
			<span>A</span><span>m</span><span>i</span><span>g</span><span>o</span><span>s</span><span>!</span>
        </div> */}
      </div>
      <div className={styles.con}>



        <div className={styles.mt10}></div>


        <Grid container>
          <Grid item item xs={12} sm={12} md={6}>
            <div align="center" >
              <Image src='/crape1.jpg' width={250} height={220} data-aos="fade-up"/>
            </div>
          </Grid>
          <Grid item item xs={12} sm={12} md={6}>
            <div align="center" data-aos="fade-up">
              <h1 className={styles.homeText1}>Sobre</h1>
              <div className={styles.mt5}></div>
              <h3 className={styles.homeText2}>En nuestra instalación tenemos el placer de ofrecerte Crepería, Pizzería y Cafetería. Tendras la oportunidad de probar nuestras ricas Crepas con el toque Francés y nuestras Pizzas con el toque Italiano. </h3>
              <div className={styles.mt5}></div>
              <a href="/about"><Button variant="contained" >MORE</Button>
              </a>
            </div>
          </Grid>
        </Grid>

        <div className={styles.mt10}></div>

        <div className={styles.gridForSmall}>
          <Grid container >
            <Grid item item xs={12} sm={12} md={6}>
              <div align="center" >
                <Image src='/crape2.jpg' width={250} height={220} data-aos="fade-up"/>
              </div>
            </Grid>
            <Grid item item xs={12} sm={12} md={6}>
              <div align="center" data-aos="fade-up">
                <h1 className={styles.homeText1}>Menú</h1>
                <div className={styles.mt5}></div>
                <h3 className={styles.homeText2}>CHICKEN BURGER $99</h3>
                <h3 className={styles.homeText2}>AMERICAN BURGER $99</h3>
                <h3 className={styles.homeText2}>Clásico $49</h3>
                <h3 className={styles.homeText2}>Lechera $49</h3>
                <div className={styles.mt5}></div>
                <a href="/menu"><Button variant="contained" >MORE</Button>
                </a>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={styles.gridForBig}>
          <Grid container>
            <Grid item item xs={12} sm={12} md={6}>
              <div align="center" data-aos="fade-up">
                <h1 className={styles.homeText1}>Menú</h1>
                <div className={styles.mt5}></div>
                <h3 className={styles.homeText2}>CHICKEN BURGER $99</h3>
                <h3 className={styles.homeText2}>AMERICAN BURGER $99</h3>
                <h3 className={styles.homeText2}>Clásico $49</h3>
                <h3 className={styles.homeText2}>Lechera $49</h3>
                <div className={styles.mt5}></div>
                <a href="/menu"><Button variant="contained" >MORE</Button>
                </a>
              </div>
            </Grid>
            <Grid item item xs={12} sm={12} md={6}>
              <div align="center" >
                <Image src='/crape2.jpg' width={250} height={220} data-aos="fade-up"/>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={styles.mt10}></div>

        <Grid container>
          <Grid item item xs={12} sm={12} md={6}>
            <div align="center" >
              <Image src='/crape3.jpg' width={250} height={220} data-aos="fade-up"/>
            </div>
          </Grid>
          <Grid item item xs={12} sm={12} md={6}>
            <div align="center" data-aos="fade-up">
              <h1 className={styles.homeText1}>Contacto</h1>
              <div className={styles.mt5}></div>
              <h3 className={styles.homeText2}>Estamos acá para resolver cualquier duda que tengas. ¡Ponte en contacto con nosotros¡
</h3>
              <div className={styles.mt5}></div>
              <a href="/contact"><Button variant="contained" >MORE</Button></a>
            </div>
          </Grid>
        </Grid>
        <div className={styles.mt10}></div>

      </div>
    </div>
  )
}