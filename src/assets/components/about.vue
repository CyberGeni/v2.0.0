<template lang="">
    <div>
        <main>
            <h1>I'm a 16 year old Software Developer based in Lagos, Nigeria.</h1>
            <p>My software development centers mostly around Frontend Development, using HTML, CSS, TailwindCSS and Vue.js. Fun fact: I don't know JavaScript really well (right?, I'm surprised too)</p>
            <p>Other than Frontend development, I also code in Python, trying to solve some algorithmic questions.</p>

            <h1>Skills</h1>
            <skills></skills>
            <section>
                <h1>Now, you might be wondering... why do you need me on your team?</h1>
                    <ul>
                        <li>If you happen to be looking for someone who can perfectly translate your designs into code, congratulations. You've found me.</li>
                        <li>I've led many teams to success, as well as been a submissive member in other teams. Either way, I happen to be a great team player.</li>
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
