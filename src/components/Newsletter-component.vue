<template>

  <!-- Final newsletter -->

  <div class="parent-flex">

    <div class="logo">

      <div class="logo-name">

        <div class="mug-wrapper">

          <img
            class="coffee-mug"
            src="@/assets/coffee-cup.svg"
            alt="Coffee"
          >

          <span class="steam steam-1"></span>
          <span class="steam steam-2"></span>

        </div>

        <span>Maria Caffix</span>

      </div>

      <div class="logo-subtitle">
        PREMIUM COFFEE
      </div>

      <p class="logo-description">
        Crafted with passion and precision — every
        <br />
        cup a story, every sip a moment.
      </p>

    </div>


    <!-- NAVIGATE -->

    <div class="div">

      <p class="section-title">
        NAVIGATE
      </p>

      <router-link
        to="/"
        class="footer-link"
      >
        Home
      </router-link>

      <router-link
        to="/shop"
        class="footer-link"
      >
        Shop
      </router-link>

      <router-link
        to="/about"
        class="footer-link"
      >
        About
      </router-link>

      <router-link
        to="/contact"
        class="footer-link"
      >
        Contact
      </router-link>

    </div>


    <!-- HOURS -->

    <div class="hours">

      <p class="section-title">
        HOURS
      </p>

      <p class="day">
        Mon – Fri
      </p>

      <p class="time">
        7:00 AM – 9:00 PM
      </p>

      <p class="day">
        Saturday
      </p>

      <p class="time">
        8:00 AM – 10:00 PM
      </p>

      <p class="day">
        Sunday
      </p>

      <p class="time">
        9:00 AM – 8:00 PM
      </p>

    </div>


    <!-- FIND US -->

    <div class="find-us">

      <p class="section-title">
        Find Us
      </p>

      <p class="address">
        14 Roasters Lane
      </p>

      <p class="address">
        Faislabad, Pakistan
      </p>

      <p class="contact-info">
        +92 51 123 4567
      </p>

      <p class="contact-info">
        hello@mariacaffix.com
      </p>

    </div>

  </div>


  <!-- FOOTER -->

  <footer>

    <div class="footer-bottom">

      <p>
        © 2026 Maria Caffix. All rights reserved.
      </p>

      <p class="footer-quote">
        Brew the extraordinary.
      </p>

    </div>

  </footer>

</template>


<style scoped>

/* =====================================
   MAIN FOOTER AREA
===================================== */

.parent-flex {
  display: grid;

  grid-template-columns:
    1.3fr
    1fr
    1fr
    1fr;

  justify-content: space-around;
  align-items: center;

  gap: 40px;

  background-color: #2C1A0E;

  min-height: 500px;

  padding: 45px 32px 25px;

  margin: 0;

  box-sizing: border-box;

  width: 100%;
}


/* =====================================
   NAVIGATION COLUMN
===================================== */

.div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  min-width: 0;
}


/* =====================================
   FIND US
===================================== */

.find-us {
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 0;
}


/* =====================================
   HOURS
===================================== */

.hours {
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 0;
}


/* =====================================
   LOGO
===================================== */

.logo {
  min-width: 0;
}

.logo-name {
  display: flex;
  align-items: center;

  gap: 5px;

  color: white;

  font-size: 20px;

  font-weight: 600;
}

.logo-subtitle {
  color: #C8A96B;

  font-size: 11px;

  margin-top: 3px;

  font-weight: 100;

  letter-spacing: 3.2px;
}

.logo-description {
  color: lightgray;

  margin-top: 15px;

  line-height: 25px;

  font-size: 15px;
}


/* =====================================
   MUG
===================================== */

.mug-wrapper {
  position: relative;

  width: 32px;
  height: 32px;

  flex-shrink: 0;
}

.coffee-mug {
  width: 32px;
  height: 32px;

  display: block;
}


/* =====================================
   STEAM
===================================== */

.steam {
  position: absolute;

  width: 3px;
  height: 10px;

  background: #ffffff;

  border-radius: 50%;

  opacity: 0;

  filter: blur(1px);

  animation: steamMove 2.5s ease-in-out infinite;
}

.steam-1 {
  left: 10px;
  top: -8px;
}

.steam-2 {
  left: 18px;
  top: -7px;

  animation-delay: 1.2s;
}

@keyframes steamMove {

  0% {
    opacity: 0;

    transform:
      translateY(5px)
      scaleX(0.8);
  }

  30% {
    opacity: 0.5;
  }

  70% {
    opacity: 0.25;
  }

  100% {

    opacity: 0;

    transform:
      translateY(-12px)
      scaleX(1.4);
  }

}


/* =====================================
   SECTION TITLES
===================================== */

.section-title {
  color: #c9a96e;

  margin-bottom: 15px;

  font-size: 15px;

  letter-spacing: 1px;
}


