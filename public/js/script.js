//Add a pet menu
const addPetBtt = document.getElementById("addPetBtt");
const closeAddBtt = document.getElementById("close-add-menu");
const addPetMenu = document.getElementById("addMenu");
const blurToggle = document.getElementById("blur-container")
addPetBtt.addEventListener("click", displayAddMenu);
closeAddBtt.addEventListener("click", hideAddMenu);
function displayAddMenu() {
    addPetMenu.classList.remove("hide-add-menu");
    addPetMenu.classList.add("show-add-menu");
    console.log(blurToggle)
    blurToggle.classList.add("blur")
    }
function hideAddMenu() {
    addPetMenu.classList.remove("show-add-menu");
    addPetMenu.classList.add("hide-add-menu");
    blurToggle.classList.remove("blur")
}

//Display message when submiting a pet
const petRegistered = document.getElementById("pet-registered");
const submitBtt = document.getElementById("submitBtt");
submitBtt.addEventListener("click", handleSubmitBtt);
function handleSubmitBtt() {
    petRegistered.classList.replace("hide-add-menu", "show-add-menu")
}


function handleDogCard(){
    let cards = document.getElementsByClassName('animals');
    let animalType = document.getElementsByClassName("animalType")
    for (i = 0; i < animalType.length; i++){
        if (animalType[i].textContent.toLowerCase() != "dog"){
            cards[i].style.display="none";
        } else {
            cards[i].style.display="block";
        }
    }
}

function handleCatCard(){
    let cards = document.getElementsByClassName('animals');
    let animalType = document.getElementsByClassName("animalType")
    for (i = 0; i < animalType.length; i++){
        if (animalType[i].textContent.toLowerCase() != "cat"){
            cards[i].style.display="none";
        } else {
            cards[i].style.display="block";
        }
    }
}

function handleOtherCard(){
    let cards = document.getElementsByClassName('animals');
    let animalType = document.getElementsByClassName("animalType")
    for (i = 0; i < animalType.length; i++){
        if (animalType[i].textContent.toLowerCase() == "cat" || animalType[i].textContent.toLowerCase() == "dog"){
            cards[i].style.display="none";
        } else {
            cards[i].style.display="block";
        }
    }
}

function handleAllCard(){
    let cards = document.getElementsByClassName('animals');
    let animalType = document.getElementsByClassName("animalType")
    for (i = 0; i < animalType.length; i++){
            cards[i].style.display="block";
    }
}




//Search Bar
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
    }
}

//Hide navbar on scorll down
let navBar = document.querySelector("#navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navBar.classList.add("hidden-navbar")
    lastScrollY = window.scrollY;
  } else {
    navBar.classList.remove("hidden-navbar")
    lastScrollY = window.scrollY;
  }

  //Hide back to top button on welcome section
  if (window.scrollY > 812) {
    backToTop.classList.remove("hidden-button")
  } else {
    backToTop.classList.add("hidden-button")
  }
})