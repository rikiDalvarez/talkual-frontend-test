<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});

import type { OrderListResponse, Order } from '~/types'
import {computed} from 'vue';

const { find } = useStrapi();

const { data }  = await find<OrderListResponse>('orders', {
  populate: ['order_items', 'order_meta'] ,
});

const orders = ref(data);
const filterValue = ref('all')
const showDonationModal = ref(false);
const orderId = ref();

const openDonationModal = (order: Order) => {
  showDonationModal.value = true;
  orderId.value = order.id;
}

const closeDonationModal = () => {
  showDonationModal.value = false;
}

const updateFilter = (newFilterValue: string) => {
  console.log(newFilterValue);
 filterValue.value = newFilterValue;
}

const handleDonationComplete = async () => {
  try {
    const { data } = await find<OrderListResponse>('orders', {
      populate: ['order_items', 'order_meta'],
    });

    orders.value = data;
    closeDonationModal();

  } catch (error) {
    console.error('Error updating orders', error);
  }
};

const filteredOrders = computed(() => {
  if (filterValue.value === 'all') {
    return orders.value;
  }

  return orders.value.filter((order) => order.attributes.type === filterValue.value);
});

</script>

<template>
  <section class="p-3 order-list">
    <h1 class="text-center">Order List</h1>
    <div>
      <section class="p-3 order-list">
        <div class="filter">
          <h2>Filters</h2>
          <Filterbar :filterValue="filterValue" @update:filterValue="updateFilter"/>
        </div>
      </section>
    </div>
    <div v-if="filteredOrders.length > 0">
      <OrderItem v-for="order in filteredOrders" :key="order.id" :order="order" :showDonationModal="showDonationModal" :orderId="orderId" @update:showDonationModal="openDonationModal" />
    </div>
    <div v-else>
      <p>No orders found.</p>
    </div>
    <Donation :orderId="orderId" :visible="showDonationModal" @close="closeDonationModal" @donation-complete="handleDonationComplete" />

  </section>
</template>

<style scoped>

.button-container {
  display: flex;
  justify-content: space-around}

.button-donate {
  color: white;
  background-color: #517cff;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
}

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