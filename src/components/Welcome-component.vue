<template>

  <div class="background-img">

    <div class="welcome-flex text-content">

      <p class="top-para">
        — EST.2013.FAISALABAD , PAKISTAN
      </p>

      <h1 class="welcome-headings">
        Every Cup,
      </h1>

      <h1 class="center-heading story-glow">
        A Story.
      </h1>

      <h1 class="welcome-headings">
        Worth Telling.
      </h1>

      <p class="welcome-sec-para">
        Maria caffix is where rare single-origin beans meet
        <br/>
        artisan craft__ a santuray for those who belive coffe is
        <br/>
        not merely a drink, but a ritual.
      </p>

      <div class="btn-flex">

        <router-link to="/shop">
          <button class="btn-1">
            EXPLORE MENU
          </button>
        </router-link>

        <router-link to="/about">
          <button class="btn-2">
            OUR STORY
          </button>
        </router-link>

      </div>

    </div>

  </div>


  <!-- SECTION 2 -->

  <div class="collection">

    <div class="div">

      <h2 class="h2">
        12+
      </h2>

      <p class="p">
        YEARS OF CRAFT
      </p>

    </div>


    <div class="div reveal">

      <h2 class="h2">
        40+
      </h2>

      <p class="p">
        UNIQUE BLENDS
      </p>

    </div>


    <div class="div reveal">

      <h2 class="h2">
        98%
      </h2>

      <p class="p">
        HAPPY REGULARS
      </p>

    </div>


    <div class="div reveal">

      <h2 class="h2">
        3
      </h2>

      <p class="p">
        CITY LOCATIONS
      </p>

    </div>

  </div>

</template>


<style>

/*
   HEADER
*/

.header {

  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;

  box-sizing: border-box;

  z-index: 1000;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 10px 25px;

  height: 65px;

  background: transparent;

  border-bottom: 1px solid transparent;

  transition: 0.3s ease;
}

.header.scrolled {

  background-color: #f1ebe1;

  border-bottom: 1px solid #c8a96b;
}

nav {

  display: flex;

  gap: 20px;

  align-items: center;
}


/*
   TEXT CONTENT
*/

.text-content {

  position: relative;

  z-index: 1;

  opacity: 0;

  animation: fadeIn 4s ease forwards;
}

@keyframes fadeIn {

  from {

    opacity: 0;

  }

  to {

    opacity: 1;

  }

}


/*
   STORY GLOW
*/

.story-glow {

  color: #da9f2a;

  animation:
    glow 2s ease-in-out infinite alternate;
}

@keyframes glow {

  from {

    text-shadow:
      2px 2px 8px #cc921e;

  }

  to {

    text-shadow:
      2px 2px 7px #fda900;

  }

}


/*
   BACKGROUND
*/

.background-img {

  background-image:

    linear-gradient(
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.6)
    ),

    url('@/assets/welcome-image.png');

  background-position: center;

  background-repeat: no-repeat;

  background-size: cover;

  width: 100%;

  height: 600px;

  margin: 0;

  padding: 0;

  filter: blur(0.5px);

  box-sizing: border-box;

  overflow: hidden;
}


/*
   MAIN TEXT
*/

.welcome-flex {

  display: flex;

  justify-content: center;

  align-items: flex-start;

  flex-direction: column;

  height: 632px;

  box-sizing: border-box;

  margin-left: 25px;

  padding-top: 50px;

  padding-right: 20px;
}


/*
   SMALL TOP TEXT
*/

.top-para {

  color: #C8A96B;

  font-size: 11px;

  line-height: 1;

  letter-spacing: 2px;

  margin: 0 0 25px 0;
}


/*
   MAIN HEADINGS
*/

.welcome-headings {

  color: rgb(245, 237, 237);

  font-size: 70px;

  line-height: 0.95;

  margin: 0;
}


/*
   A STORY
*/

.center-heading {

  color: #C8A96B;

  font-size: 70px;

  line-height: 0.95;

  margin: 0;
}


/*
   DESCRIPTION
*/

.welcome-sec-para {

  color: rgb(210, 205, 205);

  margin: 25px 0 10px 7px;

  font-size: 18px;

  font-weight: 300;

  line-height: 30px;
}


/*
   BUTTONS
*/

.btn-flex {

  display: flex;

  flex-direction: row;

  gap: 10px;

  margin-top: 15px;

  padding: 0;

  flex-wrap: wrap;
}

.btn-1 {

  background-color: #C8A96B;

  color: black;

  padding: 7px;

  height: 40px;

  width: 135px;

  cursor: pointer;

  border: none;
}

.btn-1:hover {

  background-color: rgb(243, 238, 238);
}

.btn-2 {

  background: transparent;

  border: 1px solid rgb(161, 158, 158);

  color: white;

  height: 40px;

  width: 170px;

  cursor: pointer;

  padding: 8px;
}

