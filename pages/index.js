import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frescura Cafe</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <img src='coffeeHome.jpg' className={styles.topImage}></img>
      <div className={styles.con}>
        <div className={styles.mt10}></div>

        <Grid container>
          <Grid item item xs={12} sm={12} md={6}>
            <div align="center" >
              <Image src='/bro.jpg' width={250} height={280} />
            </div>
          </Grid>
          <Grid item item xs={12} sm={12} md={6}>
            <div align="center">
              <h1 className={styles.homeText1}>About</h1>
              <div className={styles.mt5}></div>
              <p className={styles.homeText2}>Our cafe is located in Mexico.</p>
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
                <Image src='/corn.jpg' width={250} height={280} />
              </div>
            </Grid>
            <Grid item item xs={12} sm={12} md={6}>
              <div align="center">
                <h1 className={styles.homeText1}>Menu</h1>
                <div className={styles.mt5}></div>
                <p className={styles.homeText2}>We serve good coffee, delicious pizza, crape  and burger.</p>
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
              <div align="center">
                <h1 className={styles.homeText1}>Menu</h1>
                <div className={styles.mt5}></div>
                <p className={styles.homeText2}>We serve good coffee, delicious pizza, crape  and burger.</p>
                <div className={styles.mt5}></div>
                <a href="/menu"><Button variant="contained" >MORE</Button>
                </a>
              </div>
            </Grid>
            <Grid item item xs={12} sm={12} md={6}>
              <div align="center" >
                <Image src='/corn.jpg' width={250} height={280} />
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={styles.mt10}></div>

        <Grid container>
          <Grid item item xs={12} sm={12} md={6}>
            <div align="center" >
              <Image src='/red.jpg' width={250} height={280} />
            </div>
          </Grid>
          <Grid item item xs={12} sm={12} md={6}>
            <div align="center">
              <h1 className={styles.homeText1}>Contact</h1>
              <div className={styles.mt5}></div>
              <p className={styles.homeText2}>If you have any question, please contact us.</p>
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