/*let userDetails={
    fname:"joe",
    lname:"Doe",
    printDetails:function(country,state){
        console.log(this.fname,this.lname,country,state)
    }
}
let officialDetails=
{fname:"john",
    lname:"peter",
    email:"joe@gmail.com",
    phone:27837237,   
}
userDetails.printDetails.call(officialDetails,"IND","TN")
let userDetails={
    fname:"joe",
    lname:"Doe",
    printDetails:function(country,state){
       console.log(this.fname,this.lname,country,state)
      
    }
}
let officialDetails=
{fname:"john",
    lname:"peter",
    email:"joe@gmail.com",
    phone:27837237,   
}
userDetails.printDetails.apply(officialDetails,["IND","TN"])*/
let userDetails={
    fname:"joe",
    lname:"Doe",
    printDetails:function(country,state){
       console.log(this.fname,this.lname,country,state)
      
    }
}
let officialDetails=
{fname:"john",
    lname:"peter",
    email:"joe@gmail.com",
    phone:27837237,   
}
let boundedfunc=userDetails.printDetails.bind(officialDetails)
boundedfunc("IND","TN")



