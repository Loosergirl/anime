export default function widthCheck() {
  var toShow = Math.ceil(window.innerWidth / 200);
  var swirls = document.getElementsByClassName('swirl');
  console.log(toShow);

  for(let i = 9; i >= toShow; i--) {
    swirls[i].setAttribute("style", "display: none;");
  }
}