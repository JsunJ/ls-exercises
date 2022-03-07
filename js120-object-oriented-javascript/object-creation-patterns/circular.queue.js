class CircularQueue {
  constructor(bufferSize) {
    this.queue = Array(bufferSize).fill(null);
    this.queueTail = 0;
    this.queueHead = 0;
    this.queueCapacity = bufferSize;
    this.queueSize = bufferSize;
  }

  enqueue(data) {
    if (this.queue[this.queueTail] !== null) {
      this.queueHead = (this.queueHead + 1) % this.queue.length;
      this.queue[this.queueTail] = data;
      this.queueTail = (this.queueTail + 1) % this.queue.length;
    } else {
      this.queue[this.queueTail] = data;
      this.queueTail = (this.queueTail + 1) % this.queue.length;
      this.queueCapacity -= 1;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      let removedElement = this.queue[this.queueHead];
      this.queue[this.queueHead] = null;
      this.queueHead = (this.queueHead + 1) % this.queue.length;
      this.queueCapacity += 1;
      return removedElement;
    }
  }

  isEmpty() {
    return this.queueCapacity === this.queueSize;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);