import { setActivePinia, createPinia } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  let counter

  beforeEach(() => {
    setActivePinia(createPinia())
    counter = useCounterStore()
  })

  it('increments', () => {
    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('decrements', () => {
    expect(counter.count).toBe(0)
    counter.decrement()
    expect(counter.count).toBe(-1)
  })
})
