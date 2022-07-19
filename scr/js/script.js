const signIn = document.querySelector("#signIn")
const signUp = document.querySelector("#signUp")

const body = document.querySelector("body")

signIn.addEventListener("click", () => {
    body.classList.add ("sign-in-js")
})

signUp.addEventListener("click" , () => {
    body.classList.remove("sign-in-js")
    body.classList.add("sign-up-js")
})
