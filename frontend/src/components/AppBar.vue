<template> 
    <header class="bg-white">
        <div class="container mx-auto py-5 sm:py-0 flex flex-wrap justify-center sm:justify-between">
            <router-link class="block self-center font-bold text-2xl sm:py-2" to="/">
                <img src="../assets/img/logo.svg" alt="OneBioLink" class="h-10">
            </router-link>
            <nav class="self-center">
                <ul class="inline-flex justify-between align-middle">
                    <li class="p-5">
                        <router-link to="/plans">Pricing</router-link>
                    </li>
                    <li class="p-5">
                        <router-link to="/signup">Signup</router-link>
                    </li>
                    <li class="p-5">
                        <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<script>
export default {
    name:"AppBar",

}
</script>

<style>

</style>