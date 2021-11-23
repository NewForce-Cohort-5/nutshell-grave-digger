
export const Header = () => {
    const htmlContentTarget = document.querySelector(".header")

    htmlContentTarget.innerHTML = `
        <div class="logoContainer">
            <img src="https://media.entertainmentearth.com/assets/images/4ab2522a0fd64a7f99c1e313b75157e5xl.jpg" id="" class="logo" alt="Grave Digger">
        </div>
        <div class="welcome">
            <div class="welcomeHdr">
                <h1>Welcome, Username</h1> 
                <h2>to Grave Digger Nutshell</h2>
            </div>
        </div>
    `
}

