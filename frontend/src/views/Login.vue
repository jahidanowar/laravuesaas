<template>
  <div class="container mx-auto py-16">
    <div class="hero pb-8 text-center">
        <h1 class="title">Login</h1>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 mx-auto bg-white rounded-lg p-8">
        <form action="self" method="post">
            <div class="mb-5">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="jahid@email.com" v-model="form.email">
            </div>
            <div class="mb-5">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" id="password" placeholder="Enter your password" v-model="form.password">
            </div>
            <div class="mb-5">
                <label class="flex items-center space-x-3 mb-3">
                    <input type="checkbox" name="checked-demo" class="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"/>
                        <span class="text-gray-700 dark:text-white font-normal">
                            Remember me
                        </span>
                </label>
            </div>
            <div class="mb-5">
                <button class="w-full btn btn-primary">Login</button>
            </div>
            <div class="text-center text-sm text-gray-500">
                <router-link to="/forgot">Forgot your password? Click to reset</router-link>
            </div>
        </form>
    </div>
    <div class="mt-5 text-center">
        <router-link to="/signup">Don't have an account?</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
      return{
          form:{
              email: '',
              password: ''
          }
      }
  }
}
</script>
