class Heap{
    constructor(){
        this.heap = [null]
    }

    insert(val){
        //your logic goes here
        this.heap.push(val)
        //figure out the index number of parent and see if value in parent index is greater, if it is, we must swap (to continuously do this, might need a loop, preferably a while loop)
      
       let index = this.heap.length - 1
       let childIndex = this.heap.length - 1
       if (index>=1)
       {
           let parentIndex = Math.floor(index/2) 
           while(this.heap[parentIndex] > this.heap[childIndex]){
               let temp = this.heap[childIndex]           
               this.heap[childIndex]= this.heap[parentIndex]
               this.heap[parentIndex]= temp
               childIndex = parentIndex
               parentIndex = Math.floor(childIndex/2)
           }
      
       }

       console.log(this.heap)

    }
}


let heap1 = new Heap()

heap1.insert(5)
heap1.insert(3)
heap1.insert(7)
heap1.insert(1)



