let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  myinterval=setInterval(myfunction,100)}

  function myfunction(){
  document.body.scrollTop = document.body.scrollTop-500;
  document.documentElement.scrollTop = document.documentElement.scrollTop-500;
  console.log(document.documentElement.scrollTop);
  
  if (document.documentElement.scrollTop < 20) {
    clearInterval(myinterval);
  }
  }

  document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};


 
// Navigation Bar toggle Button
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const sections = document.getElementsByClassName('collapse');


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navbar.classList.toggle('active');
  for (let i = 0; i < sections.length; i++) { 
    sections[i].classList.toggle('active');
}
})



// background 
document.addEventListener("mousemove", parallax);
function parallax(e) { 
    document.querySelectorAll(".object").forEach(function (move) {
        
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 100;
        var y = (e.clientY * moving_value) /100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

    })
}

