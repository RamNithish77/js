// syntax addEventListener(event,funtion,usecapture)

const c1=document.querySelector(".con")
c1.addEventListener("click",(event)=>{
    c1.style.backgroundColor="green";
})

const c2=document.querySelector("#j")
c2.addEventListener("click",(event)=>{
    event.target.textContent="i am clicked";
    c2.classList.add("purple");
    c2.classList.remove("blue")
})

const form=a=document.querySelector(".myform")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
})