// create a function that reverse the string

function reverse(str){
    if(!str) return false
    var strInArray = str.split("");
    var reversedArray =[]
    for(var i=strInArray.length-1; i>=0;i--){
      reversedArray.push(strInArray[i]);
    }
    return reversedArray.join('');
  }
  
  console.log(reverse('shivam'))