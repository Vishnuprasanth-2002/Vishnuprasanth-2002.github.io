const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function () {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

// skills
const skillsContent = document.getElementsByClassName("skills_content");

skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass == "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener("click", toggleSkills);
});
