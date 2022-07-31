const signIn = document.querySelector("#signIn")
const signUp = document.querySelector("#signUp")

const body = document.querySelector("body")

signIn.addEventListener("click", () => {
    body.className = "sign-in-js"
})

signUp.addEventListener("click" , () => {
    body.className = "sign-up-js"
})
