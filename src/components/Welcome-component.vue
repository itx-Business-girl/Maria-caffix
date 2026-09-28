<template>   
 <div class="background-img ">
            <div class="welcome-flex ">
            <p class="top-para">EST.2013.FAISALABAD , PAKISTAN</p>
            <h1 class="welcome-headings ">Every Cup,</h1>
            <h1 class="center-heading ">A Story.</h1>
            <h1 class="welcome-headings">Worth Telling.</h1>
            <p class="welcome-sec-para ">Maria caffix is where rare single-origin beans meet <br/>artisan craft__ a  santuray for those who belive coffe is <br/> not merely a drink, but a ritual.</p>
           <div class="btn-flex">   
        <router-link><button class="btn-1">EXPLORE MENU</button></router-link> 
        <router-link to="/about"><button class="btn-2 ">OUR STORY</button></router-link>
           </div>
       </div>
        </div>
        <!-- section 2 -->
        <div class="collection ">
         <div class="div">
            <h2 class="h2">12+</h2>
            <p class="p">YEARS OF CRAFT</p>
            </div>

         <div class="div reveal">
            <h2 class="h2">40+</h2>
            <p class="p">UNIQUE BLENDS</p>
         </div>

         <div class="div reveal">
          <h2 class="h2">98%</h2>
            <p class="p">HAPPY REGULARS</p>
         </div>

         <div class="div reveal">
             <h2 class="h2">3</h2>
            <p class="p">CITY LOCATIONS</p>
         </div>
        </div>

         
      
</template>

<style scoped>
 .background-img{
    background-image:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5)), url('@/assets/welcome-image.jpg');
     background-position: center;
     background-repeat: no-repeat;
     width: 100%;
     height: 600px;
     background-size: cover;
      filter: blur(0.5px);
}
.top-para{
    color: #C8A96B;
    font-size: 15px;
    line-height: 1px;
    margin-bottom: 16px;
    letter-spacing: 2px;
}
.welcome-headings{
    color:rgb(245, 237, 237);
    font-size: 60px;
    margin-top: 6px;
}
.center-heading{
    color: #C8A96B;
    font-size:60px;
}
.welcome-flex{
    display: flex;
    justify-content:center;
    align-items: flex-start;
    flex-direction: column;
    height: 600px;
    margin-left: 10px;
} 
.welcome-sec-para{
    color: rgb(190, 186, 186);
    margin-top: 6px;
    margin-bottom: 8px;
    margin-left: 7px;
    font-size: 23px;
    font-weight: 300;
    line-height: 30px;
}
.btn-1{
    background-color: #C8A96B;
    color: black;
    padding: 7px;
    height: 40px;
    width: 135px;
    cursor: pointer;
    border: none;
}
.btn-1:hover{
    background-color: rgb(243, 238, 238);
}
.btn-2{
    background: transparent;
    border: 1px solid rgb(161, 158, 158);
    color: white;
    height: 40px;
    width: 170px;
    cursor: pointer;
    padding: 8px;
}
.btn-2:hover{
    border: 1px solid #C8A96B;
    color: #C8A96B;
}
.btn-flex{
    display: flex;
    flex-direction: row;
    padding: 6px;
    gap: 10px;
    margin-top: 7px;
}
.collection{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #5f361c;
    height: 150px;
    width: 100%;  
}
.div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1;
    
}
.h2{
   color: #C8A96B;
   font-size: 43px;
}
.p{
   color: rgb(190, 186, 186); 
   font-size: 12px;
   font-family: 'Roboto', sans-serif;
} 
</style>