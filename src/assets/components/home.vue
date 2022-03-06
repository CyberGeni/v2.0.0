<template>
    <div>
        <main class="md:h-fit">
            <div class="flex flex-wrap justify-around grow sm:justify-evenly sm:content-center sm:min-h-[75vh]">
                <div >
                    <img class="w-full max-w-[280px] my-2" src="src\assets\images\emoji-peace.png" alt="">
                </div>
                <div class="max-w-[420px] md:max-w-[550px]">
                    <h1 class="text-3xl sm:text-4xl w-full font-bold leading-tight">Hi, I'm Treasure. I bring aesthetically pleasing designs to life, and create modern web solutions through code.</h1>
                    <p class="text-[#a9adc1] my-2 text-3xl sm:text-3xl font-medium leading-tight my-4 md:my-8">Basically, I develop eye-catching websites that will definitely leave you wondering whether 'impossible' exists.</p>
                    <h2 class="see-more flex items-center text-2xl sm:text-3xl ">Learn more about me <router-link class="flex items-center justify-center border rounded-full ml-2 w-9 h-9" to="/about" exact><img class="mx-1 p-0.5 z-[-10]" src="src/assets/images/arrow-right.svg" alt="Arrow right button"></router-link></h2>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped>

    h2.see-more img {
        transition: 2s ease-in infinite;
        animation: slightLinearMovement 1s infinite;
    }
    /* animations */
    @keyframes slightLinearMovement {
        0% {
            transform: translateX(-5px);
        }
        50% {
            transform: translateX(5px);
        }
        100% {
            transform: translateX(-5px);
        }
    }
</style>