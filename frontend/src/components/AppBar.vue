<template> 
    <header class="bg-white">
        <div class="container mx-auto py-5 sm:px-0 flex flex-wrap justify-center sm:justify-between">
            <router-link class="block content-center self-center font-bold text-2xl" to="/">LaraVueSaaS</router-link>
            <nav>
                <ul class="inline-flex justify-between">
                    <li class="p-5">
                        <router-link to="/">Pricing</router-link>
                    </li>
                    <li class="p-5">
                        <router-link to="/">Signup</router-link>
                    </li>
                    <li class="p-5">
                        <router-link to="/">Dashboard</router-link>
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