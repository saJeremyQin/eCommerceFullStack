<template>
  <NavBar :user="user"/>
  <div class="page-wrap">
    <router-view :user="user"/>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const user = ref(null);

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (fUser) => {
    user.value = fUser;
  })
})


</script>
