<template>
    <div class="skills">
                <div class="skill html">
                    <p>HTML</p>
                    <img src="src/assets/images/html.png" alt="HTML">
                    <progress min="0" max="100" value="95" />
                </div>
                <div class="skill css">
                    <p>CSS</p>
                    <img src="src/assets/images/css-3.png" alt="CSS">
                    <progress min="0" max="100" value="75" />
                </div>
                <div class="skill js">
                    <p>JavaScript</p>
                    <img src="src/assets/images/js.png" alt="JavaScript">
                    <progress min="0" max="100" value="5" />
                </div>
                <div class="skill vue">
                    <p>Vue.js</p>
                    <img src="src/assets/images/vue.png" alt="Vue.js">
                    <progress min="0" max="100" value="35" />
                </div>
                <div class="skill python">
                    <p>Python</p>
                    <img src="src/assets/images/python.png" alt="Python">
                    <progress min="0" max="100" value="50" />
                </div>
                <div class="skill github">
                    <p>Git | GitHub</p>
                    <img src="src/assets/images/github.png" alt="Github">
                    <progress min="0" max="100" value="75" />
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
        padding: 1em;
        margin: 2em 0.5em;
        width: 100%;
        max-width: 180px;
        background-color: #2e3039;
        border-radius: 8px;
    }
    .skill p {
        font-size: 20px;
        font-weight: 600;
    }
    .skill img {
        width: 72px;
        margin: 1.5em;
    }
    progress {
        -webkit-appearance: none;
        height: 8px;
        width: 120px;
        
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
</style>