<template>
    <div>
        <main>
            <img src="/src/assets/images/portfolio.png" :alt="imageDescription" class="sitePreview">
            <h2>Portfolio</h2>
            <p>A version of my portfolio website created with Vue.js. This is/was the first version that ever got publicized.</p>
            <div class="links">
                <button><a :href="liveLink">Check it out</a></button>
                <img src="/src/assets/images/info.svg" alt="">
            </div>           
        </main>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    main {
        width: 100%;
        max-width: 380px;
        margin: auto;
        background-color: #2e3039;
        padding: 10px;
        border-radius: 12px 12px 0 0;
    }
    h2 {
        margin: 0.5em 0;
    }
    .sitePreview {
        width: 100%;
        border-radius: 4px 4px 0 0;
    }
    p {
        color: #a9adc1;
        font-size: 1.2em;
        font-weight: 500;
    }
    .links {
        display: flex;
        justify-content: space-between;
        margin: 1em 0;
    }
    .links button {
        border: 1px solid #fff;
        border-radius: 4px;
        color: white;
        padding: 8px 16px;
        transition: 100ms ease-in-out;
        font-size: 18px;
    }
    .links button:hover {
        background-color: #a9adc1;
        color: #1f2028;
        border: 1px solid transparent;
    }
</style>