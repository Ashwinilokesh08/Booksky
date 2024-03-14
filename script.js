//selecting popup-box popup-overlay add_popup_button

var popupbox = document.querySelector(".popup-box")
var popupoverlay = document.querySelector(".popup-overlay")

var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

//select cancel button

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

//select container, add-book, book-title-input, book-title-author, book-title-des 

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var booktitleauthor = document.getElementById("book-title-author")
var booktitledes = document.getElementById("book-title-des")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${booktitleauthor.value}</h5>
    <p>${booktitledes.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
