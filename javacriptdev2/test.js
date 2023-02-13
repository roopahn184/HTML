class pizz {
    constructor(){
        this.type = "pizzatype";
        this.size = "medium";
        this.crust ="original"

    }
    bake(){
        console.log(`baking a ${this.type} ${this.size} ${this.crust}`);
    }
}