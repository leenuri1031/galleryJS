import { functionObj } from "./function_const.js";

export const mouseover = (target) => {
  functionObj.size(target, "140px", "140px");
};

export const mouseout1 = (target) => {
  functionObj.size(target, "90px", "90px");
};

export const mouseout2 = (target) => {
  functionObj.size(target, "100px", "100px");
};

export const mouseout3 = (target) => {
  functionObj.size(target, "125px", "125px");
};

let heightValue = 0;
let boolean = true;

export const slider = (e) => {
  if(boolean === true){
    heightValue = heightValue + 110;
    e.target.scrollTo({top : heightValue , behavior : "smooth"})
    if(heightValue >= 900){
      boolean = false;
    }
  } else {
    heightValue = 0;
    e.target.scrollTo({top : heightValue , behavior : "smooth"});
    boolean = true;
  }
}

export const moving = (e)=> {

  let value = 0;
  setInterval(function() {
    e.target.style.transform = 'translate3d(0px,-'+110*(value+1)+'px, 0px)';
    e.target.style.transition = '0.5s';
  value++;
  if(value === 4){
    setTimeout(function(){
      e.target.style.transition = '0s';
      e.target.style.transform = 'translate3d(0px,0px, 0px)';
    }, 201);
    value = 0;
  }
}, 1000);
}