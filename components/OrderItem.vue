<script setup lang="ts">
import type { Order } from '~/types';
import { toRefs } from 'vue';

const props = defineProps({
	order: Object as () => Order,
	showDonationModal: Boolean,
	orderId: Number,
});

const { order,  orderId } = toRefs(props);
const emit = defineEmits();

console.log("orderId",orderId)


const updateShowDonationModal = (value: Order) => {
	emit('update:showDonationModal', value);
};


</script>

<template>
	<div class="order">
		<h3 v-if="order" :key="order.id">{{ order.id }}</h3>
		<template v-if="order && order.attributes.order_items.data[0]">
			<h3>sku: {{ order.attributes.order_items.data[0].attributes.sku }}</h3>
			<h3>quantity: {{ order.attributes.order_items.data[0].attributes.quantity }}</h3>
		</template>
		<h3 v-if="order" :key="order.attributes.type">type: {{ order.attributes.type }}</h3>
		<template v-if="order && order.attributes.order_meta.data">
			<h3>firstname: {{ order.attributes.order_meta.data.attributes.shipping_firstname }}</h3>
		</template>
		<div v-if="order && order.attributes.type !== 'donation' && order.attributes.status !== 'cancelled'"
			class="button-container">
			<button class="button-donate" @click="updateShowDonationModal(order)">Donate</button>
		</div>
	</div>
</template>
<style>
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
</style>
