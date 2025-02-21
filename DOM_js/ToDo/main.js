const root = document.getElementById("root");
const button = document.getElementById("save")
const button1 = document.getElementById("clean")
let count = 0

button.addEventListener("click",()=>{
  const input = document.getElementById("task")
  const div = document.getElementById("root") 
  const task_div = document.createElement("div")
  const button_delete = document.createElement("button")
  const message = document.getElementById("message")

  button_delete.textContent = "Completada"
  button_delete.id = "btn_delete"
  if(input.value==""){
    return
  }
  count++
  message.textContent = `Tareas añadidas ${count}`
  task_div.textContent = `${input.value}`
  task_div.id = `${input.value}`
  task_div.className = "task_div"
  input.value = ""
  button_delete.addEventListener("click",()=>{
    count--
    const message = document.getElementById("message")
    message.textContent = `Tareas añadidas ${count}`
    task_div.remove()
  });
  task_div.append(button_delete)
  div.append(task_div)
});

button1.addEventListener("click", () => {
  const elements = document.querySelector(".task_div")
  elements.remove()
})







