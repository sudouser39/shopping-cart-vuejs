<template>
  <div class="shopping-cart">
    <div v-if="cart.length === 0" class="empty-cart">
      <p>Your cart is empty.</p>
    </div>
    <div v-else class="cart-container">
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <div class="item-details">
          <div class="item-name">
            <p>{{ item.name }}</p>
          </div>
          <p class="quantity-control">
            <button @click="decreaseQuantity(index)" class="quantity-button">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)" class="quantity-button">+</button>
          </p>
          <p>
            Amount: <strong>₱ {{ item.price * item.quantity }} </strong>
          </p>
          <button @click="removeItem(index)" class="delete-button">Delete</button>
        </div>
      </div>
    </div>
    <div class="total">
      <p>
        Total: <strong>₱ {{ totalAmount }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    totalAmount() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  methods: {
    removeItem(index) {
      this.cart.splice(index, 1)
    },
    increaseQuantity(index) {
      this.cart[index].quantity++
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--
      }
    }
  }
}
</script>

<style scoped>
.shopping-cart {
  margin-top: 20px;
}

.empty-cart {
  text-align: center;
}

.cart-container {
  max-height: 500px; /* Set a max height for the cart container */
  overflow-y: auto; /* Add vertical scrollbar when content exceeds max height */
}

.cart-container::-webkit-scrollbar {
  width: 0;
}

.cart-item {
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px; /* Set a fixed width for the cart item */
}

.item-details {
  display: flex;
  text-align: center;
  flex-direction: column;
}

.item-details .item-name {
  font-size: 25px;
  font-weight: bold;
}

.quantity-control {
  margin: 0 90px 0;
  display: flex;

  align-items: center;
}

.quantity-button {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  cursor: pointer;
}

.quantity {
  margin: 0 15px; /* Add margin to the quantity display */
}

.delete-button {
  background-color: hsla(0, 100%, 50%, 1);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  cursor: pointer;
  align-self: flex-end;
}

.total {
  width: 350px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
  border: 1px solid hsla(160, 100%, 37%, 1);
}
</style>