/* =====================================
   FOOTER LINKS
===================================== */

.footer-link {
  color: lightgray;

  text-decoration: none;

  line-height: 30px;

  transition: 0.3s ease;
}

.footer-link:hover {
  color: #C8A96B;
}


/* =====================================
   HOURS
===================================== */

.day {
  color: gray;

  font-size: 15px;

  line-height: 30px;

  margin: 0;
}

.time {
  color: lightgray;

  font-size: 17px;

  line-height: 30px;

  margin: 0;
}


/* =====================================
   FIND US
===================================== */

.address {
  color: lightgray;

  line-height: 30px;

  margin: 0;
}

.contact-info {
  color: #c9a96e;

  line-height: 30px;

  margin: 0;

  overflow-wrap: anywhere;
}


/* =====================================
   FOOTER BOTTOM
===================================== */

.footer-bottom {

  background-color: #2C1A0E;

  min-height: 70px;

  padding: 0 32px;

  border-top:
    1px solid
    rgba(200, 169, 107, 0.25);

  display: flex;

  justify-content: space-between;

  align-items: center;

  box-sizing: border-box;
}

.footer-bottom p {
  margin: 0;

  color: #8f8984;

  font-size: 13px;
}

.footer-quote {
  color: #C8A96B !important;

  font-family: Georgia, serif;

  font-style: italic;
}


/* ==================================================
   LARGE TABLET / SMALL LAPTOP
================================================== */

@media (max-width: 1100px) {

  .parent-flex {
    grid-template-columns:
      1.4fr
      1fr
      1fr;

    gap: 35px;

    padding:
      45px 25px 30px;
  }

  .find-us {
    grid-column: auto;
  }

}


/* ==================================================
   TABLET
================================================== */

@media (max-width: 850px) {

  .parent-flex {

    grid-template-columns:
      1fr
      1fr;

    gap: 45px 30px;

    padding:
      50px 25px 35px;

  }

  .logo {
    text-align: center;
  }

  .logo-name {
    justify-content: center;
  }

  .logo-description br {
    display: none;
  }

  .find-us {
    grid-column: auto;
  }

  .footer-bottom {
    padding: 0 25px;
  }

}


/* ==================================================
   MOBILE
================================================== */

@media (max-width: 600px) {

  .parent-flex {

    grid-template-columns: 1fr;

    gap: 45px;

    min-height: auto;

    padding:
      55px 20px 40px;

    text-align: center;
  }


  .logo {
    width: 100%;
  }

  .logo-name {
    justify-content: center;

    font-size: 19px;
  }

  .logo-subtitle {
    font-size: 9px;

    letter-spacing: 2.5px;
  }

  .logo-description {
    font-size: 14px;

    line-height: 24px;

    padding: 0 15px;
  }

  .logo-description br {
    display: none;
  }


  .div,
  .hours,
  .find-us {
    width: 100%;
  }


  .section-title {
    font-size: 14px;

    margin-bottom: 12px;
  }


  .footer-link {
    line-height: 28px;
  }


  .day {
    line-height: 27px;

    font-size: 14px;
  }

  .time {
    line-height: 27px;

    font-size: 15px;
  }


  .address {
    line-height: 27px;

    font-size: 14px;
  }

  .contact-info {
    line-height: 27px;

    font-size: 14px;

    overflow-wrap: anywhere;
  }


  /* FOOTER BOTTOM */

  .footer-bottom {

    min-height: 120px;

    padding:
      20px;

    flex-direction: column;

    justify-content: center;

    gap: 12px;

    text-align: center;
  }

  .footer-bottom p {
    font-size: 11px;
  }

  .footer-quote {
    font-size: 13px !important;
  }

}


/* ==================================================
   VERY SMALL MOBILE
================================================== */

@media (max-width: 380px) {

  .parent-flex {
    padding-left: 15px;
    padding-right: 15px;

    gap: 38px;
  }

  .logo-name {
    font-size: 17px;
  }

  .logo-subtitle {
    font-size: 8px;

    letter-spacing: 2px;
  }

  .mug-wrapper,
  .coffee-mug {
    width: 28px;
    height: 28px;
  }

  .logo-description {
    font-size: 13px;
  }

  .footer-bottom {
    padding-left: 15px;
    padding-right: 15px;
  }

}


/* ==================================================
   EXTRA SMALL MOBILE
================================================== */

@media (max-width: 320px) {

  .parent-flex {
    padding-left: 12px;
    padding-right: 12px;
  }

  .logo-name {
    font-size: 16px;
  }

  .logo-subtitle {
    font-size: 7px;

    letter-spacing: 1.7px;
  }

  .section-title {
    font-size: 13px;
  }

  .footer-link {
    font-size: 14px;
  }

  .footer-bottom p {
    font-size: 10px;
  }

}

</style>