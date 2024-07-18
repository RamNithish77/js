const sriram = async ()=>{
    const data= await fetch("https://jsonplaceholder.typicode.com/users",{
        action:"GET",
        headers:{
            Accept:"application/json"
        }
    })
    const jsondata= await data.json();
    jsondata.forEach(e => {
        console.log(e.name )
    });
}

sriram();