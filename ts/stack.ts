import { Node } from './node';

export class Stack<T> {
    top: Node<T> | null;
    size: number;
  
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(data: T) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    pop(): T | null {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
  
      const poppedData = this.top!.data;
      this.top = this.top!.next;
      this.size--;
  
      return poppedData;
    }
  
    isEmpty(): boolean {
      return this.size === 0;
    }
  
    getSize(): number {
      return this.size;
    }

    foundElementInStack(element: T): boolean {
      let index = 0;
      let currentNode = this.top

      while (currentNode !== null) {
        if (currentNode.data === element) {
          return true
        }

        currentNode = currentNode.next
        index++
      }

      return false
    }
  }
  