//Task 1:

class Node {
    constructor(value,text){
        this.value = value;
        this.text = text;
        this.next = null;
    }
}

const node1 = new Node(1, "First Node");
const node2 = new Node(2, "Second Node");

node1.next = node2;

console.log(node1);
console.log(node2);

//Task 2:
class node {
    constructor(value,text){
        this.value = value;
        this.text = text;
        this.next = null;

    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    addNode(value,text){
        const newNode = new node(value,text);

        if(!this.head){
            this.head= newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }

            current.next = newNode;
        }
    }

    removeNode(){

        if(!this.head){
            console.log("List is empty");
            return;
        }

        if(!this.head.next){
            this.head = null;
        }
        else{
            let current = this.head;
            while(current.next.next){
                current = current.next;
            }
            current.next = null;
        }
    }

    displayNodes(){

        if(!this.head){
            console.log("List is empty");
        }
        else{
            let current = this.head;
            while(current){
             
                console.log(`Value: ${current.value} , Text: ${current.text}`);

                current = current.next;
            }

            

        }
    }
}

const linkedList = new LinkedList();
linkedList.addNode(1,"First Node");
linkedList.addNode(2,"Second Node");
linkedList.addNode(3,"Third Node");

console.log("Display nodes after adding:");
linkedList.displayNodes();

linkedList.removeNode();
console.log("Display nodes after removing one node:");
linkedList.displayNodes();

//Task 3:
class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length == 0){
            console.log("Stack is empty");
            return null;
        }

        return this.items.pop();
    }
    peek(){
        if(this.items.length === 0){
            console.log("Stack is empty");
            return null;
        }
         
        return this.items[this.items.length - 1];
    }
   
}

const stack = new Stack;
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top  element is:" +stack.peek());
console.log("Element removed:" +stack.pop());

console.log("Top  element is:" +stack.peek());

 function reverseStr(str){
    const stack = new Stack();
    for(let char of str){
        stack.push(char);
    }
    let reversedStr = '';
    while(!stack.items.length>0){
        reversedStr += stack.pop();
    }

    return reversedStr;
}

console.log(reverseStr("Hello World!!"));


//Task 5 :

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.items.length === 0) {
        console.log("Queue is empty");
        return null;
      }
      return this.items.shift();
    }
  
    front() {
      if (this.items.length === 0) {
        console.log("Queue is empty");
        return null;
      }
      return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
  }

  //Task 7:

  class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    addPrintJob(job) {
      this.queue.enqueue(job);
      console.log(`Added print job: ${job}`);
    }
  
    processPrintJob() {
      if (this.queue.isEmpty()) {
        console.log("No print jobs in the queue");
        return;
      }
  
      const job = this.queue.dequeue();
      console.log(`Processing print job: ${job}`);
    }
  
    viewNextJob() {
      if (this.queue.isEmpty()) {
        console.log("No print jobs in the queue");
        return;
      }
  
      const job = this.queue.front();
      console.log(`Next print job: ${job}`);
    }
  }
  
  
  
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log("First element is: " + queue.front());
console.log("Element removed: " + queue.dequeue());
console.log("Element removed: " + queue.dequeue());
console.log("First element is: " + queue.front());

//Task 6:

const printerQueue = new PrinterQueue();

printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Document2.pdf");
printerQueue.addPrintJob("Photo.jpg");

printerQueue.viewNextJob(); 

printerQueue.processPrintJob(); 
printerQueue.processPrintJob(); 

printerQueue.viewNextJob(); 

printerQueue.processPrintJob(); 

printerQueue.processPrintJob();

//Tasl 7:

class TreeNode {
    constructor(value = null, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log(root);

  //Task 8:

  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    
    inOrderTraversal(node = this.root, result = []) {
      if (node !== null) {
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
      }
      return result;
    }
  
    
    displayInOrder() {
      const result = this.inOrderTraversal();
      console.log(result.join(' '));
    }
  }
  
  
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  binaryTree.insert(3);
  binaryTree.insert(7);
  binaryTree.insert(2);
  binaryTree.insert(4);
  binaryTree.insert(6);
  binaryTree.insert(8);
  
  binaryTree.displayInOrder();


  





