<script setup lang="ts">
const items = ref([
  {
    label: 'Logout',
    icon: 'pi pi-fw pi-power-off'
  }
])
</script>

<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <template #start>
        TALKUAL
      </template>
    </Menubar>
  </div>
  <div class="container">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
@import url("~/assets/main.scss");
</style>