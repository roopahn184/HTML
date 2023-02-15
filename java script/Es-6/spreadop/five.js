let emp = {id:101, name:"Roopa", loc:"mumbai"}
let details = {loc:"bangalore",name:"Roopa Nayak"}
let emp_details = {...emp, ...details}
console.log(emp_details);