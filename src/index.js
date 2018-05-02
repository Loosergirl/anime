import anime from 'animejs';
import widthCheck from "./widthCheck.js";
import css from "./style/misc.css";

widthCheck();

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0], 
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});

anime.timeline({loop: false})
  .add({
    targets: '.greatVibes .letter',
    scale: [1.2,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3000,
    delay: function(el, i) {
      return i * 400;
    }
  });