import { life1,life2 } from "./txtContents.js";

{/* <section className="section1">
<TitleText></TitleText>
</section>
<section className="no-bgc-section2">
<LifeContent></LifeContent>
</section> */}

const title = [
  "Vincent van Gogh",
  "Gallery Entrance",
  "Gallery Hall",
  "Gogh in the media",
];

const hashArr = ["#/life/", "#/gallery/main", "#/galleryHall/", "#/media/"];

function titleChange() {
  for (let i = 0; i < title.length; i++) {
    if (window.location.hash === hashArr[i]) {
      return title[i];
    }
  }
}

const titleText = ()=>{
  return (
    `<div id="title-box">
      <div class="sub-txt">${titleChange()}</div>
    </div>`
  )
}

const lifeContents = ()=> {
  return(
    `
    <div id="content-box">
    <div>
      <div>${life1}</div>
      <div></div>
    </div>
    <div>
      <div>${life1}</div>
      <div></div>
    </div>
    <div>
      <div>${life2}</div>
      <div></div>
    </div>
      <div></div>
    </div> 
    `
  );
}

const lifeSection = ()=> {
  return(
    `
    ${titleText}
    ${lifeContents}
    `
  )
}

export default lifeSection();