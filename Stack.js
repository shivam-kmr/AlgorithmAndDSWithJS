class Node {
    constructor (value) {
        this.value = value;
        this.next = null
    }
}
class Stacks {
    constructor () {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek () {
        if(!this.top) {
            return null
        }
        return this.top.value;
    }
    push (value) {
        var newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        if(!this.length) {
            this.bottom = this.top
        }
        this.length++;
    }
    pop () {
        var temp = this.top
        this.top = temp.next
        this.length--;
    }
    print() {
        var currentNode = this.top
        var values = []
        while(currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(values)
    }
}

var myStack = new Stacks ()

myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.push(50)
myStack.pop()
myStack.print()

