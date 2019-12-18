import {
  axiosHandle,
  booleanToString,
  filterItems,
  numberFormatter,
  connectPath
} from '../helpers'

describe('helpers - function: defaultAxiosHandle', () => {
  it('should pass', () => {
    const ref = {
      value: 0
    }

    axiosHandle(ref, {
      check: v => v.value++,
      onFailed: () => ref.value++,
      onSuccessDebug: jest.fn(),
      onFailedDebug: jest.fn()
    })
    expect(ref.value).toBe(2)

    ref.value = 0
    axiosHandle(ref, {
      check: v => v,
      onSuccess: () => ref.value++,
      onSuccessDebug: jest.fn(),
      onFailedDebug: jest.fn()
    })
    expect(ref.value).toBe(1)
  })
})

describe('helpers - function: booleanToString', () => {
  it('should return YES', () => {
    expect(booleanToString('foo')).toEqual('是')
    expect(booleanToString(10)).toEqual('是')
    expect(booleanToString(true)).toEqual('是')
    expect(booleanToString({})).toEqual('是')
  })
  it('should return NO', () => {
    expect(booleanToString(undefined)).toEqual('否')
    expect(booleanToString(null)).toEqual('否')
    expect(booleanToString('')).toEqual('否')
    expect(booleanToString(0)).toEqual('否')
    expect(booleanToString(false)).toEqual('否')
  })
})

describe('helpers - function: numberFormatter', () => {
  it('should pass', () => {
    expect(numberFormatter(1, '个')).toEqual('1 个')
    expect(numberFormatter(1000, '个')).toEqual('1000 个')
  })
})

describe('helpers - function: filterItems', () => {
  it('should pass', () => {
    expect(filterItems([], [0, 1, 2]))
      .toEqual([undefined, undefined, undefined])
    expect(filterItems([2, 3, 4], [0, 1, 2])).toEqual([2, 3, 4])
    expect(filterItems([2, 3, 4], [0, 2, 1])).toEqual([2, 4, 3])
  })
})

describe('helpers - function: connectPath', () => {
  it('should pass', () => {
    expect(connectPath('foo', 'goo')).toBe('/foo/goo')
  })
})
