function postOrderTraversal(root){

    if(root.leftNode!=null){
        postOrderTraversal(root.leftNode);
    }
    
    if(root.rightNode!=null){
        postOrderTraversal(root.rightNode);
    }

    console.log(root.data);

    
}

module.exports = {
    postOrderTraversal
}