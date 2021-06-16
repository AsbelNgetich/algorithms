class Node{
    constructor(value){
        this.value= value;
        this.next = null;
        this.previous = null
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(value){
        var new_node = new Node(value);
        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
            this.length = 1;
        }
        //sets new node's previous value to the current tail and the current tail's value to the new node. then reassigns the tail.
        else {
            new_node.previous = this.tail;
            this.tail.next = new_node;
            this.tail = new_node;
            this.length +=1;
        }

    }
    addFront(value){
        var new_node = new Node(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
            this.previous
            this.length =1;
        }
        //sets new node's next value to the current head and the current head's value to the new node. then reassigns the head.
        else {
            new_node.next = this.head;
            this.head.previous = new_node;
            this.head = new_node;
            this.length +=1;
        }

    }
    
    pop(){
         // if list is empty
         if (this.head == null) {
            return null;
        }
        // if there is only one node in the list, simply removes the list's head and tail values.
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            this.length =0;
            return temp.value;
        }
        // sets current tail in a variable to be returned. set's tail to the previous node in the list, removes the new tail's next value and old tail's previous value.
        var temp = this.tail;
        this.tail = this.tail.previous;
        this.tail.next = null;
        temp.previous = null;
        this.length -=1;

    }
    removeFront(){
        // if list is empty
        if (this.head == null) {
            return null;
        }
        // if there is only one node in the list, simply removes the list's head and tail values.
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            this.length =0;
            return temp.value;
        }
        // sets current head in a variable to be returned. set's head to the next node in the list, removes the new head's previous value and old head's next value.
        var temp = this.head;
        this.head = this.head.next;
        this.head.previous = null;
        temp.next = null;
        this.length -=1;
    }
    
    size(){
       
        console.log(this.length);
    }


    print(){
        if (this.head == null) {
            return null;
        }

        var output = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            output += " - " + runner.value;
            runner = runner.next;
        }

        console.log(output);

    }
    
}

var dLL = new DLL();
dLL.push(1);
dLL.push(2);
dLL.push(3);
dLL.addFront(4);
dLL.addFront(5);
dLL.addFront(6);
dLL.print();
dLL.size();


