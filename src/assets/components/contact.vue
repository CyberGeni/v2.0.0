<template>
    <div>
        <div class="message">
            <img src="src/assets/images/emoji-fingers-crossed.png" alt="">
            <form netlify name="Contact" method="POST" netlify-honeypot="bot-field">
                <div class="short-input">
                    <input type="text" name="name" placeholder="Your name here ..."  required>
                    <input type="email" name="email" placeholder="Your email here"  required>
                </div>
                <textarea name="message" cols="30" rows="8" placeholder="Your message here..." required></textarea>
                <button>Send Message</button>
            </form>
        </div>
        <div class="demarcation">
            <div class="line"></div>
            <p>or</p>
            <div class="line"></div>
        </div>
        <div class="socials">
            <section>
                <div>
                    <a href="mailto:treasureajefu@gmail.com">
                        <img src="src/assets/images/mail.svg" alt="">
                        <p>Send an email</p>
                    </a>
                </div>
               <div>
                    <a href="https://wa.me/2349098746099" target="_blank">
                        <img src="src/assets/images/whatsapp.png" alt="">
                        <p>WhatsApp</p>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/cybergenie_" target="_blank">
                        <img src="src/assets/images/twitter.svg" alt="">
                        <p>Twitter (@cybergenie_)</p>
                    </a>   
                </div>
            </section>
            <section>
                <div>
                    <a href="https://github.com/cybergeni">
                        <img src="src/assets/images/github.svg" alt="">
                        <p>GitHub</p>
                    </a>
                </div>
               <div>
                    <a href="https://wa.me/2349098746099">
                        <img src="src/assets/images/linkedin.svg" alt="">
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div>
                    <a href="mailto:treasureajefu@gmail.com">
                        <img src="src/assets/images/twitter.svg" alt="">
                        <p>Twitter</p>
                    </a>
                </div>
            </section>
        </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .message {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 95%;
        margin: auto;
    }
    .message input {
        display: flex;
    }
    .message img {
        width: 156px;
        height: fit-content;
        margin: 1em auto;
    }
    .short-input {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    input {
        width: 49%;
        background-color: #2e3039;
        border: none;
        border-radius: 6px;
        padding: 12px;
        color: white;
        font-size: 16px;
    }
    input:nth-child(2){
        margin-left: 0.2em;
    }
    input:focus, textarea:focus {
        background-color: #1f2028;
        border: 4px solid #2e3039;
        outline: none;
    }
    textarea {
        width: 100%;
        columns: 10;
        background-color: #2e3039;
        border: none;
        border-radius: 6px;
        padding: 14px;
        margin: 1em 0;
        color: white;
        font-size: 16px;
    }
    button {
        display: flex;
        justify-content: center;
        width: 80%;
        max-width: 350px;
        padding: 10px;
        margin: auto;
        border: none;
        border-radius: 6px;
        background-color: #2e3039;
        color: white;
        transition: 0.3s ease;
    }
    button:hover {
        font-size: 15px;
    }
    /* demarcation in the middle (lines) */

    .demarcation {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin: 2.5em 0;
    }
    .demarcation .line {
        display: flex;
        background-color: #2e3039;
        width: 45%;
        height: 4px;
    }
    .demarcation p {
        font-size: 18px;
        font-weight: 600;
        color: white;
    }
    /* social section */
    .socials {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 2em;
    }
    section div a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
    }
    section > * + * {
        margin-top: 1em;
    }
    .socials img {
        width: 30px;
        margin-right: 8px;
        margin-bottom: 0;
        display: flex;
    }
    .socials p {
        color: #a9adc1;
        align-self: center;
    }
    /* media queries */

    @media (min-width: 720px) {
        div {
            display: flex;
            flex-direction: row !important;
            width: 100%;
        }
        .message {
            max-width: 480px;
            width: 95%;
        }
        .demarcation {
            flex-direction: column !important;
            align-items: center;
            width: 10px;
            margin: 0 2.5em;
        }
        .demarcation .line {
            display: flex;
            width: 4px;
            height: 240px;
        }
        .socials {
            display: flex;
            flex-direction: column !important;
            width: 30%;
        }
        .socials a {
            width: 200px;
            justify-content: start;
        }
    }
</style>
