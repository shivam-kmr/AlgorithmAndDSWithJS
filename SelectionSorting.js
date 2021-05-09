var number = [ 5, 1, 2,  3, 4, 9,20, 10,10,1090]

function selectionSort(array) {
    var arrayLength = array.length
    var selectedElement = 0
    var index =0
    for(var i=0;i<arrayLength; i++) {
        selectedElement = array[i]
        index = i
        for (var j=i; j<arrayLength; j++ ) {
        // console.log(selectedElement,array[j])
            if(selectedElement > array[j]) {
                selectedElement = array[j]
                index = j
            }
        }
        array[index] = array[i]
        array[i] = selectedElement;
    }
}

selectionSort(number)
console.log(number)

