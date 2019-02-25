// import "../scss/index.scss";
import "./icons";
let areaeffect = document.getElementsByClassName("area-effect");
console.log(areaeffect);
console.log(screen.height)
console.log(screen.availHeight)
// console.log(screen.height)
// console.log(screen.availHeight)
let top1 = screen.height - 62 - 24 -20 - 20- 10 - 20 - 16 - 60;
areaeffect[0].style.height = `${top1}px`;
let parneleffect = document.getElementsByClassName('parnel-effect');
parneleffect[0].style.height = `${top1 - 28}px`;
let player = document.getElementsByClassName('player')
player[0].setAttribute('style',`height: ${screen.height}px`);
console.log(player)

console.log(player[0].style.height)
console.log("你好");
