// let user = {
//     user_name:"Roopa",
//     loc :'bangalore'
// }
// Object.keys(user).length> 0 ?console.log("not empty object"):console.log("empty object")
let array=[5,7,8]

function divisible(){
    for(a of array){
        if(a%3===0 || a%5===0 || a%15===0){
            return a
          }
    }

}
let result= divisible(array)
console.log(result)
