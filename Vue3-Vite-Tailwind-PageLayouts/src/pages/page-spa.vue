<template>
<!--
-->
    <div>
        <nav id="header" class="fixed w-full z-30 bg-white" :class="[scrollPosition > 0 ? 'top-0' : 'top-6']">
            <div class="w-full container flex items-center justify-between mx-auto">
                <div class="flex">
                    product logo
                </div>
                <div>
                    <a href="#section_1" class="mr-3 text-lime-600 hover:text-lime-500">section1</a>
                    <a href="#section_2" class="mr-3">section2</a>
                    <a href="#section_3" class="mr-3">section3</a>
                </div>
            </div>
        </nav>
        <div id="section_1" class="bg-slate-50 w-full min-h-screen">
        </div>
        <div id="section_2" class="bg-green-500 w-full min-h-screen">
            <!-- features -->
        </div>
        <div id="section_3" class="bg-orange-500 w-full min-h-screen">
            <!-- price -->
        </div>
        <div id="section_4" class="bg-orange-500 w-full min-h-screen">
            <!-- registration -->
        </div>
        <a href="#section_1">
            <div v-if="scrollPosition > 300" class="fixed bottom-0 right-0 mb-4 mr-4 bg-sky-400 rounded-full w-12 h-12 text-center align-middle p-2">
                <span class="align-middle">UP</span>

                    <!-- <span class="screen-reader-text">Back to Top</span> -->
<!--
                    <svg width="32" height="32" viewBox="0 0 100 100" class="inline-block align-middle">
                        <path fill="white" d="m50 0c-13.262 0-25.98 5.2695-35.355 14.645s-14.645 22.094-14.645 35.355 5.2695 25.98 14.645 35.355 22.094 14.645 35.355 14.645 25.98-5.2695 35.355-14.645 14.645-22.094 14.645-35.355-5.2695-25.98-14.645-35.355-22.094-14.645-35.355-14.645zm20.832 62.5-20.832-22.457-20.625 22.457c-1.207 0.74219-2.7656 0.57812-3.7891-0.39844-1.0273-0.98047-1.2695-2.5273-0.58594-3.7695l22.918-25c0.60156-0.61328 1.4297-0.96094 2.2891-0.96094 0.86328 0 1.6914 0.34766 2.293 0.96094l22.918 25c0.88672 1.2891 0.6875 3.0352-0.47266 4.0898-1.1562 1.0508-2.9141 1.0859-4.1133 0.078125z"></path>
                    </svg>
 -->
            </div>
        </a>
    </div>
</template>

<script>
    import { onMounted, onUnmounted, ref } from 'vue';

    export default {
        setup() {
            const scrollPosition = ref(null);

            const updateScroll = () => {
                scrollPosition.value = window.scrollY
                console.log(scrollPosition.value);
            }

            onMounted(() => {
                window.addEventListener('scroll', updateScroll);
            });

            onUnmounted(() => {
                window.removeEventListener('scroll', updateScroll)
            });

            return {
                scrollPosition
            }
        }
    }
</script>
