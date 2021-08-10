class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// a queue! first in, first out
// where should we add items? where are they removed from

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // enqueue(value) - adds the given value to the queue (at the tail)
    enqueue(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
        return value;
    }
    
    // dequeue() - removes the top value from queue and returns it
    dequeue() {
        if (this.head == null) {
            return null;
        }
        // else if (this.head.next == null)
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var temp = this.head
        this.head = this.head.next
        temp.next = null 

        return temp.value
    }

    // front() - returns the top value without removing it
    front() {
        if (this.head == null) {
            return null;
        }
        return this.head.value
    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
    contains(target) {
        var runner = this.head;

        while (runner != null) {

            if (runner.value == target) {
                return true;
            }

            runner = runner.next;
        }

        return false;

    }

    // isEmpty() - returns true if the queue is empty, false otherwise
    isEmpty() {
        if (this.head == null && this.tail == null){
            return true;
        }
        else {
            return false;
        }
    }

    // size() - returns the size of the queue
    size() {
        if (this.isEmpty()){
            return 0;
        }

        var size = 1;
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
            size ++;
        }
        return size;
    }

    // method: compareQueues (odd-numbered group)
    // return true if the queues have the same values in the same order
    // false otherwise
    // important: this is a non-destructive operation!
    // do not modify either queue
    compareQueues(queue2) {
        if (this.size() != queue2.size()) {
            return false;
        }
        var queue2Runner = queue2.head;
        var runner = this.head;
        while (queue2Runner != null && runner != null){
            if (queue2Runner.value != runner.value){
                return false;
            }
            queue2Runner = queue2Runner.next;
            runner = runner.next;
        }
        return true;
    }

    // isPalindrome() - return true if the values of the queue form a palindrome,
    // and false otherwise. don't put the values of the queue into an array!
    // (or turn them into a string, either - your queue listnode values
    // may not always be able to be turned into a string)
    // do not modify the queue state in any way
    // also don't add some kind of tricky extra queue methods - they're not needed
    // maybe... use a stack? you'll need to copy that class into this file
    // you ain't gotta tho nbd it's just a suggestion

    isPalindrome() {
        if(this.head == null)
        {
            return false;
        }
        var runner = this.head;
        var stack = new SLLStack();
        while (runner != null)
        {
            console.log("Pushed: " + stack.push(runner.value));
            runner = runner.next;
        }
        console.log("Size of stack: " + stack.size());
        runner = this.head;
        for (var i = 0; i <= stack.size() / 2; i++)
        {
            console.log("Runner's value is " + runner.value);
            if(stack.pop() != runner.value)
            {
                return false;
            }
            runner = runner.next;
        }
        return true;
    }
}

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // push(value) - adds the given value to the stack
    push(value) {

        var new_node = new ListNode(value);
        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
        return value;
    }

    // pop() - removes the top value from stack and returns it
    pop() {
        if (this.tail == null) {
            return null
        }
        if(this.head == this.tail)
        {
            var temp = this.head.value;
            this.head = null;
            this.tail = null;
            return temp;
        }
        var runner = this.head;
        while (runner.next != this.tail) {
            runner = runner.next;
        }
        var lastValue = this.tail.value;
        this.tail = runner;
        runner.next = null;
        return lastValue;
    }

    // top() - returns the top value without removing it
    top() {
        return this.tail.value;
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        var runner = this.head;
        while (runner.next.value != target)
        {
            runner = runner.next;
        }
        if(runner.next.value == target)
            return true;
        else
            return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.head == null && this.tail == null)
            return true;
        else
            return false;
    }

    // size() - returns the size of the stack
    size() {
        if (this.head != null) {
            var size = 1;
            var runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
                size++;
            }
            return size;
        }
        else return 0;
    }
}

queue = new SLLQueue();
queue.enqueue(9);
queue.enqueue(9);
queue.enqueue(3);
queue.enqueue(3);
queue.enqueue(9);
queue.enqueue(9);
console.log(queue.isPalindrome());