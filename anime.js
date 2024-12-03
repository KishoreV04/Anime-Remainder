// selecing popup, popup-box
var popup = document.querySelector(".popup")
var popupbox = document.querySelector(".popup-box")

//slecting add popup button
var button = document.getElementById("add-popup button")

//adding function when clicking the add-popup button( it popups)
button.addEventListener("click", function() {
  popup.style.display = "block"
  popupbox.style.display = "block"
})

//selecting cancel-popup button
var cancel = document.getElementById("cancel-popup")

//adding function when you click the cancel-popup button( it dont quit the popup message , and secondly when we click the cancel button it quits)
cancel.addEventListener("click", function(event) {
    event.preventDefault()
    popup.style.display = "none"
    popupbox.style.display = "none"
    
})

//selecting container(to add the details), Anime-Name input, Anime-Author input, Anime Description input, add anime

var container = document.querySelector(".container")
var add = document.getElementById("add-anime")
var animeName = document.getElementById("anime-Name")
var animeAuthor = document.getElementById("anime-Author")
var animeDescription = document.getElementById("anime-Description")

//adding function when you click the add anime button(it adds the details to the container)
add.addEventListener("click", function(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","Anime-container")
    div.innerHTML=`<h2>${animeName.value}</h2>
    <h5>${animeAuthor.value}</h5>
    <p>${animeDescription.value}</p>
    <button onclick="Delete(event)">Delete</button>`
    container.append(div)

    popup.style.display = "none"
    popupbox.style.display = "none"
})
function Delete(event)
{
    event.target.parentElement.remove()
}
