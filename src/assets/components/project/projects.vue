<template>
    <div class="projects flex flex-wrap justify-center">
        <main class="w-full max-w-[360px] m-4 bg-lighterBackground p-3 rounded-xl transition-all hover:bg-transparent animate__animated animate__jello shadow-xl" v-for="project in projects" :key="project.id">
            <img :src="project.image" :alt="imageDescription" class="sitePreview w-full rounded">
            <div class="info px-2 py-1">
                <h2 :key="project.id" class="text-xl sm:text-2xl w-full font-bold leading-tight my-2">{{project.title}}</h2>
                <p class="text-secondary text-xl font-medium">{{project.description}}</p>
                <div class="links flex justify-between items-center mt-4 mb-2">
                    <button class="text-xl border-2 border-secondary rounded px-6 py-2 hover:ring-2 hover:ring-secondary hover:ring-offset-2 hover:ring-offset-background transition-all"><a class="text-secondary" :href="project.liveLink" target="_blank">Check it out</a></button>
                    <router-link :to="'project.projectInfo'" v-if="project.extraInfo"><img src="/src/assets/images/info.svg" alt="More Info"></router-link>
                    <a v-if="!project.extraInfo" :href="project.projectInfo" target="_blank"><img src="/src/assets/images/info.svg" alt="More Info"></a>
                </div> 
            </div>            
        </main>
        <button class="flex text-center m-auto font-medium text-xl border-2 border-secondary rounded px-5 py-2 hover:ring-2 hover:ring-secondary hover:ring-offset-2 hover:ring-offset-background transition-all"><a href="https://github.com/cybergeni" target="_blank">There's More On GitHub 🌚</a></button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            projects: [
                {
                    image: '/src/assets/images/space.png',
                    title: 'Space Tour (coming soon)',
                    description: "C'mon... if you want to go to space, you might as well go to outer space and not hover kinda on it's edge.",
                    liveLink: '#',
                    projectInfo: 'https://github.com/cybergeni/space-tourism/',
                    tag: 'landing-page',
                    id: 10
                },
                {
                    image: '/src/assets/images/hulu-clone.jpg',
                    title: 'Hulu Clone',
                    description: 'Hulu is the best way to watch your favorite shows and movies on the go. (clone)',
                    liveLink: 'https://cybergeni.github.io/hulu-clone/',
                    projectInfo: 'https://github.com/cybergeni/hulu-clone/',
                    tag: 'landing-page',
                    id: 9
                },
                {
                    image: '/src/assets/images/loopstudios.png',
                    title: 'Loopstudios - VR',
                    description: 'Producing world-class VR projects for some of the best companies around the globe. (futuristic)',
                    liveLink: 'https://cybergeni.github.io/loopstudios/',
                    projectInfo: 'https://github.com/cybergeni/loopstudios/',
                    tag: 'landing-page',
                    id: 8
                },
                {
                    image: '/src/assets/images/fayvour.png',
                    title: 'Product Designer\'s Portfolio',
                    description: 'A portfolio website for a Product designer with great interface and sleek animations.',
                    liveLink: 'https://fayvour.netlify.app/',
                    projectInfo: 'https://github.com/cybergeni/FayvourAj',
                    tag: 'portfolio',
                    id: 7
                },
                {
                    image: '/src/assets/images/riskfree.png',
                    title: 'Riskfree App',
                    description: "An application that helps you control overthinking, to get a grip of your thoughts. (futuristic)",
                    liveLink: 'https://riskfreeapp.netlify.app/',
                    projectInfo: 'https://github.com/cybergeni/riskfree',
                    tag: 'landingPage',
                    id: 1
                },
                {
                    image: '/src/assets/images/chat-app.png',
                    title: 'Chat Application Illustration',
                    description: "A landing page for the chat section of a dog-walking application. P.S: the phone isn't a picture. :)",
                    liveLink: 'https://cybergeni.github.io/chat-app-illustration',
                    projectInfo: 'https://github.com/cybergeni/chat-app-illustration',
                    tag: 'landingPage',
                    id: 1
                },

                {
                    image: '/src/assets/images/clipboard.png',
                    title: 'Clipboard Application',
                    imageDescription: '',
                    description: 'An application that helps you gather and share your clips with teammates(futuristic).',
                    liveLink: 'https://cybergeni.github.io/clipboard-landing-page',
                    projectInfo: 'https://github.com/cybergeni/clipboard-landing-page',
                    tag: '',
                    id: 2
                },

                {
                    image: '/src/assets/images/social-proof-section.png',
                    title: 'Social Proof UI Component',
                    description: 'A responsive social proof section UI component containing customer reviews and ratings.',
                    liveLink: 'https://cybergeni.github.io/social-proof-section',
                    projectInfo: 'https://github.com/cybergeni/social-proof-section',
                    tag: 'component',
                    id: 3
                },  

                {
                    image: '/src/assets/images/fylo.png',
                    title: 'Fylo',
                    description: 'Fylo is a storage software that helps you access and share your files across your devices. (futuristic)',
                    liveLink: 'https://cybergeni.github.io/fylo-landing-page-dark-theme',
                    projectInfo: 'https://github.com/cybergeni/fylo-landing-page-dark-theme/',
                    tag: '',
                    id: 4
                },

                {
                    image: '/src/assets/images/order-summary.png',
                    title: 'Order Summary Card',
                    description: 'A UI card component that can be used in the pre-payment sections of e-commerce sites',
                    liveLink: 'https://cybergeni.github.io/order-summary-component',
                    projectInfo: 'https://github.com/cybergeni/order-summary-component/',
                    tag: '',
                    id: 5
                },

                {
                    image: '/src/assets/images/huddle.png',
                    title: 'Huddle',
                    description: 'Huddle re-imagines the way we build communities, helping you to create connections with users. (futuristic)',
                    liveLink: '',
                    projectInfo: '',
                    tag: '',
                    id: 6
                }, 
                
            ]
        }
    }
}
</script>

