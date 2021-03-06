class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor () {
        this.first = null
        this.last = null
        this.length = 0
    }
    enqueue (value) {
        var node = new Node(value)
        if(!this.length) {
            this.last = node
            this.first = this.last
        } else {
            this.last.next = node
            this.last = node
        }
        console.log(this.first)
        this.length++
    }
    dequeue() {
        if(!this.length) {
            return null
        }
        this.first = this.first.next
        return this
    }
    peek () {
        if(!this.length) {
            return null
        }
        return this.first
    }
    print() {
        var currentNode = this.first
        var values = []
        while(currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(values)
    }

}

var myQueue = new Queue()
myQueue.enqueue(5)
myQueue.enqueue(15)
myQueue.enqueue(51)
myQueue.enqueue(10)
myQueue.dequeue()
myQueue.print()