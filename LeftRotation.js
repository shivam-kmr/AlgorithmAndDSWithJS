var array = [1,2,3,4,5]
var numberOfRotations = 5
var newArray = []
var lengthOfArray = array.length
for(var i = 0; i < lengthOfArray; i++) {
    if(i-numberOfRotations < 0) {
        newArray[lengthOfArray - numberOfRotations +i] = array[i]
    } else {
        newArray[i - numberOfRotations] = array[i]
    }
}

console.log(newArray)