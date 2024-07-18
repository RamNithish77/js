let boxes=document.getElementsByClassName("box")
console.log(boxes)

function getRandom(){
    let val1=Math.floor(Math.random()*255+1)
    let val2=Math.floor(Math.random()*255+1)
    let val3=Math.floor(Math.random()*255+1)

    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandom()
    e.style.color=getRandom()
})