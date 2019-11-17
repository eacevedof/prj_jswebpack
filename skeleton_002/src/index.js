//index.js
console.log("index.js loaded!")
import indexcss from "./index.css"
import icon from "./icon-demo.png"

document.addEventListener("DOMContentLoaded", objevt =>{ 
  console.log("indexcss:",indexcss)

  const eBody = document.getElementsByTagName("body")[0]
  const strtpl = `
  <div class="${indexcss.miclase}">
    <p class="${indexcss.bold}">Hello World !</p>
    <img src="${icon}" class="${indexcss.miimagen}"/>
  </div>
  ` 
  eBody.innerHTML = strtpl
})