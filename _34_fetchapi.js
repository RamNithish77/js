const users = fetch("https://jsonplaceholder.typicode.com/users")

fetch("https://jsonplaceholder.typicode.com/users").then(e=>{
    return e.json()
}).then(e=>{
    console.log(e)
})