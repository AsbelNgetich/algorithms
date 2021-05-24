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

        return this.head.value

    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
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

    display() {

        if (this.head == null) {
            return null;
        }

        var output = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            output += " - " + runner.value;
            runner = runner.next;
        }

        return output;
    }





    // isEmpty() - returns true if the queue is empty, false otherwise
    isEmpty() {
        
        if (this.head == null){
            return true
        }
        else {
            return false
        }

    }

    // size() - returns the size of the queue
    size() {

        var count = 0

        if (this.head == null) {
            return count
        }
        else {
            var runner = this.head
            while (runner != null){
                count += 1;
                runner = runner.next;
            }
            return count
        }
        
    }

    // method: compareQueues (odd-numbered group)
    // return true if the queues have the same values in the same order
    // false otherwise
    // important: this is a non-destructive operation!
    // do not modify either queue
    compareQueues(queue2) {

    }
}

// compareQueues (even-numbered group)
// return true if the queues have the same values in the same order
// false otherwise
// important: this is a non-destructive operation!
// do not modify either queue
function compareQueues(queue1, queue2) {
    if (queue1.size)
    var runner1 = queue1.head;
    var runner2 = queue2.head
        
        while (runner1 != null && runner2 !=null) {

            if (runner1.value != runner2.value) {
                return false;
            }

            runner1 = runner1.next;
            runner2 = runner2.next;
        }
return true;  

}

// test your queue implementation here!

var queue_A = new SLLQueue();

var queue_B = new SLLQueue();

var queue_C = new SLLQueue();

var queue_D = new SLLQueue();

queue_A.enqueue(9)
queue_A.enqueue(2)
queue_A.enqueue(7)
queue_A.enqueue(3)
queue_A.enqueue(1)
queue_A.enqueue(6)

queue_B.enqueue(9)
queue_B.enqueue(4)
queue_B.enqueue(7)
queue_B.enqueue(3)
queue_B.enqueue(1)
queue_B.enqueue(6)

compareQueues(queue_A, queue_B)


console.log(queue_A.display())


