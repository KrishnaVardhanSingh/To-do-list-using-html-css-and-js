const addButton = document.querySelector(".searchBox button")
const searchBox = document.querySelector("#textArea")
const deleteTask = document.querySelector(".items")
const clear = document.querySelector(".clear")

clear.addEventListener("click", ()=>{
  deleteTask.innerHTML = ""
  localStorage.clear()
})


addButton.addEventListener("click", () => {
  if(searchBox.value === ''){
    alert("please enter some value")
  }
  else{

    // create new element
    const task = document.createElement("ul")
    task.innerText = searchBox.value
    document.querySelector(".items").append(task)
    const span = document.createElement("span")
    span.innerHTML = "\u00d7"
    task.append(span)
  }
  searchBox.value = ''
  saveData()
})


deleteTask.addEventListener("click", (e) => {
  if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
  }
  else if(e.target.tagName === "UL"){
    e.target.classList.toggle("checked")
  }
  saveData()
})


// to save the data when we modify our data
function saveData(){
  localStorage.setItem("nameOfDataStored", deleteTask.innerHTML)
}


// to show the data we stored above 
function listTask () {
  deleteTask.innerHTML = localStorage.getItem("nameOfDataStored")
}

listTask ()