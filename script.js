//a variable to access the counter of the html Doc
var counter= document.querySelector(".counter");
var followers= document.querySelector(".followers");

let count = 0;
setInterval(()=> {
   if(count <= 1000000){
    count++;
    counter.innerHTML=count 

   }

},1000)

setTimeout(() => {
  
        followers.innerText= "1 000 000 seconds  of Nofap, Wowza";
  
}, 1000000000);

