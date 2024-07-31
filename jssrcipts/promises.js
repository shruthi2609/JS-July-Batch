/*const fetchUser=new Promise(
(resolve,reject)=>{
let user=[];
let user
if(user){
    resolve("successfully initialized")
}
else{
    reject("user is not defined")
}
}
)
fetchUser.then((response)=>console.log(response)).catch((error)=>console.log("error"))

const fetchUser=new Promise(
(resolve,reject)=>{
//producer code
let userdemo={
    fname:"peter",
    lname:"john",
    admin:true
}
let user;
user?resolve(userdemo.admin):reject(new Error("user is not defined"))
})

fetchUser.then((response)=>{
    if(response){
        console.log("access granted")
    }
    else{
        console.log("access denied")
    }
}).catch((error)=>console.log(error))*/
function fetchUser(){
    let userPromise=new Promise((resolve,reject)=>{
        let userDemo={
            fname:"peter",
            lname:"john",
            admin:true
        }
       
        userDemo?resolve(userDemo.admin):reject(new Error("user is not defined"))
    })
    return userPromise
   
}
fetchUser().then((response)=>console.log(response)).catch((error)=>console.log("error"))
