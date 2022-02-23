if(root==null){
    return null
}
if(root.left !=null){
    mirror(root.left);
}
if(root.right!=null){
    mirror(root.right);
}
var temp=root.left;
root.left=root.right;
root.right=temp;