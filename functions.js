/* 
*
*
NAV MODAL
*
*
*/
const modal = document.getElementById("nav-modal"); // Get the modal
const btn = document.getElementById("icon"); // Get the button that opens the modal
const span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
const items = document.querySelectorAll("ul.nav-links");
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks on li element, close the modal
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    modal.style.display = "none";
  });
}
/* 
*
*
*
*
*
*
*
*
*/
/* LIKE BUTTON */
const button = document.querySelectorAll("span.heart");
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    const cmp = this.nextElementSibling;

    if ((this.innerText = "&#x2661;")) {
      this.innerHTML = "&#x2665;";
      this.style.color = "red";
      cmp.innerHTML = parseInt(cmp.innerHTML) + 1;
    } 
   
  },  {once:true}  );
}
/* 
*
*
*
*
*
*
*
*
*/
/* GO TO THE TOP */
mybutton = document.getElementById("button-to-top");
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/* 
*
*
*
*
*
*
*
*
*/
/* MENU MODAL */
const menu = document.getElementById("button-menu");
const menuModal = document.getElementById("menu-modal");
const spanMenu = document.getElementsByClassName("close-menu")[0];
menu.onclick = function () {
  menuModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
spanMenu.onclick = function () {
  menuModal.style.display = "none";
};
