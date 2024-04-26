const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;
window.addEventListener(
    "scroll",
    () => {
        console.log("scroll");
        var{ scrollY } = window;
        if(scrollY > lastScrollTop) {
            navbar.classList.remove("vis");
        }else if(scrollY < lastScrollTop){
            navbar.classList.add("vis");
        }
lastScrollTop = scrollY <= 0 ? 0 : scrollY;
},
{passive: true}
)





 // Select the button and the sidebar
 const button = document.getElementById("nunu");
 const sidebar = document.getElementById("sidebar");

// // Toggle the "hidden" class on the sidebar when the button is clicked
 button.addEventListener('click', function() {
   sidebar.classList.toggle('hidden');
 });

// // Hide the sidebar by default
 sidebar.classList.add('hidden');

// // Show the button when the sidebar is clicked
 sidebar.addEventListener('click', function() {
 button.focus();
 });
 
 // Get the modal
var modal = document.getElementById("rateUsCard");
var overlay = document.getElementById("overlay");

// Get the button that opens the modal
var btn = document.getElementById("rateUs");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
  overlay.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    overlay.style.display = "none";

  }
}

// Get the modal
var modal = document.getElementById("rateUsCard");
var overlay = document.getElementById("overlay");

// Get the button that opens the modal
var btn = document.getElementById("rate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
  overlay.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";

}
// go top
const goToTopBtn = document.getElementById('go-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    goToTopBtn.style.display = 'block';
  } else {
    goToTopBtn.style.display = 'none';
  }
});

goToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



