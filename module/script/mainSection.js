function comp(props) {
  props = typeof props === "object" ? props : console.error('type error');
  return (`
    <${props.tagName} 
      style="width: ${props.width}px;
      height: ${props.height}px;
      color:${props.color}; 
      background-color: ${props.backgroundColor};
      ">
      
      ${props.children}
      </${props.tagName}>       
  `);
}

// componant