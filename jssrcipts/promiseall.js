function combinePromise(){
    let promise1=new Promise((resolve,reject)=>{
        resolve("first")
    })
    let promise2=new Promise((resolve,reject)=>{
        resolve("second")
    })
   // return `${promise1} ${promise2}`
   let combine=Promise.all([promise1,promise2])
   return combine
 
}
combinePromise().then((res)=>console.log(res)).catch((err)=>console.log(err))
/*let stringop=combinePromise()
console.log(stringop)*/