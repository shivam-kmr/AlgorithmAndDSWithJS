// Balanced Binary Tree vs Unbalanced Binary Tree  - Readup
class Node {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor (value) {
        this.root = null
    }
    insert(value) {
        var newNode = new Node(value)
        if(!this.root) {
            this.root = newNode
        } else {
            this.addNewNode(this.root, newNode)
        }
    }
    addNewNode (node, newNode) {
        if(newNode.value < node.value) {
            node.left === null ? node.left = newNode : this.addNewNode(node.left, newNode)
        } else {
            node.right === null ? node.right = newNode : this.addNewNode(node.right, newNode)
        }
    }
    lookup (value) {
        if(!this.root) {
            return null
        }
        else if (this.root.value === value) {
            return this.root
        }
        else {
            return this.checkValueInNodes(this.root, value)
        }
    }
    checkValueInNodes (node, expectedValue) {
        if(node.value != expectedValue) {
            expectedValue < node.value ? this.checkValueInNodes(node.left, expectedValue) : this.checkValueInNodes(node.right, expectedValue)
        }
        return node
    }
}

var tree = new BST()
tree.insert(10)
tree.insert(20)
tree.insert(5)
tree.insert(50)
console.log(tree.lookup(20))
console.log(JSON.stringify(traverse(tree.root)))


function traverse (node) {
    console.log(node)
    const tree = { value: node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null: traverse(node.right)
    return tree;
}