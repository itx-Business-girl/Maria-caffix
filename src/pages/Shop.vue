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


  <!-- PRODUCTS SECTION -->
  <section class="products-section reveal">

    <div class="products-grid reveal">

      <div
        class="product-card reveal"
        v-for="(product, index) in products"
        :key="product.name"
      >

        <!-- PRODUCT IMAGE -->
        <div class="product-image">

          <img
            v-if="coffeeImages[index]"
            :src="coffeeImages[index].src.large"
            :alt="coffeeImages[index].alt"
          >

          <span class="category">
            {{ product.category }}
          </span>

          <span class="badge">
            {{ product.badge }}
          </span>

        </div>


        <!-- PRODUCT CONTENT -->
        <div class="product-content">

          <h2>
            {{ product.name }}
          </h2>

          <p>
            {{ product.description }}
          </p>


          <!-- PRICE + BUTTON -->
          <div class="product-bottom">

            <span class="price">
              Rs. {{ product.price }}
            </span>

            <button @click="cart.addToCart">
              + ADD
            </button>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<style scoped>

/* 
   WELCOME / HERO SECTION
*/

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

  filter: blur(1.5px);
  transform: scale(1.03);

  content: "";
  position: absolute;
  inset: -8px;
  z-index: 0;
}


/* HERO TEXT */

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
  text-align: center;
}

.sub-text {
  color: bisque;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
}


/* =========================
   PRODUCTS SECTION
========================= */

.products-section {
  background-color: #f8f3eb;
  padding: 50px 40px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}


/* =========================
   PRODUCT CARD
========================= */

.product-card {
  background-color: #f5ebdd;
  border: 1px solid #d8c7ae;
  border-radius: 4px;
  overflow: hidden;
}


/* =========================
   PRODUCT IMAGE
========================= */

.product-image {
  width: 100%;
  height: 230px;

  position: relative;
  overflow: hidden;

  background-color: #eee5d8;
}

.product-image img {
  width: 100%;
  height: 100%;

  object-fit: contain;
  display: block;
}


/* =========================
   PRODUCT LABELS
========================= */

.category {
  position: absolute;
  top: 12px;
  left: 12px;

  background-color: #49372d;
  color: white;

  padding: 5px 10px;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;

  background-color: #c8a96b;
  color: #24150e;

  padding: 5px 10px;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}


/* =========================
   PRODUCT CONTENT
========================= */

.product-content {
  padding: 20px;
}

.product-content h2 {
  color: #351c12;

  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 500;

  margin: 0 0 10px;
}

.product-content p {
  color: #795548;

  font-size: 13px;
  line-height: 1.7;

  margin: 0;
}


/* =========================
   PRICE + ADD BUTTON
========================= */

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 18px;
}

.price {
  color: #c8a96b;

  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 600;
}

.product-bottom button {
  background-color: #713c24;
  color: white;

  border: none;

  padding: 10px 18px;

  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;

  cursor: pointer;
}

.product-bottom button:hover {
  background-color: #4d2818;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}


@media (max-width: 600px) {

  .products-grid {
    grid-template-columns: 1fr;
  }

  .products-section {
    padding: 30px 20px;
  }

  .text-content h1 {
    font-size: 38px;
  }

  .sub-text {
    font-size: 14px;
  }

}

</style>



<script setup>
import { ref, onMounted } from 'vue'
import { getCoffeeImages } from '../pexels.js'
import { useCartStore } from '../stores/cart'


const coffeeImages = ref([])
const cart = useCartStore()
 const cartCount = ref(0)
 
 const addToCart = () => {
  cartCount.value++
 }

const products = [
  {
    name: 'Cold Caramel Latte',
    description: 'House-made caramel, steamed whole milk, a dusting of fleur de sel.',
    price: '550',
    category: 'ESPRESSO',
    badge: 'BESTSELLER'
  },
  {
    name: 'Hazelnut Cold Brew',
    description: '20-hour cold extraction, hazelnut syrup, nitrogen-whipped oat foam.',
    price: '620',
    category: 'COLD BREW',
    badge: 'SEASONAL'
  },
  {
    name: 'Vanilla Cappuccino',
    description: 'Rich espresso with steamed milk and a smooth vanilla finish.',
    price: '520',
    category: 'ESPRESSO',
    badge: 'POPULAR'
  },
  {
    name: 'Classic Americano',
    description: 'Double espresso balanced with hot water for a clean, bold cup.',
    price: '400',
    category: 'ESPRESSO',
    badge: 'CLASSIC'
  },
  {
    name: 'Mocha Velvet',
    description: 'Dark chocolate, espresso and steamed milk topped with silky foam.',
    price: '580',
    category: 'MOCHA',
    badge: 'BESTSELLER'
  },
  {
    name: 'Caramel Macchiato',
    description: 'Espresso layered with vanilla, steamed milk and caramel drizzle.',
    price: '590',
    category: 'SPECIALTY',
    badge: 'FAVORITE'
  },
  {
    name: 'Iced Vanilla Latte',
    description: 'Chilled espresso, creamy milk and delicate vanilla over ice.',
    price: '560',
    category: 'ICED',
    badge: 'SUMMER'
  },
  {
    name: 'Brown Sugar Cold Brew',
    description: 'Slow-steeped coffee with brown sugar and a creamy cold finish.',
    price: '610',
    category: 'COLD BREW',
    badge: 'SEASONAL'
  },
  {
    name: 'Espresso Classic',
    description: 'A concentrated double shot with rich crema and deep roasted notes.',
    price: '350',
    category: 'ESPRESSO',
    badge: 'CLASSIC'
  },
  {
    name: 'Cinnamon Latte',
    description: 'Smooth espresso and steamed milk finished with warm cinnamon.',
    price: '540',
    category: 'LATTE',
    badge: 'NEW'
  },
  {
    name: 'Iced Mocha',
    description: 'Cold espresso blended with chocolate and creamy milk over ice.',
    price: '570',
    category: 'ICED',
    badge: 'POPULAR'
  },
  {
    name: 'Signature Caffix',
    description: 'Our signature espresso blend with silky milk and a rich finish.',
    price: '650',
    category: 'SIGNATURE',
    badge: 'MARIA CAFFIX'
  }
]

onMounted(async () => {
  coffeeImages.value = await getCoffeeImages()
  console.log(coffeeImages.value)
})
</script>