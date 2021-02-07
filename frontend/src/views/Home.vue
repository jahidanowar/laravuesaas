<template>
  <div class="bg-white">
    <div class="container mx-auto py-16">
      <div class="text-center">
        <h1 class="text-4xl sm:text-6xl font-bold mb-6 leading-normal">
          One link to rule them all
        </h1>
        <p class="text-xl sm:text-2xl mb-8 leading-normal">
          Connect audiences to all of your content with just one link
        </p>
        <router-link to="/login" class="btn btn-primary inline-flex items-center"
          >Get Started <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
};
</script>
