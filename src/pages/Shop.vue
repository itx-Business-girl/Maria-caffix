<template>
  <!-- HERO SECTION -->
  <div class="background-img">
    <div class="text-content welcome-flex">
      <p>— Menu & Shop</p>

      <i>
        <h1>Craft Your Perfect Cup</h1>
      </i>

      <p class="sub-text">
        Single-origin brews, seasonal specials, and handcrafted merchandise — 
      </p>

      <p class="sub-text">
         all made with intention.
      </p>
    </div>
  </div>
</template>


<style scoped>
/* =========================
   HERO SECTION
========================= */

.background-img {
  width: 100%;
  height: 420px;
  overflow: hidden;
  position: relative;
}

.background-img::before {
  background-image:
    linear-gradient(
      90deg,
      rgba(51, 34, 26, 0.75),
      rgba(48, 30, 19, 0.35),
      rgba(46, 27, 19, 0.50)
    ),
    url('../assets/shop.jpg');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(3px);
  transform: scale(1.03);

  content: "";
  position: absolute;
  inset: -8px;
  z-index: 0;
}


/* Hero text */

.text-content {
  position: relative;
  z-index: 1;
}

.welcome-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 400px;

  line-height: 40px;
  margin-left: 40px;
}

.text-content p {
  color: bisque;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 700;
  margin: 5px;
}

.text-content h1 {
  color: white;
  font-size: 50px;
  margin: 10px 0;
}

.sub-text {
  color: bisque;
  font-size: 16px;
  font-weight: 300 ;
  letter-spacing: 0 ;
}
</style>