const calculator={
    add:function(x,y){
        return (x + "+" + y + " = "+ (x+y));
    },
    powerOf:function(x,y){
        return (x + "^" + y + " = "+ (x**y));
    },
    minus:function(x,y){
        return (x + "-" + y + " = "+ (x-y));
    },
    product:function(x,y){
        return (x + "*" + y + " = "+(x*y));
    },
    devide :function(x,y){
        return (x + "/" + y + " = "+(x/y));
    },
}
console.log(calculator.add(1,2));
console.log(calculator.powerOf(2,8));
console.log(calculator.minus(34,1));
console.log(calculator.product(3,4));
console.log(calculator.devide(12,4));