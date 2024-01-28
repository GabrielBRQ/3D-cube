removePerspectiveButton = document.querySelector(
  ".buttons-div button:first-child"
);

runAnimationButton = document.querySelector(
    ".buttons-div button:last-child"
  );

removePerspectiveButton.addEventListener("click", () => {
  var container = document.querySelector(".container");

  var currentPerspective = getComputedStyle(container).getPropertyValue("perspective");

  if (currentPerspective !== "none") {
    container.style.perspective = "none";
    removePerspectiveButton.style.color = 'red';
    removePerspectiveButton.style.borderColor = 'red';
  } else {
    container.style.perspective = "800px";
    removePerspectiveButton.style.color = 'green';
    removePerspectiveButton.style.borderColor = 'green';
  }
});

runAnimationButton.addEventListener("click", () => {
    var cube = document.querySelector(".cube");
  
    if (cube.classList.contains("animated")) {
        cube.classList.remove("animated");
        runAnimationButton.style.color = 'green';
        runAnimationButton.style.borderColor = 'green';
    } else {
        cube.classList.add("animated");
        runAnimationButton.style.color = 'blue';
        runAnimationButton.style.borderColor = 'blue';
    }
  });
  