// function comp(props) {
//   props = typeof props === "object" ? props : console.error('type error');
//   return (`
//     <${props.tagName} 
//       style="width: ${props.width}px;
//       height: ${props.height}px;
//       color:${props.color}; 
//       background-color: ${props.backgroundColor};
//       ">
      
//       ${props.children}
//       </${props.tagName}>       
//   `);
// }

// let domObj = {
//   tagName: "div",
//   width: 100,
//   height: 100,
//   color: "#ccc",
//   backgroundColor: "#333",
//   children: "hello",
// }

// const root = document.getElementById("root");
// root.innerHTML = comp(domObj);

// componant