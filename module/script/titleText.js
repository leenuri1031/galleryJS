
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

const titleText = (props)=>{
  return (
    `<${props.tag} id=${props.id}>
      <${props.tag} class="${props.class}">${props.title}</${props.tag}>
    </${props.tag}>
    `
  );
}

const titleObj = {
  tag : 'div',
  id : 'title-box',
  class : 'sub-txt',
  title : titleChange()
}

{/* <div id="title-box">
      <div class="sub-txt">${titleChange()}</div>
    </div> */}