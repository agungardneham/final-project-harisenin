const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-white");
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("bg-white");
    header.classList.remove("shadow-md");
    header.classList.add("bg-transparent");
  }
});
