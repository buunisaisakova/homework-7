//1
var img = document.getElementById("img-area");
function on(){
 img.src='one.jpg';
}
buttonChange.addEventListener('click');
function off(){
  img.src='two.jpg';
}



//2

let h2 = document.getElementById("h2");
let buttonChange = document.querySelector("#hi");
let input = document.querySelector('input');

function buttonHandler() {
  console.log("Changed!")
  // h2.textContent = "Changed from JS"
  h2.textContent = input.value;
  input.value = "";
}

buttonChange.addEventListener('click', buttonHandler)  
  buttonChange.addEventListener('click', buttonHandler)

  h2.addEventListener("mouseenter", function() {
    console.log("Мышь на тексте")
    
  })
  
  h2.addEventListener("mouseleave", function() {
    console.log("Мышь покинул текст")
    // console.log(this)
    this.style.color = "green"
  })