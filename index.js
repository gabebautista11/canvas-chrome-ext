//edit the vw of the submission-details-container if the sidebar is open

let detailsContainer = document.querySelector(".submission-details-container");

let sidebar = document.getElementById("left-side");

let courseMenuButton = document.getElementById("courseMenuToggle");

courseMenuButton.addEventListener("click", function () {
  if (sidebar.style.display === "none") {
    console.log("sidebar on");
    detailsContainer.classList.add("sidebar-on");
  } else {
    console.log("sidebar off");
    detailsContainer.classList.remove("sidebar-on");
  }
  console.log("button pressed");
});
