import mainSection from "./module/script/section_component.js"
import lifeSection from "./module/script/life_component.js"
import { functionObj } from "./module/script/function_const.js";

const container = document.getElementById('container');
// console.log(container);
container.innerHTML = 
mainSection
// lifeSection
;
// console.log(container.children[1]);
const circleMenues = document.getElementsByClassName('circle-menu');
console.log(circleMenues);

for(let i = 0 ; i < circleMenues.length; i++){
  circleMenues[i].addEventListener('mouseover', function() {
    // console.log(this);
    mouseover(circleMenues[i]);
  });
}

