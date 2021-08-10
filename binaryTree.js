class BSTNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
        this.visited = false
        this.size = 0;
    }
}
class BST{
    constructor(){
        this.root = null
    }

   
    // Inserts a value into the tree
    // positioning based on it's value.

    add(val) {
        var new_node = new Node(val);
        // check if root is null (empty)
        //  if so root is new node, exit
        if(this.root==null){
            this.root= new_node;
        }

        // if not null
        // make a runner point to root
        // check val with the runner
        // greater? -- check if this.right is null
        //          if not runner = runner.right
        //.... more pseudo code! How do you know when you can add it in?
        var runner = this.root;
        if (this.root.value < new_node.value){
            new_node.left = this.root;
        }
        while(runner.left!=null && runner.right != null){
            if(runner.left.value < new_node.value ){
                runner= runner.right;
            }else {
                runner = runner.left;
            }
        }runner.left = new_node
    }

    findMin() {
        // Find min value
        //Go to the left side of the tree
    }

    findMax() {
        //Find max value
        //go to the right side of the tree.
    }

    search(searchValue){
        var runner = this.root;
        while(runner!=null){
            if(searchValue < runner.value){
                //go left
                runner = runner.left;
            }else if(searchValue > runner.value){
                //go right
                runner = runner.right;
            }else if(searchValue == runner.value)
                //match found
              return true;
        }
        return false;      
    }

    
}

function getheight(root){
    if (root==null){
        return
         }
    else{
        return 
        
    }
}

function deleteNode(dvalue){
    var current;
    var parent;
    //search for dvalue
    //if found


}

