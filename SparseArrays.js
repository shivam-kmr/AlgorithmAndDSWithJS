var strings = ["ab", "ab", "abc"]
var query = ["ab","abc", "bc"]
var resultArray = []
query.forEach((el,index) => {
    var isQueryPresnt = strings.filter(x => x == el).length;
    resultArray[index] = isQueryPresnt
})
console.log(resultArray)