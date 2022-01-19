<!--App.vue-->
<template>
    <div>Hello</div>
    <div className='flex justify-center mt-10 items-center'>
      <h1 className='text-xl md:text-4xl'>
        Hello
      </h1>
      <button
        className='bg-red-300 p-2 rounded mx-20 hover:bg-red-600 hover:text-white'
      >
        Click me!
      </button>
      <a
        href='https://google.com'
        className='underline font-bold'
      >
        Google
      </a>
    </div>

<figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
  <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-semibold">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-cyan-600">
        Sarah Dayan
      </div>
      <div class="text-gray-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  setup() {
      console.log('I am App Printing in the library')
  }  
})
</script>
