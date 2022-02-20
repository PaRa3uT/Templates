import { mount } from '@vue/test-utils'

import app from './app.vue';
import { counter_test, increment_test } from './page-1.vue';
import MyComponent from './page-1.vue'

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test('Vue app', () => {
    // const wrapper = mount(app, { props: { msg: 'Hello Vitest' } })
    const wrapper = mount(app, {})
    expect(wrapper.text()).toContain('Home')
});
/*
test('it should work', () => {
  const { doubleCount } = mount(MyComponent, {
    props: {
    }
  })

  expect(MyComponent.counter_test.value).toBe(0)
});
*/
/*
test('useCounter', () => {
  expect(counter_test.value).toBe(0)

  increment_test()
  expect(counter_test.value).toBe(1)
})
*/