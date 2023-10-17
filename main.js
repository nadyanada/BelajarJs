// console.log ("Hello world")
// alert("Nadya cantik")
// prompt("Pinjam seratus")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding not Easy"
// console.log(Promnet)

// let Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "Coding not Easy"
// console.log(Promnet)

// const Promnet = "Coding id Easy"
// console.log(Promnet)
// Promnet = "Coding is not Easy"
// console.log(Promnet)

// let totalPoin = prompt("Masukan Poin Anda")
//     if(totalPoin > 100){
//         document.write("<h1>Congratulation<h1>");
//     }
//     else{
//         document.write("<h1>Thanks<h1>");
//     }

// const x = Number(prompt("Masukkan nilai x:"));
// const y = Number(prompt("Masukkan nilai y:"));

// if (x < 10 && y > 1) {
//     document.write("<h1>(x < 10 && y > 1) = true</h1>");
// } else {
//     document.write("<h1>(x < 10 && y > 1) = false</h1>");
// }

// if (x < 10 && y < 1) {
//     document.write("<h1>(x < 10 && y < 1) = true</h1>");
// } else {
//     document.write("<h1>(x < 10 && y < 1) = false</h1>");
// }

// if (x == 5 || y == 5) {
//     document.write("<h1>(x == 5 || y == 5) = true</h1>");
// } else {
//     document.write("<h1>(x == 5 || y == 5) = false</h1>");
// }

// if (x == 6 || y == 5) {
//     document.write("<h1>(x == 6 || y == 5) = true</h1>");
// } else {
//     document.write("<h1>(x == 6 || y == 5) = false</h1>");
// }

// if (!(x == y)) {
//     document.write("<h1>!(x == y) = true</h1>");
// } else {
//     document.write("<h1>!(x == y) = false</h1>");
// }

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;
  
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
  
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    var label = document.createElement("label");
    label.textContent = taskText;
  
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        label.classList.add("completed");
      } else {
        label.classList.remove("completed");
      }
    });
  
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    taskList.appendChild(newTask);
  
    taskInput.value = "";
  }
  
  var addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.addEventListener("click", addTask);
  