<template>
    <div class="projects flex flex-wrap  justify-center items-center">
        <main
            class="hover:scale-105 w-full max-w-[360px] m-4 bg-lighterBackground p-3 rounded-xl transition-all hover:bg-transparen shadow-xl"
            v-for="project in projects" :key="project.id">
            <img :src="project.image" :alt="imageDescription" class="sitePreview w-full rounded">
            <div class="info px-2 py-1">
                <h2 :key="project.id" class="text-xl sm:text-2xl w-full font-bold leading-tight my-2">{{ project.title
                    }}
                </h2>
                <p class="text-secondary text-xl font-medium">{{ project.description }}</p>
                <div class="links flex justify-between items-center mt-4 mb-2">
                    <button
                        class="text-xl border-2 border-secondary rounded px-6 py-2 hover:ring-2 hover:ring-secondary hover:ring-offset-2 hover:ring-offset-background transition-all"><a
                            class="text-secondary" :href="project.liveLink" target="_blank">Check it out</a></button>
                    <router-link :to="'project.projectInfo'" v-if="project.extraInfo"><img
                            src="/src/assets/images/info.svg" alt="More Info"></router-link>
                    <a v-if="project.extraInfo" :href="project.projectInfo" target="_blank"><img
                            src="/src/assets/images/info.svg" alt="More Info"></a>
                </div>
            </div>
        </main>
        
            <button
                class="flex text-center m-4 my-auto font-medium text-xl border-2 border-secondary rounded px-5 py-2 hover:ring-2 hover:ring-secondary hover:ring-offset-2 hover:ring-offset-background transition-all"><a
                    href="https://github.com/cybergeni" target="_blank">There's More On GitHub 🌚</a></button>
      
    </div>
</template>
<script>
export default {
    data() {
        return {
            projects: [
                {
                    image: '/src/assets/images/btchr.png',
                    title: 'btchr',
                    description: " Say good bye to long URLs and hello to a simpler, sleeker way to shorten your links.",
                    liveLink: 'https://btchr.netlify.app',
                    projectInfo: '',
                    tag: 'landing-page',
                    id: 1
                },
                {
                    image: '/src/assets/images/typeframes.png',
                    title: 'Typeframes',
                    description: "Developed the landing page for a product that helps create stunning videos from ideas in minutes.",
                    liveLink: 'https://www.typeframes.com',
                    projectInfo: '',
                    tag: 'landing-page',
                    id: 1
                },
                {
                    image: '/src/assets/images/favour.png',
                    title: 'Favour Ajefu',
                    description: "Developed a portfolio website for a digital product designer, Favour Ajefu.",
                    liveLink: 'https://fayvour.netlify.app',
                    projectInfo: '',
                    tag: 'landing-page',
                    id: 1
                },
                {
                    image: '/src/assets/images/inkbridge.png',
                    title: 'InkBridge Synergy',
                    description: "A consulting firm focused on market research, business strategy, data analytics and project management.",
                    liveLink: 'https://inkbridgesynergy.com',
                    projectInfo: '',
                    tag: 'landing-page',
                    id: 1
                },
                {
                    image: '/src/assets/images/querus.png',
                    title: 'Querus Consults',
                    description: "Querus Consults is a company specializing in Engineering & Environmental Management.",
                    liveLink: 'https://querusconsults.com',
                    projectInfo: '',
                    tag: 'landing-page',
                    id: 1
                },
                {
                    image: '/src/assets/images/faame.png',
                    title: 'FAAME Digital',
                    description: "A new-age, all-female-powered influencer marketing, experiential marketing and branding agency.",
                    liveLink: 'https://faamedigital.com',
                    projectInfo: '',
                    tag: 'landing-page',
                    id: 1
                },
                {
                    image: '/src/assets/images/hamham.png',
                    title: 'HamHam',
                    description: "Develpoment of a design exploration for the landing page of a burger store.",
                    liveLink: 'https://ham-ham.netlify.app',
                    projectInfo: '',
                    tag: 'landing-page',
                    id: 1
                },
                // {
                //     image: '/src/assets/images/uicko.png',
                //     title: 'Uicko',
                //     description: "An unlimited design subscription service helping companies build and scale with outstanding designs.",
                //     liveLink: 'https://ham-ham.netlify.app',
                //     projectInfo: '',
                //     tag: 'landing-page',
                //     id: 1
                // },
                {
                    image: '/src/assets/images/prackage.jpg',
                    title: 'Prackage',
                    description: "Prackage makes it easier for you to connect, grow, evolve and enjoy the process of becoming a better you.",
                    liveLink: 'https://prackage.netlify.app',
                    projectInfo: '',
                    tag: 'landing-page',
                    id: 1
                },
                {
                    image: '/src/assets/images/centro.jpg',
                    title: 'Centro DAO',
                    description: "Find worthy DAOs to make contributions in, collaborate, and build, with our DAO explorer.",
                    liveLink: 'https://centrodao.netlify.app',
                    projectInfo: 'https://github.com/cybergeni/centro/',
                    tag: 'landing-page',
                    id: 2
                },
                {
                    image: '/src/assets/images/github-api.jpg',
                    title: 'GitHub User API',
                    description: 'Display info of users by username, including list of repositories and further info on them.',
                    liveLink: 'https://github-user-api-with-pagination.netlify.app/',
                    projectInfo: 'https://github.com/CyberGeni/github-user-api-with-pagination',
                    tag: 'api',
                    id: 3
                },
                {
                    image: '/src/assets/images/hulu-clone.jpg',
                    title: 'Hulu Clone',
                    description: 'Hulu is the best way to watch your favorite shows and movies on the go. (clone)',
                    liveLink: 'https://cybergeni.github.io/hulu-clone/',
                    projectInfo: 'https://github.com/cybergeni/hulu-clone/',
                    tag: 'landing-page',
                    id: 3
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

            ]
        }
    }
}
</script>
