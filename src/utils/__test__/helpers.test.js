import { defaultAxiosHandle } from '../helpers'

describe('helpers - function: defaultAxiosHandle', () => {
  it('should pass', () => {
    const ref = {
      value: 0
    }

    defaultAxiosHandle(ref, {
      check: v => v.value++,
      onCheckSuccessHandle: () => ref.value++
    })
    expect(ref.value).toBe(2)

    ref.value = 0
    defaultAxiosHandle(ref, {
      check: v => v,
      onCheckFailedHandle: () => ref.value++
    })
    expect(ref.value).toBe(1)
  })
})
