<template>
  <!-- MENU HEADING -->
  <div class="number-flex reveal">
    <span></span>
    <p>01</p>
    <span></span>
  </div>

  <h1 class="menu-heading reveal">
    Menu Highlights
  </h1>

  <div class="heding-line"></div>

  <p class="menu-para">
    Curated from the world's finest single-origin estates, roasted in-house
    <br />
    weekly.
  </p>


  <!-- PRODUCTS SECTION -->
  <div class="coffee-cards">

    <!-- CARD 1 -->
    <div class="coffee-card reveal">

      <div class="card-image">
        <img src="@/assets/card 1.jpg" alt="Gold Caramel Latte" />
        <span class="badge">BESTSELLER</span>
      </div>

      <div class="card-content">

        <h2>Gold Caramel Latte</h2>

        <p>
          House-made caramel drizzle, steamed whole milk
        </p>

        <div class="card-bottom">
          <h3>Rs. 550</h3>
          <router-link to="shop"><button>ORDER</button></router-link>
        </div>

      </div>

    </div>


    <!-- CARD 2 -->
    <div class="coffee-card reveal">

      <div class="card-image">
        <img src="@/assets/card-2.jpg" alt="Velvet Mocha" />
        <span class="badge">SIGNATURE</span>
      </div>

      <div class="card-content">

        <h2>Velvet Mocha</h2>

        <p>
          Rich espresso, dark chocolate, silky milk foam
        </p>

        <div class="card-bottom">
          <h3>Rs. 650</h3>
          <router-link to="shop"><button>ORDER</button></router-link>
        </div>

      </div>

    </div>


    <!-- CARD 3 -->
    <div class="coffee-card reveal">

      <div class="card-image">
        <img src="@/assets/card-4.jpg" alt="Velvet Mocha" />
        <span class="badge">SIGNATURE</span>
      </div>

      <div class="card-content">

        <h2>Velvet Mocha</h2>

        <p>
          Rich espresso, dark chocolate, silky milk foam
        </p>

        <div class="card-bottom">
          <h3>Rs. 650</h3>
          <router-link to="shop"><button>ORDER</button></router-link>
        </div>

      </div>

    </div>


    <!-- CARD 4 -->
    <div class="coffee-card reveal">

      <div class="card-image">
        <img src="@/assets/card-3.jpg" alt="Vanilla Cold Brew" />
        <span class="badge">POPULAR</span>
      </div>

      <div class="card-content">

        <h2>Vanilla Cold Brew</h2>

        <p>
          Slow-steeped coffee, vanilla bean, creamy cold foam
        </p>

        <div class="card-bottom">
          <h3>Rs. 590</h3>
          <router-link to="shop"><button>ORDER</button></router-link>
        </div>

      </div>

    </div>

  </div>


  <!-- VIEW FULL MENU BUTTON -->
  <router-link to="shop"><button class="view-menu-button reveal">
    VIEW FULL MENU ↪
  </button></router-link>


  <!-- LIKE NEWSLETTER -->
  <div class="like-newsletter">

    <!-- FEATURE 1 -->
    <div class="feature-box">

      <h1>☕</h1>

      <h1 class="heading reveal">
        Single-Origin
      </h1>

      <p class="para reveal">
        Sourced directly from estates in Ethiopia, Colombia, and Sumatra-
        <br />
        traceable from farm to cup.
      </p>

    </div>


    <!-- FEATURE 2 -->
    <div class="feature-box">

      <h1>🔥</h1>

      <h1 class="heading reveal">
        Artisan Roasting
      </h1>

      <p class="para reveal">
        Small batch roasted in-house every Tuesday. The freshest cup in the city,
        <br />
        guaranteed.
      </p>

    </div>


    <!-- FEATURE 3 -->
    <div class="feature-box">

      <h1>✦</h1>

      <h1 class="heading reveal">
        Bespoke Experience
      </h1>

      <p class="para reveal">
        Our trained baristas craft each order with precision, patience, and a
        <br />
        genuine love for the craft.
      </p>

    </div>

  </div>


  <!-- QUOTE SECTION -->
  <div class="sheik-div reveal">

    <p class="couts">
      "
    </p>

    <p class="sheik-para reveal">
      Coffee is the common man's gold, and like gold, it brings to
      <br />
      every person the feeling of luxury and nobility..
    </p>

    <p class="subtitle-sheik reveal">
      — Sheik-Abd-al-Kadir
    </p>

  </div>


  <!-- VISIT US SECTION -->
  <div class="backgroung-img reveal">

    <div class="visit-img-flex reveal">

      <h1>
        Visit Us Today
      </h1>

      <p class="reveal">
        14 Roasters Lane, F-6, Faislabad.
        Walk in, sit down, and let the aroma do the rest.
      </p>

      <button class="button reveal">
        GET DIRECTIONS
      </button>

    </div>

  </div>

