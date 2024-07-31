function FuncOne(value){
    return setTimeout(()=>console.log(value),3000)
}
function FuncTwo(value){
    return setTimeout(()=>console.log(value),2000)
}
function FuncThree(value){
    return setTimeout(()=>console.log(value),1000)
}
FuncOne(1)
FuncTwo(2)
FuncThree(3)
/*promises*/
function FuncOne(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           /**call server api - data */
           if(data)
            resolve(data)
            if(!data){
                reject(data)
            }
        },3000)
    })
}
function FuncTwo(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(value)
            resolve()
        },2000)
    })
}
function FuncThree(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(value)
            resolve()
        },1000)
    })
}
