// const showSidebar = document.querySelector(".sidebar");
const showsideBar = document.querySelector(".showsidebar");
const cancelBtn = document.querySelector(".cancelbtn");
const sidebar = document.querySelector(".sidebar");

document.querySelectorAll(".sidebar li").forEach((links) => {
  links.addEventListener("click", () => {
    sidebar.style.display = "none";
  });
});

showsideBar.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});
