/*let userPromise=new Promise((resolve,reject)=>{
    let userDemo={
        fname:"peter",
        lname:"john",
        admin:false
    }
    userDemo?resolve(userDemo):reject(new Error("user is not defined"))
})
userPromise.then((response1)=>{
    console.log(response1)
    if(response1.admin){
        return "access granted"
    }
    else{
        return new Error("access denied")
    }
}).then((reponse2)=>console.log(reponse2)).catch((err)=>console.log(err))*/
function IsUserDefined()
{
    return new Promise((resolve,reject)=>{
        let userDemo={
            fname:"peter",
            lname:"john",
            admin:true
        }
        userDemo.admin?resolve(userDemo):reject(new Error("user is not defined"))
    })
}
function IsRoleAdmin(uname){
 return new Promise((resolve,reject)=>{
    uname==="admin"?resolve({msg:"please input secret code"}):reject(new Error("access not granted"))
 })
}
function CheckCredentials(secretkey){
    return new Promise((resolve,reject)=>{
        if(secretkey==="xyz@123")
        {
            resolve("you are successfully logged in")
        }
        else{
            reject("not logged in")
        }
    })
}
IsUserDefined().then((response1)=>{
    let result=IsRoleAdmin("admin")
   return result
}).then((response2)=>{
    let result=CheckCredentials("xyz@123")
    console.log(result)
}).catch((err)=>console.log(err)).finally(()=>console.log("done"))