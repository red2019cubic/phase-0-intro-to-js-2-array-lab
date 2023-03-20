// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
    const array = [...cats, name]
    return array;
}

function prependCat(name){
    const array = [ name, ...cats]
    return array;
}

function removeLastCat(name){
    
    const array = [...cats]
    array.pop(name)
    
    return array;
}

function removeFirstCat(name){
    
    const array = [...cats]
    array.shift(name)
    
    return array;
}