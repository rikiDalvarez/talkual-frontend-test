<script setup lang="ts">
const email = ref('');
const password = ref('');

const { login } = useStrapiAuth();
const router = useRouter();
const onSubmit = async () => {
  try {
    await login({ identifier: email.value, password: password.value });
    await router.push('/orders')
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <div class="text-900 text-3xl font-medium mb-3">TALKUAL Frontend Test</div>
      <span class="text-600 font-medium line-height-3">Login</span>
    </div>

    <form @submit.prevent="onSubmit">
      <label for="email" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="email" v-model="email" type="text" placeholder="Email address" class="w-full mb-3" />

      <label for="password" class="block text-900 font-medium mb-2">Password</label>
      <InputText id="password" v-model="password" type="password" placeholder="Password" class="w-full mb-3" />

      <Button label="Sign In" type="submit" icon="pi pi-user" class="w-full"></Button>
    </form>
  </div>
</template>