<template lang="">
    <div>
        <main>
            <h1 class="text-2xl md:text-4xl w-full font-bold leading-tight">I'm a 17 year old Software Developer based in Lagos, Nigeria.</h1>
            <p class="text-secondary text-2xl md:3xl my-6 font-medium">My software development centers mostly around Frontend Development, using HTML, CSS for the markup and design, TailwindCSS for wonderful UI, Vue.js for functionality and interaction. </p>
            <p class="text-secondary text-2xl md:3xl my-6 font-medium">Other than Frontend dev, I also code in Python, trying to solve some algorithmic questions.</p>

            <h1 class="text-2xl sm:text-3xl w-full font-bold leading-tight">Skills</h1>
            <skills></skills>
            <section>
                <h1 class="text-2xl sm:text-3xl w-full font-bold leading-tight">Now, you might be wondering... why do you need me on your team?</h1>
                    <ul class="ml-8">
                        <li class="text-secondary text-2xl my-5 font-medium list-disc">Not to brag or anything :-), but I'm the person you would want to call if you wanted pixel-perfect translations of design to code. That's like... my specialty. So if that's why you're here, then hearty congratulations. You need not look further, you've got the right person for the job.</li>
                        <li class="text-secondary text-2xl my-5 font-medium list-disc">I make a great team player. Are you searching for someone with excellent communication skills, collaboration skills, problem solving and accountability? I've got those.</li>
                        <li class="text-secondary text-2xl my-5 font-medium list-disc">It's possible that I might (<strong>respectfully</strong>) debate with you over your own project, just so it turns out excellent. In advance, sorry (not sorry). Still open  to compromises either way.</li>
                        <li class="text-secondary text-2xl my-5 font-medium list-disc">If after this you're not quite sure about how I may be of use to you, just feel free to beep me. We can have a nice chit-chat and get to know each other. You can find some of my contact infos <router-link class="text-white underline decoration-wavy" to="contact">here</router-link>. Can't wait☺</li>
                    </ul>
            </section>
            <button class="flex text-center m-auto font-medium text-xl border-2 border-secondary rounded px-5 py-2 hover:ring-2 hover:ring-secondary hover:ring-offset-2 hover:ring-offset-background transition-all"><router-link class="" to="projects">View My Project Catalog</router-link></button>
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


