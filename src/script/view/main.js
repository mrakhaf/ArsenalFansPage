import "../component/schedule.js";
import "../component/history.js";
import "../component/about.js";
import "../component/footer.js"



const main = () => {
  document.querySelector(".icon").onclick = function () {
    var y = document.querySelector("nav-bar")

    if (y.className === "") {
      y.classList.add("active");
    } else {
      y.classList.remove("active");
    }
  }
}

export default main;