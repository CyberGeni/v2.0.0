<template>
    <div>
        <main class="md:h-fit">
            <div class="flex flex-wrap justify-around sm:justify-evenly sm:content-center sm:min-h-[75vh]">
                <div >
                    <img class="w-full max-w-[280px] my-2" src="src\assets\images\emoji-peace.png" alt="">
                </div>
                <div class="max-w-[420px] md:max-w-[550px]">
                    <h1 class="text-2xl sm:text-3xl w-full font-bold leading-tight">Hi, I'm Treasure. I bring aesthetically pleasing designs to life, and create modern web solutions through code.</h1>
                    <p class="text-[#a9adc1] my-2 text-2xl sm:text-3xl font-medium leading-tight my-4 md:my-8">Basically, I develop eye-catching websites that will definitely leave you wondering whether 'impossible' exists.</p>
                    <h2 class="flex items-start text-2xl sm:text-3xl ">Learn more about me <router-link to="/about" exact><img class="mx-1 p-0.5 " src="src/assets/images/arrow-right.svg" alt="Arrow right button"></router-link></h2>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped>

    h2.see-more img {
        border-radius: 50%;
        border: 1px solid #a9adc1;
        transition: 2s ease-in infinite;
        animation: slightLinearMovement 1s infinite;
    }
    .see-more img:hover {
        border: 1px solid #fff;
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
    /* media queries */

    @media (min-width: 720px) {

        .hero {
            flex-grow: 1 1;     

        }


    }
</style>