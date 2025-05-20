// const showSidebar = document.querySelector(".sidebar");
const showsideBar = document.querySelector(".showsidebar");
const cancelBtn = document.querySelector(".cancelbtn");
const sidebar = document.querySelector(".sidebar");

showsideBar.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});
