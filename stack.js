class Stack {
    constructor() {
        this.data = {};
        this.topIndex = -1;
    }
    traverse() {
        let output = "";
        for (let i = 0; i <= this.topIndex; i++) {
            output += this.data[i] + " ";
        }
        console.log(output);
    }
    push(element) {
        this.topIndex++;
        this.data[this.topIndex] = element;
    }
    is_empty() {
        return this.topIndex === -1;
    }
    peek() {
        //correcting statement
        if (this.is_empty()) return null; {
            return this.data[this.topIndex];
        }
       

    }
    pop() {
        if (this.is_empty()) {
            console.log("Stack is empty");
            return null;
        }
}
size() {
        return this.topIndex + 1;
}
}

let stack1 = new Stack();
stack1.push(2);
stack1.push(4);
stack1.push(6);
stack1.traverse()
// console.log("is the stack rempty? " + stack1.is_empty());
console.log("Top element is: " + stack1.peek());
console.log("Top element is: " + stack1.pop() + " is popped, the new element is :" + stack1.peek());
console.log("Size of stack is: " + stack1.size());
stack1.traverse();