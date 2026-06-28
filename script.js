const inputs = document.querySelectorAll("input");
const JS = document.querySelector(".hl");
const img = document.querySelector("img");
inputs.forEach(input => {
    input.addEventListener("input", (e) => {
      const unit = e.target.dataset.unit;
   
      /*OR 
      const unit = e.target.dataset.unit || "" (without it, will be undefined);
      
      document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + unit);
      */  

    if (e.target.name === "base") {
       JS.style.color = e.target.value;
       img.style.background =  e.target.value;
    }
    if (e.target.name === "spacing") {
      img.style.padding = `${e.target.value}${unit}`;  
    }
    if (e.target.name === "blur") {
     img.style.filter = `blur(${e.target.value}${unit})`;     
    }
    
   

      

    })
})