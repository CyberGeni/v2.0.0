<template>
    <div>
        <div class="headerForMobile">
            <header>
                <div class="logo">Treasure A.</div>
                <div class="menu">
                    <div class="themeToggle">
                        <button onclick="changeTheme()" class="themeToggler"><img src="src\assets\images\sun.svg" alt="Dark Theme"></button>
                    </div>
                    <div class="burger">
                        <button @click="toggled = !toggled" id="navbarToggler" :class="{activenav : toggled}">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </button>                                     
                    </div>
                </div>            
            </header>
            <nav id="nav" v-if="toggled">
                <ul>
                    <router-link to="/" ><li @click="toggled = !toggled">Home</li></router-link>
                    <router-link to="/about"><li @click="toggled = !toggled">About</li></router-link>
                    <router-link to="/projects"><li @click="toggled = !toggled">Projects</li></router-link>
                    <router-link to="/blog"><li @click="toggled = !toggled">Mini Blog</li></router-link>
                    <router-link to="/contact"><li @click="toggled = !toggled">Contact</li></router-link>
                </ul>
            </nav>
        </div>
        <div class="headerForDesktop"> 
            <header>
                <div class="logo">Treasure A.</div>
                <nav id="nav">
                    <ul>
                        <router-link to="/" exact><li>Home</li></router-link>
                        <router-link to="/about" exact><li>About</li></router-link>
                        <router-link to="/projects" exact><li>Projects</li></router-link>
                        <li><router-link to="/blog" exact>Mini Blog</router-link></li>
                        <li><router-link to="/contact" exact>Contact</router-link></li>
                    </ul>
                </nav>
                <div class="menu">
                    <div class="themeToggle">
                        <button onclick="changeTheme()" class="themeToggler"><img src="src\assets\images\sun.svg" alt="Dark Theme"></button>
                    </div>
                </div>        
            </header>       
        </div>
    </div>
</template>
<script>

// navbar show on click link 


// close navbar when user clicks a link 

export default {
    data() {
        return {
            toggled: false
        }
    },

}
</script>
<style scoped>
    .headerForDesktop {
        display: none;
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: 100%;
    }
    .logo {
        font-size: 36px;
        font-weight: 500;
    }
    .menu {
        display: flex;
    }
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

    /* burger designs */

     button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 1px solid white;
        border-radius: 50%;
        width: 52px;
        height: 52px;
    }
    .line {
        width: 26px;
        height: 2px;
        background-color: white;
        margin: 2px;
        border-radius: 8px;
        transition: 0.5s ease-in-out;
    }
    .line:nth-child(odd) {
        width: 15px;
    }

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

    /* navigation listings */

    .headerForMobile nav {
        display: flex;
        align-items: stretch;
        z-index: 100;      
        min-height: 100%;
        transition: 2s ease-in;
        animation: fadeIn 1.2s;
    }
    nav ul {
        width: 100%; 
    }
    .headerForMobile nav li {
        padding-left: 1em;
        border-top: 1px solid #ccc;
        line-height: 70px;
    }
    .headerForMobile a {
        color: white;
        transition: 0.3s;
    }
    .headerForMobile a:hover {
        padding-left: 1rem;
        
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
    
    
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: 100%;
    }
    .logo {
        font-size: 36px;
        font-weight: 500;
    }
    .menu {
        display: flex;
    }
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
    
