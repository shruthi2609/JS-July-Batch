
/*let const var
let a=10
var b=10
console.log(a,b)
let outer=100
{
    var varinner=300
    let inner=200
    console.log(outer,inner,varinner)
}
console.log(varinner)*/
let z=10
function adder(x){//outer function 
    console.log(x)
return function(y){//inner
    console.log(x)
    return x+y
}

}
let inner=adder(100)
let finalop=inner(50)
console.log("final op",finalop)

//[[Environment]]

