<template>
  <header class="bg-white">
    <div
      class="container mx-auto py-5 sm:py-0 flex flex-wrap justify-center sm:justify-between"
    >
      <router-link class="block self-center font-bold text-2xl sm:py-2" to="/">
        <img src="../assets/img/logo.svg" alt="OneBioLink" class="h-10" />
      </router-link>
      <nav class="self-center">
        <ul class="inline-flex justify-between align-middle">
          <template v-if="!user">
            <li class="p-5">
              <router-link to="/plans" class="flex">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Pricing</router-link>
            </li>
            <li class="p-5">
              <router-link to="/login" class="flex">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
              Login</router-link>
            </li>
            <li class="p-5">
              <router-link to="/signup" class="flex">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                Signup</router-link>
            </li>
          </template>
          <template v-else>
            <li class="p-5">
              <router-link to="/dashboard" class="flex">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                Dashboard</router-link>
            </li>
            <li class="p-5">
              <router-link to="/account" class="flex">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              My Account</router-link>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppBar",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>

<style></style>
