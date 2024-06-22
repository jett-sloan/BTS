class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinarySearchTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
  
    insert(val) {
      const newNode = new Node(val)
      if (this.root === null) {
        this.root = newNode
        return this
      }
  
      let current = this.root;
      while (true) {
        if (val === current.val) {
          return undefined;
        }
        if(val < current){
          if(current.left === null){
            current.left = newNode;
            return this;
          }
          else {
                // Move to the right child
                if (current.right === null) {
                  // If right child is null, insert the new node here
                  current.right = newNode;
                  return this;
                }
                current = current.right;
          }
        
      }
  
    }
  }
  
  
    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */
  
    find(val) {
      let currentVal = this.root;
      while (currentVal) {
        if (currentVal.val === val) {
          return currentVal
        } else if (val < currentVal.val) {
          currentVal = currentVal.left
        } else {
          currentVal = currentVal.right
        }
      }
    }
  
  
    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */
  
    dfsPreOrder(node, result = []) {
      if (node === null) {
        return result;
      }
  
      // Visit the current node
      result.push(node.value);
  
      // Recursively traverse the left subtree
      this.preOrderTraversal(node.left, result);
  
      // Recursively traverse the right subtree
      this.preOrderTraversal(node.right, result);
  
      return result;
    }
    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */
  
  
      dfsInOrder(node, result = []) {
        if (node === null) {
          return result;
        }
    
        // Recursively traverse the left subtree
        this.dfsInOrder(node.left, result);
    
        // Visit the current node
        result.push(node.value);
    
        // Recursively traverse the right subtree
        this.dfsInOrder(node.right, result);
    
        return result;
      
    }
  
    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */
  
    dfsPostOrder(node, result = []) {
      if (node === null) {
        return result;
      }
  
      // Recursively traverse the left subtree
      this.dfsPostOrder(node.left, result);
  
      // Recursively traverse the right subtree
      this.dfsPostOrder(node.right, result);
  
      // Visit the current node
      result.push(node.value);
  
      return result;
    }
  
    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */
  
    bfs() {
      const result = [];
      const queue = [];
  
      if (this.root !== null) {
        queue.push(this.root);
      }
  
      while (queue.length > 0) {
        const currentNode = queue.shift();
        result.push(currentNode.value);
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      return result;
    }
}