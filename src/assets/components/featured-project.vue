<template>
    <div class="projects">
        <main v-for="project in projects" :key="project.id">
            <img :src="project.image" :alt="imageDescription" class="sitePreview">
            <div class="info">
                <h2 :key="project.id">{{project.title}}</h2>
                <p>{{project.description}}</p>
                <div class="links">
                    <button><a :href="liveLink">Check it out</a></button>
                    <router-link to=""><img src="/src/assets/images/info.svg" alt=""></router-link>
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
                    image: '/src/assets/images/portfolio.png',
                    title: 'devicespex',
                    description: 'A simple software to help you spend your money wisely when choosing to buy a device. Read more...',
                    liveLink: '',
                    projectInfo: '',
                    tag: 'featured',
                    id: 2
                },

                {
                    image: '/src/assets/images/portfolio.png',
                    title: 'Portfolio',
                    imageDescription: 'My portfolio site preview',
                    description: 'A version of my portfolio website created with Vue.js. This is/was the first version that ever got publicized.',
                    liveLink: '',
                    projectInfo: '',
                    tag: 'featured',
                    id: 1
                },

                {
                    image: '/src/assets/images/portfolio.png',
                    title: 'LaBurtina',
                    description: 'A responsive, lite version spice e-commerce website for a personal company.',
                    liveLink: '',
                    projectInfo: '',
                    tag: 'featured',
                    id: 2
                }

                
            ]
        }
    }
}
</script>
<style scoped>
    .projects {
        display: flex;
        flex-wrap: wrap;
    }
    main {
        width: 100%;
        max-width: 380px;
        margin: 1em auto;
        background-color: #2e3039;
        padding: 10px;
        border-radius: 12px;
        transition: 200ms ease-in-out;
    }
    main:hover {
        background-color: transparent;
        box-shadow: 0px 0px 20px 4px #2e3039;
        
    }
    main > * + * {
        margin-right: 0.8em;
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
    .links button {
        align-self: flex-end;
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
    @media  (min-width: 1024px) {
        main:hover {
            background-color: transparent;
            box-shadow: 0px 0px 20px 4px #2e3039;
            transform: translateY(-36px);
        }
    }
</style>