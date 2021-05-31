function preOrderTraversal(root){
    console.log(root.data);

    if(root.leftNode!=null){
        preOrderTraversal(root.leftNode);
        
    }
    
    if(root.rightNode!=null){
        preOrderTraversal(root.rightNode);
    }

    
}

module.exports = {
    preOrderTraversal
}