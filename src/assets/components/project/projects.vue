<template>
    <div class="projects">
        <main v-for="project in projects" :key="project.id">
            <img :src="project.image" :alt="imageDescription" class="sitePreview">
            <div class="info">
                <h2 :key="project.id" class="text-xl sm:text-2xl w-full font-bold leading-tight">{{project.title}}</h2>
                <p>{{project.description}}</p>
                <div class="links">
                    <button><a :href="project.liveLink" target="_blank">Check it out</a></button>
                    <router-link :to="'project.projectInfo'" v-if="project.extraInfo"><img src="/src/assets/images/info.svg" alt="More Info"></router-link>
                    <a v-if="!project.extraInfo" :href="project.projectInfo" target="_blank"><img src="/src/assets/images/info.svg" alt="More Info"></a>
                </div> 
            </div>            
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            projects: [
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
                    description: "An application that helps you control overthinking, to get a grip of your thoughts (futuristic)",
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
                    description: 'An application that helps you gather and share your clips with teammates.(futuristic)',
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

            /*  

                {
                    image: '',
                    title: '',
                    description: '',
                    liveLink: '',
                    projectInfo: '',
                    tag: '',
                    id: 8
                }, */
            ]
        }
    }
}
</script>
<style scoped>
    .projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    main {
        width: 100%;

        max-width: 360px;
        margin: 1em;
        background-color: #2e3039;
        padding: 10px;
        border-radius: 12px;
        transition: 200ms ease-in-out;
    }
    main:hover {
        background-color: transparent;
        box-shadow: 0px 0px 20px 4px #2e3039;       
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
    .info {
        padding: 0.2em 0.7em;
    }
    .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1em 0 0.5em 0;
    }
    .links a {
        color: #a9adc1;
    }
    .links button {
        align-self: flex-end;
        border: 1px solid #a9adc1;
        border-radius: 4px;
        color: white;
        padding: 8px 16px;
        transition: 100ms ease-in-out;
        font-size: 18px;
    }
    .links button:hover {
        color: white;
        border: 2px solid white;
    }
    /* media queries */
    @media  (min-width: 1024px) {
        main:hover {
            background-color: transparent;
            box-shadow: 0px 0px 20px 4px #2e3039;
            transform: translateY(-24px);
        }
    }
</style>
