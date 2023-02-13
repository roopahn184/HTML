const vehicle = {
    wheels: 4,
    engine:function (){
        return "vrroooom";
    }
}
const truck = Object.create(vehicle);
truck.door = 4;
console.log(truck);