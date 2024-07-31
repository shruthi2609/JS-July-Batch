function userDetails(...others){
   let [age,state]=others
  // let [state,country]=extrainfo
console.log(age,state)

}
console.log(userDetails(29,"Chennai","TN","IND"))
function showDetails(ip){
    //let [fname,lname]=ip
console.log(...ip)

}
let ip=[1,2,3,4]
showDetails(ip)
let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
console.log(...arr1,...arr2)