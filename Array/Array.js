class ArrayDS{
    constructor(length,data){
      this.length = 0;
      this.data ={};
    }
    get(index){
      return this.data[index];
    }
    push(data){
      this.data[this.length] = data;
      this.length++
    }
    pop(){
      delete this.data[this.length-1]
      this.length--;
    }
    deleteAtSpecificIndex(index){    
      this.unShift(index);
    }
    addAtSpecificIndex(index,data){
      this.shift(index);
      this.data[index] = data;
    }
    shift(index){
      for(var i=this.length;i>index;i--){
        this.data[i]=this.data[i-1];
      }
      this.length++;
    }
    unshift(index){
      for(var i=index;i<this.length-1;i++){
        this.data[i]=this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
    }
  }
  
  const myArray = new ArrayDS();
  myArray.push('I');
  myArray.push('am');
  myArray.push('Creating');
  myArray.push('This');
  myArray.push('New');
  myArray.push('DS');
  myArray.push('!');
  //myArray.pop()
  myArray.addAtSpecificIndex(2,'Now')
  //console.log(myArray.get(1))
  console.log(myArray)
  