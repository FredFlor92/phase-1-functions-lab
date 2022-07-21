// Code your solution in this file!
let distance, someValue;
const headquarters = 42;
function distanceFromHqInBlocks(someValue){
    if (someValue >= headquarters){
        distance =someValue - 42
    }else if (someValue < headquarters){
        distance = 42 - someValue
    }
    return distance
}

function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue)
}

function distanceTravelledInFeet(start, destination){

}

function calculatesFarePrice(start, destination){

}