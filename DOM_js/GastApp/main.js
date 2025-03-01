// Elementos del doom
const root = document.getElementById("root")
const button = document.getElementById("button")
const saldo = document.getElementById("salde")
const descript = document.getElementById("descrip") 
const cost = document.getElementById("pay")
const h3 = document.getElementById("state")
// Event Listeners

let saldo_num = saldo.value??0

button.addEventListener("click",()=>{
    const div = document.createElement("div")
    div.id = "contenedor"
    div.textContent = descript.value
    const div1 = document.createElement("div")
    div1.textContent = cost.value
    div.append(div1)
    root.append(div)
})

