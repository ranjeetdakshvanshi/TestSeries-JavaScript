// DOM events Handler
document.getElementById("sec").onclick= ()=>{
  alert("DOM event handler")
}

document.getElementById("third").addEventListener("click", ()=>{
  alert("AddEventListener Events")
});
