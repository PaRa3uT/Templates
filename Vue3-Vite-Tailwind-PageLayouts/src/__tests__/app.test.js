// import { mount } from '@vue/test-utils'

// import app from '../app.vue';

// test('renders a todo', () => {
// })

//describe.only('app', () => {
  // Inspect the raw component options
    //it.only("test", () => {
        //assert.equal(Math.sqrt(4), 3);
    //});
/*
    it('renders properly', () => {
        const wrapper = mount(app, { props: { msg: 'Hello Vitest' } })
        expect(wrapper.text()).toContain('Hello Vitest')
    })
*/
/*
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
  */
//})

/*
describe('suite', () => {
  // Inspect the raw component options
    it("test", () => {
        assert.equal(Math.sqrt(4), 3);
    });
})
*/
test('should work as expected', () => {
  expect(Math.sqrt(4)).toBe(2);
})

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})