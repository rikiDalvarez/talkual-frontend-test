<script setup lang="ts">

const { email, password, loginUser } = useStrapiLogin();
const onSubmit = async () => {
  await loginUser()
}
</script>

<template>
  <section>
    <h2 class="text-center p-3">TALKUAL Frontend Test</h2>
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header">
            Login
          </div>
          <div class="card-body">
            <form @submit.prevent="onSubmit" class="row g-3">
              <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="email" class="form-control" id="email">
              </div>
              <div class="col-12">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="password">
              </div>
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>