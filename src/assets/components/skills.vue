<template>
    <div class="skills">
                <div class="skill html">
                    <p>HTML</p>
                    <img src="src/assets/images/html.png" alt="HTML">
                </div>
                <div class="skill css">
                    <p>CSS</p>
                    <img src="src/assets/images/css-3.png" alt="CSS">
                </div>
                <div class="skill js">
                    <p>JavaScript</p>
            
                    <img src="src/assets/images/js.png" alt="JavaScript">
                </div>
                <div class="skill vue">
                    <p>Vue.js</p>
                    <img src="src/assets/images/vue.png" alt="Vue.js">
                </div>
                <div class="skill python">
                    <p class="mb-2">React</p>
                    <img src="src/assets/images/react.png" alt="React">
                </div>
                <div class="skill tailwind">
                    <p>Tailwind</p>
                    <img class="py-3.5" src="src/assets/images/tailwind.png" alt="Github">
                </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        width: 100%;
        margin: 1em 0 3em 0;
    }
    .skill {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 2em 0.1em;
        width: 100%;
        max-width: 160px;
        background-color: #2e3039;
        border-radius: 8px;
        transition: 1.3s ease;
    }
    .skill p {
        font-size: 20px;
        font-weight: 600;
    }
    .skill img {
        width: 72px;
        margin: 1.5em 0;
    }

    /* override default styling for progress bar */
    progress {
        -webkit-appearance: none;
        height: 8px;
        width: 80%;
    }
    ::-webkit-progress-bar {
        border-radius: 24px;
        background-color: #72768f;
    }
    ::-webkit-progress-value {
        border-radius: 24px;
        background-color: white;
    }
    .html ::-webkit-progress-value {
        border-radius: 24px;
        background-color: #ff7816;
    }
    .css ::-webkit-progress-value {
        border-radius: 24px;
        background-color: #2196f3;
    }
    .js ::-webkit-progress-value {
        border-radius: 24px;
        background-color: #ffe000;
    }
    .vue ::-webkit-progress-value {
        border-radius: 24px;
        background-color: #81c784;
    }
    .python ::-webkit-progress-value {
        border-radius: 24px;
        background-image: linear-gradient(to right, #4a8abd, #306998);
    }
    .github ::-webkit-progress-value {
        border-radius: 24px;
        background-color: white;
    }

    /* media queries */

    @media (min-width: 600px) {
        .skill {
            max-width: 180px;
        }
    }
</style>