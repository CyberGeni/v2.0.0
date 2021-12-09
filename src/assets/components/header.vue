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
                        <button id="navbarToggler" onclick="toggleNavbar()">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </button>                                     
                    </div>
                </div>            
            </header>
            <nav id="nav">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/blog">Mini Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
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

function toggleNavbar () {
    return document.getElementById('#nav').style.display = "none";
}
export default {
    data() {
        return {

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
    }
    .line:nth-child(odd) {
        width: 14px;
    }
    /* burger changing to x while active */

    /* navigation listings */
    .headerForMobile nav {
        display: flex;
        align-items: stretch;
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
        font-size: 22px;
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
    
