class Array {
    constructor(initialData = []) {
        this.data = {};
        this.length = 0;




        for (let i = 0; i < initialData.length; i++) {
            this.data[i] = initialData[i];
            this.length++
        }
    }


    traverse() {
        let output = "";
        for (let i = 0; i < this.length; i++) {
            output += this.data[i] + " ";
        }
        console.log(output);

    }
    insert(index, element) {
        if (index >= 0 || index <= this.length) {
            console.log("Invalid Index");
            return;
        }
        //Shifting condition
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = data;
        this.length++;
    }

    search(element) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === element) {
                console.log("Element found at index " + i);
                return i;
            }

        }
        console.log(element + "is not found");
        return -1;

    }
    update(index, element) {
        if (index < 0 || index >= this.length) {
            console.log("Invalid Index");
            return;
        }
        this.data[index] = element;



    }

    delete(index) {
        if (index < 0 || index >= this.length) {
            console.log("Invalid Index");
            return;
        }
        this.data[index] = "_DELETED_";

        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;

    }

    //SHIFTING CONDITION



}
arr1 = new Array([4, 2, 3]);
arr1.traverse();
arr1.insert(2, 5);
arr1.traverse();
arr1.search(5);
arr1.search(10);
arr1.update(50);
arr1.update(10);
arr1.delete(1);
arr1.traverse();