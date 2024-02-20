const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something")
    } else {
        let li = document.createElement("li"); // creating html element li in li element
        li.textContent = inputBox.value; // Adding li to the html
        listContainer.appendChild(li); // display li to list container class
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
    savedData() // calls the saved data function every task input
}

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default behavior of the Enter key (form submission)
        addTask();
    }
});

listContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") { //check if click li
        event.target.classList.toggle("checked"); //add check class name if its there it will remove that
        savedData();
    } 
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();// delete the parent element
        savedData();
    }
}, false);

function savedData() {
    localStorage.setItem("data", listContainer.innerHTML)
};

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
