const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Add() {
    if (inputBox.value === '') {
        alert("First Write Something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        // Add a class to the newly created li for styling
        li.classList.add("new-task");

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}

showList();
