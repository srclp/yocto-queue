class Node {
  value: any
  next: Node | null = null

  constructor(value: any) {
    this.value = value
  }
}

export class Queue {
  #head: Node | null = null
  #tail: Node | null = null
  #size: number = 0

  clear() {
    this.#head = null
    this.#tail = null
    this.#size = 0
  }

  enqueue(value: any) {
    const newNode = new Node(value)
    if (!this.#head) {
      this.#head = newNode
      this.#tail = newNode
    }
    else {
      this.#tail!.next = newNode
      this.#tail = newNode
    }
    this.#size++
  }

  dequeue() {
    if (!this.#head)
      return

    const oldHead = this.#head
    this.#head = this.#head.next
    this.#size--

    return oldHead.value
  }

  get size() {
    return this.#size
  }

  *[Symbol.iterator]() {
    let cur = this.#head
    while (cur) {
      yield cur.value
      cur = cur.next
    }
  }
}
