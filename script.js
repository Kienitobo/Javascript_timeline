let pageTop;
const containers = document.getElementsByClassName("container");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  pageTop = window.pageYOffset / 1.2;
  for (let i = 0; i < containers.length; i++) {
    let containerTop = containers[i].getBoundingClientRect().top;

    if (containerTop < pageTop) {
      containers[i].classList.add("show");
    } else {
      containers[i].classList.remove("show");
    }
  }
}

$(".subcontent").hide();
$(".content").click(function () {
  $(".subcontent").toggle();
});
