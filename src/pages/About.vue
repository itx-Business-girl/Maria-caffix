<template> 
  <div class="background-img">  
    <div class="text-content welcome-flex">  
      <p>Our Story</p>  

      <i>
        <h1>
          Brewed from <span style="color:#C8A96B;">Passion,</span>
          <br />
          Rooted in Purpose.
        </h1>
      </i>
    </div>  
  </div>  
 
 
  <!-- STORY SECTION -->
  <div class="flex-shop reveal"> 

    <div> 

      <h1
        class="reveal"
        style="color: rgba(48, 30, 19, 0.99); font-size: 35px; margin-left: 30px; margin-top: 150px;"
      >
        From a Small Roastery 
        <br />
        to a Beloved Icon
      </h1> 

      <p class="shop-para reveal">  
        Maria Caffix was founded in 2013 by Maria Khanim, who returned from a two-year apprenticeship
        <br />
        in Naples with a single vision: to bring honest, extraordinary coffee to Pakistan.
        <br /> 
      </p> 

      <p class="shop-para">
        What began as a 12-seat roastery in F-6, Faislabad — with a hand-operated drum roaster and a chalk
        <br />
        menu board — has grown into three cafés, a wholesale arm, and a community of thousands of loyal
        <br />
        regulars.
      </p> 

      <p class="shop-para">
        The name "Caffix" is a portmanteau of café and affix — because every visit leaves something
        <br />
        permanently fixed in you.
      </p> 
      
    </div> 
 
 
    <div class="image-container reveal"> 

      <img
        class="shop-img"
        src="../assets/about.png"
        alt="shop img"
      />

      <i>
        <div class="badge gold-box">
          "The best cup is always
          <br />
          the next one."
        </div>
      </i>

    </div> 

  </div> 
 

  <!-- STAND FOR SECTION --> 
  <div class="parent-div"> 
 
    <h1 class="reveal">What We Stand For</h1> 
 
    <div class="cards-wrapper"> 
 
      <div class="card-div reveal"> 
        <span>I.</span> 
        <h2>Provenance First</h2> 
        <p> 
          We know the name of every farmer whose beans we source. 
          Transparency across every step of the supply chain. 
        </p> 
      </div> 
 
      <div class="card-div reveal"> 
        <span>II.</span> 
        <h2>Seasonal Freshness</h2> 
        <p> 
          Our roast calendar follows harvest cycles. 
          You drink what's peak, always. 
        </p> 
      </div> 
 
      <div class="card-div reveal"> 
        <span>III.</span> 
        <h2>Community Rooted</h2> 
        <p> 
          Maria Caffix was born in Faisalabad and continues to invest 
          back into its neighbourhoods through local partnerships. 
        </p> 
      </div> 
 
      <div class="card-div reveal"> 
        <span>IV.</span> 
        <h2>Craft Over Speed</h2> 
        <p> 
          We believe the best cup cannot be rushed. 
          Patience is an ingredient. 
        </p> 
      </div> 

    </div> 

  </div> 


  <!-- PEOPLE BEHIND SECTION --> 
  <div class="people-section reveal"> 

    <h1 style="color:rgba(51, 34, 26, 0.99); margin-bottom:50px;">
      The People Behind the Cup
    </h1> 

    <div class="people-wrapper"> 

      <div class="person-card"> 

        <img
          class="images"
          src="../assets/iqra.jpg"
          alt="Iqra Khanzadii"
        />

        <p
          style="color:rgba(51, 34, 26, 0.99); font-weight:700; font-size:20px; margin-bottom:10px;"
        >
          iqra khanzadii
        </p> 

        <p
          style="color:#C8A96B; line-height:25px; letter-spacing:1.5px;"
        >
          Founder & Head Roaster
        </p> 

        <p style="color:#5f2f11; font-size:12px;">
          Since 2013
        </p> 

      </div> 
      

      <div class="person-card reveal"> 

        <img
          class="images"
          src="../assets/huraira.png"
          alt="Saim Khan"
        />

        <p
          style="color:rgba(51, 34, 26, 0.99); font-weight:700; font-size:20px; margin-bottom:10px;"
        >
          Saim Khan
        </p> 

        <p
          style="color:#C8A96B; line-height:25px; letter-spacing:1.5px;"
        >
          Master Barista
        </p> 

        <p style="color:#5f2f11; font-size:12px;">
          Since 2015
        </p> 

      </div> 


      <div class="person-card reveal"> 

        <img
          class="images"
          src="../assets/umaima.jpg"
          alt="Noor Fatima"
        />

        <p
          style="color:rgba(51, 34, 26, 0.99); font-weight:700; font-size:20px; margin-bottom:10px;"
        >
          Noor Fatima
        </p> 

        <p
          style="color:#C8A96B; line-height:25px; letter-spacing:1.5px;"
        >
          Experience Manager
        </p> 

        <p style="color:#5f2f11; font-size:12px;">
          Since 2018
        </p> 

      </div> 

    </div> 

  </div> 
 
