function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}


function multiply(a,b){
    console.log(a*b)
}


function div(a,b){
    console.log(a/b)
}

module.exports = {
    addition: add,
    subtraction: sub,
    multiplication: multiply,
    division: div
}