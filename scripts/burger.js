const burger=document.getElementById("hamburger");
const list=document.getElementById("navlinks");
burger.addEventListener("click", ()=>{
    pop();
});
function pop(){
    list.classList.toggle("is-active");
    burger.classList.toggle("is-active");
}