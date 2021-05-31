let {Nod} = require('./Nod');
let {BinaryTree} = require('./BinaryTree');
let {preOrderTraversal} = require('./PreOrderTraversal');
let {postOrderTraversal} = require('./PostOrderTraversal');
let {inOrderTraversal} = require('./InOrderTraversal');


var binaryTree = new BinaryTree();

binaryTree.root = new Nod(1);
binaryTree.root.leftNode = new Nod(2);
binaryTree.root.rightNode = new Nod(3);
binaryTree.root.leftNode.leftNode = new Nod(4);
binaryTree.root.leftNode.rightNode = new Nod(5)
binaryTree.root.rightNode.leftNode = new Nod(6);
binaryTree.root.rightNode.rightNode = new Nod(7);



console.log("preOrderTraversal");
preOrderTraversal(binaryTree.root);
console.log("inOrderTraversal");
inOrderTraversal(binaryTree.root);
console.log("postOrderTraversal");
postOrderTraversal(binaryTree.root);