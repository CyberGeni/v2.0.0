<template lang="">
    <div>
        <main>
            <h1>I'm a 16 year old Software Developer based in Lagos, Nigeria.</h1>
            <p>My software development centers mostly around Frontend Development, using HTML, CSS, TailwindCSS and Vue.js. Fun fact: I don't know JavaScript (right?, I'm surprised too)</p>
            <p>Other than Frontend dev, I also code in Python, trying to solve some algorithmic questions.</p>

            <h1>Skills</h1>
            <skills></skills>
            
        </main>    
    </div>
</template>

<script>
import Skills from './skills.vue'
export default {
    components: {
        'skills': Skills
    }
}
</script>

<style scoped>
    p {
        color: #a9adc1;
        font-size: 1.5em;
        font-weight: 500;
        margin: 1.5em 0;
    }

</style>