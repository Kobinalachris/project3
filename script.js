// const box = document.createElement("div");
const container = document.querySelector("#container");
const createDivsBtn = document.querySelector("#createDivsBtn");
let input = "";

createDivsBtn.addEventListener("click",()=>{
    container.textContent = "";
    input = prompt("Enter number of boxes");
    let userInputNumber = parseInt(input);
    console.log(userInputNumber);
if(userInputNumber <= 100){
    for(let i=1; i<=userInputNumber;i++){
        const box = document.createElement("div");
        box.className = "rowBox";
        box.style.width = "100%";
        box.style.height = "500px";
        container.appendChild(box);
        console.log(i);
        for (let j=1;j<=userInputNumber;j++){
            const box1 = document.createElement("div");
            box1.className = "box";
            let r = parseInt((Math.random()*100)%256);
            let g = parseInt((Math.random()*100)%256);
            let b = parseInt((Math.random()*100)%256);
            box1.style.backgroundColor= `rgb(${r},${g},${b}`;
            box1.style.width = "100%";
            box1.style.height = "500px";
            box.appendChild(box1);
            console.log(j);
            box1.addEventListener("mouseover",()=>{
                r = parseInt((Math.random()*100)%256);
                g = parseInt((Math.random()*100)%256);
                 b = parseInt((Math.random()*100)%256);
                box1.style.backgroundColor= `rgb(${r},${g},${b},0.8`;
                box1.style.opacity = 0.5;
            });
            box1.addEventListener("mouseout",()=>{
                r = parseInt((Math.random()*100)%256);
               g = parseInt((Math.random()*100)%256);
                b = parseInt((Math.random()*100)%256);
                box1.style.backgroundColor= `rgb(${r},${g},${b}`;
                box1.style.opacity = 1;
                box1.style.transition = "1s";
              
            });

            
        }
    
    }
   
}else{
    console.log("Nothing happened");
}
    
});


// const box = document.querySelector(".box");


