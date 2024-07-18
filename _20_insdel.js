// let p=document.createElement("p")
// p.innerHTML="I have been inserted by <b>ram</b>"
// p.setAttribute("class","created")
// document.querySelector(".con").prepend(p)

const hi=document.querySelector(".con")
hi.insertAdjacentElement("afterend","<b>i am saiyan</b>")

document.body.children[0].remove

let ram=document.querySelector(".con")
    ram.insertAdjacentHTML("afterend","<p>i am saiyan<p>")

    let div=document.createElement("p")
    div.setAttribute("class","hi")
    div.setAttribute("style"," background-color:red;")
    div.removeAttribute("class")
    div.innerHTML="<div>i am hero </div>"
    document.querySelector(".con").append(div);
    // document.body.children[0].children[0].remove()

    document.querySelector(".con").classList.add("red")
    document.querySelector(".con").classList.add("green")
    document.querySelector(".con").classList.remove("red")
    // document.querySelector(".con").classList.toggle("green")

