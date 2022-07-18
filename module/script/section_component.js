
function section1Comp(props) {
  props = typeof props === 'object' ? props : console.log('type error');
  // type에 객체만 올 수 있도록
  return (
    `<${props.tag}
      id = "${props.id}"
      class = "${props.class}"
    >
    ${props.children}
    </${props.tag}>`
  )
}

const section1Obj = {
  tag : 'section',
  id : 'section1',
  class : 'section1',
  children : 
      `<div id="txt-container">
        <div class="sub-txt">Vincent</div>
        <div class="sub-txt">Van</div>
        <div class="sub-txt">Gogh</div>
      </div>
      <div id="title-txt" class="title-txt">Gallery</div>
      `
  
}

function section2Comp(props) {
  props = typeof props === 'object' ? props : console.log('type error');
  // type에 객체만 올 수 있도록
  return (
    `<${props.tag}
      id = "${props.id}"
      class = "${props.class}"
      data-hash="${props.hash}"
    >
    ${props.children1}
    ${props.children2}
    ${props.children3}
    </${props.tag}>`
  )
}

const section2Obj = {
  tag : 'section',
  id : 'section2',
  class : 'section2',
  hash : 'home',
  children1 : `<div class="circle-menu media-menu"><a href="#media">Gogh in the media</a></div>`,
  children2 : `<div class="circle-menu gallery-menu"><a href="#gallery">Gogh’s Gallery</a></div>`,
  children3 : `<div class="circle-menu life-menu"><a href="#life">Gogh’s Life</a></div>`
}


const mainSection = ()=>{
  return(
    `
    ${section1Comp(section1Obj)}
    ${section2Comp(section2Obj)}
    `
    );
}

export default mainSection();







