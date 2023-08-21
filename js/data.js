document.addEventListener("DOMContentLoaded", function () {
  let data = sessionStorage.getItem("data");
  document.getElementById("data").innerHTML = data;
});
