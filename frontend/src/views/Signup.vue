<template>
  <div class="container mx-auto py-16">
    <div class="hero pb-8 text-center">
        <h1 class="title">Create an acount</h1>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 mx-auto bg-white rounded-lg p-8">
        <form action="self" method="post">
            <div class="mb-5">
                <label for="name">Name</label>
                <input type="text" name="name" class="form-control" placeholder="Harvey Dent" v-model="form.name">
            </div>
            <div class="mb-5">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" placeholder="harveydent@gmail.com" v-model="form.email">
            </div>
            <div class="mb-5">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" placeholder="Enter your password" v-model="form.password">
            </div>
            <div class="mb-5">
                <label for="password_confirm">Confirm Password</label>
                <input type="password" name="password_confirm" class="form-control" placeholder="Repeat password" v-model="form.password_confirm">
            </div>
            <div class="mb-5">
                <button class="w-full btn btn-primary">Signup</button>
            </div>
            <div class="text-xs text-gray-400 text-center">
                 By using this service you are agreeing to the terms of service and privacy policy 
            </div>
        </form>
    </div>
    <div class="mt-5 text-center">
        <router-link to="/login">Already have an account?</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data(){
      return{
          form:{
              name: '',
              email: '',
              password: '',
              password_confirm:''
          }
      }
  }
}
</script>
