<script setup>
import { useCartStore } from '../stores/cart'
import { ref, onMounted, onUnmounted } from 'vue'

const cart = useCartStore()

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>

  <header
    class="header"
    :class="{ scrolled: scrolled }"
  >

    <!-- 
         LOGO
    -->

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

    </div>


    <!-- 
         NAVIGATION
     -->

    <nav
      class="nav-menu"
      :class="{ 'menu-open': menuOpen }"
    >

      <router-link
        class="nav"
        to="/"
        @click="closeMenu"
      >
        Home
      </router-link>

      <router-link
        class="nav"
        to="/shop"
        @click="closeMenu"
      >
        Shop
      </router-link>

      <router-link
        class="nav"
        to="/about"
        @click="closeMenu"
      >
        About
      </router-link>

      <router-link
        class="nav"
        to="/contact"
        @click="closeMenu"
      >
        Contact
      </router-link>

    </nav>


    <!-- 
         RIGHT SIDE
    -->

    <div class="header-actions">

      <!-- ORDER BUTTON -->

      <router-link to="/contact">

        <button class="header-button">
          ORDER NOW
        </button>

      </router-link>


      <!-- HAMBURGER -->

      <button
        class="hamburger"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >

        <span></span>
        <span></span>
        <span></span>

      </button>


      <!-- CART -->

      <button class="cart-button">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >

          <circle
            cx="9"
            cy="20"
            r="1"
          ></circle>

          <circle
            cx="19"
            cy="20"
            r="1"
          ></circle>

          <path
            d="M3 4h2l2.4 11.5a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 2-1.5L21 8H6"
          ></path>

        </svg>

        <span class="cart-count">
          {{ cart.cartCount }}
        </span>

      </button>

    </div>

  </header>

</template>


<style scoped>

/* 
   LOGO
 */

.logo {
  opacity: 0;
  transform: translateY(10px);
  animation: logoReveal 3s ease forwards;
}

@keyframes logoReveal {

  to {

    opacity: 1;
    transform: translateY(0);

  }

}

.logo-flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-name {
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.header.scrolled .logo-name {
  color: #221d1d;
}

.logo-subtitle {
  color: #C8A96B;
  font-size: 11px;
  margin-top: 3px;
  font-weight: 100;
  letter-spacing: 3.2px;
}


/* 
   HEADER
 */

.header {

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 8px 25px;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: 0.3s ease;
}

.header.scrolled {

  background-color: #f1ebe1;
  border-bottom: 1px solid #c8a96b;
}


/* 
   NAV CENTER
*/

.nav-menu {

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
}

.nav {
  color: #52331e;
  padding: 8px;
  font-weight: 300;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}


/* Normal links */

.header .nav {
  color: #52331e;
}


/* Active page */

.header .nav.router-link-active {
  color: #C8A96B !important;
}


/* Active underline */

.header .nav.router-link-active::after {
  content: "";
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 2px;
  background-color: #C8A96B;
  border-radius: 2px;
}


/* Hover */

.header .nav:hover {
  color: #C8A96B;
}


/* Scrolled normal links */

.header.scrolled .nav {
  color: #52331e;
}


/* Scrolled active link */

.header.scrolled .nav.router-link-active {
  color: #C8A96B !important;
}


/* 
   RIGHT SIDE
 */

.header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}


/* 
   ORDER BUTTON
*/

.header-button {

  background-color: #5f2f11;
  color: rgb(247, 237, 237);
  padding: 12px;
  height: 40px;
  width: 140px;
  font-size: 12px;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  box-shadow:
    10px 8px 20px rgba(0, 0, 0, 0.15);
}

.header-button:hover {
  background-color: #C8A96B;
}


/*
   COFFEE MUG
 */

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


/* 
   STEAM
 */

.steam {
  position: absolute;
  width: 3px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 0;

  filter: blur(1px);

  animation:
    steamMove 2.5s ease-in-out infinite;
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


/* 
   CART
*/

.cart-button {
  position: relative;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 32px;
  height: 40px;
  padding: 0;
}

.cart-button svg {
  display: block;
  color: inherit;
  transition: 0.3s ease;
}

.cart-button:hover svg {
  color: #C8A96B;
}


/* Scrolled cart */

.header.scrolled .cart-button {
  color: #312828;
}


/* 
   CART COUNT
 */

.cart-count {
  position: absolute;
  top: -2px;
  right: -3px;
  width: 17px;
  height: 17px;
  background-color: #C8A96B;
  color: #312828;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}


/* 
   HAMBURGER
*/

.hamburger {
  display: none;
  background: transparent;
  border: none;
  width: 32px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: white;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transition: 0.3s ease;
}


/* 
   SMALL SCREEN
 */

@media (max-width: 900px) {

  .header {
    display: flex;
    justify-content: space-between;
    padding: 8px 18px;
  }


  /* Hide desktop nav */

  .nav-menu {
    display: none;
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    background-color: #f1ebe1;
    border-bottom: 1px solid #c8a96b;
    padding: 15px 0;
  }


  /* Open mobile menu */

  .nav-menu.menu-open {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }


  .nav-menu .nav {
    width: 100%;
    text-align: center;
    padding: 12px;
  }


  /* Right side stays on right */

  .header-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    margin-left: auto;
  }


  /* Hamburger visible */

  .hamburger {
    display: flex;
    color: white;
  }


  .header.scrolled .hamburger {
    color: #312828;
  }


  /* Order button */

  .header-button {
    width: 110px;
    height: 38px;
  }

}


/* 
   VERY SMALL SCREEN
 */

@media (max-width: 600px) {

  .logo-name {
    font-size: 17px;
  }

  .logo-subtitle {
    font-size: 8px;
    letter-spacing: 2px;
  }

  .coffee-mug,
  .mug-wrapper {
    width: 28px;
    height: 28px;
  }


  /* Hide order button */

  .header-button {
    display: none;
  }


  /* Hamburger + cart together */

  .header-actions {
    gap: 2px;
    margin-left: auto;
  }

  .hamburger {
    width: 32px;
    height: 40px;
  }

  .cart-button {
    width: 32px;
    height: 40px;
  }

}

</style>