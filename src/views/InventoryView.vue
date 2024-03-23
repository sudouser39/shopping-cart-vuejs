<template>
  <div class="inventory-container">
    <h1>Inventory Management</h1>
    <div class="inventory-list">
      <div
        class="inventory-item"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="inventory-item-details">
          <p>{{ product.name }}</p>
          <p>Price: {{ product.price }} ₱</p>
        </div>
        <div class="inventory-item-controls">
          <button @click="editProduct(index)">Edit</button>
          <button @click="deleteProduct(index)">Delete</button>
        </div>
      </div>
    </div>
    <div class="add-product-form">
      <h2>Add New Product</h2>
      <input type="text" v-model="newProduct.name" placeholder="Product Name" />
      <input type="number" v-model="newProduct.price" placeholder="Price" />
      <button @click="addProduct">Add Product</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      newProduct: {
        name: "",
        price: 0,
      },
    };
  },
  methods: {
    addProduct() {
      this.products.push({ ...this.newProduct });
      this.resetNewProduct();
    },
    editProduct(index) {
      // Implement edit functionality here
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
    resetNewProduct() {
      this.newProduct = { name: "", price: 0 };
    },
  },
};
</script>
