<template>
    <div>
        <header>
            <div class="logo">Treasure A.</div>
            <div class="menu">
                <div class="themeToggle">
                    <button onclick="changeTheme()" class="themeToggler"><img src="src\assets\images\sun.svg" alt="Dark Theme"></button>
                </div>
                <div class="burger">
                    <router-link to="#nav">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </router-link>                   
                </div>
            </div>
            
        </header>
        <nav id="nav">
            <ul>
                <li><router-link to="">Home</router-link></li>
                <li><router-link to="">About</router-link></li>
                <li><router-link to="">Projects</router-link></li>
                <li><router-link to="">Mini Blog</router-link></li>
                <li><router-link to="">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<script>

// theme button changing
function changeTheme() {
    var toggler = document.getElementsByClassName('themeToggler').value;
    console.log (toggler)
}
export default {
    
}
</script>
<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: fit-content;
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
        border: 1px solid white;
        width: 52px;
        height: 52px;
        line-height: 52px; 
    }
    .themeToggle button img {
        content: 'assets/images/moon.svg';
    }
    /* burger designs */
    .burger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 1px solid white;
        border-radius: 50%;
        width: 52px;
        height: 52px;
    }
    .burger .line {
        width: 22px;
        height: 2px;
        background-color: white;
        margin: 5px;
        border-radius: 8px;
    }
    /* navigation listings */
    nav {
        display: flex;
        align-items: stretch;
        min-height: 100%;
    }
    nav ul {
        width: 100%;  
    }
    nav li {
        padding-left: 1em;
        border-top: 1px solid #ccc;
        line-height: 70px;
    }
</style>
    