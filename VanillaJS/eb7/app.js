const header = document.querySelector("h1");

document.querySelector(".jumbotron").addEventListener("mousemove", changeTitle);

function changeTitle(e) {
  //   console.log(e.target.className);
  //   console.log(e.clientX);
  //   console.log(e.clientY);
  e.target.style.background = `rgb(${e.clientX}, ${e.clientY}, 40)`;
}
