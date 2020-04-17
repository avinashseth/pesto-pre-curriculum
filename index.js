const describe = (desc, fn) => {
    console.log(desc)
    fn()
  }
  
  const it = (msg, fn) => describe('  ' + msg, fn)
  
  const matchers = (exp) => ({
    toBe: (asssertion) => {
      if (exp === asssertion) {
        console.log('pass')
        return true
      } else {
        console.log('fail')
        return false
      }
    }
  })
  
  const expect = (exp) => matchers(exp)
  
  function add(a, b) {
    return a + b 
  }

  function subtract(a, b) {
    return a - b 
  }

  function divide(a, b) {
    return a / b 
  }

  function multiply(a, b) {
    return a * b 
  }
  
  describe('add', () => {
    it('add two numbers', () => {
      const result = add(4, 5)
      expect(result).toBe(9)
    })
  })

  describe('\nsubtract', () => {
    it('subtract two numbers', () => {
      const result = subtract(4, 5)
      expect(result).toBe(-1)
    })
  })

  describe('\n division', () => {
    it('divide two numbers', () => {
      const result = divide(10, 2)
      expect(result).toBe(5)
    })
  })

  describe('\n multiply', () => {
    it('multiply two numbers', () => {
      const result = multiply(5, 8)
      expect(result).toBe(40)
    })
  })
  
  module.exports = {
    describe,
    expect,
    it,
    matchers
  }