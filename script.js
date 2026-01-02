/* NAV ACTIVE */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current="";
  sections.forEach(sec=>{
    if(pageYOffset>=sec.offsetTop-150){
      current=sec.getAttribute("id");
    }
  });
  navLinks.forEach(a=>{
    a.classList.remove("active");
    if(a.getAttribute("href")==="#"+current){
      a.classList.add("active");
    }
  });
});

/* MEDIA TAB */
function showMedia(id){
  document.querySelectorAll(".media-content").forEach(c=>c.classList.remove("active"));
  document.querySelectorAll(".media-menu button").forEach(b=>b.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  event.target.classList.add("active");
}
