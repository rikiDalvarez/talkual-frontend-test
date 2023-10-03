<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
import type { OrderListResponse } from '~/types'

const { find } = useStrapi();
const { data } = await find<OrderListResponse>('orders', { populate: ['order_items', 'order_meta'] });
const orders = ref(data);
</script>

<template>
  <section>
    <h1 class="text-center">Order List</h1>
    <div class="flex flex-wrap justify-content-center gap-3">
      <Card v-for="order in orders" :key="order.id" class="w-28rem flex align-items-center justify-content-center">
        <template #title>Order id: {{ order.id }}</template>
        <template #subtitle>Status: {{ order.attributes.status }}</template>
        <template #content>
          <p>SKU: {{ order.attributes.order_items.data[0].attributes.sku }}</p>
          <p>Postal code: {{ order.attributes.order_meta.data.attributes.shipping_postcode }}</p>
          <p>User firstname: {{ order.attributes.order_meta.data.attributes.shipping_firstname }}</p>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Donate" />
        </template>
      </Card>
    </div>
  </section>
</template>