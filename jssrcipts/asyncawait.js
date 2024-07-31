function fetchUser(){
    let userPromise=new Promise((resolve,reject)=>{
        let userDemo={
            fname:"peter",
            lname:"john",
            admin:true
        }
       
        userDemo?resolve(userDemo):reject(new Error("user is not defined"))
    })
    return userPromise
   
}
async function printUser(){
/*let result= await fetchUser()
console.log(result)*/
return await fetchUser()
}
let result=printUser()
console.log(result)
    