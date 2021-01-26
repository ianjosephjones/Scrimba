
let darkModeBtn = document.getElementById("btn");
let all = document.querySelectorAll("*") // RETURNS AN ARRAY LIKE CONSTRUCT CALLED NODELIST
// that means that all is an array
// all arrays have a forEach


darkModeBtn.addEventListener("click", function () {
    all.forEach(function (element) {
        if (element.classList.contains("invert-color")) {
            element.classList.remove(["invert-color"])
        } else {
            element.classList.add(["invert-color"])
        }
    })
})

// [].forEach(/* myFunction(itemFromArray) { body is executed PER item }*/)


let europe = ['Sweden', 'Norway', 'Bulgaria', 'France', 'Germany', 'Poland']
let myCallBack = function () {
    console.log('done')
    console.log("ian")
}


function parentFunction(locations, callBack) {
    for (let i = 0; i < locations.length; i++ ) {
        console.log(locations[i])
        callBack(locations[i])
    }
}

parentFunction(europe, myCallBack)
