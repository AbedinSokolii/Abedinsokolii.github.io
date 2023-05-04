var fullheaderbtn = document.querySelector(".full-header");
document.querySelector(".hamburger").addEventListener("click",() => {


fullheaderbtn.classList.toggle("hide");

});
document.querySelector(".remove").addEventListener("click",() => {
fullheaderbtn.classList.toggle("hide")
});