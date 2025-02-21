const root = document.getElementById("root");
const button = document.getElementById("save")
let task = []

button.addEventListener("click",()=>{
  const input = document.getElementById("task")
  task.push({title:input.value});
  const div = document.getElementById("root")
  const task_div = document.createElement("div")
  task_div.textContent = `${input.value}`
  div.append(task_div)
});







