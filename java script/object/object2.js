let user = {
    user_name: "Roopa",
    loc:'bangalore',
    price:2544
}
console.log(user)

let count = 0

for (x in user){
    count=count+1
    console.log(count);
}