const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
//0-11
const messages=[
    "Nike Mercurial Superfly",
    "Nike Mercurial Vapor",
    "Nike Phantom GT",
    "Nike Phantom GX",
    "Nike Tiempo Legend",
    "adidas X Crazyfast",
    "adidas Predator 24",
    "adidas Predator Accuracy",
    "adidas Copa Pure",
    "Puma Future Z",
    "Puma Future Ultimate",
    "Puma Ultra Ultimate"
]
btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText=randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}
randomMessage()