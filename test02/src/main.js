document.getElementById("first").addEventListener("click",()=>{
  let info=prompt("Enter Your UserName");
  localStorage.setItem("UserName",info);
  })
  document.getElementById("second").addEventListener("click",()=>{
    let getData=localStorage.getItem("UserName")
    alert(getData)
    })
    document.getElementById("third").addEventListener("click",()=>{
      localStorage.removeItem("UserName")
      alert('Deleted Your User Name')
      })
