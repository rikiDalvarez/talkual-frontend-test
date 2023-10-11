<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
import type { OrderListResponse } from '~/types'

const { find } = useStrapi();
const { data } = await find<OrderListResponse>('orders', {
  populate: ['order_items', 'order_meta'] ,
  filters: {
    type: { $eq: 'normal' }
  }
});
const orders = ref(data);
console.log({orders})
</script>

<template>
 <section class="p-3 order-list">
    <h1 class="text-center">Order List</h1>
    <div class="filter">

      <h2>filters</h2> 
      <select name="cars" id="cars">
        <option value="all">all</option>
        <option value="normal">normal</option>
        <option value="donation">donation</option>
      </select>
    </div>

    <div v-if="orders && orders.length > 0">
      <div v-for="order in orders" :key="order.id" class="order">
        <h3>{{ order.id }}</h3>
        <!-- TODO nest skus -->
        <h3>sku: {{ order.attributes.order_items.data[0].attributes.sku }}</h3>
        <h3>type: {{ order.attributes.type}}</h3>
        <h3>quantity: {{ order.attributes.order_items.data[0].attributes.quantity}}</h3>
        <h3>firstname: {{ order.attributes.order_meta.data.attributes.shipping_firstname }}</h3>
       
      </div>
    </div>
    <div v-else>
      <p>No orders found.</p>
    </div>
  </section>
</template>

<style scoped>

.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.order-list {
  max-width: 800px;
  margin: 0 auto;

}

.order {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  background-color: #f7f7f7;
}

.order h1 {
  font-size: 1.5rem;
  color: #333;
}


</style>