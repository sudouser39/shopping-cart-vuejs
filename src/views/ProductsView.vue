<template>
  <div class="shopping-container">
    <div class="shopping-list">
      <h1>Shopping List</h1>
      <div class="products-container">
        <div class="product" v-for="(product, index) in products" :key="index">
          <!-- <img :src="product.image" alt="Product Image" width="100" /> remove comment when image is needed link it with -->
          <div class="product-details">
            <h3>{{ product.name }}</h3>
            <p>Price: {{ product.price }}₱</p>
            <!-- Changed currency to peso -->
          </div>
          <div class="quantity-controls">
            <button
              @click="decreaseQuantity(index)"
              :disabled="product.quantity <= 1"
            >
              -
            </button>
            <span>{{ product.quantity }}</span>
            <button @click="increaseQuantity(index)">+</button>
          </div>
          <button @click="addToCart(index)">Add to Cart</button>
        </div>
      </div>
    </div>

    <div class="shopping-cart">
      <h1 style="margin-bottom: 10px">Shopping Cart</h1>
      <Cart :cart="cart" />
    </div>
  </div>
</template>

<script>
import Cart from "../components/CartItem.vue";

export default {
  components: {
    Cart,
  },
  data() {
    return {
      products: [
        { name: "Ramen", price: 35, quantity: 1 },
        { name: "Fluffy Mint Chocolate Rice Cake", price: 20, quantity: 1 },
        { name: "Bento Boxes", price: 40, quantity: 1 },
        {
          name: "Smoked Samon and Cream Cheese Sandwich",
          price: 50,
          quantity: 1,
        },
        {
          name: "Uchi Cafe Sweets Caramel Ice Cream Sandwich",
          price: 25,
          quantity: 1,
        },
        { name: "Onigiri", price: 20, quantity: 1 },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(index) {
      const product = this.products[index];
      const existingCartItem = this.cart.find(
        (item) => item.name === product.name
      );

      if (existingCartItem) {
        // Clone the existing cart item and update its quantity
        const updatedCartItem = { ...existingCartItem };
        updatedCartItem.quantity += product.quantity;
        // Update the cart with the updated item
        this.cart = this.cart.map((item) =>
          item.name === product.name ? updatedCartItem : item
        );
      } else {
        // Add the product to the cart
        this.cart.push({ ...product });
      }

      this.products[index].quantity = 1;
    },

    increaseQuantity(index) {
      this.products[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.products[index].quantity > 1) {
        this.products[index].quantity--;
      }
    },
  },
};
</script>

<style scoped>
/* Add your scoped CSS styles here */
.shopping-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: flex-start; /* Align items at the top */
}

.shopping-list,
.shopping-cart {
  flex: 1; /* Take up equal space */
  margin: 0 10px; /* Add some spacing */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
}

.products-container {
  display: flex;
  flex-wrap: wrap; /* Enable wrapping */
  justify-content: center; /* Center items horizontally */
  gap: 20px; /* Add some gap between products */
  max-height: 500px; /* Set max height */
  overflow-y: auto; /* Enable vertical scrolling */
}

/* Hide scrollbar */
.products-container::-webkit-scrollbar {
  width: 0;
}

.product {
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-radius: 5px;
  padding: 12px;
  width: calc(50% - 20px); /* Two columns with gap */
  max-width: 320px; /* Set maximum width for each product */
}

.product img {
  margin-bottom: 10px;
}

.product-details {
  text-align: center;
}

.quantity-controls {
  display: flex;
  justify-content: center;
  align-items: center;
}

.quantity-controls button {
  cursor: pointer;
  padding: 5px 10px;
  margin: 5px 5px;
  width: 30px; /* Fixed width */
}

.cart-item {
  margin-bottom: 10px;
}

@media screen and (min-width: 768px) {
  .product {
    width: calc(50% - 20px); /* Two columns */
    margin-right: 20px;
  }
}
</style>
