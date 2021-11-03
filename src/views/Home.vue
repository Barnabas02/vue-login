<template>
  <div class="home">
    <h1>Welcome, {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br />
    <button class="logout" @click="Logout">logout</button>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { getAuth, signOut } from "firebase/auth";

export default {
  setup() {
    const auth = getAuth();
    const name = ref("");
   
    onBeforeMount(() => {
      const user = auth.currentUser;      
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
    const Logout = () => {
      signOut(auth)
        .then(() => console.log("signed out"))
        .catch((err) => alert(err.message));
    };

    return {
      name,
      Logout,
    };
  },
};
</script>
