class Node {
    constructor(value) {
        this.value = value;
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor (value) {
        this.head = new Node(value);
        this.length = 1
        this.tail = this.head
    }
    append (value) {
        var newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    appendAtIndex (value, index) {
        if(index >= this.length) {
            console.log("Enter valid Index")
            return false
        }
        var currentNode = this.head;
        var currentPosition = 1
        var newNode = new Node(value)
        while (currentPosition != index+1) {
            if(currentPosition === index) {
                var temp = currentNode.next;
                currentNode.next = newNode;
                newNode.next = temp
            }
            console.log(currentNode)
            currentPosition++;
            currentNode = currentNode.next
        }
        this.length++
    }
    deleteLastNode () {
        var currentNode = this.head
        var currentPosition = 1
        while(currentPosition <= this.length) {
            if (currentPosition + 1 === this.length ) {
                currentNode.next = null;
                this.length--;
            }
            currentNode = currentNode.next
            currentPosition++;
        }
    }
    deleteAtIndex (index) {
        if(index > this.length) {
            console.log("Enter valid index")
            return this
        }
        var currentNode = this.head
        var currentPosition = 1
        if (index === 1) {
            this.head = this.head.next
            return this
        }
        while(currentPosition <= index) {
            if(currentPosition + 1 ===  index) {
                var preceder = currentNode.next
                currentNode.next = preceder.next
                this.length--;
            }
            currentNode = currentNode.next
            currentPosition++
        }
    }
    printList () {
        var currentNode = this.head
        var items = []
        while(currentNode) {
            items.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(items)
    }
}

var myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(10)
myLinkedList.append(15)
myLinkedList.append(12)
myLinkedList.append(14)
myLinkedList.appendAtIndex(18,1)
myLinkedList.append(12)
myLinkedList.append(14)
myLinkedList.printList()
myLinkedList.deleteAtIndex(10)
myLinkedList.printList()
