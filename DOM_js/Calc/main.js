//Elementos basicos
const root = document.getElementById("root")
root.append(document.createElement("br"))
const pad = document.createElement("div")
root.append(pad)
const operands = ["+","-","/","*"]

function resolve(prompt){
  return eval(prompt)
}

//Boton CA
const ca_button = document.createElement("button")
ca_button.textContent = "CA";
ca_button.addEventListener("click",()=>{
  document.getElementById("input_data").value = "" 
  document.getElementById("output_data").value = "" 
});
pad.append(ca_button)

//Creacion de operadores
operands.forEach(ele => {
 const button = document.createElement("button")
  button.textContent = `${ele}`;
  button.id = "op"
  button.addEventListener("click", () => {
    const input = document.getElementById("input_data")
    const output = document.getElementById("output_data")
    input.value += `${ele}`
  });
  pad.append(button) 
});

//Creacion de botones numericos
for (let i = 0; i < 10; i++) {
  const button = document.createElement("button")
  button.textContent = `${i}`;
  button.id = "num"
  button.addEventListener("click", () => {
    const input = document.getElementById("input_data")
    const output = document.getElementById("output_data")
    input.value += `${i}`
    output.value = resolve(input.value)
  });
  pad.append(button)
  
}

