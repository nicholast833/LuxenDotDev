var audio = new Audio('https://www.dropbox.com/scl/fi/a8qlohquzbbduykqswwci/Mike1-0x32B320.mp3?dl=1'); audio.play();

$(".nav ul li").click(function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

const tabBtn = document.querySelectorAll(".nav ul li");
const tab = document.querySelectorAll(".tab");

function tabs(panelIndex) {
  tab.forEach(function(node) {
    node.style.display = "none";
  });
  tab[panelIndex].style.display = "block";
}
tabs(0);

let bio = document.querySelector(".bio");
const bioMore = document.querySelector("#see-more-bio");
const bioLength = bio.innerText.length;

function twoInOne(this1) {
  this1.src = this1.src
  audio.play();
}
