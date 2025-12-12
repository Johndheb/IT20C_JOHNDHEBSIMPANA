class Queue{
    constructor(){
        this.data = {};
        this.frontIndex = 0;
        this.rearIndex = -1;
    }
    enqueue(element){
        this.rearIndex++;
        this.data[this.rearIndex] = element;
    }
    trsaverse(){
        let output = "";
        for (let i = this.frontIndex; i <= this.rearIndex; i++){
            output += this.data[i] + " ";
        }
        return output;
    }
    is_empty(){
        return this.frontIndex > this.rearIndex;
    }
    //Correction Statement 
    front(){
        if (this.is_empty()) return null;
        return this.data[this.frontIndex];
    }
    size(){
        return this.rearIndex - this.frontIndex + 1;
    }
    dequeue(){
        //Correction Statement
        if (this.is_empty()) return null;

        const value = this.data[this.frontIndex];
        delete this.data[this.frontIndex];
        this.frontIndex++;
        return value;
    }


}
let queue1 = new Queue();
queue1.enqueue(4);
queue1.enqueue(2);
queue1.enqueue(3);
// queue1.trsaverse();
// console.log(queue1.is_empty());
// console.log(queue1.front());
// console.log(queue1.size());
console.log(queue1.trsaverse());
console.log("Front Value " + queue1.dequeue() + " is dequeued, new front value is: " + queue1.front());
console.log(queue1.trsaverse());