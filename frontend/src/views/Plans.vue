<template>
  <div class="container mx-auto py-16">
    <div class="hero pb-8 text-center">
      <h1 class="title">Plans</h1>
    </div>
    <div class="plans flex flex-wrap justify-center gap-5 w-full">
        <div v-for="(plan, i) in plans" :key="i" class="bg-white p-8 rounded-xl border-4 border-transparent hover:border-indigo-500">
            <div>
                <p class="text-xl text-gray-900">{{plan.title}}</p>
                <p class="text-5xl mt-5 font-bold">${{plan.price/100}} <span class="text-gray-400 font-normal text-base">/{{plan.validity}}</span></p>
                <p class="text-sm text-gray-500 mt-5">For most businesses that want to optimize web queries.</p>
                <ul class="mt-5">
                    <li v-for="(feature, j) in plan.features" :key="j" class="mb-3 flex items-center justify-between">
                        <div>{{feature.title}}</div>
                        <div>
                            <template v-if="feature.limit === 0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 opacity-50" fill="red" viewBox="0 0 1792 1792">
                                    <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </template>
                            <template v-else-if="feature.limit === 1">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </template>
                            <template v-else>
                                {{feature.limit}}
                            </template>
                        </div>
                    </li>
                </ul>
                <a class="btn btn-primary mt-8 block w-full text-center">Choose</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters({
            plans: 'plan/getPlans'
        })
    },
    methods:{
        ...mapActions({
            setPlans: 'plan/getPlansApi'
        })
    },
    mounted(){
        this.setPlans();
    }
}
</script>
