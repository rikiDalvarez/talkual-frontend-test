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
</script>

<template>
  <section class="p-3">
    <h1 class="text-center">Order List</h1>
    <!-- Write rest of the code here -->
  </section>
</template>