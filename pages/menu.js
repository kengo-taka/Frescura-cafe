import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'


const Menu = () => {
  return (
    <div className={styles.con}>
      <h2 align="center" className={styles.menuTitle}>Menu</h2>
      
      <div align="center">
      <Image src='/crape3.jpg' width={400} height={340} />
      </div>

      <h2 className={styles.menuText1}>BEBIDAS</h2>

      <Grid container>
        <Grid item xs={12} sm={12} md={6}>

          <h3 className={styles.menuText2}>FRAPPES</h3>
          <div className={styles.menuText3}>
            <h4>Clásico $49</h4>
            <h4>Caramel $49</h4>
            <h4>Oreo $49</h4>
            <h4>M&M's $56</h4>
          </div>
          <h3 className={styles.menuText2}>SMOOTHIES</h3>
          <div className={styles.menuText3}>
            <h4>Lechera $49</h4>
            <h4>Fresa $49</h4>
            <h4>Plátano $49</h4>
            <h4>Blueberry $49</h4>
            <h4>Mango $49</h4>
            <h4>Ferrero $56</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h3 className={styles.menuText2}>MALTEADAS</h3>
          <div className={styles.menuText3}>
            <h4>Fresa $25</h4>
            <h4>Chocolate $25</h4>
            <h4>Vainilla $25</h4>
          </div>
          <h3 className={styles.menuText2}>OTROS</h3>
          <div className={styles.menuText3}>
            <h4>Refresco (355ml) $20</h4>
            <h4> Naranjada (regular o mineral) $25</h4>
            <h4> Limonada (regular o mineral) $25</h4>
            <h4>Agua embotellada (500ml) $15</h4>
            <h4>Agua mineral Peñafiel (600ml) $20</h4>
            <h4>Agua mineral Perrier (330ml) $30</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h2 className={styles.menuText2}>CALIENTES</h2>
          <div className={styles.menuText3}>
            <h4>Americano (café Premium) $39</h4>
            <h4>Americano refill $25</h4>
            <h4> Cappuccino $45</h4>
            <h4> Capuccino con sabor $49</h4>
            <h4>Hot chocolate (con malvaviscos) $44</h4>
            <h4>Honey Milk (con fresas, almendras y miel) $44</h4>
            <h4>Té $30</h4>
            <h4>Tisana $39</h4>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
        <h3 className={styles.menuText2}>CERVEZAS</h3>
          <div className={styles.menuText3}>
            <h4>Corona $29</h4>
            <h4>Vaso león rojo $19</h4>
            <h4>Vaso michelado $15</h4>
            <h4>Vaso chelado $15</h4>
            <h4>Orden de botana $45</h4>
          </div>
        </Grid>
      </Grid>


      <h2 className={styles.menuText1}>HAMBURGUESAS</h2>

      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h3 className={styles.menuText4}>CHICKEN BURGER $99</h3>
          <h4 className={styles.menuText3}>Deliciosa pechuga de pollo, jamon, queso americano, queso chihuahua y verdura</h4>

          <h3 className={styles.menuText4}>CHAMPI BURGER $99</h3>
          <h4 className={styles.menuText3}>Deliciosa carne de res, champiñones, queso crema, queso americano y verdura</h4>

          <h3 className={styles.menuText4}>AMERICAN BURGER $99</h3>
          <h4 className={styles.menuText3}>Deliciosa carne de res, jamón, doble queso amarillo y verduras</h4>

          <h3 className={styles.menuText4}>BACON BURGER $99</h3>
          <h4 className={styles.menuText3}>Deliciosa carne de res, tocino ahumado, queso americano, queso chihuahua y verdura</h4>

          <h3 className={styles.menuText4}>FRESCURA BURGER $99</h3>
          <h4 className={styles.menuText3}>Deliciosa carne de res, jamón, queso americano, queso chihuahua y verdura</h4>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
<div className={styles.mt10}></div>
        <div align="center" >
        <Image src='/beer.jpg' width={220} height={300} />
      </div>
        </Grid>
      </Grid>

      <h2 className={styles.menuText1}>DESAYUNOS</h2>

      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h3 className={styles.menuText4}>CHILAQUILES $99</h3>
          <h4 className={styles.menuText3}>Rojos o verdes, acompañados de huevos estrellados y frijoles<br></br>Con pollo + $15</h4>

          <h3 className={styles.menuText4}>OMELETTE $99</h3>
          <h4 className={styles.menuText3}>Con base de queso más dos ingredientes a elegir: jamón, tocino, salchicha, champiñón. pimiento o cebolla</h4>

          <h3 className={styles.menuText4}>HUEVOS AL GUSTO $99</h3>
          <h4 className={styles.menuText3}>Divorciados, a la mexicana o revueltos con dos ingredientes</h4>

          <h3 className={styles.menuText4}>HOT CAKES $99</h3>
          <h4 className={styles.menuText3}> Ingrediente principal a elegir: Nutella, cajeta, lechera o miel de maple <br></br>Dos topping a elegir: fresas, durazno, plátano, nuez, almendras o M&m's</h4>

        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={styles.mt10}></div>
        <div align="center" >
        <Image src='/coffee.jpg' width={250} height={370} />
      </div>
        </Grid>
      </Grid> 


      <h2 className={styles.menuText1}>PIZZAS</h2>
      <p className={styles.menuText3}>Chica: 30cm - Grande: 40cm</p>

      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h3 className={styles.menuText4}>Pepperoni y champiñones</h3>
          <p className={styles.menuText3}>Chica $99, Grande $144</p>
          <h3 className={styles.menuText4}>Hawaiana</h3>
          <p className={styles.menuText3}>Chica $99, Grande $139</p>
          <h4 className={styles.menuText3}>(jamón y piña)</h4>

          <h3 className={styles.menuText4}>Freschezza</h3>
          <p className={styles.menuText3}>Chica $99, Grande $139</p>
          <h4 className={styles.menuText3}>(champiñon, pimiento, jitomate, cebolla y aceituna)</h4>

          <h3 className={styles.menuText4}>Cuatro quesos</h3>
          <p className={styles.menuText3}>Chica $89, Grande $139</p>
          <h4 className={styles.menuText3}>(Queso crema, chihuahua, americano y parmesano)</h4>

          <h3 className={styles.menuText4}>Chicken BBO</h3>
          <p className={styles.menuText3}>Chica $139, Grande $209</p>
          <h4 className={styles.menuText3}>(fajitas de pollo, jamón, cebolla morada, champiñón y nuestra rica salsa BBO)</h4>

          <h3 className={styles.menuText4}>Chipocrema</h3>
          <p className={styles.menuText3}>Chica $129, Grande $199</p>
          <h4 className={styles.menuText3}>(fajitas de pollo, tocino, champiñones, jitomate y nuestra famosa salsa Chipocrema)</h4>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h3 className={styles.menuText4}>Prime</h3>
          <p className={styles.menuText3}>Chica $149, Grande $219</p>
          <h4 className={styles.menuText3}>(champiñones, pimiento, jitomate, pepperoni, cebolla morada, aceitunas, salchicha, jamón y tocino) </h4>

          <h3 className={styles.menuText4}>Carnival</h3>
          <p className={styles.menuText3}>Chica $129, Grande $199</p>
          <h4 className={styles.menuText3}>(pepperoni, salchicha, tocino y jamón)</h4>

          <h3 className={styles.menuText4}>Pastor</h3>
          <p className={styles.menuText3}>Chica $139, Grande $209</p>
          <h4 className={styles.menuText3}>(carne al pastor. piña, cebolla y cilantro) </h4>

          <h3 className={styles.menuText4}>Española</h3>
          <p className={styles.menuText3}>Chica $149, Grande $219</p>
          <h4 className={styles.menuText3}>(jamón serrano, queso crema, jitomate y albahaca)</h4>

          <h3 className={styles.menuText4}>Del mar</h3>
          <p className={styles.menuText3}>Chica $149, Grande $219</p>
          <h4 className={styles.menuText3}>(camarones, aguacate y cebolla morada)</h4>

        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <div align="center">
        <Image src='/crape1.jpg' width={400} height={340} />
        </div>
        <div className={styles.mt5}></div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
        <div align="center">
        <Image src='/crape2.jpg' width={400} height={340} />
        </div>
        </Grid>

      </Grid>

      <h2 className={styles.menuText1}>CREPAS</h2>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h2 className={styles.menuText2}>DULCES</h2>
          <p className={styles.menuText3}>(1 o 2 ingredientes a elegir) $59</p>
          <p className={styles.menuText3}>*Ingrediente extra: $10</p>
          <div className={styles.menuText3}>
          <h3>Nutella</h3>
          <h3>Fresas</h3>
          <h3>Cajeta</h3>
          <h3>Lechera</h3>
          <h3>Durazno</h3>
          <h3>Plátano</h3>
          <h3>Queso crema</h3>
          <h3>Nuez</h3>
          <h3>Almendras</h3>
          <h3>M&m's</h3>
          <h3>Mermelada de fresa o zarzamora</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h2 className={styles.menuText2}>SALADAS</h2>
          <p className={styles.menuText3}>Queso mas 1 ingrediente a elegir) $65</p>
          <p className={styles.menuText3}>*Ingrediente extra: $15</p>
          <div className={styles.menuText3}>
          <h3>Pollo</h3>
          <h3>Salchicha</h3>
          <h3>Jamón</h3>
          <h3>Pepperoni</h3>
          <h3>Jamón serrano</h3>
          <h3>Champiñones</h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Menu;