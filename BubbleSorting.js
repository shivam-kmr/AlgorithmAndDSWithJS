var a = [10,9,5,1,2,3,4]

var lengthOfArray = a.length
//bubble sort
for (var i = 0; i<lengthOfArray ;i++) {
    for(var j=0;j<lengthOfArray - i;j++) {
        if(a[j] > a[j+1]){
            var temp = a[j]
            a[j] = a[j+1]
            a[j+1] = temp
        }
    }
}
console.log(a)
