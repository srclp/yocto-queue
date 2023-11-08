import { expect, it } from 'vitest'
import { Queue } from '../src'

it('init', () => {
  const q = new Queue()
  expect(q.size).toBe(0)
})

it('.enqueue()', () => {
  const q = new Queue()
  q.enqueue('🦄')
  expect(q.dequeue()).toBe('🦄')
  q.enqueue('🌈')
  q.enqueue('🌟')
  expect(q.dequeue()).toBe('🌈')
  expect(q.dequeue()).toBe('🌟')
})

it('.dequeue()', () => {
  const q = new Queue()
  expect(q.dequeue()).toBeUndefined()
  expect(q.dequeue()).toBeUndefined()
  expect(q.size).toBe(0)
  q.enqueue('🦄')
  expect(q.dequeue()).toBe('🦄')
  expect(q.dequeue()).toBeUndefined()
})

it('.clear()', () => {
  const q = new Queue()
  q.clear()
  q.enqueue(1)
  q.clear()
  expect(q.size).toBe(0)
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  q.clear()
  expect(q.size).toBe(0)
})

it('.size', () => {
  const q = new Queue()
  expect(q.size).toBe(0)
  q.clear()
  expect(q.size).toBe(0)
  q.enqueue('🦄')
  expect(q.size).toBe(1)
  q.enqueue('🦄')
  expect(q.size).toBe(2)
  q.dequeue()
  expect(q.size).toBe(1)
  q.dequeue()
  expect(q.size).toBe(0)
  q.dequeue()
  expect(q.size).toBe(0)
})

it('iterable', () => {
  const queue = new Queue()
  queue.enqueue('🦄')
  queue.enqueue('🌈')
  expect([...queue]).toEqual(['🦄', '🌈'])
})
