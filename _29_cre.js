const Creatediv = (parent,lit)=>{
    const newDiv=document.createElement("div");
    newDiv.style.border="1px solid black";
    newDiv.style.height="150px";
    newDiv.style.width="200px";
    newDiv.style.padding="10px";
    newDiv.style.margin="20px";
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    newDiv.textContent=lit;
    newDiv.style.backgroundColor="white";
    newDiv.style.color="#000";
    newDiv.style.borderRadius="10px"
    parent.append(newDiv);

   
}

const parent=document.querySelector(".con");
let O=14
for (let index = 0; index <= O; index++) {
    Creatediv(parent,index)
}
