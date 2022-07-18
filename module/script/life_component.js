import { life1,life2 } from "./txtContents.js";

// const title = [
//   "Vincent van Gogh",
//   "Gallery Entrance",
//   "Gallery Hall",
//   "Gogh in the media",
// ];

// const hashArr = ["#/life/", "#/gallery/main", "#/galleryHall/", "#/media/"];

// function titleChange() {
//   for (let i = 0; i < title.length; i++) {
//     if (window.location.hash === hashArr[i]) {
//       return title[i];
//     }
//   }
// }

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
  title : 'Vincent van Gogh'
}

const lifeContents = (props)=> {
  return(
    `
    <${props.tag} id="${props.id}">
      <${props.tag}>
        <${props.tag}>${props.text1}</${props.tag}>
        <${props.tag}></${props.tag}>
      </${props.tag}>

      <${props.tag}>
        <${props.tag}>${props.text1}</${props.tag}>
        <${props.tag}></${props.tag}>
      </${props.tag}>

      <${props.tag}>
        <${props.tag}>${props.text2}</${props.tag}>
        <${props.tag}></${props.tag}>
      </${props.tag}>

      <${props.tag}></${props.tag}>
    </${props.tag}>
    `
  );
}

const lifeContentsObj = {
  tag : 'div',
  id : 'content-box',
  text1 : life1,
  text2 : life2
}

const lifeSection = ()=> {
  return(
    `
    ${titleText(titleObj)}
    ${lifeContents(lifeContentsObj)}
    `
  )
}

export default lifeSection();