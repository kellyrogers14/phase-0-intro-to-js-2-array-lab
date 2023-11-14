// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

//

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

//

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

//

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats
}

//

function appendCat(name){
    const newCats = [...cats, "Broom"];
    return newCats;
};

//

function prependCat(name){
    const moreCats = ["Arnold", ...cats];
    return moreCats;
}

//

function removeLastCat(){
    const funCats = cats.slice(0,2);
    return funCats;
};

function removeFirstCat(){
    const finalCats = cats.slice(1);
    return finalCats
}