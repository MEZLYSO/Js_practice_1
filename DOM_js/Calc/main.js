const root = document.getElementById("root")

root.append(document.createElement("br"))

function resolve(prompt){
  return eval(prompt)
}

for (let i = 0; i < 10; i++) {
  const button = document.createElement("button")
  button.textContent = `${i}`;
  button.addEventListener("click", () => {
    const input = document.getElementById("input_data")
    const output = document.getElementById("output_data")
    input.value += `${i}`
    output.value = resolve(input.value)
  });
  root.append(button)
  
}

