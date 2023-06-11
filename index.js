let one = document.querySelectorAll(".one");
let smile = document.querySelector(".smile");
let btn = document.querySelector("#btn1");
let all = document.querySelector("#all");

let selectedRating = "Satisfied";

smile.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("one")) {
      removeActives();
      e.target.parentNode.classList.add("active");
      selectedRating = e.target.nextElementSibling.innerHTML;
    }
  });

  btn.addEventListener("click", () => {
    all.innerHTML = `
          <p class="heart">💖</p>
          <strong>Thank You! </strong>
          <br>
          <h1>Feedback: ${selectedRating} </h1>
      `;
  });

  function removeActives() {
    for (let i = 0; i < one.length; i++) {
      one[i].classList.remove("active");
    }
  }