.btn-2:hover {

  border: 1px solid #C8A96B;

  color: #C8A96B;
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
}

.header.scrolled .cart-button {

  color: #312828;
}


/*
   COLLECTION
*/

.collection {

  width: 100%;

  min-height: 150px;

  display: flex;

  justify-content: space-around;

  align-items: center;

  background-color: #5f361c;

  padding: 25px 0;

  box-sizing: border-box;
}

.div {

  flex: 1;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: center;

  min-width: 0;
}

.h2 {

  color: #C8A96B;

  font-size: 43px;

  margin: 0 0 8px;

  font-family: Georgia, serif;
}

.p {

  color: #d6c7b5;

  font-size: 12px;

  letter-spacing: 2px;

  margin: 0;

  font-family: 'Roboto', sans-serif;
}


/*
   TABLET
*/

@media (max-width: 900px) {

  .background-img {

    height: 560px;
  }

  .welcome-flex {

    height: 560px;

    margin-left: 30px;

    padding-top: 45px;
  }

  .welcome-headings,
  .center-heading {

    font-size: 58px;
  }

  .welcome-sec-para {

    font-size: 16px;

    line-height: 27px;
  }

  .collection {

    min-height: 140px;
  }

  .h2 {

    font-size: 38px;
  }

  .p {

    font-size: 11px;
  }

}


/*
   MOBILE
*/

@media (max-width: 600px) {

  .background-img {

    height: auto;

    min-height: 620px;

    background-position: center;
  }

  .welcome-flex {

    height: auto;

    min-height: 620px;

    margin-left: 20px;

    margin-right: 20px;

    padding-top: 95px;

    padding-bottom: 50px;

    justify-content: center;

    box-sizing: border-box;
  }

  .top-para {

    font-size: 9px;

    letter-spacing: 1.5px;

    margin-bottom: 20px;
  }

  .welcome-headings,
  .center-heading {

    font-size: clamp(42px, 11vw, 55px);

    line-height: 1;
  }

  .welcome-sec-para {

    font-size: 14px;

    line-height: 23px;

    margin-left: 0;

    margin-top: 20px;

    margin-bottom: 10px;

    max-width: 100%;
  }

  /*
     Mobile par <br> ki wajah se
     horizontal overflow na ho
  */

  .welcome-sec-para br {

    display: none;
  }

  .btn-flex {

    margin-top: 15px;

    gap: 8px;
  }

  .btn-1 {

    width: 125px;

    height: 38px;

    font-size: 11px;
  }

  .btn-2 {

    width: 145px;

    height: 38px;

    font-size: 11px;
  }


  /*
     COLLECTION
  */

  .collection {

    min-height: auto;

    padding: 25px 10px;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 25px 5px;
  }

  .div {

    flex: none;

    width: 100%;
  }

  .h2 {

    font-size: 34px;
  }

  .p {

    font-size: 9px;

    letter-spacing: 1.3px;
  }

}


/*
   SMALL MOBILE
*/

@media (max-width: 400px) {

  .background-img {

    min-height: 590px;
  }

  .welcome-flex {

    min-height: 590px;

    margin-left: 15px;

    margin-right: 15px;

    padding-top: 90px;

    padding-bottom: 40px;
  }

  .top-para {

    font-size: 8px;

    letter-spacing: 1.2px;
  }

  .welcome-headings,
  .center-heading {

    font-size: clamp(36px, 11vw, 45px);

    line-height: 1.02;
  }

  .welcome-sec-para {

    font-size: 13px;

    line-height: 21px;

    margin-top: 18px;
  }

  .btn-flex {

    width: 100%;

    flex-direction: column;

    align-items: flex-start;

    gap: 8px;
  }

  .btn-1,
  .btn-2 {

    width: 145px;
  }

  .collection {

    padding: 22px 8px;

    gap: 20px 3px;
  }

  .h2 {

    font-size: 30px;
  }

  .p {

    font-size: 8px;

    letter-spacing: 1px;
  }

}


/*
   VERY SMALL MOBILE
*/

@media (max-width: 330px) {

  .background-img {

    min-height: 570px;
  }

  .welcome-flex {

    min-height: 570px;

    margin-left: 12px;

    margin-right: 12px;

    padding-top: 85px;
  }

  .welcome-headings,
  .center-heading {

    font-size: 33px;
  }

  .welcome-sec-para {

    font-size: 12px;

    line-height: 20px;
  }

  .top-para {

    font-size: 7px;

    letter-spacing: 1px;
  }

  .collection {

    grid-template-columns: repeat(2, 1fr);

    padding-left: 5px;

    padding-right: 5px;
  }

  .h2 {

    font-size: 27px;
  }

  .p {

    font-size: 7px;

    letter-spacing: 0.7px;
  }

}


/*
   GLOBAL OVERFLOW FIX
*/

html,
body {

  max-width: 100%;

  overflow-x: hidden;
}

</style>