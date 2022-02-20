<template>
    <div>
    {{ test }}
          <div class="container w-full max-w-7xl">
            <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div class="flex flex-row items-center justify-between lg:justify-start">
                <a href="/" class="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"> wickedblocks </a>
                <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
                    <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" style="display: none"></path>
                  </svg>
                </button>
              </div>
              <nav :class="{'flex': open, 'hidden': !open}" class="flex-col items-center flex-grow hidden pb-4 border-blue-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
                <a class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline " href="#">About</a>
                <a class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Contact</a>
                <div class="relative">
                  <button @click="open = !open" class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm text-left text-gray-500 md:w-auto md:inline md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                    <span>Dropdown List</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 rotate-0">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  <transition 
                        enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"
                    >
                      <div v-show="open" class="absolute right-0 z-30 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                        <div class="px-2 py-2 bg-white rounded-md shadow">
                          <a class="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                          <a class="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                          <a class="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                        </div>
                      </div>
                  </transition>
                </div>
                <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
                  <button class="
                items-center
                block
                px-10
                py-2.5
                text-base
                font-medium
                text-center text-blue-600
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-500
              "> Sign in </button>
                  <button class="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> Sign up </button>
                </div>
              </nav>
            </div>
          </div>

        <div class="bg-gradient-to-r from-cyan-500 to-blue-500">&nbsp;</div>
        <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">&nbsp;</div>
        <h1>Page 1</h1>
        <p>{{ counter }}</p>
        <p>{{ name }}</p>
        <p>{{ doubleCount }}</p>
        <p>{{ getUserById(2) }}</p>

        <button @click="increment" class="px-2 py-1 font-bold text-sky-500 hover:text-sky-600 border-solid border-2 border-sky-500 hover:border-sky-600 rounded-md shadow-lg hover:shadow-none shadow-sky-500/50">Test button</button><br/>
        <br/>

        <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-6 py-3 rounded-md shadow-xl hover:shadow-none">
            Hover me
        </button>

        <!-- https://heroicons.com/ -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-cyan-500 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>

<select class="block w-52 text-gray-700 py-2 px-3 pr-6 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
    <option value="">
        Select an option
    </option>
    <option value="dog">
        Dog
    </option>
    <option value="cat">
        Cat
    </option>
    <option value="hamster">
        Hamster
    </option>
    <option value="parrot">
        Parrot
    </option>
    <option value="spider">
        Spider
    </option>
    <option value="goldfish">
        Goldfish
    </option>
</select>

<div class="w-52 space-y-0.5">
  <label for="basic" class="text-xs font-medium text-gray-500">
    Best Fruit
  </label>
  <select
    id="basic"
    name="basic"
    class="block w-full truncate rounded-md border-gray-200 pr-8 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75">
    <option selected>Oranges</option>
    <option>Apples</option>
    <option>Tomato</option>
  </select>
</div>


  <div class="flex border-b border-gray-200 dark:border-gray-700">
        <button class="h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none text-blue-600 border-blue-500 dark:border-blue-400 dark:text-blue-300">
            Profile
        </button>

        <button class="h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none hover:border-gray-400 text-gray-700 border-transparent dark:text-white cursor-base">
            Account
        </button>

        <button class="h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none hover:border-gray-400 text-gray-700 border-transparent dark:text-white cursor-base">
            Notifiaction
        </button>
    </div>

    </div>
</template>

<script lang="ts">
    import { ref, toRefs } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useStore } from '@/store';

    export default {
        setup() {
            const store = useStore();
            const open = ref(false);
            const test = ref<string | number>('2020')

            console.log(store.name);

            const { counter, name, doubleCount, getUserById } = storeToRefs(store);

            const increment = () => {
                console.log(open.value);
                console.log('qwe');
                store.increment();
                console.log(store.counter)
            }

            const counter_test = ref(0);
            const increment_test = () => counter_test.value++;

            console.log(store.name);

            return {
                counter,
                name,
                doubleCount,
                getUserById,
                increment,
                open,
                test,
                counter_test,
                increment_test
            }
        }
    }
</script>
