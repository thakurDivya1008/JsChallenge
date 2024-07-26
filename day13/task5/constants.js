const PI = 3.14159;

function square(a){
    return a*a;
}

function circle(radius){
    return PI*radius*radius;
}

module.exports = {
    PI,
    square,
    circle
};