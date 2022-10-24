let acc = document.getElementsByClassName("accordion");
let i;
let arrows;
let rotated_Arrow = document.getElementById("rotated1");
let rotated_Arrow2 = document.getElementById("rotated2");
let rotated_Arrow3 = document.getElementById("rotated3");
let rotated_Arrow4 = document.getElementById("rotated4");
let rotated_Arrow5 = document.getElementById("rotated5");

let clicked = () => {
  for (i = 0; i < acc.length; i++)
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      let change_arrow = this.children[0];
      let color_change = this.classList;
      console.log(change_arrow);
      if (panel.style.display === "block") {
        panel.style.display = "none";
        change_arrow.style.transform = "rotate(90deg)";
      } else {
        panel.style.display = "block";
        change_arrow.style.transform = "rotate(0deg)";
      }
    });
};
clicked();

// let clicked2 = () => {
//   for (i = 0; i < acc.length; i++)
//     acc[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       var panel = this.nextElementSibling;
//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//         rotated_Arrow2.style.transform = "rotate(90deg)";
//       } else {
//         panel.style.display = "block";
//         rotated_Arrow2.style.transform = "rotate(0deg)";
//       }
//     });
// };
// clicked2();
