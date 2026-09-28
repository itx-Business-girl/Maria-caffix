<template>
  <!-- Final newsletter -->
  <div class="parent-flex">

    <div class="div">
      <div class="logo"> 
      <div class="logo-name">
        <img class="coffee-mug" src="@/assets/coffee-cup.svg" alt="Coffee">
        Maria Caffix
      </div> 
      <div class="logo-subtitle">PREMIUM COFFEE</div> 
    </div> 

      <div style="color: #C8A96B; font-size: 12px; letter-spacing: 2px; line-height: 22px;">
        PREMIUM COFFEE
      </div>

      <p style="color: lightgray; margin-top: 15px; line-height: 25px;">
        Crafted with passion and precision — every <br />
        cup a story, every sip a moment.
      </p>
    </div>

    <div class="div">
      <p style="color:#c9a96e; margin-bottom: 15px;">NAVIGATE</p>

      <router-link to="/" style="color: lightgray; text-decoration: none; line-height: 30px;">
        Home
      </router-link>

      <router-link to="/shop" style="color: lightgray; text-decoration: none; line-height: 30px;">
        Shop
      </router-link>

      <router-link to="/about" style="color: lightgray; text-decoration: none; line-height: 30px;">
        About
      </router-link>

      <router-link to="/contact" style="color: lightgray; text-decoration: none; line-height: 30px;">
        Contact
      </router-link>
    </div>

    <div>
      <p style="color:#c9a96e; margin-bottom: 15px;">HOURS</p>

      <p style="color: gray; font-size: 15px; line-height: 30px;">Mon – Fri</p>
      <p style="color: lightgray; font-size: 17px; line-height: 30px;">7:00 AM – 9:00 PM</p>

      <p style="color: gray; font-size: 15px; line-height: 30px;">Saturday</p>
      <p style="color: lightgray; font-size: 17px; line-height: 30px;">8:00 AM – 10:00 PM</p>

      <p style="color: gray; font-size: 15px; line-height: 30px;">Sunday</p>
      <p style="color: lightgray; font-size: 17px; line-height: 23px;">9:00 AM – 8:00 PM</p>
    </div>

    <div class="find-us">
      <p style="color:#c9a96e; margin-bottom: 15px;">Find Us</p>

      <p style="color: lightgray; line-height: 30px;">14 Roasters Lane</p>
      <p style="color: lightgray; line-height: 30px;">Faislabad, Pakistan</p>
      <p style="color: #c9a96e; line-height: 30px;">+92 51 123 4567</p>
      <p style="color: #c9a96e; line-height: 30px;">hello@mariacaffix.com</p>
    </div>

  </div>

  <footer>
    <div style="background-color: #2C1A0E; min-height: 70px; padding: 0 32px; border-top: 1px solid rgba(200, 169, 107, 0.25); display: flex; justify-content: space-between; align-items: center;">
      <p style="margin: 0; color: #8f8984; font-size: 13px;">
        © 2026 Maria Caffix. All rights reserved.
      </p>

      <p style="color: #C8A96B; font-family: Georgia, serif; font-style: italic;">
        Brew the extraordinary.
      </p>
    </div>
  </footer>
</template>


<style scoped>
.parent-flex{
   display: grid;
    grid-template-columns: 1.3fr 1fr 1fr;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    background-color:#2C1A0E;
      min-height: 500px;
    padding: 45px 32px 25px;
    /* margin-top: 0%; */
     margin: 0;
}
.div{
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    flex: 1;
}
.find-us {
    grid-column: 1;
}
.coffee-mug{
  width: 32px;
  height: 32px;
}
.logo-name{
  color:#221d1d;
  /* font-family: 'Roboto', sans-serif; */
  font-size: 20px;
  font-weight: 600;
}
.logo-flex{
  display: flex;
  flex-direction: column;
  align-items:flex-start;
}
</style>