const scrollContainer = document.querySelector(".gallery");
const backBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});
nextBtn.addEventListener("click",()=> {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += scrollContainer.offsetWidth+5;
});
backBtn.addEventListener("click",()=> {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= scrollContainer.offsetWidth+5;
});