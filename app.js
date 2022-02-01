const circle = {radius: 20, square: function(){
    return 3.14* (this.radius**2)
}, perimeter :() => 2*3.14 *this.radius,
toString:function(){
    return `radius of this circle is ${this.radius}`
}};
console.log(`square=${circle.square()}, perimetr=${circle.perimeter()}`);

//circle.square will be converted to square(circle) where circle as argument value
//this is the hidden parametr in the function 
//in any arrow function there ic no "this"

function square (circle){
    return 3.14* (circle.radius**2);
}

console.log(`circle: ${circle}`)

const circle1={radius: 20,  perimeter function (){
    return  3.14* this.radius**2
},
    toString:function(){
        return `radius of this circle is ${this.radius}`
    }};
    //circle1.square(); ERROR
    function Circle(radius){
        this.radius =radius;
    }

    Circle.prototype.square =function(){
        return 3.14 *(this.radius**2);
    }

    Circle.prototype.square =function(){
        return 2*3.14 *this.radius
    }

    Circle.prototype.toString = function(){
        return `radius of this circle is $(this.radius)`
    }
    const circle10 =new Circle(10);

//EXAMPLE
  /*const myArray = new MyArray(10);
console.log(myArray.get(100))// displayed out  10
myArray.set(100,500) // set 500 ay=t index 100
console.log(myArray.get(200)) // displayed out  10
console.log(myArray.get(100)) // displayed out  500
myArray.setValue(300);
console.log(myArray.get(100)) // displayed out 300
console.log(myArray(200)) // displayed out 300*/


Array.prototype.filter =function(callbackPredicate){
    console.log(`Tel-ran copyright`)
    const res =[]
    this.forEach((n,i,a) => callbackPredicate(n,i,a) && `res.push(n)`);
return res;
}
const ar = [1,2,4,5,100];
ar.filter(n => n%2 !==0).forEach(n => console.log(n));