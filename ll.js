class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addNode(data){
        let newNoode = new Node(data);

        if(!this.head){
            this.head = newNoode
            return
        }

        let currentNode = this.head

        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = newNoode
    }

    print(){
        let currentNode = this.head

        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }

     
}

let newList = new LinkedList()
let string = "JavaScript"
for(let i = 0; i <= string.length - 1; i++){

    newList.addNode(string[i])
}

newList.print()
