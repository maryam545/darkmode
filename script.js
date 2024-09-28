const button = document.querySelector(".btn");
const body = document.querySelector(".body");

button.addEventListener("click", function () {
  if (body.classList.contains("dark-mode")) {
    document.querySelector(".btn-on").src = "download.png";
    body.style.backgroundColor = "gray";
    button.style.backgroundColor = "red";
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    button.textContent = "OF";
  } else {
    document.querySelector(".btn-on").src = "download1.png";
    body.style.backgroundColor = "black";
    button.style.backgroundColor = "yellow";
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    button.textContent = "ON";
  }
});
