//4 steps need to create node js server
/*const http = require("http")



//import your http 
const server = http.createServer((req, res)=>{
    console.log("server is created")
})



//initial port 

const PORT = 8090;


//listen to server

server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`)) 
*/
import http from "http"


const server = http.createServer((req, res) =>{
    const url = req.url 
    let tableData = "<table border='1'<table><tr><th>Id</th><th>Title</th><th>Body</th></tr>"
    

    if(url === '/list'){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                createData(data)

              res.write(tableData)
        res.end()     
            })
         
    }

    function createData(data){
        data.forEach(element => {
            tableData+=`<tr><td>${element.id}</td><td>${element.title}</td><td>${element.body}</td></tr>`
        });
        tableData+= `</table`
    }

}).listen(1000,console.log(`Server listening on port 1000`))