</template>  


<style scoped> 

/* 
   HERO / WELCOME SECTION
*/

.background-img { 
  width: 100%; 
  height: 400px; 
  overflow: hidden; 
  position: relative; 
} 
 
.background-img::before { 
  background-image: 
    linear-gradient(
      rgba(0,0,0,0.6),
      rgba(0,0,0,0.7)
    ),
    url('../assets/about-page.png'); 
 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
 
  transform: scale(1.03); 
 
  content: ""; 
  position: absolute; 
  inset: -8px; 
  z-index: 0; 
} 
 
.text-content { 
  position: relative; 
  z-index: 1; 
} 
 
.text-content p { 
  color: #C8A96B; 
  font-size: 20px; 
  letter-spacing: 2px; 
  font-weight: 500; 
  margin-left: 40px; 
} 
 
.text-content h1 { 
  color: white; 
  font-size: 55px; 
} 
 
.welcome-flex { 
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  flex-direction: column; 
  height: 500px; 
  line-height: 60px; 
  margin-left: 40px; 
} 


/* 
   STORY SECTION
*/

.flex-shop { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  flex-direction: row; 
  width: 100%;
  box-sizing: border-box;
} 
 
.flex-shop > div:first-child { 
  flex: 1; 
  min-width: 0;
} 
 
.shop-para { 
  margin-left: 20px; 
  color: rgba(51, 34, 26, 0.75); 
  font-size: 18px; 
  line-height: 30px; 
  font-weight: 200; 
  margin-top: 30px; 
} 
 
.shop-img { 
  display: block; 
  height: 500px; 
  width: 400px; 
  margin-top: 120px; 
  margin-right: 20px; 
  object-fit: cover; 
} 
 
.image-container { 
  position: relative; 
  width: 400px; 
  margin-top: 120px; 
  margin-right: 20px; 
  flex-shrink: 0; 
} 
 
.badge { 
  background-color: #C8A96B; 
  color: #382319; 
  font-size: 15px; 
  letter-spacing: 1.5px; 
  font-weight: 400; 
} 
 
.gold-box { 
  position: absolute; 
  left: 0; 
  bottom: -25px; 
  width: 190px; 
  height: 80px; 
 
  display: flex; 
  align-items: center; 
  justify-content: center; 
 
  text-align: center; 
  z-index: 5; 
} 


/* 
   WHAT WE STAND FOR
*/

.parent-div { 
  background-color: #f5ede0; 
  width: 100%; 
  min-height: 800px; 
  padding: 70px 25px; 
  box-sizing: border-box; 
} 
 
.parent-div > h1 { 
  color: rgba(51, 34, 26, 0.9); 
  text-align: center; 
  font-size: 35px; 
  margin: 0 0 70px; 
} 
 
.cards-wrapper { 
  display: flex; 
  flex-wrap: wrap; 
  gap: 35px; 
  justify-content: center; 
  max-width: 1000px; 
  margin: 0 auto; 
} 
 
.card-div { 
  width: 296px; 
  height: 228px; 
  box-sizing: border-box; 
 
  background-color: #faf7f1; 
 
  border: 1px solid #d8c7ad; 
  border-radius: 3px; 
 
  padding: 32px 29px; 
 
  display: flex; 
  flex-direction: column; 
} 
 
.card-div span { 
  color: #c8a96b; 
  font-size: 25px; 
  font-style: italic; 
  margin-bottom: 18px; 
} 
 
.card-div h2 { 
  color: #33221a; 
  font-size: 17px; 
  font-weight: 500; 
  margin: 0 0 14px; 
} 
 
