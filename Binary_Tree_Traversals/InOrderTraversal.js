function inOrderTraversal(root){

    if(root.leftNode!=null){
      inOrderTraversal(root.leftNode);
    }
    console.log(root.data);                              
    if(root.rightNode!=null){
       inOrderTraversal(root.rightNode);
    }
}

module.exports = {
    inOrderTraversal
}