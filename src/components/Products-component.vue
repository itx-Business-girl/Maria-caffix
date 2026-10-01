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

          <router-link to="shop">
            <button>ORDER</button>
          </router-link>
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

          <router-link to="shop">
            <button>ORDER</button>
          </router-link>
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

          <router-link to="shop">
            <button>ORDER</button>
          </router-link>
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

          <router-link to="shop">
            <button>ORDER</button>
          </router-link>
        </div>

      </div>

    </div>

  </div>


  <!-- VIEW FULL MENU BUTTON -->
  <router-link to="shop">
    <button class="view-menu-button reveal">
      VIEW FULL MENU ↪
    </button>
  </router-link>


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

/* ================================
   MENU NUMBER
================================ */

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


/* ================================
   MENU HEADING
================================ */

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


/* ================================
   COFFEE CARDS
================================ */

.coffee-cards {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 35px;
  padding: 40px;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}

.coffee-card {
  width: 400px;
  max-width: 100%;
  background-color: #F5EBDD;
  border: 1px solid #d8c8b5;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
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


/* ================================
   VIEW MENU BUTTON
================================ */

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


/* ================================
   LIKE NEWSLETTER
================================ */

.like-newsletter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2C1A0E;
  min-height: 350px;
  padding: 30px 10px;
  font-weight: 500;
  margin-left: 7px;
  box-sizing: border-box;
  width: calc(100% - 7px);
}

.feature-box {
  text-align: center;
  max-width: 100%;
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


/* ================================
   QUOTE SECTION
================================ */

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
  box-sizing: border-box;
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


/* ================================
   VISIT US
================================ */

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
  box-sizing: border-box;
}

.visit-img-flex h1 {
  color: white;
  font-size: 47px;
}

.visit-img-flex p {
  color: lightgray;
  font-size: 18px;
  font-weight: 200;
  max-width: 800px;
}


/* ================================
   GET DIRECTIONS
================================ */

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


/* ==================================================
   LARGE TABLET / SMALL LAPTOP
================================================== */

@media (max-width: 1200px) {

  .coffee-cards {
    gap: 25px;
    padding: 35px 25px;
  }

  .coffee-card {
    width: 380px;
  }

  .like-newsletter {
    gap: 25px;
  }

  .para {
    font-size: 15px;
  }

}


/* ==================================================
   TABLET
================================================== */

@media (max-width: 900px) {

  .number-flex {
    margin-top: 110px;
  }

  .menu-heading {
    font-size: 36px;
  }

  .menu-para {
    padding: 0 25px;
  }

  .menu-para br {
    display: none;
  }

  .coffee-cards {
    padding: 30px 20px;
    gap: 25px;
  }

  .coffee-card {
    width: calc(50% - 15px);
    min-width: 280px;
  }

  .card-image {
    height: 220px;
  }

  .like-newsletter {
    flex-direction: column;
    gap: 45px;
    padding: 55px 25px;
    min-height: auto;
  }

  .feature-box {
    width: 100%;
  }

  .para br {
    display: none;
  }

  .sheik-div {
    padding: 50px 25px;
  }

  .sheik-para {
    font-size: 25px;
    line-height: 38px;
  }

  .sheik-para br {
    display: none;
  }

  .backgroung-img {
    height: 500px;
  }

  .visit-img-flex {
    height: 500px;
    padding: 0 30px;
  }

  .visit-img-flex h1 {
    font-size: 42px;
  }

  .visit-img-flex p {
    font-size: 17px;
    line-height: 30px;
  }

}


/* ==================================================
   MOBILE
================================================== */

@media (max-width: 600px) {

  .number-flex {
    margin-top: 95px;
  }

  .number-flex p {
    font-size: 10px;
  }

  .number-flex span {
    width: 9px;
  }


  .menu-heading {
    font-size: 30px;
    margin-top: 15px;
  }

  .heding-line {
    width: 45px;
  }

  .menu-para {
    font-size: 14px;
    line-height: 23px;
    padding: 0 25px;
  }

  .menu-para br {
    display: none;
  }


  /* CARDS */

  .coffee-cards {
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 25px 15px;
  }

  .coffee-card {
    width: 100%;
    max-width: 430px;
    min-width: 0;
  }

  .card-image {
    height: 220px;
  }

  .card-content {
    padding: 13px;
  }

  .card-content h2 {
    font-size: 19px;
  }

  .card-content p {
    font-size: 13px;
    line-height: 20px;
  }

  .card-bottom {
    margin-top: 15px;
  }


  /* VIEW MENU */

  .view-menu-button {
    width: 150px;
    height: 42px;
    margin-bottom: 30px;
  }


  /* FEATURES */

  .like-newsletter {
    width: 100%;
    margin-left: 0;
    padding: 50px 20px;
    gap: 45px;
  }

  .feature-box h1 {
    font-size: 25px;
  }

  .feature-box h1:first-child {
    font-size: 30px;
  }

  .para {
    font-size: 14px;
    line-height: 23px;
    padding: 0 10px;
  }

  .para br {
    display: none;
  }


  /* QUOTE */

  .sheik-div {
    min-height: 300px;
    padding: 40px 20px;
  }

  .couts {
    font-size: 30px;
  }

  .sheik-para {
    font-size: 21px;
    line-height: 32px;
    margin: 10px 0;
  }

  .sheik-para br {
    display: none;
  }

  .subtitle-sheik {
    font-size: 14px;
    letter-spacing: 1.5px;
  }


  /* VISIT */

  .backgroung-img {
    height: 450px;
  }

  .visit-img-flex {
    height: 450px;
    padding: 0 20px;
    line-height: 35px;
  }

  .visit-img-flex h1 {
    font-size: 34px;
    margin-bottom: 5px;
  }

  .visit-img-flex p {
    font-size: 15px;
    line-height: 26px;
    margin: 10px 0 20px;
  }

  .button {
    width: 145px;
    height: 40px;
  }

}


/* ==================================================
   VERY SMALL MOBILE
================================================== */

@media (max-width: 380px) {

  .number-flex {
    margin-top: 90px;
  }

  .menu-heading {
    font-size: 27px;
  }

  .menu-para {
    font-size: 13px;
    padding: 0 18px;
  }

  .coffee-cards {
    padding-left: 10px;
    padding-right: 10px;
  }

  .card-image {
    height: 200px;
  }

  .badge {
    top: 10px;
    right: 10px;
    padding: 6px 9px;
    font-size: 8px;
  }

  .card-content h2 {
    font-size: 18px;
  }

  .card-content p {
    font-size: 12px;
  }

  .card-bottom h3 {
    font-size: 16px;
  }

  .card-bottom button {
    width: 70px;
  }

  .feature-box h1 {
    font-size: 22px;
  }

  .para {
    font-size: 13px;
  }

  .sheik-para {
    font-size: 19px;
    line-height: 29px;
  }

  .visit-img-flex h1 {
    font-size: 30px;
  }

  .visit-img-flex p {
    font-size: 14px;
  }

}


/* ==================================================
   EXTRA SMALL DEVICES
================================================== */

@media (max-width: 320px) {

  .menu-heading {
    font-size: 24px;
  }

  .coffee-card {
    border-radius: 3px;
  }

  .card-image {
    height: 180px;
  }

  .card-content {
    padding: 10px;
  }

  .card-content h2 {
    font-size: 17px;
  }

  .card-content p {
    font-size: 11px;
  }

  .sheik-para {
    font-size: 17px;
  }

  .visit-img-flex h1 {
    font-size: 27px;
  }

}

</style>