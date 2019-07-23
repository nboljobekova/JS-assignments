var massiv = [1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12, 13, 14, 15]
var res = [];

function array (massiv){
for (var i=0; i<massiv.length; i++) {

    if (massiv[i]%3==0 && massiv[i]%5==0) {
        res.push('FizzBazz') 
    }
    else if (massiv[i]%3==0) {
        res.push('Fizz') 
    }
    else if (massiv[i]%5==0) {
        res.push('Bazz') 
    }
    else {
        res.push(massiv[i]) 
    }
}
}

array(massiv)
console.log(res)