.card-div p { 
  color: rgba(51, 34, 26, 0.75); 
  font-size: 14px; 
  line-height: 21px; 
  margin: 0; 
} 


/* 
   PEOPLE BEHIND THE CUP
*/

.people-section { 
  padding: 90px 40px; 
  text-align: center; 
  box-sizing: border-box;
  width: 100%;
} 
 
.people-wrapper { 
  display: flex; 
  justify-content: center; 
  align-items: flex-start; 
  gap: 100px; 
  flex-wrap: wrap; 
} 
 
.person-card { 
  width: 220px; 
  text-align: center; 
} 
 
.images { 
  height: 150px; 
  width: 150px; 
  border: 2px solid #C8A96B; 
  margin: 0 auto 25px; 
  display: block; 
  object-fit: cover; 
  border-radius: 50%; 
} 


/* 
   MOBILE RESPONSIVE
*/

@media (max-width: 700px) { 

  /* HERO */

  .background-img { 
    height: auto; 
    min-height: 560px; 
  } 
 
  .welcome-flex { 
    height: auto; 
    min-height: 560px; 
 
    padding: 100px 20px 60px; 
    margin-left: 0; 
 
    box-sizing: border-box; 
    justify-content: center; 
  } 
 
  .text-content p { 
    margin-left: 0; 
    font-size: 16px; 
    line-height: 1.5; 
  } 
 
  .text-content h1 { 
    font-size: 38px; 
    line-height: 1.25; 
    margin: 8px 0; 
  } 


  /* STORY TEXT FIRST */

  .flex-shop { 
    flex-direction: column; 
    align-items: stretch; 
    justify-content: flex-start; 
 
    padding: 50px 20px 80px; 
    box-sizing: border-box; 
  } 
 
  .flex-shop > div:first-child { 
    width: 100%; 
    order: 1; 
  } 
 
  .flex-shop h1 { 
    margin-left: 0 !important; 
    margin-top: 20px !important; 
    font-size: 30px !important; 
    line-height: 1.3; 
  } 
 
  .shop-para { 
    margin-left: 0; 
    font-size: 16px; 
    line-height: 27px; 
    margin-top: 25px; 
  } 
 
  /* MANUAL BR HIDE ON MOBILE */

  .shop-para br { 
    display: none; 
  } 


  /* IMAGE BELOW TEXT */

  .image-container { 
    order: 2; 
 
    width: 100%; 
    max-width: 400px; 
 
    margin: 50px auto 0; 
    box-sizing: border-box;
  } 
 
  .shop-img { 
    width: 100%; 
    height: auto; 
 
    max-height: 500px; 
 
    margin: 0; 
 
    object-fit: cover; 
  } 
 
  .gold-box { 
    left: 0; 
    bottom: -20px; 
  } 


  /* STAND FOR */

  .parent-div { 
    min-height: auto; 
    padding: 60px 20px; 
  } 
 
  .parent-div > h1 { 
    font-size: 30px; 
    margin-bottom: 45px; 
  } 
 
  .cards-wrapper { 
    flex-direction: column; 
    align-items: center; 
    gap: 25px; 
  } 
 
  .card-div { 
    width: 100%; 
    max-width: 350px; 
    height: auto; 
    min-height: 220px; 
  } 


  /* PEOPLE */

  .people-section { 
    padding: 70px 20px; 
  } 
 
  .people-section h1 { 
    font-size: 30px; 
    line-height: 1.3; 
  } 
 
  .people-wrapper { 
    flex-direction: column; 
    align-items: center; 
    gap: 50px; 
  } 
 
  .person-card { 
    width: 100%; 
    max-width: 250px; 
  } 

} 


/* 
   VERY SMALL SCREENS
*/

@media (max-width: 400px) { 

  .background-img { 
    min-height: 600px; 
  } 
 
  .welcome-flex { 
    min-height: 600px; 
    padding: 100px 15px 60px; 
  } 
 
  .text-content h1 { 
    font-size: 32px; 
  } 
 
  .text-content p { 
    font-size: 15px; 
  } 
 
  .shop-para { 
    font-size: 15px; 
    line-height: 25px; 
  } 
 
  .card-div { 
    padding: 25px 22px; 
  } 

  .people-section {
    padding-left: 15px;
    padding-right: 15px;
  }

}
 
</style>