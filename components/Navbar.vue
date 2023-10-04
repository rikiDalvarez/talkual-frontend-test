<script setup lang="ts">
const logoutUser = useStrapiLogout();
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">TALKUAL</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="logoutUser">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">

</style>