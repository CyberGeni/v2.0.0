<template>
    <div>
        <main>
            <div class="hero">
                <div class="hero-image">
                    <img src="src\assets\images\emoji-peace.png" alt="">
                </div>
                <div class="hero-text">
                    <h1>Hi, I'm Treasure. I bring aesthetically pleasing designs to life, and create modern web solutions through code.</h1>
                    <p>Basically, I develop eye-catching websites that leaves you wondering whether 'impossible' exists.</p>
                    <h2>Learn more about me <router-link to="/about" exact><img src="src/assets/images/arrow-right.svg" alt="Arrow right button"></router-link></h2>
                </div>
            </div>
            <div class="projects"></div>
            <div class="contact"></div>
        </main>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
        max-width: 400px;
    }
    .hero-text h2 {
        display: flex;
        align-content: center;
    }
    p {
        color: #a9adc1;
        font-size: 1.8em;
        font-weight: 500;
        margin: 1em 0;
    }
    .hero-text img {
        margin: 0 0.5em ;
        padding: 10px 10px;
        border-radius: 50%;
        border: 1px solid white;
        transition: 2s ease-in-out;
        animation: slightLinearMovement infinite;
    }
    @keyframes slightLinearMovement {
        from {
            margin: 0 0.5em;
        }
        to {
            margin: 0 1em ;
        }
    }
    /* media queries */

    @media (min-width: 720px) {
        .hero {
            flex-grow: 1 1;
            height: 80vh;
            align-content: center;
            justify-content: space-evenly;
        }
        .hero-text {
            max-width: 550px;
        }
    }
</style>