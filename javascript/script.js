var WHidden = document.querySelectorAll(".text");

document.querySelector(".toggle").addEventListener("click", () => {
    WHidden.forEach(element => {
        element.classList.toggle("hidden"); 
    });
   
});
