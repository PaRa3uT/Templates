import { mount } from '@vue/test-utils'
import App from './../src/app.vue'

// test('renders a todo', () => {
// })

describe('App', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
})

