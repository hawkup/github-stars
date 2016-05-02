import expect from 'expect'
import counters from '../../reducers/counters'

describe('counters reducer', () => {
  it('should handle ADD_COUNTER', () => {
    expect(
      counters([], {
        type: 'ADD_COUNTER',
        id: 0
      })
    ).toEqual([
      {
        id: 0,
        count: 0
      }
    ])
  })

  it('should handle REMOVE_COUNTER', () => {
    expect(
      counters([
        {
          id: 0,
          count: 20
        }
      ], {
        type: 'REMOVE_COUNTER',
        id: 0
      })
    ).toEqual([])
  })

  it('should handle INCREMENT', () => {
    expect(
      counters([
        {
          id: 0,
          count: 0
        }
      ], {
        type: 'INCREMENT',
        id: 0
      })
    ).toEqual([
      {
        id: 0,
        count: 1
      }
    ])
  })

  it('should handle DECREMENT', () => {
    expect(
      counters([
        {
          id: 0,
          count: 0
        }
      ], {
        type: 'DECREMENT',
        id: 0
      })
    ).toEqual([
      {
        id: 0,
        count: -1
      }
    ])
  })
})
