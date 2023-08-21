document.addEventListener("DOMContentLoaded", function () {
  let data = localStorage.getItem("data");
  document.getElementById("data").innerHTML = data;
});
