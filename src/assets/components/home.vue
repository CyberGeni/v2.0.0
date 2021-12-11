<template>
    <div>
        <main>
            <div class="hero">
                <div class="hero-image">
                    <img src="src\assets\images\emoji-peace.png" alt="">
                </div>
                <div class="hero-text">
                    <h1>Hi, I'm Treasure. I bring aesthetically pleasing designs to life, and create modern web solutions through code.</h1>
                    <p>Basically, I develop eye-catching websites that will definitely leave you wondering whether 'impossible' exists.</p>
                    <h2 class="see-more">Learn more about me <router-link to="/about" exact><img src="src/assets/images/arrow-right.svg" alt="Arrow right button"></router-link></h2>
                </div>
            </div>
            <div class="projects">
                <h1>Some of my featured projects</h1>
                <featured></featured>
                <h2 class="see-more">View more projects <router-link to="/projects" exact><img src="src/assets/images/arrow-right.svg" alt="Arrow right button"></router-link></h2>
            </div>
            <div class="contact"></div>
        </main>
    </div>
</template>
<script>
import Featured from './featured-project.vue'
export default {
    components: {
        'featured': Featured
    }
}
</script>
<style scoped>
/* hero section */
    .hero {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }  
    .hero-image img {
        width: 100%;
        max-width: 280px;
        margin: 2em 0;
    }
    .hero-text {
        max-width: 420px;
    }

/* projects */
    .projects h1 {
        font-size: 1.8em;
    }  
    h2.see-more {
        display: flex;
        align-items: start;
    }
    p {
        color: #a9adc1;
        font-size: 1.8em;
        font-weight: 500;
        margin: 1em 0;
    }
    h2.see-more img {
        margin: 0 0.6em;
        padding: 8px 8px;
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
            min-height: 85vh;
            align-content: center;
            justify-content: space-evenly;
        }
        .hero-text {
            max-width: 550px;
        }
        .projects {
            align-content: center;
            min-height: 80vh;
        }
    }
</style>