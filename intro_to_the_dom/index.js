document
console.dir(document)

// getElementById
let hello = document.getElementById("hello")

// getElementsByClassName
let things = document.getElementsByClassName('things')

for (let i = 0; i < things.length; i++) {
    console.log(things[i].innerText)
}
console.log(hello)
console.dir(hello)
console.log(things)

// querySelector (selects the first single element)
// querySelectorAll (selects all elements)

let result = document.querySelector("#favorite-things")
console.log(result)

let result2 = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result2))

for (var i = 0; i < result2.length; i++) {
    result2[i].textContent = "** REDACTED **"
}

// .style & .append

let body = document.getElementById('body')
body.style.backgroundColor = 'red'

let newP = document.createElement("p")
newP.textContent = "V School rocks!"
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
document.body.append(newP)

// adding elements with loops and functions 

var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston",
    "Tommy Oliver"
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}



var button = document.getElementById("button")

function handleButtonClick() {
    console.log("The button was clicked!")
}

// .addEventListener

button.addEventListener("click", handleButtonClick)
button.removeEventListener("click", handleButtonClick)

document.getElementById("header").addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "firebrick"
})

var inputBox = document.getElementById("text-input")
console.log(inputBox.value)