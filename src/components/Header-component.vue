<template> 
  <header class="header"> 
 
    <div class="logo"> 
      <div class="logo-name">
        <img class="coffee-mug" src="@/assets/coffee-cup.svg" alt="Coffee">
        Maria Caffix
      </div> 
      <div class="logo-subtitle">PREMIUM COFFEE</div> 
    </div> 
     
    <nav> 
      <router-link class="nav" to="/">Home</router-link> 
      <router-link class="nav" to="/shop">Shop</router-link> 
      <router-link class="nav" to="/about">About</router-link> 
      <router-link class="nav" to="/contact">Contact</router-link> 
    </nav> 

    <button class="header-button">ORDER NOW</button> 
  </header> 
</template>

<style scoped>
.logo-flex{
  display: flex;
  flex-direction: column;
  align-items:flex-start;
}
.logo-name{
  color:#221d1d;
  /* font-family: 'Roboto', sans-serif; */
  font-size: 20px;
  font-weight: 600;
}
.logo-subtitle{
  color:#C8A96B;
  font-size: 11px;
  margin-top: 3px;
  font-weight: 100;
  letter-spacing: 3.2px;

}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f1ebe1;
  height: 60px;
}
.nav{
  gap: 35px;
  color:#1f1919;  
  padding:8px;
  font-weight: 300;
  font-size:17px;
  font-family: 'Roboto', sans-serif;
  text-decoration:none;
  position: relative;
}
.nav:hover,
.nav.router-link-active{
  color: #C8A96B;
}

.nav.router-link-active::after{
  content: "";
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 2px;
  background-color: #C8A96B;
  border-radius: 2pxs;
}
.header-button{
  background-color:#5f2f11;
  color: rgb(247, 237, 237);
  padding: 12px;
  height: 40px;
  font-size: 12px;
  width: 140px;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  box-shadow: 10px 8px 20px rgba#000000;
}
.header-button:hover{
  background-color: #C8A96B;
}
.coffee-mug{
  width: 32px;
  height: 32px;
}
</style>