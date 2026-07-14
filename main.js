
const formaBtn = document.querySelector("#openModal");
const forma = document.querySelector(".forma");
const closeBtn = document.querySelector(".close");

formaBtn.onclick = () => {
    forma.classList.add("open");
}
closeBtn.onclick = () => {
    forma.classList.remove("open");
}
