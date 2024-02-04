import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Counter from '../CounterComponent.vue'
import { useCounterStore } from '@/stores/counter'

function mountCounter(x = 0) {
  return mount(Counter, {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            counter: { count: x }
          }
        })
      ]
    }
  })
}

describe('Counter', () => {
  it('renders properly', () => {
    const wrapper = mountCounter(50)
    expect(wrapper.text()).toContain('Counter: 50')
  })

  describe('Clicks', () => {
    let wrapper
    let counterStore

    it('counter increment', async () => {
      wrapper = mountCounter(50)
      counterStore = useCounterStore()
      await wrapper.find('button[id=increment]').trigger('click')
      expect(counterStore.increment).toHaveBeenCalledTimes(1)
    })

    it('counter decrement', async () => {
      wrapper = mountCounter(50)
      counterStore = useCounterStore()
      await wrapper.find('button[id=decrement]').trigger('click')
      expect(counterStore.decrement).toHaveBeenCalledTimes(1)
    })
  })
})