</template>


<style scoped>

.number-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 140px;
}

.number-flex span {
  width: 12px;
  height: 1px;
  background-color: #C8A96B;
}

.number-flex p {
  font-size: 12px;
  color: #C8A96B;
  letter-spacing: 2px;
  text-align: center;
}


/* MENU HEADING */

.menu-heading {
  color: #2f1710;
  font-size: 42px;
  margin: 20px 0 20px;
  text-align: center;
}

.heding-line {
  width: 55px;
  height: 2px;
  background-color: #C8A96B;
  margin: 0 auto;
}

.menu-para {
  color: #76594b;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
}



   /* COFFEE CARDS */


.coffee-cards {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 35px;
  padding: 40px;
  flex-wrap: wrap;
}

.coffee-card {
  width: 400px;
  background-color: #F5EBDD;
  border: 1px solid #d8c8b5;
  border-radius: 4px;
  overflow: hidden;
}

.card-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #C8A96B;
  color: #24150e;
  padding: 7px 12px;
  font-size: 10px;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.card-content {
  padding: 10px;
}

.card-content h2 {
  color: #2f1710;
  font-family: Georgia, serif;
  font-size: 21px;
  margin: 3px 0 8px;
}

.card-content p {
  color: #76594b;
  font-size: 14px;
  margin: 0;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
}

.card-bottom h3 {
  color: #C8A96B;
  font-family: Georgia, serif;
  font-size: 17px;
  margin: 0;
}

.card-bottom button {
  width: 80px;
  height: 34px;
  background: transparent;
  border: 1px solid #C8A96B;
  color: #C8A96B;
  cursor: pointer;
  letter-spacing: 1px;
}

.card-bottom button:hover {
  background-color: #C8A96B;
  color: #2f1710;
}



   /* VIEW MENU BUTTON */


.view-menu-button {
  display: block;
  background-color: #5f2f11;
  color: rgb(240, 238, 238);
  padding: 10px;
  height: 45px;
  width: 160px;
  margin: 7px auto 40px;
  border: 1px solid #C8A96B;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}

.view-menu-button:hover {
  background-color: #c8A96B;
}



   /* LIKE NEWSLETTER */


.like-newsletter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2C1A0E;
  min-height: 350px;
  padding: 30px 10px;
  font-weight: 500;
  margin-left: 7px;
}

.feature-box {
  text-align: center;
}

.feature-box h1:first-child {
  margin-bottom: 10px;
}

.heading {
  color: rgb(206, 207, 209);
}

.para {
  color: rgb(131, 129, 129);
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
}



   /* QUOTE SECTION */


.sheik-div {
  background-color: #f5ede0;
  min-height: 350px;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 43px;
}

.sheik-para {
  color: #2c1a0e;
  font-family: "Parisienne", cursive;
  text-align: center;
  font-weight: 550;
  font-size: 28px;
}

.subtitle-sheik {
  color: #8a6a50;
  font-size: 18px;
  margin-top: 10px;
  letter-spacing: 2px;
}

.couts {
  color: #c8A96B;
  font-size: 35px;
  font-weight: 500;
}



   /* VISIT US */


.backgroung-img {
  background-image:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.78),
      rgba(12, 11, 10, 0.66),
      rgba(22, 19, 17, 0.69)
    ),
    url('@/assets/newsletter-page.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 600px;
  margin: 0;
}

.visit-img-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 600px;
  line-height: 52px;
  text-align: center;
  padding: 0 30px;
}

.visit-img-flex h1 {
  color: white;
  font-size: 47px;
}

.visit-img-flex p {
  color: lightgray;
  font-size: 18px;
  font-weight: 200;
}



   /* GET DIRECTIONS */


.button {
  width: 150px;
  height: 40px;
  border: none;
  background-color: #C8A96B;
  cursor: pointer;
  padding: 10px;
  border-radius: 2px;
  letter-spacing: 1px;
}

.button:hover {
  background-color: rgb(224, 222, 222);
}

</style>