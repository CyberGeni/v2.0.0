<template lang="">
    <div>
        <main>
            <h1>I'm a 16 year old Software Developer based in Lagos, Nigeria.</h1>
            <p>My software development centers mostly around Frontend Development, using HTML, CSS, TailwindCSS and Vue.js.</p>
            <p>Other than Frontend development, I also code in Python, trying to solve some algorithmic questions.</p>

            <h1>Skills</h1>
            <skills></skills>
            <section>
                <h1>Now, you might be wondering... why do you need me on your team?</h1>
                    <ul>
                        <li>Not to brag or anything :-), but I'm the person you would want to call if you wanted pixel-perfect translations of design to code. That's like... my specialty. So if that's why you're here, then hearty congratulations. You need not look further, you've got the right person for the job.</li>
                        <li>I make a great team player. Are you searching for someone with excellent communication skills, collaboration skills, problem solving and accountability? I've got those.</li>
                        <li>It's possible that I might (<strong>respectfully</strong>) debate with you over your own project, just so it turns out excellent. In advance, sorry (not sorry). Still open  to compromises either way.</li>
                        <li>If after this you're not quite sure about how I may be of use to you, just feel free to beep me. We can have a nice chit-chat and get to know each other. You can find some of my contact infos <router-link to="contact">here</router-link>. Can't wait☺</li>
                    </ul>
            </section>
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
    p, li {
        color: #a9adc1;
        font-size: 1.5em;
        font-weight: 500;
        margin: 1.5em 0;
        list-style-type: disc;
    }
    ul {
        margin-left: 2em;
    }
    li {
        color: #a9adc1;
        font-size: 1.4em;
        font-weight: 500;
        margin: 1.2em 0;
        list-style-type: disc;
    }
    section a {
        color: white;
        text-decoration: underline;
    }
</style>
