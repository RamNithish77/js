function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let fixViews;
    if(views>1000000){
        fixViews=views/1000000+"M"
    }
    let key=` <div class="con">
        <img src="${thumbnail}"height="90px" width="160px" class="image">
        <div class="duration"><div class="text">${duration}</div></div>
        <div class="content">
            <h3>${title} </h3>
            <div class="con1">
                <div class="channelname">${cName}</div>
                <div class="views">${fixViews}</div>
                <div class="time">${monthsOld}</div>
            </div>
        </div>
    </div>`

    document.querySelector(".con").innerHTML=document.querySelector(".con").innerHTML+key;
}


let a=createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 10000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

let a2=createCard("Introduction to front| Sigma Web Dev video #2", "CodeWithHarry", 560000,"8 months", "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
let a3=createCard("Introduction to machine learning | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
let a4=createCard("Introduction to database | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
