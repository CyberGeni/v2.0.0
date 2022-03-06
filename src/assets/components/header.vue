<template>
    <div id="header" :class="{activenav : toggled}">
        <!-- header for mobile -->
        <div class="headerForMobile" >
            <header class="flex justify-between items-center w-full h-24">
                <div class="logo text-3xl font-medium">Treasure<span class="font-black text-5xl text-slate-500">.</span></div>
                <!-- menu -->
                <div class="flex space-x-3">
                    <button @click="changeTheme()" class="flex items-center justify-center flex-col rounded-full border-[1px] border-white w-12 h-12"><img :src="imageLight" alt="Dark Theme" v-if="darkTheme" ><img :src="imageDark" alt="Dark Theme" v-if="!darkTheme"></button>
                <!-- burger -->
                    <div class="burger">
                        <button  @click="toggled = !toggled;toggle()" id="navbarToggler" class="flex flex-col w-12 h-12 space-y-1 items-center justify-center rounded-full border border-white" :class="{activenav : toggled}">
                            <div class="line transition-full bg-white w-5 h-0.5 rounded"></div>
                            <div class="line transition-full bg-white w-8 h-0.5 rounded"></div>
                            <div class="line transition-full bg-white w-5 h-0.5 rounded"></div>
                        </button>                                     
                    </div>
                </div>            
            </header>
            <!-- navbar -->
            <nav :class="{animate__lightSpeedInRight : toggled}" class="animate__animated animate__fast flex absolute items-stretch z-100 w-full h-full bg-background" id="nav" v-if="toggled">
                <ul class="bg-background mt-[-2em]">
                    <router-link class="text-white" to="/" ><li class="pl-4 hover:pl-6 transition-all border-b py-4" @click="toggled = !toggled">Home</li></router-link>
                    <router-link class="text-white" to="/about"><li class="pl-4 hover:pl-6 transition-all border-b py-4" @click="toggled = !toggled">About</li></router-link>
                    <router-link class="text-white" to="/projects"><li class="pl-4 hover:pl-6 transition-all border-b py-4" @click="toggled = !toggled">Projects</li></router-link>
                    <a class="text-white" href="https://cybergenie.hashnode.dev"><li class="pl-4 hover:pl-6 transition-all border-b py-4" @click="toggled = !toggled">Blog</li></a>
                    <router-link class="text-white" to="/contact"><li class="pl-4 hover:pl-6 transition-all border-b py-4" @click="toggled = !toggled">Contact</li></router-link>
                </ul>
            </nav>
        </div>
        <div class="headerForDesktop hidden"> 
            <header class="flex justify-between items-center w-full h-26 sm:h-24">
                <div class="flex items-center text-4xl font-medium">Treasure<span class="mt-[-0.45em] text-8xl text-slate-500">.</span></div>
                <!-- navbar -->
                <nav id="nav">
                    <ul class="w-full">
                        <router-link to="/" exact><li>Home</li></router-link>
                        <router-link to="/about" exact><li>About</li></router-link>
                        <router-link to="/projects" exact><li>Projects</li></router-link>
                        <a class="text-white transition-full" href="https://cybergenie.hashnode.dev" target="_blank"><li @click="toggled = !toggled">Blog</li></a>
                        <!--<li><router-link to="/blog" exact>Mini Blog</router-link></li>-->
                        <li><router-link to="/contact" exact>Contact</router-link></li>
                    </ul>
                </nav>
                <!-- menu -->
                <div class="flex">
                    <div class="themeToggle">
                        <button @click="darkTheme = !darkTheme" class="flex items-center justify-center flex-col rounded-full border-[1px] border-white w-12 h-12"><img :src="imageLight" alt="Dark Theme" v-if="darkTheme"><img :src="imageDark" alt="Dark Theme" v-if="!darkTheme"></button>
                    </div>
                </div>        
            </header>       
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                toggled: false,
                darkTheme: false,
                imageLight: 'src/assets/images/sun.svg',
                imageDark: 'src/assets/images/moon.svg'
            }
        },
        methods: {
            changeTheme() {
                this.darkTheme = !this.darkTheme;
                if (this.darkTheme) {
                    document.body.classList.add('dark');
                } else {
                    document.body.classList.remove('dark');
                }
            },
        }
    }
</script>
<style>

    /* burger changing to x while active */

    .activenav .line:nth-child(1) {
        position: absolute;
        transform: rotate(45deg);
        width: 22px;
    }
    .activenav .line:nth-child(2) {
        opacity: 0;
    }
    .activenav .line:nth-child(3) {
        position: absolute;
        transform: rotate(135deg);
        width: 22px;
    }

    /* overflow hidden while active */
    #header.activenav{
        overflow-y: hidden;
    }
    body.activenav {
        overflow: hidden;
    }
    .activenav header {
        background-color: #1f2028;
        overflow: hidden;
        position: fixed;
        z-index: 10000;
        width: 95%;
    }
    .activenav nav  {
        margin-top: 120px;
        background: #1f2028;
        position: fixed;
    }
    /* mediocre animations  */

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            min-height: 0;
        }
        to {
            opacity: 1;
            min-height: 100%;
        }
    }

    /* header for desktop */

    .menu > * + * {
        margin-left: 0.7em;
    }
    .themeToggle button {
        border-radius: 50%;
        padding: 0.37em;
        border: 1px solid white;
        width: 52px;
        height: 52px;
        line-height: 52px; 
    }

    /* navigation listings */
    .headerForDesktop nav {
        display: flex;
        align-items: center;
        min-height: 100%;
    }
    nav ul {
        width: 100%; 
    }
    .headerForDesktop nav ul {
        display: flex;
        font-size: 20px;
    }
    .headerForDesktop nav ul > * + * {
        margin-left: 0.9em;
    }
    .headerForDesktop a {
        color: #a9adc1;
        transition: 0.25s ease-in-out;
    }
    .headerForDesktop a:hover {
        color: #fff;
        font-size: 21px;
    }
    .headerForDesktop a.router-link-active {
        color: white;
        font-size: 21px;
    }
    /* media queries (the sweet part)*/
    @media (min-width: 720px) {
        .headerForMobile {
            display: none;
        }
        .headerForDesktop {
            display: flex;
        }
    }
</style>
    
